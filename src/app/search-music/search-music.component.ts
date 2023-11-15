import { Component } from '@angular/core';
import {SpotifyService} from "../spotify.service";

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrl: './search-music.component.scss'
})
export class SearchMusicComponent {
  recive_data: any = localStorage.getItem('music');
  data: any = this.recive_data ? JSON.parse(this.recive_data) : null;
  constructor(private spotifyService: SpotifyService) {
  }
  getToken() {
    this.spotifyService.getToken().subscribe(response => {
      localStorage.setItem('token', response.body["access_token"]);});

  }
  getMusic(event: any){
    this.spotifyService.getMusic(event.target.value).subscribe((response) => {
      this.data = response.tracks["items"];
      localStorage.setItem('music', JSON.stringify(this.data));
    });
  }
  ngOnInit() {
    this.getToken();
  }
}
