import { Component, OnInit, OnDestroy } from '@angular/core';
import { Interaction07Service } from '../interaction07.service';
import { User } from './user';
import { Subscription } from 'rxjs';

export const USERS: User[] = [
  {
      id: 1,
      email: 'mehdi.mecheri@viveris.fr',
      firstname: 'Mehdi',
      lastname: 'Mecheri',
      birthdate: new Date(2018, 5, 22)
  },
  {
      id: 2,
      email: 'lionel.messi@barca.es',
      firstname: 'Lionel',
      lastname: 'Messi',
      birthdate: new Date(2018, 5, 22)
  },
  {
      id: 3,
      email: 'cristiano.ronaldo@real.es',
      firstname: 'Cristiano',
      lastname: 'Ronaldo',
      birthdate: new Date(2018, 5, 22)
  },
  {
      id: 4,
      email: 'neymar.jr@psg.fr',
      firstname: 'Neymar',
      lastname: 'JR',
      birthdate: new Date(2018, 5, 22)
  }
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  
  users: User[];
  selectedUser: User;

  dateFormat = "MM/dd/yy";
  image = 'https://www.starwars-universe.com/images/actualites/collection/sideshow/sideyodalegendary/sideyodalegendary_e.jpg';
  image2 = '               https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';
  

  // service will be private menmer (see private keyword)
  subscription: Subscription;
  constructor(private service: Interaction07Service) {
    this.subscription = service.broadcastChildStream$.subscribe((dataFromChild) => console.log(dataFromChild));
  }

  broadcastParent() {
    this.service.broadcastParent('Hello from parent');
  }

  ngOnInit() {
    this.users = USERS;
    console.log('---> OnInit fires <---');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSelect(user: User): void {
    this.selectedUser = JSON.parse(JSON.stringify(user));
  }

}
