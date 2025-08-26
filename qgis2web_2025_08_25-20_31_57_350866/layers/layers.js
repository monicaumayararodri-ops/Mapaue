var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_Bolivia_2015_1 = new ol.format.GeoJSON();
var features_Departamentos_Bolivia_2015_1 = format_Departamentos_Bolivia_2015_1.readFeatures(json_Departamentos_Bolivia_2015_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_Bolivia_2015_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_Bolivia_2015_1.addFeatures(features_Departamentos_Bolivia_2015_1);
var lyr_Departamentos_Bolivia_2015_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_Bolivia_2015_1, 
                style: style_Departamentos_Bolivia_2015_1,
                popuplayertitle: 'Departamentos_Bolivia_2015',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_Bolivia_2015_1.png" /> Departamentos_Bolivia_2015'
            });
var format_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2 = new ol.format.GeoJSON();
var features_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2 = format_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2.readFeatures(json_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2.addFeatures(features_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2);
var lyr_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2, 
                style: style_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2,
                popuplayertitle: 'Poblacion_2012_2024_343_municipios_gaiocs MONI de W',
                interactive: true,
                title: '<img src="styles/legend/Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2.png" /> Poblacion_2012_2024_343_municipios_gaiocs MONI de W'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamentos_Bolivia_2015_1.setVisible(true);lyr_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamentos_Bolivia_2015_1,lyr_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2];
lyr_Departamentos_Bolivia_2015_1.set('fieldAliases', {'objectid': 'objectid', 'COD_DEP': 'COD_DEP', 'DEPARTAMEN': 'DEPARTAMEN', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2.set('fieldAliases', {'COD': 'COD', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'CAPx': 'CAPx', 'CAPy': 'CAPy', 'AREA Ha': 'AREA Ha', '2012': '2012', '2013': '2013', '2014': '2014', '2015': '2015', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2020': '2020', '2021': '2021', '2022': '2022', '2023': '2023', '2024': '2024', 'Nro_Contr': 'Nro_Contr', 'Nro_PC': 'Nro_PC', 'Nro_INTV': 'Nro_INTV', 'TEMA': 'TEMA', 'TITULO': 'TITULO', 'EJECUTOR': 'EJECUTOR', 'MONTO_UE': 'MONTO_UE', 'DURACION': 'DURACION', 'FECHA_INICIO': 'FECHA_INICIO', 'FECHA_SALIDA': 'FECHA_SALIDA', 'GESTOPE': 'GESTOPE', 'Status': 'Status', 'Ficha': 'Ficha', });
lyr_Departamentos_Bolivia_2015_1.set('fieldImages', {'objectid': '', 'COD_DEP': '', 'DEPARTAMEN': '', 'DESCRIPCIO': '', });
lyr_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2.set('fieldImages', {'COD': '', 'DEPARTAMEN': '', 'PROVINCIA': '', 'MUNICIPIO': '', 'CAPx': '', 'CAPy': '', 'AREA Ha': '', '2012': '', '2013': '', '2014': '', '2015': '', '2016': '', '2017': '', '2018': '', '2019': '', '2020': '', '2021': '', '2022': '', '2023': '', '2024': '', 'Nro_Contr': '', 'Nro_PC': '', 'Nro_INTV': '', 'TEMA': '', 'TITULO': '', 'EJECUTOR': '', 'MONTO_UE': '', 'DURACION': '', 'FECHA_INICIO': '', 'FECHA_SALIDA': '', 'GESTOPE': '', 'Status': '', 'Ficha': '', });
lyr_Departamentos_Bolivia_2015_1.set('fieldLabels', {'objectid': 'no label', 'COD_DEP': 'no label', 'DEPARTAMEN': 'no label', 'DESCRIPCIO': 'no label', });
lyr_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2.set('fieldLabels', {'COD': 'no label', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'CAPx': 'no label', 'CAPy': 'no label', 'AREA Ha': 'no label', '2012': 'no label', '2013': 'no label', '2014': 'no label', '2015': 'no label', '2016': 'no label', '2017': 'no label', '2018': 'no label', '2019': 'no label', '2020': 'no label', '2021': 'no label', '2022': 'no label', '2023': 'no label', '2024': 'no label', 'Nro_Contr': 'no label', 'Nro_PC': 'no label', 'Nro_INTV': 'no label', 'TEMA': 'no label', 'TITULO': 'no label', 'EJECUTOR': 'no label', 'MONTO_UE': 'no label', 'DURACION': 'no label', 'FECHA_INICIO': 'no label', 'FECHA_SALIDA': 'no label', 'GESTOPE': 'no label', 'Status': 'no label', 'Ficha': 'no label', });
lyr_Poblacion_2012_2024_343_municipios_gaiocsMONIdeW_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});