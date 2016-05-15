import { Component, Input } from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
    selector: 'map',
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
    template: require('./map.component.html'),
    styles: [require('./map.component.scss')]
})
export class Map {
    @Input() entities: any[];
    @Input() lat: number;
    @Input() lng: number;

    clickOnMap(){
        alert('clickOnMap');
    }

    clickOnMarker(){
        alert('clickOnMarker');
    }
}
