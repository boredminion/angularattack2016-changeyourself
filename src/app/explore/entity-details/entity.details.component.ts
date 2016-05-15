import { Component, Input } from '@angular/core';

@Component({
    selector: 'entity-details',
    template: require('./entity.details.component.html'),
    styles: [require('./entity.details.component.scss')]
})
export class EntityDetails {
    @Input() placeId: string;

    constructor(){
        console.log(this.placeId);
    }


}
