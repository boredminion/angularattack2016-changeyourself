import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'my-about',
  template: require('./about.component.html'),
  styles: [require('./about.component.scss')]
})
export class AboutComponent implements OnInit {
  //items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
    //this.items = af.database.list('/item/arr');
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
