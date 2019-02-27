import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const STREAMS = 'https://api.twitch.tv/helix/streams';
const GAMES = 'https://api.twitch.tv/helix/games/top';

const options = { headers: new HttpHeaders({ 'Client-ID': '621vu6vav58b6z40zaz4gj47t1konv' }) };

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  elements = [];
  history = [];
  cursor;

  constructor(private http: HttpClient) { }

  // Infinite scroll petition
  getStreams() {
    this.elements = [];
    this.http.get<any>(STREAMS, options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  // Infinite scroll petition
  loadStreams() {
    this.http.get<any>(STREAMS + '?after=' + this.cursor + '&first=3', options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  // Infinite scroll petition
  getGames() {
    this.elements = [];
    this.http.get<any>(GAMES, options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  // Infinite scroll petition
  loadGames() {
    this.http.get<any>(GAMES + '?after=' + this.cursor + '&first=4', options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  // Get game streams
  getStreamsByGame(id) {
    this.elements = [];
    this.http.get<any>(STREAMS + '?game_id=' + id, options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }

  loadStreamsByGame(id) {
    this.http.get<any>(STREAMS + '?first=3&game_id=' + id + '&after=' + this.cursor, options).subscribe(data => {
      data.data.forEach(stream => {
        this.elements.push(stream);
      });
      this.cursor = data.pagination.cursor;
    });
  }
}
