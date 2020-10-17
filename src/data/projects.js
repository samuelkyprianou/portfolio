const projectsList = [
  { id: "volta", name: "Volta", language: "React JS" },
  { id: "food-find", name: "FoodFinder", language: "React JS / Ruby" },
  { id: "snappy-parking", name: "SnAppyParking", language: "JS / Ruby" },
  { id: "umber", name: "Umber", language: "React Native / Node" },
];
const projectInfo = [
  {
    id: "volta",
    title: "Volta",
    tag: "ROUTE PLANNER FOR ELECTRIC VEHICLES",
    images: [
      require("../images/volta3.png"),
      require("../images/volta1.png"),
      require("../images/volta2.png"),
    ],
    description:
      "Electric vehicle based web app with a route planner functionality. Adapts to the users input of battery capacity and plans optimal routes with the most efficient charging station waypoint.",
    link: "https://github.com/samuelkyprianou/VOLTA",
    hasLink: false,
  },
  {
    id: "food-find",
    title: "FoodFinder",
    tag: "DISCOVER LOCAL RESTAURANTS IN YOUR AREA",
    images: [
      require("../images/food-find3.png"),
      require("../images/food-find1.png"),
      require("../images/food-find2.png"),
    ],
    description:
      "FoodFinder is a web app that lets you find a restaurant near you and find out which streaming services it is currently available on. Users are able to create an account and log in. User details are saved in the browser session.",
    link: "https://github.com/samuelkyprianou/foodfind-backend",
    hasLink: false,
  },
  {
    id: "snappy-parking",
    title: "SnAppyParking",
    tag: "FIND PARKING IN THE BOROUGH OF CAMDEN",
    images: [
      require("../images/snappy-parking4.png"),
      require("../images/snappy-parking1.png"),
      require("../images/snappy-parking2.png"),
      require("../images/snappy-parking3.png"),
    ],
    description:
      "A handy web app designed with efficiency in mind. Allowing users to search and purchase available parking spaces in the borough of Camden.",
    link: "https://github.com/samuelkyprianou/SnAppy-Parking",
    hasLink: false,
  },
  {
    id: "umber",
    title: "Umber",
    tag: "PROUDLY BUILT BY BROKE STUDENTS, FOR BROKE STUDENTS.",
    images: [
      require("../images/umber3.png"),
      require("../images/umber1.png"),
      require("../images/umber2.png"),
    ],
    description:
      "Transfer money from your bank to someone else's in seconds. landing later this year...",
    link: "https://umber.co/",
    hasLink: true,
  },
];

export default {
  projectsList,
  projectInfo,
};
