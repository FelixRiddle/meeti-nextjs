import apiUrl from "@/lib/config/apiUrl";
import IUserComment from "@/types/IUserComment";
import { User } from "@/types/User";

/**
 * Comment
 */
export default function MeetiComment({
	comment,
	user
}: {
	comment: IUserComment;
	user: User;
}) {
	const url = apiUrl();
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
						<input type="button" value="Delete" className="btn btn-rojo" />
					</form>
				)}
			</div>
		</div>
	);
}
