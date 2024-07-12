"use client";

import apiUrl from "@/lib/config/apiUrl";
import ICompleteMeeti from "@/types/ICompleteMeeti";
import MeetiParticipant from "./MeetiParticipant";

/**
 * Participants frontend
 */
export default function ParticipantsFrontend({
	meeti
}: {
	meeti: ICompleteMeeti
}) {
	const url = apiUrl();
	
	return (
		<div>
			<link rel="stylesheet" href={`${url}/public/css/meeti/index.css`} />
			<link rel="stylesheet" href={`${url}/public/css/image.css`} />
			
			<main className="contenedor participants">
				<h1>{meeti.title} participants</h1>
				{meeti.participants.length > 0 && (
					<ul className="participantsList">
						{meeti.participants.map((participant) => {
							return (
								<MeetiParticipant
									participant={participant}
								/>
							);
						})}
					</ul>
				) || (
					<p className="no-asistentes">There are no participants for this meeti</p>
				)}
			</main>
		</div>
	);
}
