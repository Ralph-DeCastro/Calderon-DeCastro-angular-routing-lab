import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Import RouterModule

import { ParentComponent } from './parent/parent.component';  // Your parent component

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,  // Declare ParentComponent here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([  // Set up routing for the app
      { path: 'home', component: ParentComponent },  // Example route
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
