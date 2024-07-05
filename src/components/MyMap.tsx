"use client";

import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LatLngExpression } from "leaflet";

/**
 * Map
 */
export default function MyMap({
	position = undefined,
	zoom = 13
}: {
	position?: LatLngExpression,
	zoom?: number,
}) {
	return (
		<div>
			<MapContainer center={position} zoom={zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{/* <Marker
					position={position}
				>
					<Popup>
						Simple popup
					</Popup>
				</Marker> */}
			</MapContainer>
		</div>
	);
}

