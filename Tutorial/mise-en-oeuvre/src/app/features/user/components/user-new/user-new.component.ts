import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-new',
    templateUrl: './user-new.component.html',
    styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {
    public creationForm: FormGroup;
    public isFormSaved: boolean;

    bcItems = [
        { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
        { label: 'Users', routerLink: '/user' },
        { label: 'User New' }
    ];

    validation: any = {
        username: {
            required: 'User name is required.',
        },
        password: {
            required: 'Password is required.',
        },
        email: {
            required: 'Email is required.',
            email: 'Invalid Email',
        },
        firstname: {
            required: 'First name is required.',
            forbidden: 'Unauthorized string.',
        },
        lastname: {
            required: 'Last name is required.',
        }
    }

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private notifService: NotificationsService
    ) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        if (this.creationForm) { this.creationForm.reset(); }
            this.creationForm = this.fb.group({ // <==> new FormGroup({ username: new FormControl() })
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            firstname: ['', [Validators.required, forbiddenValidator(/^test$/i)]],
            lastname: ['', Validators.required]
        });
    }

    cancel() {
        this.router.navigate(['user']);
    }

    save() {
        this.userService.createUser(this.creationForm.value)
        .subscribe(
            resp => {
            this.isFormSaved = true;
            this.notifService.success(null, 'Success', { timeOut: 3000 });
            setTimeout(() => this.router.navigate(['user', resp.id]), 3000);
            }
        );
    }
}

export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { 'forbidden': false } : null;
  };
}
