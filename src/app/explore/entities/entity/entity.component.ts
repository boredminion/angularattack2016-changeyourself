import { Component, Input } from '@angular/core';

@Component({
    selector: 'entity',
    template: require('./entity.component.html'),
    styles: [require('./entity.component.scss')]
})
export class Entity {
    @Input() entity;
}
