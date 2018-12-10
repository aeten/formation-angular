import { Component, OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, Renderer } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  
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
    console.log('---> OnInit fires <---');
  }

}
