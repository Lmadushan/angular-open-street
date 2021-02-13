import { Component, Input, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'open-street-static',
  templateUrl: './angular-open-street.component.html',
  styleUrls: [
    './angular-open-street.component.scss'
  ]
})
export class AngularOpenStreetComponent implements OnInit {
  @Input() height = '400px';
  @Input() width = '400px';
  @Input() defaultOptions = {
    latitude: 0,
    longitude: 0,
    zoom: 1
  };


  map: any;
  latitude = 0;
  longitude = 0;
  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
      },
      () => {
        console.log('error');
      }
    );
    setTimeout(() => {
      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: olProj.fromLonLat([this.defaultOptions.longitude, this.defaultOptions.latitude]),
          zoom: this.defaultOptions.zoom
        })
      });
    }, 100);
  }

}
