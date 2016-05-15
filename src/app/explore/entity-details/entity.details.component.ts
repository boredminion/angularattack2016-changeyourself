import { Component, Input, OnDestroy } from '@angular/core';
import { AppStore } from "angular2-redux";
import { ExplorePageActions, ExplorePageTypes } from "./../../../actions/explore-page-action";

@Component({
    selector: 'entity-details',
    template: require('./entity.details.component.html'),
    styles: [require('./entity.details.component.scss')]
})
export class EntityDetails implements OnDestroy {

    @Input() placeId:string;
    private unsubscribeFromStore:()=>void;

    constructor(public appStore:AppStore, public explorePageActions:ExplorePageActions) {

        this.unsubscribeFromStore = appStore.subscribe((state) => {
            if(ExplorePageTypes.SHOW_DETAILS_WINDOW){
                this.placeId = state.explore.placeId;
            }
        });
    }

    public ngOnDestroy() {
        this.unsubscribeFromStore();
    }
}
