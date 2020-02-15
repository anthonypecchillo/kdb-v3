/**
 * Copyright 2019-present'fusioncharts'e. All Rights Reserved.
 */

import React from 'react';

import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import USA from 'fusioncharts/maps/fusioncharts.usa';
import Brazil from 'fusionmaps/maps/fusioncharts.brazil';
import Mexico from 'fusionmaps/maps/fusioncharts.mexico';
import Colombia from 'fusionmaps/maps/fusioncharts.colombia';
import Ecuador from 'fusionmaps/maps/fusioncharts.ecuador';
import Peru from 'fusionmaps/maps/fusioncharts.peru';
import Spain from 'fusionmaps/maps/fusioncharts.spain';
import Nigeria from 'fusionmaps/maps/fusioncharts.nigeria';
import Indonesia from 'fusionmaps/maps/fusioncharts.indonesia';
import CoteDivoire from 'fusionmaps/maps/fusioncharts.cotedivoire';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';
// import WorldCountries from '../maps/worldwithcountries';
import WorldCountries from 'fusionmaps/maps/fusioncharts.worldwithcountries';

FusionCharts.options.creditLabel = false;
ReactFC.fcRoot(
  FusionCharts,
  Maps,
  USA,
  Brazil,
  Mexico,
  Colombia,
  Ecuador,
  Peru,
  Spain,
  Nigeria,
  Indonesia,
  CoteDivoire,
  WorldCountries,
  FusionTheme
);

