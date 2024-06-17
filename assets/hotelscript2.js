let site = JSON.parse(localStorage.getItem('City'));
 
  document.getElementById("hotelfoundlocation").innerHTML = "Find Hotels Near " + site + ":";
  
function initMap() {
  let latitude = JSON.parse(localStorage.getItem('lats'));
  let lat = latitude.map(Number)
  let longitude = JSON.parse(localStorage.getItem('longs'));
  let lng = longitude.map(Number)
 const centerCooridinates = {
  zoom: 8,
  center: { lat: lat[0], lng: lng[0] },
};
map = new google.maps.Map(document.getElementById("map"), centerCooridinates);
const service = new google.maps.places.PlacesService(map);
var numLat = (parseFloat(lat))
console.log(numLat)
var numLng = (parseFloat(lng))
console.log(numLng)
const area = { lat: numLat, lng: numLng };
console.log(area)
  service.nearbySearch(
    { location: area, radius: 600, type: "lodging" },
    (results, status) => {
      if (status !== "OK" || !results) return
        addPlaces(results, map);
    },
  );
}

function addPlaces(places, map) {
  const placesList = document.getElementById("places");

  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      const image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

       new google.maps.Marker({
        map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
      }); 

      const li = document.createElement("li");

      li.textContent = place.name;
      placesList.appendChild(li);
      li.addEventListener("click", () => {
        map.setCenter(place.geometry.location);
      });
    }
  }
}

window.initMap = initMap;