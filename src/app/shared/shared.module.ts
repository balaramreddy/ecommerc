import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { NameValidationDirective } from './directives/name-validation.directive';
import { PhonenumberDirective } from './directives/phonenumber.directive';
import { CurrencyDirective } from './directives/currency.directive';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    CapitalizedPipe,
    SearchPipe,
    NameValidationDirective,
    PhonenumberDirective,
    CurrencyDirective,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CapitalizedPipe,
    SearchPipe,
    NameValidationDirective,
    PhonenumberDirective,
    CurrencyDirective
  ],
  providers: [
    ProductsService 
  ]
})
export class SharedModule { }
