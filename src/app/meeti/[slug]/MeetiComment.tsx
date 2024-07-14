import { useRef } from "react";

import { deleteComment } from "@/api/requestTypes";
import apiUrl from "@/lib/config/apiUrl";
import IUserComment from "@/types/IUserComment";
import Message from "@/types/Message";
import { User } from "@/types/User";

/**
 * Comment
 */
export default function MeetiComment({
	comment,
	user,
	setMessages,
	deleteLocalComment,
}: {
	comment: IUserComment;
	user: User;
	setMessages: (messages: Array<Message>) => void;
	deleteLocalComment: (commentId: string) => void;
}) {
	const url = apiUrl();
	
	async function deleteUserComment(e: any) {
		e.preventDefault();
		
		// FIXME: Not working I don't know why
		const data = await deleteComment(comment.id);
		if(deleteLocalComment) {
			deleteLocalComment(comment.id);
		}
		
		if(data.messages) {
			setMessages(data.messages);
		}
	}
	
	return (
		<div className="comment">
			<div className="image">
				{comment.user.pfp && (
					<img
						src={`${url}/public/user/${comment.user.id}/${comment.user.pfp}`}
						alt={`User ${comment.user.name} profile picture`}
					/>
				)}
			</div>
			<div className="text">
				<p>{comment.message}</p>
				<p>
					Written by:
					<a
						href={`/users/${comment.user.id}`}
						style={{ "marginLeft": "3px" }}
					>{comment.user.name}</a>
				</p>
				{comment.user.id === user.id && (
					<form>
						<input
							type="button"
							value="Delete"
							className="btn btn-rojo"
							onClick={deleteUserComment}
						/>
					</form>
				)}
			</div>
		</div>
	);
}
