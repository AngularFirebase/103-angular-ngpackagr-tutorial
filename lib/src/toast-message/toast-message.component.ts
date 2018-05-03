import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})
export class ToastMessageComponent implements OnInit {

  constructor(private toast: ToastService) { }

  ngOnInit() {
  }

}
