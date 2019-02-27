import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private serv: AjaxService) { }

  ngOnInit() {
    this.serv.getGames();
  }

  onScroll() {
    this.serv.loadGames();
  }

  getThumbnail(url) {
    return url.replace('{width}x{height}', '200x300');
  }
}
