import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  streams = [];
  cursor;

  constructor(private serv: AjaxService) { }

  ngOnInit() {
    this.serv.getStreams();
  }

  onScroll() {
    this.serv.loadStreams();
  }

  getThumbnail(url) {
    return url.replace('{width}x{height}', '300x200');
  }
}
