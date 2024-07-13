"use client";

import moment from "moment";

import apiUrl from "@/lib/config/apiUrl";
import { Group } from "@/types/Group";
import Meeti from "@/types/Meeti";

/**
 * Group frontend
 */
export default function GroupFrontend({
	group,
	meetis
}: {
	group: Group,
	meetis: Array<Meeti>
}) {
	const url = apiUrl();
	
	moment.locale("en");
	
	return (
		<div className="contenedor">
			<h1>{group.name}</h1>
			<div className="groupInfo">
				<div className="image">
					{group.image && (
						<img
							src={`${url}/public/uplodas/groups/${group.image}`}
							alt={`${group.name} group image`}
						/>
					) || (
						<img src={`${url}/public/img/meeti.png`} alt="Meeti image" />
					)}
				</div>
				
				<div className="text">
					<div dangerouslySetInnerHTML={{ __html: group.description }}>
					</div>
					
					{group.url && (
						<a href={group.url} className="url" target="_blank">Visit our website</a>
					)}
					
					<h2>Upcoming Meeti's</h2>
					<ul className="lista-meetis">
						{meetis.map((meeti) => {
							return (
								<li>
									<a href={`/meeti/${meeti.slug}`}>
										<h3>{meeti.title}</h3>
										<p>{moment(meeti.date + " " + meeti.time).format("LLLL")}</p>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
