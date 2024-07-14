"use client";

import moment from "moment";
import { useRef, useState } from "react";

import { createMeetiComment, meetiParticipate } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import ICompleteMeeti from "@/types/ICompleteMeeti";
import MeetiComment from "./MeetiComment";
import { User } from "@/types/User";
import IUserComment from "@/types/IUserComment";

/**
 * Meeti frontend
 */
export default function MeetiFrontend({
	meeti,
	participating: userIsParticipating,
	comments: userComments,
	user,
}: {
	meeti: ICompleteMeeti;
	participating: boolean;
	comments: Array<IUserComment>;
	user: User;
}) {
	const url = apiUrl();
	const participateForm = useRef(null);
	const commentForm = useRef(null);
	const [comments, setComments] = useState(userComments);
	const [messages, setMessages] = useState([]);
	const [participating, setParticipating] = useState(userIsParticipating);
	moment.locale("en");
	
	/**
	 * Delete single comment
	 */
	function deleteSingleComment(id: string) {
		setComments((comments) => {
			return comments.filter((comment) => comment.id !== id);
		});
	}
	
	async function participate(e: any) {
		e.preventDefault();
		
		setParticipating(!participating);
		
		if(!participateForm) {
			return;
		}
		
		const formData = new FormData(participateForm.current);
		formData.append("userId", meeti.userId.toString());
		
		const data = await meetiParticipate(formData);
		
		if(data.messages) {
			setMessages(data.messages);
		}
	}
	
	/**
	 * Create comment
	 */
	async function createComment(e: any) {
		// e.preventDefault();
		
		if(!commentForm) {
			return;
		}
		
		const formData = new FormData(commentForm.current);
		
		const data = await createMeetiComment(formData, meeti.id);
		
		if(data.messages) {
			setMessages(data.messages);
		}
	}
	
	return (
		<div>
			<link rel="stylesheet" href={`${url}/public/css/meeti/index.css`} />
			
			<Messages
				messages={messages}
			/>
			
			<div className="eventHeader">
				<div className="contenedor">
					<div className="eventSummary">
						<h1>{meeti.title}</h1>
						<div className="infoAuthor">
							<div className="image">
								{meeti.user.pfp && (
									<img
										src={`${url}/public/user/${meeti.user.id}/${meeti.user.pfp}`}
										alt="User profile picture"
									/>
								)}
							</div>
							<div className="informacion">
								<p>By:</p>
								<p className="author">
									<a
										href={`${url}/user-profile/${meeti.user.id}`}
									>{meeti.user.name}</a> creator of:
									<a
										href={`${url}/group/${meeti.group.id}`}
									>{meeti.group.name}</a>
								</p>
							</div>
						</div>
					</div>
					
					{meeti.user && (
						<form action="/user/participate" id="participateForm" ref={participateForm}>
							<p>Will you participate?</p>
							<input type="hidden" value={meeti.id} name="meetiId" />
							<input
								type="button"
								className={`btn ${participating ? "btn-rojo" : "btn-azul"}`}
								id="participateButton"
								value={participating ? "Cancel" : "Participate"}
								onClick={(e) => participate(e)}
							/>
						</form>
					) || (
						<div className="participate">
						</div>
					)}
				</div>
			</div>
			
			<main className="eventContainer">
				<div className="contenedor">
					<div className="eventInformation">
						<div className="descripcion">
							<img
								src={`${url}/public/uploads/groups/${meeti.group.image}`}
								alt="Meeti image"
							/>
							
							<div dangerouslySetInnerHTML={{ __html: meeti.description }}></div>
						</div>
						
						<div className="asistentes">
							<div className="titulo">
								<h3>{meeti.participants.length} Participants</h3>
								<a href={`/meeti/participants/${meeti.slug}`}>See list</a>
							</div>
						</div>
						
						<div className="comentarios">
							<h2>Comments</h2>
							{/* Show comments */}
							{comments.length > 0 && comments.map((comment) => {
								return (
									<MeetiComment
										key={comment.id}
										comment={comment}
										user={user}
										setMessages={setMessages}
										deleteLocalComment={deleteSingleComment}
									/>
								);
							}) || (
								<p>There are no comments for this Meeti</p>
							)}
							
							{/* Create comment */}
							<form
								className="default-form comentarios"
								ref={commentForm}
							>
								<legend>Create comment</legend>
								<div className="campo">
									<label htmlFor="comment">Comment</label>
									<textarea name="comment" id="comment" placeholder="Comment"></textarea>
								</div>
								<div className="campo enviar">
									<input
										type="button"
										value="Create comment"
										className="btn btn-rosa"
										onClick={createComment}
									/>
								</div>
							</form>
						</div>
					</div>
					
					<aside className="informacion">
						<div
							className="date"
							// Have to replace class style url
							style={{backgroundImage: `${url}/public/img/timeIcon.svg`}}
						>
							<p>{moment(`${meeti.date} ${meeti.time}`).format("LLLL")}</p>
						</div>
						<div
							className="location"
							style={{backgroundImage: `${url}/public/img/locationIcon.svg`}}
						>
							<p>
								{meeti.address.street},
								{meeti.address.city},
								{meeti.address.state},
								{meeti.address.country}
							</p>
						</div>
					</aside>
				</div>
			</main>
		</div>
	);
}
