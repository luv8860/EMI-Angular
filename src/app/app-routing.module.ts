import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateEmiComponent } from './calculate-emi/calculate-emi.component';
import { GetProductByIdComponent } from './get-product-by-id/get-product-by-id.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
