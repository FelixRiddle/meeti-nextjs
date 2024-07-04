"use client";

import apiUrl from "@/lib/config/apiUrl";

/**
 * 
 */
export default function CreateMeetiFrontend() {
	const url = apiUrl();
	
	return (
		<main className="contenedor contenedor-formularios">
			<link rel="stylesheet" href={`${url}/public/package/trix@2.1.1/dist/trix.css`} />
			
			<script src={`${url}/public/package/trix@2.1.1/dist/trix.umd.js`}></script>
			
			<h1>Create Meeti</h1>
			
			<form className="default-form" method="POST">
				<legend>About Meeti</legend>
				
				<div className="campo">
					<label htmlFor="group">Group</label>
					<select name="groupId" id="groupId">
						<option value="" disabled selected>-- Select a group --</option>
					</select>
				</div>
				
				<div className="campo">
					<label htmlFor="title">Title</label>
					<input type="text" name="title" id="title" placeholder="Meeti title" />
				</div>
				
				<div className="campo">
					<label htmlFor="featuring">Featuring</label>
					<input type="text" name="featuring" id="featuring" placeholder="Featured person(Optional)" />
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
				
				<legend>Meeti location</legend>
				<div className="campo buscador">
					<label htmlFor="location">Search Meeti location</label>
					<div className="contenedor-input">
						<input type="text" name="location" id="location" placeholder="Location" />
						<small>An assitant will create an aproximate location</small>
					</div>
				</div>
				
				<p className="informacion">Confirm that the location is correct</p>
				<div className="campo">
					<label htmlFor="street">Street</label>
					<input type="text" name="street" id="street" placeholder="Street" />
				</div>
				<div className="campo">
					<label htmlFor="city">City</label>
					<input type="text" name="city" id="city" placeholder="City" />
				</div>
				<div className="campo">
					<label htmlFor="state">State/Province</label>
					<input type="text" name="state" id="state" placeholder="State/Province" />
				</div>
				<div className="campo">
					<label htmlFor="country">Country</label>
					<input type="text" name="country" id="country" placeholder="Country" />
				</div>
				<div className="campo">
					<label htmlFor="latitude">Latitude</label>
					<input type="text" name="latitude" id="latitude" placeholder="Latitude" />
				</div>
				<div className="campo">
					<label htmlFor="longitude">Longitude</label>
					<input type="text" name="longitude" id="longitude" placeholder="Longitude" />
				</div>
				
				<div className="campo enviar">
					<input type="submit" value="Create Meeti" className="btn btn-rosa" />
				</div>
			</form>
		</main>
	);
}
