/**
 * Copyright 2019-present'fusioncharts'e. All Rights Reserved.
 */

import React from 'react';

import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Maps from 'fusioncharts/fusioncharts.maps';
import ReactFC from 'react-fusioncharts';

import Brazil from 'fusionmaps/maps/fusioncharts.brazil';
import Colombia from 'fusionmaps/maps/fusioncharts.colombia';
import CoteDivoire from 'fusionmaps/maps/fusioncharts.cotedivoire';
import Ecuador from 'fusionmaps/maps/fusioncharts.ecuador';
import Indonesia from 'fusionmaps/maps/fusioncharts.indonesia';
import Mexico from 'fusionmaps/maps/fusioncharts.mexico';
import Nigeria from 'fusionmaps/maps/fusioncharts.nigeria';
import Peru from 'fusionmaps/maps/fusioncharts.peru';

FusionCharts.options.creditLabel = false;

ReactFC.fcRoot(
  FusionCharts,
  FusionTheme,
  Maps,
  Brazil,
  Colombia,
  CoteDivoire,
  Ecuador,
  Indonesia,
  Mexico,
  Nigeria,
  Peru
);

const NJMapConfig = {
  brazil: {
    entityDef: [
      { internalId: '001', newId: 'Acre' },
      { internalId: '003', newId: 'Amapa' },
      { internalId: '004', newId: 'Amazonas' },
      { internalId: '010', newId: 'Maranhao' },
      { internalId: '011', newId: 'Mato Grosso' },
      { internalId: '014', newId: 'Para' },
      { internalId: '022', newId: 'Rondonia' },
      { internalId: '023', newId: 'Roraima' },
      { internalId: '027', newId: 'Tocantins' },
    ],
    data: [
      { id: 'Acre', value: '148125', link: '/brazil/acre', showLabel: '1' },
      { id: 'Amapa', value: '104135', link: '/brazil/amapa', showLabel: '1' },
      { id: 'Amazonas', value: '1447212', link: '/brazil/amazonas', showLabel: '1' },
      { id: 'Maranhao', value: '39566', link: '/brazil/maranhao', showLabel: '1' },
      { id: 'Mato Grosso', value: '308797', link: '/brazil/matogrosso', showLabel: '1' },
      { id: 'Para', value: '861816', link: '/brazil/para', showLabel: '1' },
      { id: 'Rondonia', value: '123111', link: '/brazil/rondonia', showLabel: '1' },
      { id: 'Roraima', value: '147293', link: '/brazil/roraima', showLabel: '1' },
      { id: 'Tocantins', value: '191073', link: '/brazil/tocantins', showLabel: '1' },
    ],
  },
  indonesia: {
    entityDef: [
      { internalId: '01', newId: 'Aceh' },
      { internalId: '13', newId: 'Central Kalimantan' },
      { internalId: '14', newId: 'East Kalimantan' },
      { internalId: '42', newId: 'North Kalimantan' },
      { internalId: '11', newId: 'West Kalimantan' },
      { internalId: '36', newId: 'Papua' },
      { internalId: '39', newId: 'West Papua' },
    ],
    data: [
      { id: 'Aceh', value: '31600', link: '/indonesia/aceh', showLabel: '1' },
      { id: 'Central Kalimantan', value: '80200', link: '/indonesia/centralkalimantan', showLabel: '1' },
      { id: 'East Kalimantan', value: '62200', link: '/indonesia/eastkalimantan', showLabel: '1' },
      { id: 'North Kalimantan', value: '58900', link: '/indonesia/northkalimantan', showLabel: '1' },
      { id: 'West Kalimantan', value: '61500', link: '/indonesia/westkalimantan', showLabel: '1' },
      { id: 'Papua', value: '249284', link: '/indonesia/papua', showLabel: '1' },
      { id: 'West Papua', value: '90500', link: '/indonesia/westpapua', showLabel: '1' },
    ],
  },
  mexico: {
    entityDef: [
      { internalId: '004', newId: 'Campeche' },
      { internalId: '005', newId: 'Chiapas' },
      { internalId: '013', newId: 'Jalisco' },
      { internalId: '019', newId: 'Oaxaca' },
      { internalId: '022', newId: 'Quintana Roo' },
      { internalId: '026', newId: 'Tobasco' },
      { internalId: '030', newId: 'Yucatan' },
    ],
    data: [
      { id: 'Campeche', value: '40591', link: '/mexico/campeche', showLabel: '1' },
      { id: 'Chiapas', value: '34328', link: '/mexico/chiapas', showLabel: '1' },
      { id: 'Jalisco', value: '41559', link: '/mexico/jalisco', showLabel: '1' },
      { id: 'Oaxaca', value: '60684', link: '/mexico/oaxaca', showLabel: '1' },
      { id: 'Quintana Roo', value: '35997', link: '/mexico/quintanaroo', showLabel: '1' },
      { id: 'Tobasco', value: '1337', link: '/mexico/tobasco', showLabel: '1' },
      { id: 'Yucatan', value: '25475', link: '/mexico/yucatan', showLabel: '1' },
    ],
  },
  peru: {
    entityDef: [
      { internalId: '01', newId: 'Amazonas' },
      { internalId: '10', newId: 'Huanuco' },
      { internalId: '16', newId: 'Loreto' },
      { internalId: '17', newId: 'Madre de Dios' },
      { internalId: '20', newId: 'Piura' },
      { internalId: '22', newId: 'San Martin' },
      { internalId: '25', newId: 'Ucayali' },
    ],
    data: [
      { id: 'Amazonas', value: '28476', link: '/peru/amazonas', showLabel: '1' },
      { id: 'Huanuco', value: '15818', link: '/peru/huanuco', showLabel: '1' },
      { id: 'Loreto', value: '350932', link: '/peru/loreto', showLabel: '1' },
      { id: 'Madre de Dios', value: '79529', link: '/peru/madrededios', showLabel: '1' },
      { id: 'Piura', value: '420', link: '/peru/Piura', showLabel: '1' },
      { id: 'San Martin', value: '33784', link: '/peru/sanmartin', showLabel: '1' },
      { id: 'Ucayali', value: '93927', link: '/peru/ucayali', showLabel: '1' },
    ],
  },
  ivorycoast: {
    entityDef: [
      { internalId: 'CI.LC', newId: 'Belier' },
      { internalId: 'CI.MV', newId: 'Cavally' },
    ],
    data: [
      { id: 'Belier', value: '826', link: '/ivorycoast/belier', showLabel: '1' },
      { id: 'Cavally', value: '820', link: '/ivorycoast/cavally', showLabel: '1' },
    ],
  },
  colombia: {
    entityDef: [{ internalId: '08', newId: 'Caqueta' }],
    data: [{ id: 'Caqueta', value: '65700', link: '/colombia/caqueta', showLabel: '1' }],
  },
  ecuador: {
    entityDef: [{ internalId: '18', newId: 'Pastaza' }],
    data: [{ id: 'Pastaza', value: '640', link: '/ecuador/pastaza', showLabel: '1' }],
  },
  nigeria: {
    entityDef: [{ internalId: 'NG.CR', newId: 'Cross River' }],
    data: [{ id: 'Cross River', value: '2070', link: '/nigeria/crossriver', showLabel: '1' }],
  },
};

