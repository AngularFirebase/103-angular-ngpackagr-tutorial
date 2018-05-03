import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToastService {

  message = new BehaviorSubject('');
  visible = new BehaviorSubject(false);

  constructor() { }

  update(val: string) {
    this.message.next(val);
  }

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }



}
