import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  cursor;

  constructor(public serv: AjaxService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.params.game) {
      this.serv.getStreamsByGame(this.route.snapshot.params.game);
    } else {
      this.serv.getStreams();
    }
  }

  onScroll() {
    if (this.route.snapshot.params.game) {
      this.serv.loadStreamsByGame(this.route.snapshot.params.game);
    } else {
      this.serv.loadStreams();
    }
  }

  getThumbnail(url) {
    return url.replace('{width}x{height}', '300x200');
  }

  addToHistory(username, gameid) {
    this.serv.history.push({ user: username, game: gameid });
  }
}
