import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SimilarProductComponent } from './components/similar-product/similar-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ProductListComponent,
    ProductCardComponent,
    SimilarProductComponent,
    FooterComponent,
    NavFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
