import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ManagerGuard } from './guards/manager.guard';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'suppliers', component: SuppliersComponent, canActivate: [ManagerGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
