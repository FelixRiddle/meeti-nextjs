/**
 * Admin frontend
 */
export default function AdminFrontend() {
	return (
		<div>
			<main className="contenedor panel-administracion">
				<h1>Admin dashboard</h1>
				
				<div className="contenedor-botones">
					<a href="/user/group/new" className="btn btn-amarillo">
						New group
					</a>
					<a href="/user/meeti/new" className="btn btn-azul">New meeti</a>
					<a href="/user/profile/edit" className="btn btn-rosa">Edit profile</a>
					<a href="/user/profile/image/edit" className="btn btn-verde">Change pfp</a>
				</div>
				
				<div className="seccion-admin">
					<h2>Your Meeti's</h2>
					<ul>
						<li>
							<div className="informacion-admin">
								<p className="fecha">
									Tuesday, 2 July 2024
								</p>
								<h3>E-Commerce Argentina</h3>
								<small>23 going</small>
							</div>
							<div className="acciones contenedor-bottones">
								<a href="#" className="btn btn-verde">Edit</a>
								<a href="#" className="btn btn-azul2">People list</a>
								<a href="#" className="btn btn-rojo">Delete</a>
							</div>
						</li>
						<li>
							<div className="informacion-admin">
								<p className="fecha">
									Tuesday, 12 July 2024
								</p>
								<h3>Blockchain and cryptocurrencies</h3>
								<small>3 going</small>
							</div>
							<div className="acciones contenedor-bottones">
								<a href="#" className="btn btn-verde">Edit</a>
								<a href="#" className="btn btn-azul2">People list</a>
								<a href="#" className="btn btn-rojo">Delete</a>
							</div>
						</li>
					</ul>
				</div>
				
				<div className="seccion-admin">
					<h2>Your groups</h2>
					
					<ul>
						<li>
							<div className="informacion-admin">
								<h3>Blockchain and cryptocurrencies</h3>
							</div>
							<div className="acciones contenedor-bottones">
								<a href="#" className="btn btn-verde">Edit</a>
								<a href="#" className="btn btn-azul2">Image</a>
								<a href="#" className="btn btn-rojo">Delete</a>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</div>
	)
}
