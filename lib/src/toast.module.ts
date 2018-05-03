import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastMessageComponent } from './toast-message/toast-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToastMessageComponent],
  providers: [ToastService]
})
export class ToastModule { }
