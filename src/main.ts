import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cWWdCf1FpRGJGfV5yd0VPalxQTnNZUj0eQnxTdEZiWH5fcnVRT2BVUkBxXw==');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
