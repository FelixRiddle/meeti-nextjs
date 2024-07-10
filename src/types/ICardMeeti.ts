
export default interface ICardMeeti {
	id: string;
	slug: string;
	title: string;
	date: string;
	time: string;
	group: {
		image: string;
	};
	user: {
		id: string;
		name: string;
		pfp: string;
	};
}
