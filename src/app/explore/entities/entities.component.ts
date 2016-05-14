import { Component, Input } from '@angular/core';
import { Entity } from './entity';

@Component({
    selector: 'entities',
    directives: [Entity],
    template: require('./entities.component.html'),
    styles: [require('./entities.component.scss')]
})
export class Entities {
    @Input() entities;

    constructor(){
        //console.log(entities)
    }
}
