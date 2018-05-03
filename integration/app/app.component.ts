import { Component } from '@angular/core';
import { ToastService } from 'super-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private toast: ToastService) {
    this.toast.update('Is this thing working?');
  }
}
