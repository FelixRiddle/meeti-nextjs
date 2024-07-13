import apiUrl from "@/lib/config/apiUrl";
import { User } from "@/types/User";


export default function MeetiParticipant({
	participant
}: {
	participant: User
}) {
	const url = apiUrl();
	
	return (
		<li>
			<a href={`/users/${participant.id}`}>
				<div className="image">
					{participant.pfp && (
						<img
							src={`${url}/public/user/${participant.id}/${participant.pfp}`}
							alt={`${participant.name} profile picture`}
						></img>
					)}
				</div>
				<div className="texto">
					{participant.name}
				</div>
			</a>
		</li>
	);
}