class MapDataSource {
  constructor(nation) {
    this.chart = {
      entityFillHoverColor: '#cccccc',
      entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
      numberSuffix: ' km²',
      showLabels: '0',
      theme: 'fusion',
      nullentitycolor: '#C3D2DA',
      showLegend: false,
      chartRightMargin: 40,
      chartBottomMargin: 18,
      bgAlpha: '0',
      // canvasBgAlpha: '1',
    };

    this.colorRange = {
      minvalue: '0',
      code: '#8AB458',
      gradient: '1',
      color: [
        {
          minvalue: '0',
          maxvalue: '50000',
          color: '#8AB458',
        },
        {
          minvalue: '50000',
          maxvalue: '250000',
          color: '#7a9450',
          // color: '#3E522D'
        },
        {
          minvalue: '250000',
          maxvalue: '1500000',
          color: '#213916',
          // color: '#3E522D'
        },
      ],
    };

    this.entityDef = NJMapConfig[nation].entityDef;
    this.data = NJMapConfig[nation].data;
  }
}

const NJMap = ({ nationName, stateName }) => {
  const nation = nationName.toLowerCase().split(' ').join('');
  const chartType = nation === 'ivorycoast' ? 'cotedivoire' : nation;
  const dataSource = new MapDataSource(nation);

  if (stateName) {
    const name = stateName || nationName;
    const normalizedName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    dataSource.data = dataSource.data.map(entity => {
      if (entity.id === normalizedName) {
        const copy = { ...entity };
        copy.color = '#87ceeb';
        return copy;
      }
      return entity;
    });
  }

  const chartConfigs = {
    type: chartType,
    containerBackgroundOpacity: '0',
    width: '120%',
    height: '330',
    dataFormat: 'json',
    dataSource,
  };

  return <ReactFC {...chartConfigs} />;
};

export default NJMap;
