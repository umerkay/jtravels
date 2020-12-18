import fakeImg2 from "./images/img-6.jpg";
import fakeImg from "./images/img-2.jpg";

const fakeSleep = (m) => new Promise((r) => setTimeout(r, m));

const data = {
  hotels: [{ name: "Al Fatah" }, { name: "Al Dishah" }, { name: "Al Makkah" }],
  tours: Array(9).fill({
    destination: {
      city: "Dubai",
      country: "United Arab Emirates",
    },
    totalCount: 26,
    minimumCost: 20000,
    img: fakeImg,
  }),
  packages: [
    {
      destination: {
        city: "Dubai",
        country: "United Arab Emirates",
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reiciendis obcaecati nobis.",
      rating: 4,
      img: fakeImg,
      categories: ["international", "holiday"],
      id: "11",
    },
    {
      destination: {
        city: "Goa",
        country: "India",
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reiciendis obcaecati nobis.",
      rating: 5,
      img: fakeImg,
      categories: ["international", "holiday"],
      id: "12",
    },
    {
      destination: {
        city: "Murree",
        country: "Pakistan",
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reiciendis obcaecati nobis.",
      rating: 2,
      img: fakeImg,
      categories: ["domestic", "holiday"],
      id: "13",
    },
    {
      destination: {
        city: "Islamabad",
        country: "Pakistan",
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reiciendis obcaecati nobis.",
      rating: 2,
      img: fakeImg,
      categories: ["domestic", "holiday"],
      id: "14",
    },
    {
      destination: {
        city: "Islamabad",
        country: "Pakistan",
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reiciendis obcaecati nobis.",
      rating: 2,
      img: fakeImg,
      categories: ["domestic", "holiday"],
      id: "15",
    },
  ],
  discCards: Array(9).fill({
    img: fakeImg2,
    category: "HoneyMoon",
    discount: "Upto 50% Off",
    oldprice: 30000,
    newprice: 15000,
  }),
  CARS: {
    popular: ["JTTYT01", "JTTYT02", "JTVIG01", "JTVIG02"],
    categories: [
      {
        src: "images/cars/sedan",
        title: "Sedan",
      },
      {
        src: "images/cars/pickup",
        title: "Pickup",
      },
      {
        src: "images/cars/sports",
        title: "Sports",
      },
    ],
  },
};

const routes = {
  "/api/packages": (...params) => data.packages,
  "/api/packages/:var": (id) => data.packages.find((pkg) => pkg.id === id),
  "/api/hotels": (...params) => data.hotels,
  "/api/hotels/:var": (id) => data.hotels[id],
  "/api/tours": () => data.tours,
  "/api/disccards": () => data.discCards,
};

export async function fakeFetch(strings, ...params) {
  const url = strings.length > 1 ? strings.join(":var") : strings[0];
  console.log("fetching " + url + " in 2s");
  await fakeSleep(2000);
  return { data: routes[url](...params) };
}
