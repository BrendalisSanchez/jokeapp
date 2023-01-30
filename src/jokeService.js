import axios from "axios";

let jokeService = () => {
  const config = {
    method: "GET",
    url: "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5",
    //crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

//export { getJoke };
export default jokeService;
