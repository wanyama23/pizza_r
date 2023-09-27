import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [Restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/Restaurants")
      .then((r) => r.json())
      .then(setRestaurants);
  }, []);

  return (
    <section>
      <h2>All Restaurants</h2>
      <ul>
        {Restaurants.map((Restaurant) => (
          <li key={Restaurants.id}>
            <Link to={`/Restaurants/${Restaurant.id}`}>{Restaurant.super_name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;