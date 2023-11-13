import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../SearchComponent/search.component';
import { CarouselComponent } from '../CarouselComponent/carousel.component';
import { HttpService } from '../../services/http-service/http.service';
import { throttleTime } from 'rxjs/operators';
import { SafeHtml} from '@angular/platform-browser';
import { MatProgressSpinnerModule }  from '@angular/material/progress-spinner';
import { BehaviorSubject } from 'rxjs';
import { BypassSecurityPipe } from '../../pipes/bypassSecurityPipe/bypass-security.pipe';

@Component({
  selector: 'app-initials-viewer-container',
  standalone: true,
  imports: [CommonModule, SearchComponent, MatProgressSpinnerModule, CarouselComponent, BypassSecurityPipe],
  templateUrl: './initials-viewer-container.component.html',
  styleUrl: './initials-viewer-container.component.scss'
})
export class InitialsViewerContainerComponent {
  public svgs: Array<SafeHtml> = [];
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(private httpService: HttpService) { }
    
  public submitName(name: string) {
    if (name === undefined || typeof name === 'object') return;
    this.loading$.next(true);
     this.httpService.getInitialsByName(name).pipe(throttleTime(1000)).subscribe({
        next: (svg) => { this.svgs = [...this.svgs, svg]},
        error: (e) => console.error(e),
        complete: () => { this.loading$.next(false); }
    })
  }
}
