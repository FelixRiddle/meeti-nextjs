"use client";

import moment from "moment";
import { useRef, useState } from "react";

import { meetiParticipate } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import ICompleteMeeti from "@/types/ICompleteMeeti";

/**
 * Meeti frontend
 */
export default function MeetiFrontend({
	meeti
}: {
	meeti: ICompleteMeeti
}) {
	const url = apiUrl();
	const form = useRef(null);
	const [messages, setMessages] = useState([]);
	moment.locale("en");
	
	async function participate(e: any) {
		e.preventDefault();
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		const data = await meetiParticipate(formData);
		
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
						<form action={`${url}/rest/user/participate`} method="POST" ref={form}>
							<p>Will you participate?</p>
							<input type="hidden" value={meeti.id} name="meetiId" />
							<input
								type="button"
								className="btn btn-azul"
								id="participateButton"
								value="Participate"
								onClick={participate}
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
							<div className="title">
								<h3>{meeti.participants.length} Participants</h3>
								<a href={`${url}/meeti/participants/${meeti.slug}`}>See list</a>
							</div>
						</div>
						
						<div className="comentarios">
							<h2>Comments</h2>
							<div className="comentario">
								<div className="image"></div>
								<div className="texto">
									<p>Hello</p>
									<p>Written by: <span></span></p>
									<input
										type="button"
										value="Delete"
									/>
								</div>
							</div>
							
							<form action="" className="default-form comentarios">
								<legend>Create comment</legend>
								<div className="campo">
									<label htmlFor="comment">Comment</label>
									<textarea name="comment" id="comment" placeholder="Comment"></textarea>
								</div>
								<div className="campo enviar">
									<input
										type="submit"
										value="Create comment"
										className="btn btn-rosa"
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
