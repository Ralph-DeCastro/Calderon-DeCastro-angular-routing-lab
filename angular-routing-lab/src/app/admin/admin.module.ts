import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component'; // Corrected import path

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule],
  exports: [AdminComponent] // Export the AdminComponent if needed
})
export class AdminModule {}
