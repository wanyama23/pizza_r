import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Restaurant() {
  const [{ data: Restaurant, error, status }, setRestaurant] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/Restaurants/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((Restaurant) =>
          setRestaurant({ data: hero, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setRestaurant({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section>
      <h2>{Restaurant.super_name}</h2>
      <h2>AKA {Restaurantname}</h2>

      <h3>Pizzas:</h3>
      <ul>
        {Restaurant.Pizzas.map((Pizza) => (
          <li key={Restaurant.id}>
            <Link to={`/Pizzas/${Pizza.id}`}>{Pizza.name}</Link>
          </li>
        ))}
      </ul>

      <Link to="/Restaurant_pizzas/new">Add Hero Power</Link>
    </section>
  );
}

export default Restaurant;