import { useEffect } from "react";

const Pokimon = () => {

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);  // Log the data

        // Correct the property to `data.results` and fix `res.json()` typo
        Promise.all(
          data.results.map((val) =>
            fetch(val.url)
              .then((res) => res.json())  // Fixed typo here
          )
        ).then((details) => {
          console.log("Pokemon details:", details);  // Log the detailed data
        }).catch((error) => {
          console.error("Error fetching Pokémon details:", error);
        });

      })
      .catch((error) => {
        console.error("Error fetching Pokémon list:", error);
      });
  }, []);

  return (
    <div>
      <h2>Pokimon API Fetch</h2>
    </div>
  );
};

export default Pokimon;
