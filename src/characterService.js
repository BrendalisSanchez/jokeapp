import axios from "axios";

//#region --- SABIO
// function characterService() {
//   const getAll = () => {
//     const config = {
//       method: "GET",
//       url: "https://thronesapi.com/api/v2/Characters",
//       crossdomain: true,
//       headers: { "Content-Type": "application/json" },
//     };

//     return axios(config);
//   };

//   console.log(getAll);
// }

// export default characterService;
//#endregion

//#region --- Reactjs Documentation
// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);

// // Note: the empty deps array [] means
// // this useEffect will run once
// // similar to componentDidMount()
// useEffect(() => {
//   fetch("https://api.example.com/items")
//     .then((res) => res.json())
//     .then(
//       (result) => {
//         setIsLoaded(true);
//         setItems(result);
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         setIsLoaded(true);
//         setError(error);
//       }
//     );
// }, []);

// if (error) {
//   return <div>Error: {error.message}</div>;
// } else if (!isLoaded) {
//   return <div>Loading...</div>;
// } else {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.name} {item.price}
//         </li>
//       ))}
//     </ul>
//   );
// }
//#endregion

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

export { options };
