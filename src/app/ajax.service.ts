import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const STREAMS = 'https://api.twitch.tv/helix/streams';
const GAMES = 'https://api.twitch.tv/helix/games/top';
const LANG = 'https://api.twitch.tv/kraken/streams/';

const options = { headers: new HttpHeaders({ 'Client-ID': '621vu6vav58b6z40zaz4gj47t1konv' }) };

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  elements = [];
  streamsHistory = [];
  gamesHistory = [];
  cursor;

  constructor(private http: HttpClient) { }

  getStreams() {
    this.elements = [];
    this.http.get<any>(STREAMS, options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  loadStreams() {
    this.http.get<any>(STREAMS + '?after=' + this.cursor + '&first=3', options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  getGames() {
    this.elements = [];
    this.http.get<any>(GAMES, options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  loadGames() {
    this.http.get<any>(GAMES + '?after=' + this.cursor + '&first=3', options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  getByLang(lang = 'es') {
    this.elements = [];
    this.http.get<any>(LANG + '?language=' + lang, options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }
}
