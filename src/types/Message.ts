
/**
 * Message
 */
export default interface Message {
	message: string;
	error?: boolean;
	type?: string;
}

export type Messages = Array<Message>;
