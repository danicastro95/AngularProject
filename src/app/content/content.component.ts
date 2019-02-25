import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';
import { Stream } from '../stream';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  streams: Stream[];

  constructor(private serv: AjaxService) { }

  ngOnInit() {
    this.serv.getStreams().subscribe(streams => this.streams = streams);
    console.log(this.streams);
  }

  clic() {
    console.log(this.streams);
  }

}
