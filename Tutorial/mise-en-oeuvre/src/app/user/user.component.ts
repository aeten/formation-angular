import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = {
    id: 1,
    username: 'test',
    password: 'pa$$word',
    email: 'thomas.perennou@viveris.fr',
    firstname: 'Thomas',
    lastname: 'Pérennou',
    birthdate: new Date(2018, 5, 22)
  };
  dateFormat = "MM/dd/yy";
  image = 'https://www.starwars-universe.com/images/actualites/collection/sideshow/sideyodalegendary/sideyodalegendary_e.jpg';

  constructor() { }

  ngOnInit() {
  }

}
