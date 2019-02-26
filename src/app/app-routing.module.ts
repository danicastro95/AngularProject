import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsComponent } from './streams/streams.component';
import { GamesComponent } from './games/games.component';
import { HistoryComponent } from './history/history.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'streams', component: StreamsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'detail/:channel', component: DetailComponent },
  { path: '**', component: StreamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
