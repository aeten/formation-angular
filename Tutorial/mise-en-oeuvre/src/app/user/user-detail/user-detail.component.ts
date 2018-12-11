import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Interaction07Service } from '../../interaction07.service';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnChanges, OnInit, OnDestroy {

  public hello = 'Hello from User-detail-component local variable';
  @Input() user: User;
  @Input('avatar') image: User;

  private _image2 = '';
  @Input('avatar2') set image2(data: string) {
    this._image2 = (data && data.trim()) || '<no data found>';
  }
  get image2(): string { return this._image2; }

  @Output() onAction = new EventEmitter<string>();
  action(msg: string) {
      this.onAction.emit(msg);
  }

  private subscription: Subscription;
  constructor(private service: Interaction07Service) {
      this.subscription = service.broadcastParentStream$.subscribe((dataFromParent) => console.log(dataFromParent));
  }
  
  broadcastChild() {
      this.service.broadcastChild('Hello from child');
  }

  ngOnDestroy() {
      this.subscription.unsubscribe(); // prevent memory leak
  }

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
