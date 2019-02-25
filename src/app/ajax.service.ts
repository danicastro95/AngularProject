import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const STREAMS = 'https://api.twitch.tv/helix/streams';
const GAMES = 'https://api.twitch.tv/helix/games/top';

const options = {
  headers: new HttpHeaders({ 'Client-ID': '621vu6vav58b6z40zaz4gj47t1konv' })
};

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  streams = [];
  streamsCursor;

  constructor(private http: HttpClient) { }

  getStreams() {
    this.http.get<any>(STREAMS, options).subscribe(data => {
      this.streams = data.data;
      this.streamsCursor = data.pagination.cursor;
    });
  }
}
