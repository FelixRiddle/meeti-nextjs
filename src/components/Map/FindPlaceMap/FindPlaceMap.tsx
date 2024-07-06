"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useRef, useState } from "react";
import LabeledMarker from "./LabeledMarker";
import { LatLngExpression } from "leaflet";

export type UpdateAddressCallback = (coordinates: Array<number>, address: Object) => void;

/**
 * Find place map
 */
export default function FindPlaceMap({
	position,
	zoom,
	size = { width: 1024, height: 768 },
	updateCallback,
}:{
	position: LatLngExpression,
	size?: {
		width: number,
		height: number,
	},
	zoom: number,
	updateCallback: UpdateAddressCallback;
}) {
	// const [map, setMap] = useState();
	const map = useRef(null);
	
	return (
		<MapContainer
			center={position}
			zoom={zoom}
			scrollWheelZoom={false}
			style={size}
			ref={map}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			
			<LabeledMarker
				isActive={true}
				position={position}
				map={map}
				message={"Meeti location"}
				updateCallback={updateCallback}
			>
			</LabeledMarker>
		</MapContainer>
	);
}
