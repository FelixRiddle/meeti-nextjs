export default interface Address {
	id: number;
	street: string;
	city: string;
	state: string;
	country: string;
	latitude: number;
	longitude: number;
	createdAt: Date;
	updatedAt: Date;
}
