import Meeti from "@/types/Meeti";
import moment from "moment";

export default function MeetiRowView({
	isFuture = true,
	meeti,
}: {
	isFuture?: boolean,
	meeti: Meeti,
}) {
	return (
		<li>
			<div className="informacion-admin">
				<p className="fecha">
					{moment(`${meeti.date} ${meeti.time}`).format("LLLL")}
				</p>
				<h3>{meeti.title}</h3>
				<small>{meeti.participants?.length} {isFuture ? "going" : "people went"}</small>
			</div>
			<div className="acciones contenedor-bottones">
				<a href={`/user/meeti/edit/${meeti.id}`} className="btn btn-verde">Edit</a>
				<a
					href={`/user/meeti/people/${meeti.id}`}
					className="btn btn-azul2"
				>People list</a>
				<a href={`/user/meeti/delete/${meeti.id}`} className="btn btn-rojo">Delete</a>
			</div>
		</li>
	);
}
