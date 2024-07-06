"use client";

import { createMeeti } from "@/api/requestTypes";
import { requestWasSuccessful } from "@/app/auth/login/LoginFrontend";
import FindPlaceMap from "@/components/Map/FindPlaceMap";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { Group } from "@/types/Group";
import Script from "next/script";
import { useRef, useState } from "react";

/**
 * 
 */
export default function CreateMeetiFrontend({
	userGroups
}: {
	userGroups: Array<Group> | undefined,
}) {
	const url = apiUrl();
	const [coordinates, setCoordinates] = useState([
		51.505,
		-0.09,
	]);
	const [address, setAddress] = useState({
		street: "",
		city: "",
		state: "",
		country: "",
	});
	const [messages, setMessages] = useState([]);
	
	const form = useRef(null);
	const street = useRef(null);
	const city = useRef(null);
	const state = useRef(null);
	const country = useRef(null);
	const latitude = useRef(null);
	const longitude = useRef(null);
	
	function updateMarkerCallback(coordinates: Array<number>, place: any) {
		setCoordinates(coordinates);
		setAddress({
			...place,
			street: place.street || place.road || "",
		});
	}
	
	/**
	 * Create meeti
	 */
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		const data = await createMeeti(formData);
		
		if(data.messages) {
			setMessages(data.messages);
		}
		
		const isSuccess = requestWasSuccessful(data);
		
		// Redirect to admin panel
		if(isSuccess) {
			location.href = "/user/admin";
		}
	}
	
	return (
		<main className="contenedor contenedor-formularios">
			<Messages messages={messages} />
			
			<link rel="stylesheet" href={`${url}/public/package/trix@2.1.1/dist/trix.css`} />
			<link rel="stylesheet" href={`${url}/public/css/routes/user/meeti/create.css`} />
			
			<Script src={`${url}/public/package/trix@2.1.1/dist/trix.umd.js`}></Script>
			
			{/* Leaflet */}
			<link
				rel="stylesheet"
				href={`${url}/public/package/leaflet-geosearch@4.0.0/dist/geosearch.css`}
			/>
			<link rel="stylesheet" href={`${url}/public/package/leaflet@1.9.4/dist/leaflet.css`} />
			
			<h1>Create Meeti</h1>
			
			<form className="default-form" method="POST" ref={form}>
				<legend>About Meeti</legend>
				
				<div className="campo">
					<label htmlFor="title">Title</label>
					<input type="text" name="title" id="title" placeholder="Meeti title" />
				</div>
				
				<div className="campo">
					<label htmlFor="featuring">Featuring</label>
					<input type="text" name="featuring" id="featuring" placeholder="Featured person(Optional)" />
				</div>
				
				<div className="campo">
					<label htmlFor="group">Group</label>
					<select name="groupId" id="groupId">
						<option value="" disabled={true} defaultValue="">-- Select a group --</option>
						{userGroups && userGroups.map((group) => {
							return (
								<option value={group.id} key={group.id}>{group.name}</option>
							);
						})}
					</select>
				</div>
				
				<div className="columnas-2 grid">
					<div className="campo">
						<label htmlFor="date">Date</label>
						<input type="date" name="date" id="date" placeholder="Meeti date" />
					</div>
					<div className="campo">
						<label htmlFor="time">Time</label>
						<input type="time" name="time" placeholder="Meeti time" />
					</div>
				</div>
				
				<div className="campo">
					<label htmlFor="coupon">Coupon</label>
					<input type="number" min="1" name="coupon" placeholder="Meeti coupons(Optional)" />
				</div>
				
				<div className="campo descripcion">
					<label htmlFor="description">Description</label>
					<div className="contenedor-editor">
						<input type="hidden" name="description" id="description" placeholder="Description" />
						<trix-editor input="description"></trix-editor>
					</div>
				</div>
				
				{/* Location */}
				<legend>Meeti location</legend>
				<p className="information">Move the pin to the location of the Meeti</p>
				
				<div className="campo mapa">
					<FindPlaceMap
						zoom={13}
						position={{
							lat: coordinates[0],
							lng: coordinates[1],
						}}
						updateCallback={updateMarkerCallback}
					/>
				</div>
		
				<p className="informacion">Confirm that the location is correct</p>
				<div className="campo">
					<label htmlFor="street">Street</label>
					<input
						type="text"
						name="street"
						id="street"
						placeholder="Street"
						ref={street}
						value={address.street}
					/>
				</div>
				<div className="campo">
					<label htmlFor="city">City</label>
					<input
						type="text"
						name="city"
						id="city"
						placeholder="City"
						ref={city}
						value={address.city}
					/>
				</div>
				<div className="campo">
					<label htmlFor="state">State/Province</label>
					<input
						type="text"
						name="state"
						id="state"
						placeholder="State/Province"
						ref={state}
						value={address.state}
					/>
				</div>
				<div className="campo">
					<label htmlFor="country">Country</label>
					<input
						type="text"
						name="country"
						id="country"
						placeholder="Country"
						ref={country}
						value={address.country}
					/>
				</div>
				
				<input
					type="hidden"
					name="latitude"
					id="latitude"
					placeholder="Latitude"
					ref={latitude}
					value={coordinates[0]}
				/>
				<input
					type="hidden"
					name="longitude"
					id="longitude"
					placeholder="Longitude"
					ref={longitude}
					value={coordinates[1]}
				/>
				
				<div className="campo enviar">
					<input
						type="submit"
						value="Create Meeti"
						className="btn btn-rosa"
						onClick={submitForm}
					/>
				</div>
			</form>
		</main>
	);
}
