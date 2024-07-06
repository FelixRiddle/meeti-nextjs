import { LatLngExpression } from "leaflet";
import { useEffect, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { UpdateAddressCallback } from "./FindPlaceMap";

/**
 * Labeled marker
 */
export default function LabeledMarker({
	isActive,
	position,
	map,
	message,
	updateCallback,
}: {
	isActive: boolean;
	position: LatLngExpression;
	map: any;
	message: string;
	updateCallback: UpdateAddressCallback;
}) {
	const [markerMessage, setMarkerMessage] = useState(message);
	const [refReady, setRefReady] = useState(false);
	let popupRef = useRef(null);
	
	useEffect(() => {
		if(!popupRef.current || !map.current) {
			return;
		}
		
		if(refReady && isActive) {
			// Not working, throws an error
			// popupRef.current.openOn(map);
		}
	}, [isActive, refReady, map]);
	
	/**
	 * Update marker
	 */
	async function updateMarker(lat: number, lng: number) {
		// Down to building information
		const zoom = 18;
		let extraParams = "";
		
		// We've got to reverse geocode the location
		// Nominatim is free and does exactly that
		const response = await fetch(
			`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=${zoom}${extraParams}`
		);
		
		if(response.ok) {
			const place = await response.json();
			
			// Update marker
			const location = [lat, lng];
			const placeName = place.display_name;
			setMarkerMessage(placeName);
			
			// Place address
			const address = place.address;
			updateCallback(location, address);
		}
	}
	
	useEffect(() => {
		if(position) {
			updateMarker(position.lat, position.lng);
		}
	}, []);
	
	return (
		<Marker
			position={position}
			autoPan={true}
			draggable={true}
			eventHandlers={{
				dragend: async (e) => {
					const place = e.target;
					const latLng = place._latlng;
					
					const lat = latLng.lat;
					const lng = latLng.lng;
					updateMarker(lat, lng);
				},
			}}
		>
			<Popup
				ref={(r) => {
					popupRef.current = r;
					setRefReady(true);
				}}
			>
				{markerMessage}
			</Popup>
		</Marker>
	);
}
