import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    usersAsync: User[];
    selectedUser: User;

    image = 'https://www.starwars-universe.com/images/actualites/collection/sideshow/sideyodalegendary/sideyodalegendary_e.jpg';
    
    constructor(private userService: UserService) {}

    ngOnInit() {
      this.userService.getUsersAsync()
      .subscribe(
          (data: User[]) => this.usersAsync = data,
          (error) => console.error(error),
          () => console.log("Complete")
      );
    }

    onSelect(user: User): void {
        this.selectedUser = user;
    }
}

 