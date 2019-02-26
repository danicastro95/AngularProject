import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  channel = 'https://player.twitch.tv/?channel=';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.channel += this.route.snapshot.params.channel;
  }
}