const dataSource = {
  chart: {
    numbersuffix: '',
    showentitytooltip: '1',
    showentityhovereffect: '1',
    entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
    theme: 'fusion',
    nullentitycolor: '#C3D2DA',
    entityfillhovercolor: '#87ceeb',
    showLegend: false,
    chartRightMargin: -150,
    // caption: 'GCF Task Force National Influence',
    // subcaption: 'By Number of GCF Task Force States/Provinces',
    // includevalueinlabels: '1',
    // labelsepchar: ': ',
    // chartLeftMargin: 40,
  },
  colorrange: {
    minvalue: '0',
    code: '#8AB458',
    gradient: '1',
    color: [
      {
        minvalue: '1',
        maxvalue: '5',
        color: '#8AB458',
      },
      {
        minvalue: '6',
        maxvalue: '9',
        color: '#426539',
        // color: '#3E522D'
      },
    ],
  },
  entityDef: [
    {
      internalId: '16',
      newId: 'Mexico',
    },
    {
      internalId: '23',
      newId: 'USA',
    },
    {
      internalId: '27',
      newId: 'Brazil',
    },
    {
      internalId: '29',
      newId: 'Colombia',
    },
    {
      internalId: '30',
      newId: 'Ecuador',
    },
    {
      internalId: '35',
      newId: 'Peru',
    },
    {
      internalId: '50',
      newId: 'CoteDivoire',
    },
    {
      internalId: '73',
      newId: 'Nigeria',
    },
    {
      internalId: '105',
      newId: 'Indonesia',
    },
    {
      internalId: '166',
      newId: 'Spain',
    },
  ],
  data: [
    {
      id: 'Mexico',
      value: '7',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-mexico',
    },
    {
      id: 'USA',
      value: '2',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-us',
    },
    {
      id: 'Brazil',
      value: '9',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-brazil',
    },
    {
      id: 'Colombia',
      value: '1',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-colombia',
    },
    {
      id: 'Ecuador',
      value: '1',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-ecuador',
    },
    {
      id: 'Peru',
      value: '7',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-peru',
    },
    {
      id: 'CoteDivoire',
      value: '2',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-cotedivoire',
    },
    {
      id: 'Nigeria',
      value: '1',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-nigeria',
    },
    {
      id: 'Indonesia',
      value: '7',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-indonesia',
    },
    {
      id: 'Spain',
      value: '1',
      toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
      link: 'newchart-json-spain',
    },
  ],

  linkeddata: [
    {
      id: 'us',
      linkedchart: {
        chart: {
          caption: 'United States',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
            },
          ],
        },

        data: [
          {
            id: 'il',
            color: '#83AC55',
            toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black; width: 190px; height: 100px;'><br/>We should put a description here<br/>about the unique kind of involvement<br/> $lName has with the GCF Task Force,<br/> since there is no quantitative data<br/> to display.</div>",
            showLabel: '1',
          },
          {
            id: 'ca',
            color: '#83AC55',
            toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black; width: 190px; height: 100px;'><br/>We should put a description here<br/>about the unique kind of involvement<br/> $lName has with the GCF Task Force,<br/> since there is no quantitative data<br/> to display.</div>",
            showLabel: '1',
          },
        ],
      },
    },
    {
      id: 'brazil',
      linkedchart: {
        chart: {
          caption: 'Brazil',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorRange: {
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
            },
            {
              minvalue: '250000',
              maxvalue: '1500000',
              color: '#213916',
            },
          ],
        },
        data: [
          { id: '001', value: '148125', link: '/brazil/acre', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '003', value: '104135', link: '/brazil/amapa', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '004', value: '1447212', link: '/brazil/amazonas', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '010', value: '39566', link: '/brazil/maranhao', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '011', value: '308797', link: '/brazil/matogrosso', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '014', value: '861816', link: '/brazil/para', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '022', value: '123111', link: '/brazil/rondonia', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '023', value: '147293', link: '/brazil/roraima', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '027', value: '191073', link: '/brazil/tocantins', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
        ],
      },
    },
    {
      id: 'indonesia',
      linkedchart: {
        chart: {
          caption: 'Indonesia',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          theme: 'fusion',
        },
        colorrange: {
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
              maxvalue: '90000',
              color: '#7a9450',
            },
            {
              minvalue: '90000',
              maxvalue: '250000',
              color: '#426539',
            },
          ],
        },
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
          { id: 'Aceh', value: '31600', link: '/indonesia/aceh', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: 'Central Kalimantan', value: '80200', link: '/indonesia/centralkalimantan', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: 'East Kalimantan', value: '62200', link: '/indonesia/eastkalimantan', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: 'North Kalimantan', value: '58900', link: '/indonesia/northkalimantan', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: 'West Kalimantan', value: '61500', link: '/indonesia/westkalimantan', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: 'Papua', value: '249284', link: '/indonesia/papua', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: 'West Papua', value: '90500', link: '/indonesia/westpapua', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
        ],
      },
    },
    {
      id: 'mexico',
      linkedchart: {
        chart: {
          caption: 'Mexico',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '12500',
              color: '#8AB458',
            },
            {
              minvalue: '12500',
              maxvalue: '35000',
              color: '#7a9450',
            },
            {
              minvalue: '35000',
              maxvalue: '65000',
              color: '#426539',
            },
          ],
        },
        data: [
          { id: '004', value: '40591', link: '/mexico/campeche', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '005', value: '34328', link: '/mexico/chiapas', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '013', value: '41559', link: '/mexico/jalisco', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '019', value: '60684', link: '/mexico/oaxaca', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '022', value: '35997', link: '/mexico/quintanaroo', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '026', value: '1337', link: '/mexico/tabasco', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '030', value: '25475', link: '/mexico/yucatan', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
        ],
      },
    },
    {
      id: 'peru',
      linkedchart: {
        chart: {
          caption: 'Peru',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '25000',
              color: '#8AB458',
            },
            {
              minvalue: '25000',
              maxvalue: '75000',
              color: '#7a9450',
            },
            {
              minvalue: '75000',
              maxvalue: '400000',
              color: '#426539',
            },
          ],
        },
        data: [
          { id: '01', value: '28476', link: '/peru/amazonas', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '10', value: '15818', link: '/peru/huanuco', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '16', value: '350932', link: '/peru/loreto', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '17', value: '79529', link: '/peru/madrededios', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '20', value: '420', link: '/peru/piura', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '22', value: '33784', link: '/peru/sanmartin', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: '25', value: '93927', link: '/peru/ucayali', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
        ],
      },
    },
    {
      id: 'colombia',
      linkedchart: {
        chart: {
          caption: 'Colombia',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '60000',
              color: '#8AB458',
            },
            {
              minvalue: '60000',
              maxvalue: '120000',
              color: '#426539',
            },
          ],
        },
        data: [
          { id: '08', value: '65700', link: '/colombia/caqueta', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
        ],
      },
    },
    {
      id: 'ecuador',
      linkedchart: {
        chart: {
          caption: 'Ecuador',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '5000',
              color: '#8AB458',
            },
            {
              minvalue: '5000',
              maxvalue: '10000',
              color: '#426539',
            },
          ],
        },
        data: [
          { id: '18', value: '640', link: '/ecuador/pastaza', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
        ],
      },
    },
    {
      id: 'cotedivoire',
      linkedchart: {
        chart: {
          caption: 'Ivory Coast',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '5000',
              color: '#8AB458',
            },
            {
              minvalue: '5000',
              maxvalue: '10000',
              color: '#426539',
            },
          ],
        },
        data: [
          { id: 'CI.LC', value: '826', link: '/ivorycoast/belier', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
          { id: 'CI.MV', value: '820', link: '/ivorycoast/cavally', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
        ],
      },
    },
    {
      id: 'nigeria',
      linkedchart: {
        chart: {
          caption: 'Nigeria',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '5000',
              color: '#8AB458',
            },
            {
              minvalue: '5000',
              maxvalue: '10000',
              color: '#426539',
            },
          ],
        },

        data: [
          { id: 'NG.CR', value: '2070', link: '/nigeria/crossriver', showLabel: '1', toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>" },
        ],
      },
    },
    {
      id: 'spain',
      linkedchart: {
        chart: {
          caption: 'Spain',
          nullentitycolor: '#C3D2DA',
          entityFillHoverColor: '#87ceeb',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div>",
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '5000',
              color: '#8AB458',
            },
            {
              minvalue: '5000',
              maxvalue: '10000',
              color: '#426539',
            },
          ],
        },
        data: [
          {
            id: '010',
            color: '#83AC55',
            toolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black; width: 190px; height: 100px;'><br/>We should put a description here<br/>about the unique kind of involvement<br/> $lName has with the GCF Task Force,<br/> since there is no quantitative data<br/> to display.</div>",
            showLabel: '1'
          },
        ],
      },
    },
  ],
};

const chartConfigs = {
  type: 'worldwithcountries',
  width: '100%',
  height: '600',
  dataFormat: 'json',
  dataSource,
  events: {
    entityClick(eventObj) {
      const outerMapTypes = [
        'usa',
        'cotedivoire',
        'peru',
        'ecuador',
        'colombia',
        'mexico',
        'indonesia',
        'nigeria',
        'brazil',
        'spain',
      ];
      const mapType = eventObj.data.id.toLowerCase();
      const childType = eventObj.data.label.replace(/\s+/g, '').toLowerCase();

      if (outerMapTypes.includes(mapType)) {
        eventObj.sender.configureLink([{ type: mapType }, { type: childType }]);
      } else {
        // TODO: Push to history!
        // alert('Now trigger a redirect with React Router!');
      }
    },
  },
};

const WorldMap = () => (
  <ReactFC {...chartConfigs} />
);

export default WorldMap;
