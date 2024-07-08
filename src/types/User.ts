
/**
 * User data
 */
export interface User {
	id: string;
	description: string;
	name: string;
	pfp: string;
	email: string;
	emailConfirmed: boolean;
	createdAt: Date;
	updatedAt: Date;
}
