import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { MapService } from './../services/map.service';
import { Entities } from './entities';
import { Map } from './map';

@Component({
    selector: 'explore',
    viewProviders: [MapService],
    directives: [Entities, Map],
    template: require('./explore.component.html'),
    styles: [require('./explore.component.scss')]
})
export class Explore implements OnInit {

    entities: Object = [];

    constructor(routeParams:RouteParams, mapService:MapService) {

        mapService.fetchEntities(routeParams.get('lat'), routeParams.get('lon'))
            .then(data => {
                this.entities = data;
            });
    }

    ngOnInit() {
        console.log('Hello explore');
    }

}
