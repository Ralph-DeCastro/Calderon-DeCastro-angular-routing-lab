import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-parent',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
