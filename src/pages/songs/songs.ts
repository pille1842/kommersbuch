import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SongPage } from '../song/song';

@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html'
})
export class SongsPage {
  songs = [
    {
      "title": "Lied 1"
    },
    {
      "title": "Lied 2"
    }
  ];

  constructor(public navCtrl: NavController) {
  }

  songSelected(song) {
    this.navCtrl.push(SongPage, {
      "song": song
    });
  }

}
