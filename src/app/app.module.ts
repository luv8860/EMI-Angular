import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { GetProductByIdComponent } from './get-product-by-id/get-product-by-id.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CalculateEmiComponent } from './calculate-emi/calculate-emi.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // CLI imports router
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'insert-product', component: InsertProductComponent},
  { path: 'get-product-by-id', component:GetProductByIdComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'calculate-emi', component: CalculateEmiComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    InsertProductComponent,
    GetProductByIdComponent,
    UpdateProductComponent,
    CalculateEmiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
