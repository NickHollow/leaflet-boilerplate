
define(['jquery','underscore','leaflet','config'], function($, _, L, config) {

	var baselayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        subdomains: 'abcd',
        maxZoom: 19
    });

	var map = new L.Map('map', {
		layers: baselayer
	});

});