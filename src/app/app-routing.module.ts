import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMusicComponent } from './search-music/search-music.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: 'search-music', component: SearchMusicComponent },
  { path: 'search-artist', component: SearchArtistComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/search-music', pathMatch: 'full' } // Default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
