import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Stream } from './stream';

const STREAMS = 'https://api.twitch.tv/helix/streams';

const options = {
  headers: new HttpHeaders({ 'Client-ID': '621vu6vav58b6z40zaz4gj47t1konv' })
};

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  streams = [];

  constructor(private http: HttpClient) { }

  getStreams(): Observable<Stream[]> {
    return this.http.get<Stream[]>(STREAMS, options);
  }
}
