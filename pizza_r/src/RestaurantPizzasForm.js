import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function RestaurantPizzasForm() {
  const [heroes, setHeroes] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [restaurantsId, setRestaurantId] = useState("");
  const [pizzaId, setPizzaId] = useState("");
  const [price, setPrice] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/Restaurants")
      .then((r) => r.json())
      .then(setRestaurantId);
  }, []);

  useEffect(() => {
    fetch("/Pizzas")
      .then((r) => r.json())
      .then(setPizza);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        Restaurant_id: RestaurantId,
        Pizza_id: PizzaId,
      price,
    };
    fetch("/Restaurant_pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        history.push(`/Restaurants/${RestaurantId}`);
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Pizza_id">Pizza:</label>
      <select
        id="Pizza_id"
        name="Pizza_id"
        value={PizzaId}
        onChange={(e) => setPizzaId(e.target.value)}
      >
        <option value="">Select a Pizza</option>
        {Pizza.map((Pizza) => (
          <option key={Pizza.id} value={Pizza.id}>
            {Pizza.name}
          </option>
        ))}
      </select>
      <label htmlFor="Restaurant_id">Restaurant:</label>
      <select
        id="Restaurant_id"
        name="Restaurant_id"
        value={RestaurantId}
        onChange={(e) => setRestaurantId(e.target.value)}
      >
        <option value="">Select a Restaurant</option>
        {Restaurants.map((Restaurant) => (
          <option key={Restaurant.id} value={Restaurant.id}>
            {Restaurant.name}
          </option>
        ))}
      </select>
      <label htmlFor="price">price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ flavour: "spicey" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Add Restaurant Pizza</button>
    </form>
  );
}

export default RestaurantPizzasForm;