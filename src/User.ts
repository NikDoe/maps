import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string = 'orange';

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `
			<div>
				<h1>User: ${this.name}</h1>
			</div>
		`;
	}
}
