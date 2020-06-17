import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    };
  }
}
