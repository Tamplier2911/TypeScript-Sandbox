import { User } from "../classes/User";
import { Company } from "../classes/Company";
import { CustomMap } from "../classes/Map";

// element selectors
const mapDiv = document.getElementById("map");

const user = new User();
const company = new Company();
const map = new CustomMap(mapDiv);

console.log(user);
console.log(company);
console.log(map);

// map.addMarker(user.location.lat, user.location.lng);
// map.addMarker(company.location.lat, company.location.lng);
map.addMarker(user);
map.addMarker(company);
map.addPath([
  { lat: user.location.lat, lng: user.location.lng },
  { lat: company.location.lat, lng: company.location.lng }
]);

// console.log("Parcel-bundler!");
// console.log("Test Test!");

// AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU
// @types/googlemaps
