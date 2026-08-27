var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_hotels_1 = new ol.format.GeoJSON();
var features_hotels_1 = format_hotels_1.readFeatures(json_hotels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hotels_1.addFeatures(features_hotels_1);
var lyr_hotels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hotels_1, 
                style: style_hotels_1,
                popuplayertitle: 'hotels',
                interactive: true,
                title: '<img src="styles/legend/hotels_1.png" /> hotels'
            });
var format_zonedeprojet1_2 = new ol.format.GeoJSON();
var features_zonedeprojet1_2 = format_zonedeprojet1_2.readFeatures(json_zonedeprojet1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonedeprojet1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonedeprojet1_2.addFeatures(features_zonedeprojet1_2);
var lyr_zonedeprojet1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonedeprojet1_2, 
                style: style_zonedeprojet1_2,
                popuplayertitle: 'zone de projet 1',
                interactive: true,
                title: '<img src="styles/legend/zonedeprojet1_2.png" /> zone de projet 1'
            });
var format_zoneprojetzone_projet_3 = new ol.format.GeoJSON();
var features_zoneprojetzone_projet_3 = format_zoneprojetzone_projet_3.readFeatures(json_zoneprojetzone_projet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zoneprojetzone_projet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zoneprojetzone_projet_3.addFeatures(features_zoneprojetzone_projet_3);
var lyr_zoneprojetzone_projet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zoneprojetzone_projet_3, 
                style: style_zoneprojetzone_projet_3,
                popuplayertitle: 'zone projet — zone_projet',
                interactive: true,
                title: 'zone projet — zone_projet'
            });
var format_Hpitaux_4 = new ol.format.GeoJSON();
var features_Hpitaux_4 = format_Hpitaux_4.readFeatures(json_Hpitaux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hpitaux_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hpitaux_4.addFeatures(features_Hpitaux_4);
var lyr_Hpitaux_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hpitaux_4, 
                style: style_Hpitaux_4,
                popuplayertitle: 'Hôpitaux',
                interactive: true,
                title: '<img src="styles/legend/Hpitaux_4.png" /> Hôpitaux'
            });
var format_Restaurants_5 = new ol.format.GeoJSON();
var features_Restaurants_5 = format_Restaurants_5.readFeatures(json_Restaurants_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurants_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurants_5.addFeatures(features_Restaurants_5);
var lyr_Restaurants_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restaurants_5, 
                style: style_Restaurants_5,
                popuplayertitle: 'Restaurants',
                interactive: true,
                title: '<img src="styles/legend/Restaurants_5.png" /> Restaurants'
            });
var format_Eglises_6 = new ol.format.GeoJSON();
var features_Eglises_6 = format_Eglises_6.readFeatures(json_Eglises_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eglises_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eglises_6.addFeatures(features_Eglises_6);
var lyr_Eglises_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eglises_6, 
                style: style_Eglises_6,
                popuplayertitle: 'Eglises',
                interactive: true,
                title: '<img src="styles/legend/Eglises_6.png" /> Eglises'
            });
var format_Pharmacies_7 = new ol.format.GeoJSON();
var features_Pharmacies_7 = format_Pharmacies_7.readFeatures(json_Pharmacies_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacies_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacies_7.addFeatures(features_Pharmacies_7);
var lyr_Pharmacies_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacies_7, 
                style: style_Pharmacies_7,
                popuplayertitle: 'Pharmacies',
                interactive: true,
                title: '<img src="styles/legend/Pharmacies_7.png" /> Pharmacies'
            });
var format_Supermarchs_8 = new ol.format.GeoJSON();
var features_Supermarchs_8 = format_Supermarchs_8.readFeatures(json_Supermarchs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarchs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarchs_8.addFeatures(features_Supermarchs_8);
var lyr_Supermarchs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarchs_8, 
                style: style_Supermarchs_8,
                popuplayertitle: 'Supermarchés',
                interactive: true,
                title: '<img src="styles/legend/Supermarchs_8.png" /> Supermarchés'
            });
var format_Banque_9 = new ol.format.GeoJSON();
var features_Banque_9 = format_Banque_9.readFeatures(json_Banque_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banque_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banque_9.addFeatures(features_Banque_9);
var lyr_Banque_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banque_9, 
                style: style_Banque_9,
                popuplayertitle: 'Banque',
                interactive: true,
                title: '<img src="styles/legend/Banque_9.png" /> Banque'
            });
