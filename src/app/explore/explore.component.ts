import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { MapService } from './../services/map.service';

@Component({
    selector: 'explore',
    viewProviders: [MapService],
    template: require('./explore.component.html'),
    styles: [require('./explore.component.scss')]
})
export class Explore implements OnInit {

    constructor(routeParams:RouteParams, mapService:MapService) {
        console.log('routeParams', routeParams.get('lat'))
        console.log('routeParams', routeParams.get('lon'))

        mapService.fetchEntities('50.492105','30.521307')
            .then(data => {
                console.log(data);
            })
    }

    ngOnInit() {
        console.log('Hello explore');
    }

}
