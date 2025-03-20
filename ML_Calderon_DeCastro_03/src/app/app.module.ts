// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // import RouterModule to handle routing
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component'; // import your components
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // Declare your components here
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule // Import necessary Angular modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
