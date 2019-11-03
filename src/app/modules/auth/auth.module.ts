import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthServicesModule } from './auth-services.module';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    AuthServicesModule
  ]
})
export class AuthModule {
}
