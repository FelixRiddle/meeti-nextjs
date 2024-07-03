
export interface Group {
	id: string;
	name: string;
	description: string;
	url: string;
	// The image name in the backend public files
	image: string;
	createdAt: Date;
	updatedAt: Date;
	socialCategoryId: number;
	userId: number;
}
