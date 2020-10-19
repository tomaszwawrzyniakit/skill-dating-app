import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from './security/security.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './security/auth.http-interceptor';
import { AuthGuard } from './security/auth.guard';
import { RedirectToHomeGuard } from './security/redirect-to-home.guard';
import { AfterSignInCallbackComponent } from './security/after-sign-in-callback.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OverlayComponent } from './overlay/overlay.component';

import { InputComponent } from './forms/input/input.component';
import { AvatarComponent } from './avatar/avatar.component';

const exportedComponents = [
  OverlayComponent,
  NavigationComponent,
  InputComponent,
  AvatarComponent,
];
@NgModule({
  declarations: [AfterSignInCallbackComponent, ...exportedComponents],
  imports: [CommonModule],
  exports: [...exportedComponents],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        SecurityService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthHttpInterceptor,
          multi: true,
        },
        AuthGuard,
        RedirectToHomeGuard,
      ],
    };
  }
}
