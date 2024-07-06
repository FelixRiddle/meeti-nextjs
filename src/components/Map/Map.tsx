// src/components/Map.tsx
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap({
	position,
	zoom,
	size = { width: 1024, height: 768 },
}:{
	position: {
		lat: number,
		lng: number,
	},
	size?: {
		width: number,
		height: number,
	},
	zoom: number,
}) {
	return (
		<MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={size}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position} autoPan={true} draggable={true}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
}
