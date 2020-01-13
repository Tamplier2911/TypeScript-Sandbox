// element selectors
// const mapDiv = document.getElementById("map");

const google = globalThis.google;

export interface DisplayMap {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  infoWindowContent(): string;
}

export class CustomMap {
  private map: object;
  // private map: google.maps.Map;

  constructor(mapDiv: Element) {
    this.map = new google.maps.Map(mapDiv, {
      scrollwheel: false,
      clickableIcons: true,
      controlSize: 25,
      zoom: 2, // required
      center: { lat: 40.4167, lng: -3.70325 } // required
    });
  }

  public addMarker(mapObject: DisplayMap): void {
    const window = new google.maps.InfoWindow({
      content: `<div>${mapObject.infoWindowContent()}</div>`
    });
    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: {
        lat: mapObject.location.lat,
        lng: mapObject.location.lng
      }
    });
    marker.addListener("click", () => {
      window.open(this.map, marker);
    });
  }

  public addPath(locations: { lat: number; lng: number }[]): void {
    const path = new google.maps.Polyline({
      map: this.map,
      path: [locations[0], locations[1]],
      strokeColor: "#333",
      strokeWeight: 1
    });
  }
}
