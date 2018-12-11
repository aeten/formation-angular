import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnChanges {

 
  @Input() user: User;
  @Input('avatar') image: User;

  private _image2 = '';
  @Input('avatar2') set image2(data: string) {
    this._image2 = (data && data.trim()) || '<no data found>';
  }
  get image2(): string { return this._image2; }


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  ngOnInit() {
  }

}
