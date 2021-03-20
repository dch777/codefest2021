import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocateControl from "./LocateControl";
import "./Map.css";

const Map = (props) => {
	const locateControlOptions = {
		position: "bottomright",
		drawCircle: "false",
	};

	return (
		<div>
			<div id="sidebar" className="card text-white">
				<div class="card-body">
					<h5 class="card-title">Test</h5>
					<p class="card-text">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
						Lorem ipsum dolor sit amet.
					</p>
				</div>
			</div>
			<MapContainer center={[39.74739, -98.0]} zoom={5} zoomControl={false}>
				<TileLayer
					url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<LocateControl options={locateControlOptions} />
			</MapContainer>
		</div>
	);
};

export default Map;
