import axios from "axios";

const options = {
  method: "GET",
  url: "https://game-of-thrones1.p.rapidapi.com/Characters",
  //url: "https://thronesapi.com/api/v2/Characters",
  headers: {
    "X-RapidAPI-Key": "81b71118dfmshe652801249d8d1cp1c4be1jsn32ea620b43d1",
    "X-RapidAPI-Host": "game-of-thrones1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default options;
