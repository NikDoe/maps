import { User } from './User';
import { Company } from './Company';

//instructions to every other class
//on how they could be an argument to 'addMarker'
interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(private divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			center: { lat: 0, lng: 0 },
			zoom: 1,
		});
	}

	addMarker(mappable: Mappable): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});
	}
}
