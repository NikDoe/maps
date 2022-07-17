//instructions to every other class
//on how they could be an argument to 'addMarker'
interface Mappable {
	location: {
		lat: number;
		lng: number;
	};

	markerContent(): string;
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
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});

		const infoWindow = new google.maps.InfoWindow({
			content: mappable.markerContent(),
		});

		marker.addListener('click', () => {
			infoWindow.open(this.googleMap, marker);
		});
	}
}
