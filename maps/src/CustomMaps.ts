import { Company } from "./Company";
import { User } from "./User";

/* 
Instructions to every other class
on how they can be argument to 'addMarker'
*/

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId:string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat:0,
                lng: 0
            }
        });
    }

    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         },
    //         map: this.googleMap,
    //       });
    // }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         },
    //         map: this.googleMap,
    //       });
    // }

    // this method is more generic and does the work of above 2 methods.
    // addMarker(mappable: User|Company): void {
        
    //     /*
    //     Everytime we use | operator. 
    //     TS is going to limit the properties that we can use. (only the common ones are available.)
    //     In our case only location is available.
    //     */

    //     new google.maps.Marker({
    //         position: {
    //             lat: mappable.location.lat,
    //             lng: mappable.location.lng
    //         },
    //         map: this.googleMap,
    //       });
    // }

    // Best solution for adding a marker.
     addMarker(mappable: Mappable): void {
        const marker =  new google.maps.Marker({
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            },
            map: this.googleMap,
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        });
    
            infoWindow.open(this.googleMap, marker);
        });
    }


}