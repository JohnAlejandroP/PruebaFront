import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { routes } from './app/app.routing.modules';

bootstrapApplication(AppComponent, {
    providers: [provideAnimations(),
      provideHttpClient(),
      provideRouter(routes, withPreloading(PreloadAllModules), withDebugTracing())
    ]
})
  .catch((err) => console.error(err));
