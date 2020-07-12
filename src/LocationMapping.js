// import React from "react";

// const LocationMapping = () => {
// 	var map;
// 	var infoWindow;
// 	function initMap() {
// 		map = new google.maps.Map(document.getElementById("map"), {
// 			center: { lat: -34.397, lng: 150.644 },
// 			zoom: 6,
// 		});
// 		infoWindow = new google.maps.InfoWindow();
// 		if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(
// 				function (position) {
// 					var pos = {
// 						lat: position.coords.latitude,
// 						lng: position.coords.longitude,
// 					};

// 					infoWindow.setPosition(pos);
// 					infoWindow.setContent("Location found.");
// 					infoWindow.open(map);
// 					map.setCenter(pos);
// 				},
// 				function () {
// 					handleLocationError(true, infoWindow, map.getCenter());
// 				}
// 			);
// 		} else {
// 			// Browser doesn't support Geolocation
// 			handleLocationError(false, infoWindow, map.getCenter());
// 		}
// 	}
// 	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
// 		infoWindow.setPosition(pos);
// 		infoWindow.setContent(
// 			browserHasGeolocation
// 				? "Error: The Geolocation service failed."
// 				: "Error: Your browser doesn't support geolocation."
// 		);
// 		infoWindow.open(map);
// 	}
// 	return (
// 		<div>
// 			<head>
// 				<title>Geolocation</title>
// 				<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
// 				<meta charset="utf-8" />
// 				<link rel="stylesheet" href="./locationmapping.css" />
// 			</head>
// 			<body>
// 				<div id="map"></div>
// 				<script
// 					async
// 					defer
// 					src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChSBZ64X3qTfd_9XsN7o9axHGkmEj-u5k&callback=initMap"
// 				/>
// 			</body>
// 		</div>
// 	);
// };

// export default LocationMapping;