const projectsList = [
  { id: "shell-metals", name: "Shell Metals", language: "JS / HTML" },
  { id: "volta", name: "Volta", language: "React JS" },
  { id: "shell-survey", name: "Shell Survey", language: "JS / HTML" },
  { id: "food-find", name: "FoodFinder", language: "React JS / Ruby" },
  { id: "snappy-parking", name: "SnAppyParking", language: "JS / Ruby" },
  { id: "umber", name: "Umber", language: "React Native / Node" },
];
const projectInfo = [
  {
    id: "shell-metals",
    title: "Shell Metals",
    tag: "3D EXPERIENCE OF A STEEL MILL",
    images: ["shell-metals3", "shell-metals1", "shell-metals2"],
    description:
      "The tool gives users a 3D experience of a steel mill and uses hotspots to highlight the challenges of each equipment and the benefits of Shell Lubricant Solutions.",
    link: "https://www.shell.com/business-customers/lubricants-for-business/metals.html#iframe=L2J1c2luZXNzLWN1c3RvbWVycy9sdWJyaWNhbnRzLWZvci1idXNpbmVzcy9tZXRhbHMvX2pjcl9jb250ZW50L3Bhci9pZnJhbWVkYXBwX2NvcHkuc3RhdGljL2luZGV4Lmh0bWw",
    hasLink: true,
  },
  {
    id: "volta",
    title: "Volta",
    tag: "ROUTE PLANNER FOR ELECTRIC VEHICLES",
    images: ["volta3", "volta1", "volta2"],
    description:
      "Electric vehicle based web app with a route planner functionality. Adapts to the users input of battery capacity and plans optimal routes with the most efficient charging station waypoint.",
    link: "https://github.com/samuelkyprianou/VOLTA",
    hasLink: false,
  },
  {
    id: "shell-survey",
    title: "Shell Survey",
    tag: "SUSTAINABILITY SURVEY",
    images: [
      "shell-survey4",
      "shell-survey1",
      "shell-survey2",
      "shell-survey3",
    ],
    description:
      "A survey that provides a sustainability result for a business user. creating a dynamic chart and a PDF report unique to the user inputs.",
    link: "https://5c75961756807a24713b-fbe3ad3f7026ce421352302a81fee82d.ssl.cf3.rackcdn.com/shell-survey-v3/",
    hasLink: true,
  },
  {
    id: "food-find",
    title: "FoodFinder",
    tag: "DISCOVER LOCAL RESTAURANTS IN YOUR AREA",
    images: ["food-find3", "food-find1", "food-find2"],
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
      "snappy-parking4",
      "snappy-parking1",
      "snappy-parking2",
      "snappy-parking3",
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
    images: ["umber3", "umber1", "umber2"],
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
