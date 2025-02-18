import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/pages/home/home.component';
import 'hammerjs';


bootstrapApplication(HomeComponent, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));
