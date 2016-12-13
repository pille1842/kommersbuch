import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-song',
  templateUrl: 'song.html'
})
export class SongPage {
  song = {};

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.song = navParams.get('song');
  }

}
