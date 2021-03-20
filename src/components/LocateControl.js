import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import Locate from "leaflet.locatecontrol";

const LocateControl = (props) => {
	const map = useMap();

	useEffect(() => {
		const lc = new Locate(props.options);
		lc.addTo(map);
		lc.start();
	});

	return null;
};

export default LocateControl;
