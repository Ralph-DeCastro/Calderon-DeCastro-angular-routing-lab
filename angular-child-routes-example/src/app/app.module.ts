import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { FormsModule } from '@angular/forms';  
import { ParentComponent } from './parent/parent.component';  // Your parent component
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,  // Declare ParentComponent here
    FormsModule,
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
