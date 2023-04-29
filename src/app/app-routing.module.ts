import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';

/* const routes: Routes = [

  { path: "",pathMatch:"full", component: ProductComponent },
  { path: "products", component: ProductComponent },
  { path: "products/category/:categoryId", component: ProductComponent },
  { path: "products/add", component: ProductAddComponent },
  {path:"login",component: LoginComponent}
]; */

const routes: Routes = [
  { path: "", pathMatch: "full", component: LoginComponent },
  { path: "products", component: ProductComponent },
  { path: "products/category/:categoryId", component: ProductComponent },
  { path: "products/add", component: ProductComponent, canActivate:[LoginGuard] },
  { path: "error", component: ErrorComponent },
  // Redirect all other paths to the error component
  { path: "**", redirectTo: "/login" } ,
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
