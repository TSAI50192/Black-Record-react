import { useState, useEffect } from 'react';

function Googlemap() {
  const [map, setMap] = useState(null);

  function initMap() {
    const myLatLng1 = { lat: 25.026754, lng: 121.523323 };
    const myLatLng2 = { lat: 25.106618, lng: 121.516408 };
    const myLatLng3 = { lat: 25.03461, lng: 121.56598 };
    const myLatLng4 = { lat: 25.06401, lng: 121.53078 };
    
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: myLatLng1,
      zoom: 12,
      mapId: '9af7d4f7a18e39e',
    });

    new window.google.maps.Marker({
      position: myLatLng1,
      map,
      title: "大安門市",
    });
    new window.google.maps.Marker({
      position: myLatLng2,
      map,
      title: "北投門市",
    });
    new window.google.maps.Marker({
      position: myLatLng3,
      map,
      title: "信義門市",
    });
    new window.google.maps.Marker({
      position: myLatLng4,
      map,
      title: "中山門市",
    });

    setMap(map);

    navigator.geolocation.getCurrentPosition(function(position){
      const currentPosition = {
        lat: 25.059447,
        lng: 121.525939,
      };
      map.setCenter(currentPosition);
      map.setZoom(13.5);
    });
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDsHVQhtwOeRXDxJvqnbdBf9QZ5ZTyduBE&callback=initMap&v=weekly`;
    script.defer = true;
    script.async = true;

    window.initMap = initMap;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return( 
  <div id="map" style={{ width: '100%', height: '100%' }}>
  </div>
  )
}

export default Googlemap;