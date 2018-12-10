import { Component, OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, Renderer } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  
  users: User[];
  selectedUser: User;

  dateFormat = "MM/dd/yy";
  image = 'https://www.starwars-universe.com/images/actualites/collection/sideshow/sideyodalegendary/sideyodalegendary_e.jpg';

  @ViewChild('input') input;

  constructor(private renderer: Renderer) { }

  ngAfterViewInit() {
      console.log('---> AfterViewInit fires <---');
      this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }
  ngOnChanges(changes: import("c:/Users/Angular/formation-angular/formation-angular/Tutorial/mise-en-oeuvre/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
    this.users = USERS;
    console.log('---> OnInit fires <---');
  }
  onSelect(user: User): void {
    this.selectedUser = JSON.parse(JSON.stringify(user));
  }

}

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
