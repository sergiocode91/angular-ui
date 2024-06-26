import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import {
  LucideAngularModule,
  Files,
  Sun,
  Copy,
  Check,
  Moon,
  Instagram,
  Github,
  Trash,
  Bell,
  Rss,
  Megaphone,
  Ban,
  TriangleAlert,
  CircleCheck,
  Info,
  X,
  LoaderCircle,
  Bug
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Files,
        Sun,
        Copy,
        Check,
        Moon,
        Instagram,
        Github,
        Trash,
        Bell,
        Rss,
        Megaphone,
        Ban,
        TriangleAlert,
        CircleCheck,
        Info,
        X,
        LoaderCircle,
        Bug
      })
    ),
  ]
};
