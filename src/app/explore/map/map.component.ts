import { Component, Input } from '@angular/core';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [require('./map.component.scss')]
})
export class Map {
    @Input() entities;
}
