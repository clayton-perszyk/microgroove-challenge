import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { BypassSecurityPipe } from '../../pipes/bypassSecurityPipe/bypass-security.pipe';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, BypassSecurityPipe],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  public autoPlay: Boolean = false;
  @Input() svgs: any;
}
