import Address from "./Address";
import { Group } from "./Group";
import { User } from "./User";

export default interface ICompleteMeeti {
	id: number;
	title: string;
	featuring: string;
	coupon: number;
	description: string;
	date: Date;
	time: Date;
	slug: string;
	userId: number;
	groupId: string;
	addressId: number;
	createdAt: Date;
	updatedAt: Date;
	// Meeti related
	group: Group;
	// Owner user
	user: User,
	participants: Array<User>;
	address: Address;
}
