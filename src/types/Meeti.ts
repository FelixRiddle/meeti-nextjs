import Address from "./Address";
import { User } from "./User";

/**
 * Meeti
 */
export default interface Meeti {
	id: number;
	title: string;
	featuring: string;
	coupon: number;
	description: string;
	date: Date;
	time: Date;
	slug: string;
	participants?: Array<User>;
	userId: number;
	groupId: string;
	addressId: number;
	address?: Address;
	createdAt: Date;
	updatedAt: Date;
}
