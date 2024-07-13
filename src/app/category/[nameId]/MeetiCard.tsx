import apiUrl from "@/lib/config/apiUrl";
import Meeti from "@/types/Meeti";
import moment from "moment";

/**
 * Meeti card
 */
export default function MeetiCard({
	meeti
}: {
	meeti: Meeti,
}) {
	const url = apiUrl();
	const date = meeti.date + ' ' + meeti.time;
						
	return (
		<div className="card">
			{meeti.group.image && (
				<img
					src={`${url}/public/uploads/groups/${meeti.group.image}`}
					alt={`${meeti.group.name} group image`}
				/>
			) || (
				<img
					src="/public/img/meeti.png"
					alt="Meeti logo"
				/>
			)}
			
			<div className="card-texto">
				<div className="fecha">{moment(date).format("LLLL")}</div>
				
				<a href={`${url}/meeti/${meeti.slug}`}>
					<h3>{meeti.title}</h3>
				</a>
				
				<div className="info-author">
					<div className="image">
						{meeti.user.pfp && (
							<img
								src={`${url}/public/user/${meeti.user.id}/${meeti.user.pfp}`}
								alt={`${meeti.user.name} profile picture`}
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

