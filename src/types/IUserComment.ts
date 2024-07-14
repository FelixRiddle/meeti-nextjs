import { User } from "./User";

/**
 * Comment
 */
export default interface IUserComment {
	id: string;
	message: string;
	userId: string;
	meetiId: string;
	user: User;
	createdAt: Date;
	updatedAt: Date;
}
