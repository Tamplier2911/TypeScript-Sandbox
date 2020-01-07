// Type Annotations and Inference - Objects

// object definition
const profile = {
  name: "Linda",
  age: 20,

  coords: {
    lat: 0,
    lng: 15
  },

  setAge(age: number): number {
    this.age = age;
    return this.age;
  }
};

// object destructuring - expected structure is required
const { age }: { age: number } = profile;

// complex object distructuring example
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
console.log(lat, lng);
