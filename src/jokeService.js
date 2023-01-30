import axios from "axios";

let jokeService = () => {
  const config = {
    method: "GET",
    url: "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5",
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export default jokeService;
