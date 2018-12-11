import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MzNavbarModule, MzInputModule, MzButtonModule, MzValidationModule, MzSpinnerModule } from 'ngx-materialize';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        HomeComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MzNavbarModule,
        MzInputModule,
        MzButtonModule,
        MzValidationModule,
        MzSpinnerModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }