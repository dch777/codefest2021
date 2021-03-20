import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";

const Geosearch = (props) => {
	const map = useMap();

	useEffect(() => {
		const addr = props.addr;
		console.log(addr);
		const title = props.title;
		console.log(title);

		const provider = new OpenStreetMapProvider();
		const query_addr = addr;
		var query_promise = provider
			.search({
				query: query_addr,
			})
			.then(
				(value) => {
					for (var i = 0; i < value.length; i++) {
						var x_coor = value[i].x;
						console.log(query_addr);
						var y_coor = value[i].y;
						var label = value[i].label;
						var marker = L.marker([y_coor, x_coor]).addTo(map);
						marker.bindPopup("<b>" + title + "</b><br/>" + addr);
					}
				},
				(reason) => {
					console.log(reason); // Error!
				}
			);
	}, []);

	return null;
};

export default Geosearch;
