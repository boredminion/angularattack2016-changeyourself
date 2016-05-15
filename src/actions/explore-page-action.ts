import {Injectable} from "@angular/core";
import {Actions,AppStore} from "angular2-redux";

type Types = "SHOW_DETAILS_WINDOW" | "HIDE_DETAILS_WINDOW";
export const ExplorePageTypes = {
    SHOW_DETAILS_WINDOW: "SHOW_DETAILS_WINDOW" as Types,
    HIDE_DETAILS_WINDOW: "HIDE_DETAILS_WINDOW" as Types
};

@Injectable()
export class ExplorePageActions extends Actions {

    constructor(appStore:AppStore) {
        super(appStore);
    }

    showWindowDetails(id) {
        return {type: ExplorePageTypes.SHOW_DETAILS_WINDOW, id};
    };

    hideWindowDetails() {
        return {type: ExplorePageTypes.HIDE_DETAILS_WINDOW};
    };

}
