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
}
