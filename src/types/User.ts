
/**
 * User data
 */
export interface User {
	id: string;
	name: string;
	pfp: string;
	email: string;
	emailConfirmed: boolean;
	createdAt: Date;
	updatedAt: Date;
}
