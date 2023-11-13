import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialsViewerContainerComponent } from './initials-viewer-container.component';

describe('InitialsViewerContainerComponent', () => {
  let component: InitialsViewerContainerComponent;
  let fixture: ComponentFixture<InitialsViewerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialsViewerContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialsViewerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
