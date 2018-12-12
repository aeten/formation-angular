import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }