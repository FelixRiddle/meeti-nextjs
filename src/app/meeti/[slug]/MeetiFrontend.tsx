"use client";

import apiUrl from "@/lib/config/apiUrl";
import ICompleteMeeti from "@/types/ICompleteMeeti";
import moment from "moment";
import Image from "next/image";

/**
 * Meeti frontend
 */
export default function MeetiFrontend({
	meeti
}: {
	meeti: ICompleteMeeti
}) {
	const url = apiUrl();
	moment.locale("en");
	
	return (
		<div>
			<link rel="stylesheet" href={`${url}/public/css/meeti/index.css`} />

			<div className="eventHeader">
				<div className="contenedor">
					<div className="eventSummary">
						<h1>{meeti.title}</h1>
						<div className="info-autor">
							<div className="imagen">
								{meeti.user.pfp && (
									<img
										src={`${url}/public/user/${meeti.user.id}/${meeti.user.pfp}`}
										alt="User profile picture"
									/>
								)}
							</div>
							<div className="informacion">
								<p>By:</p>
								<p className="autor">
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
						<div className="participate">
							<p>Will you participate?</p>
							<a href="#" className="btn btn-azul">Yes</a>
						</div>
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
								// width={1366}
								// height={768}
							/>
							{meeti.description}
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
