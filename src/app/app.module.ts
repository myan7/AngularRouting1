import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductService} from './product.service';
import { MingComponent } from './ming/ming/ming.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'product', component: ProductComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    MingComponent
  ],
  imports: [
    BrowserModule,
    /* path debug settings: */
    RouterModule.forRoot(routes, { enableTracing: true })
    /*path location strategy */
    /*RouterModule.forRoot(appRoutes, { useHash: true }) */   /*Hashlocationstrategy */
  ],
  providers: [ProductService],
  bootstrap: [MingComponent]
})
export class AppModule { }
