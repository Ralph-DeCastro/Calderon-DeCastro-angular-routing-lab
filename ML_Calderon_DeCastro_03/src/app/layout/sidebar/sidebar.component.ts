import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen: boolean = true;  // Sidebar is open by default (for large screens)
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // Toggle sidebar state
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Close the sidebar on mobile when the window is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.isSidebarOpen = true;  // Open sidebar on larger screens
    } else {
      this.isSidebarOpen = false;  // Hide sidebar on smaller screens
    }
  }
}
