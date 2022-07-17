import { faker } from '@faker-js/faker';

export class Company {
	companyName: string;
	catchphrase: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchphrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `
			<div>
				<h1>Company: ${this.companyName}</h1>
				<h3>${this.catchphrase}</h3>
			</div>
		`;
	}
}