var format_coles_10 = new ol.format.GeoJSON();
var features_coles_10 = format_coles_10.readFeatures(json_coles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coles_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coles_10.addFeatures(features_coles_10);
var lyr_coles_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coles_10, 
                style: style_coles_10,
                popuplayertitle: 'Écoles',
                interactive: true,
                title: '<img src="styles/legend/coles_10.png" /> Écoles'
            });
var format_Stationservice_11 = new ol.format.GeoJSON();
var features_Stationservice_11 = format_Stationservice_11.readFeatures(json_Stationservice_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stationservice_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stationservice_11.addFeatures(features_Stationservice_11);
var lyr_Stationservice_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stationservice_11, 
                style: style_Stationservice_11,
                popuplayertitle: 'Station service',
                interactive: true,
                title: '<img src="styles/legend/Stationservice_11.png" /> Station service'
            });
var format_Mosqu_12 = new ol.format.GeoJSON();
var features_Mosqu_12 = format_Mosqu_12.readFeatures(json_Mosqu_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosqu_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosqu_12.addFeatures(features_Mosqu_12);
var lyr_Mosqu_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosqu_12, 
                style: style_Mosqu_12,
                popuplayertitle: 'Mosqué',
                interactive: true,
                title: '<img src="styles/legend/Mosqu_12.png" /> Mosqué'
            });
var format_Servicespublics_13 = new ol.format.GeoJSON();
var features_Servicespublics_13 = format_Servicespublics_13.readFeatures(json_Servicespublics_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicespublics_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicespublics_13.addFeatures(features_Servicespublics_13);
var lyr_Servicespublics_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicespublics_13, 
                style: style_Servicespublics_13,
                popuplayertitle: 'Services publics',
                interactive: true,
                title: '<img src="styles/legend/Servicespublics_13.png" /> Services publics'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_hotels_1.setVisible(true);lyr_zonedeprojet1_2.setVisible(true);lyr_zoneprojetzone_projet_3.setVisible(true);lyr_Hpitaux_4.setVisible(true);lyr_Restaurants_5.setVisible(true);lyr_Eglises_6.setVisible(true);lyr_Pharmacies_7.setVisible(true);lyr_Supermarchs_8.setVisible(true);lyr_Banque_9.setVisible(true);lyr_coles_10.setVisible(true);lyr_Stationservice_11.setVisible(true);lyr_Mosqu_12.setVisible(true);lyr_Servicespublics_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_hotels_1,lyr_zonedeprojet1_2,lyr_zoneprojetzone_projet_3,lyr_Hpitaux_4,lyr_Restaurants_5,lyr_Eglises_6,lyr_Pharmacies_7,lyr_Supermarchs_8,lyr_Banque_9,lyr_coles_10,lyr_Stationservice_11,lyr_Mosqu_12,lyr_Servicespublics_13];
lyr_hotels_1.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'catégorie': 'catégorie', });
lyr_zonedeprojet1_2.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'superficie': 'superficie', });
lyr_zoneprojetzone_projet_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'nom': 'nom', 'superficie': 'superficie', });
lyr_Hpitaux_4.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Restaurants_5.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Eglises_6.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'catégorie': 'catégorie', });
lyr_Pharmacies_7.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Supermarchs_8.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Banque_9.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_coles_10.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Type': 'Type', });
lyr_Stationservice_11.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Mosqu_12.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Servicespublics_13.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_hotels_1.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'catégorie': 'TextEdit', });
lyr_zonedeprojet1_2.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'superficie': '', });
lyr_zoneprojetzone_projet_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'nom': '', 'superficie': '', });
lyr_Hpitaux_4.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Restaurants_5.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Eglises_6.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'catégorie': 'TextEdit', });
lyr_Pharmacies_7.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Supermarchs_8.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Banque_9.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_coles_10.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', });
lyr_Stationservice_11.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Mosqu_12.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Servicespublics_13.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_hotels_1.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', 'catégorie': 'inline label - always visible', });
lyr_zonedeprojet1_2.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', 'superficie': 'inline label - always visible', });
lyr_zoneprojetzone_projet_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'nom': 'no label', 'superficie': 'no label', });
lyr_Hpitaux_4.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', });
lyr_Restaurants_5.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', });
lyr_Eglises_6.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', 'catégorie': 'inline label - always visible', });
lyr_Pharmacies_7.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', });
lyr_Supermarchs_8.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', });
lyr_Banque_9.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', });
lyr_coles_10.set('fieldLabels', {'id': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_Stationservice_11.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', });
lyr_Mosqu_12.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', });
lyr_Servicespublics_13.set('fieldLabels', {'id': 'inline label - always visible', 'nom': 'inline label - always visible', });
lyr_Servicespublics_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});