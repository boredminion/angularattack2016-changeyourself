import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { MapService } from './../services/map.service';
import { EntityDetails } from './entity-details';
import { Map } from './map';

@Component({
    selector: 'explore',
    viewProviders: [MapService],
    directives: [EntityDetails, Map],
    template: require('./explore.component.html'),
    styles: [require('./explore.component.scss')]
})
export class Explore implements OnInit {

    lat: number = 0;
    lng: number = 0;
    place: string = null;
    entities: Object = [];

    constructor(public mapService:MapService, routeParams:RouteParams) {
        this.lat = +routeParams.get('lat');
        this.lng = +routeParams.get('lng');
        this.place = routeParams.get('place');
    }

    ngOnInit() {
        this.mapService.fetchEntities(this.lat, this.lng)
            .then(data => {
                this.entities = data;
            });
    }
}
