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

    lat: number = 0;
    lng: number = 0;
    entities: Object = [];

    constructor(public mapService:MapService, routeParams:RouteParams) {
        this.lat = +routeParams.get('lat');
        this.lng = +routeParams.get('lng');
    }

    ngOnInit() {
        this.mapService.fetchEntities(this.lat, this.lng)
            .then(data => {
                this.entities = data;
            });
    }
}
