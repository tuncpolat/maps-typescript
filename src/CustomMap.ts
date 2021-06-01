export interface Mappable {
  location: {
    lat: number;
    lng: number
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  private googleMap: google.maps.Map;

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })

  }
}