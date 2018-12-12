import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
    imports: [
        SharedModule,
        UserRoutingModule
    ],
    declarations: [
        UserComponent,
        UserDetailComponent,
        UserNewComponent,
        UserEditComponent,
        UserDeleteComponent
    ]
})
export class UserModule { }