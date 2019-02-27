import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private serv: AjaxService) { }

  ngOnInit() {
  }

  addToHistory(username, gameid) {
    this.serv.history.push({ user: username, game: gameid });
  }
}
