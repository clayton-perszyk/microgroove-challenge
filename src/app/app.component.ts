import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  InitialsViewerContainerComponent } from '../../src/app/components/InitialsViewerContainerComponent/initials-viewer-container.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InitialsViewerContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
