import express from 'express';
import {NextFunction, Request, Response} from 'express-serve-static-core';
import {createNew as createNewUserProfile, getOne, update} from './adapter/rest/user-profile.rest';
import {createNew as createNewSkill, findAll as findAllSkills} from './adapter/rest/skill.rest';
import {ValidationError} from './domain-model/validation';
import {getSecurityContextFrom} from './security-context';
import { environment } from '../environments/environment';

import { SKILLS_PATH, USER_PROFILES_PATH  } from '@less-code-challenge/api-interfaces';

if(environment.AWS_DYNAMODB_ENDPOINT){
  process.env.AWS_DYNAMODB_ENDPOINT = 'http://localhost:8000/'
}
process.env.PORT = process.env.PORT || environment.PORT;

const app = express();
// Enable JSON use
app.use(express.json());
// Handle 'preflight' requests (CORS)
app.options('*', (req: Request, res: Response) => {
  res.status(200).send();
});

app.get(`${USER_PROFILES_PATH}/:username`, getOne);
app.post(USER_PROFILES_PATH, createNewUserProfile);
app.put(`${USER_PROFILES_PATH}/:username`, update);

app.post(SKILLS_PATH, createNewSkill);
app.get(SKILLS_PATH, findAllSkills);

// Routes
app.get('/*', (req, res) => {
  const context = {username: getSecurityContextFrom(req).currentUsername};
  res.send(context);
});

// Global error handler. It must have exactly this signature, thus ignoring ESLint here
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  if (err.name === ValidationError.NAME) {
    res.status(400).send(err.message);
  } else {
    res.status(500).send('Internal Serverless Error: ' + err);
  }
});

app.listen(process.env.PORT, () => console.log(`App is listening at http://localhost:${process.env.PORT}`));

