var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adm_kecsbs_1 = new ol.format.GeoJSON();
var features_adm_kecsbs_1 = format_adm_kecsbs_1.readFeatures(json_adm_kecsbs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_kecsbs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_kecsbs_1.addFeatures(features_adm_kecsbs_1);
var lyr_adm_kecsbs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_kecsbs_1, 
                style: style_adm_kecsbs_1,
                popuplayertitle: "adm_kecsbs",
                interactive: true,
    title: 'adm_kecsbs<br />\
    <img src="styles/legend/adm_kecsbs_1_0.png" /> 15000<br />\
    <img src="styles/legend/adm_kecsbs_1_1.png" /> 15600<br />\
    <img src="styles/legend/adm_kecsbs_1_2.png" /> 19000<br />\
    <img src="styles/legend/adm_kecsbs_1_3.png" /> 28600<br />\
    <img src="styles/legend/adm_kecsbs_1_4.png" /> 32000<br />\
    <img src="styles/legend/adm_kecsbs_1_5.png" /> 40000<br />\
    <img src="styles/legend/adm_kecsbs_1_6.png" /> 59500<br />\
    <img src="styles/legend/adm_kecsbs_1_7.png" /> 68600<br />\
    <img src="styles/legend/adm_kecsbs_1_8.png" /> <br />'
        });
var format_adm_kecsbs_2 = new ol.format.GeoJSON();
var features_adm_kecsbs_2 = format_adm_kecsbs_2.readFeatures(json_adm_kecsbs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_kecsbs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_kecsbs_2.addFeatures(features_adm_kecsbs_2);
var lyr_adm_kecsbs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_kecsbs_2, 
                style: style_adm_kecsbs_2,
                popuplayertitle: "adm_kecsbs",
                interactive: true,
                title: '<img src="styles/legend/adm_kecsbs_2.png" /> adm_kecsbs'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_adm_kecsbs_1.setVisible(true);lyr_adm_kecsbs_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_adm_kecsbs_1,lyr_adm_kecsbs_2];
lyr_adm_kecsbs_1.set('fieldAliases', {'WIADKC': 'WIADKC', 'jlh_pddk': 'jlh_pddk', 'jmlh_pdkg': 'jmlh_pdkg', });
lyr_adm_kecsbs_2.set('fieldAliases', {'WIADKC': 'WIADKC', 'jlh_pddk': 'jlh_pddk', 'jmlh_pdkg': 'jmlh_pdkg', });
lyr_adm_kecsbs_1.set('fieldImages', {'WIADKC': 'TextEdit', 'jlh_pddk': 'Range', 'jmlh_pdkg': 'Range', });
lyr_adm_kecsbs_2.set('fieldImages', {'WIADKC': 'TextEdit', 'jlh_pddk': 'Range', 'jmlh_pdkg': 'Range', });
lyr_adm_kecsbs_1.set('fieldLabels', {'WIADKC': 'no label', 'jlh_pddk': 'no label', 'jmlh_pdkg': 'no label', });
lyr_adm_kecsbs_2.set('fieldLabels', {'WIADKC': 'no label', 'jlh_pddk': 'no label', 'jmlh_pdkg': 'no label', });
lyr_adm_kecsbs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});