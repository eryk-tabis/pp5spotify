import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {bootstrapApplication} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {AppComponent} from "./app/app.component";
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
