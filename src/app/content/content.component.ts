import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  streams = [];
  cursor;

  constructor(private serv: AjaxService) { }

  ngOnInit() {
    this.serv.getStreams();
  }

  clic() {
    console.log(this.serv.streams);
    console.log(this.cursor);
  }

}
