import apiUrl from "@/lib/config/apiUrl";
import ICardMeeti from "@/types/ICardMeeti";
import moment from "moment";

/**
 * Meeti card
 */
export default function MeetiCard({
	meeti
}: {
	meeti: ICardMeeti
}) {
	const url = apiUrl();
	
	return (
		<div className="card" key={meeti.id}>
			<img
				src={`${url}/public/uploads/groups/${meeti.group.image}`}
				alt={meeti.title} />
			<div className="card-texto">
				<p className="fecha">{
					moment(`${meeti.date} ${meeti.time}`).format("LLLL")
				}</p>
				<a href={`/meeti/${meeti.slug}`}>
					<h3>
						{meeti.title}
					</h3>
				</a>
				<div className="info-autor">
					<div className="imagen">
						{meeti.user.pfp && (
							<img
								src={`${url}/public/user/${meeti.user.id}/${meeti.user.pfp}`}
								alt={`${meeti.title} owner profile picture`}
							/>
						)}
					</div>
					<div className="informacion">
						<p>Organized by:</p>
						<p className="autor">
							{meeti.user.name}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
