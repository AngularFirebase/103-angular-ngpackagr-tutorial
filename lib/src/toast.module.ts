import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastMessageComponent } from './toast-message/toast-message.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ToastMessageComponent],
  exports: [ToastMessageComponent]
})
export class ToastModule {
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: ToastModule,
      providers: [
        ToastService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
