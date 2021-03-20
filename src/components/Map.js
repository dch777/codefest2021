import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocateControl from "./LocateControl";
import Geosearch from "./Geosearch";
import axios from "axios";
import "./Map.css";

const Map = (props) => {
	const locateControlOptions = {
		position: "bottomright",
		drawCircle: "false",
	};

	const [locations, setLocations] = useState({});

	useEffect(() => {
		axios.get("http://localhost:5000/").then((res) => {
			setLocations(res.data);
		});
	}, []);

	return (
		<div>
			<div id="sidebar" className="card text-white">
				<div class="card-body">
					<h5 class="card-title">Click a Marker</h5>
					<p class="card-text">
						Click on a marker to get information about resources!
					</p>
				</div>
			</div>
			<MapContainer center={[39.74739, -98.0]} zoom={5} zoomControl={false}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{Object.keys(locations).map((location) => (
					<Geosearch title={locations[location]["center name"]} addr={locations[location]["center address"]} />
				))}
				<LocateControl options={locateControlOptions} />
			</MapContainer>
		</div>
	);
};

export default Map;
