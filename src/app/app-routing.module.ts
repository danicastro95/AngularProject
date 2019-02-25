import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsComponent } from './streams/streams.component';
import { GamesComponent } from './games/games.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'streams', component: StreamsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', component: StreamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
