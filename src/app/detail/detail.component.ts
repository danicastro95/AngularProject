import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  channel;

  constructor(private route: ActivatedRoute, public serv: AjaxService) { }

  ngOnInit() {
    this.channel = 'https://player.twitch.tv/?channel=' + this.route.snapshot.params.channel;
    this.serv.getStreamsByGame(this.route.snapshot.params.game);
  }

  onScroll() {
    this.serv.loadStreamsByGame(this.route.snapshot.params.game);
  }

  getThumbnail(url) {
    return url.replace('{width}x{height}', '300x200');
  }
}
