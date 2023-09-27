import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Pizza() {
  const [{ data: Pizza, error, status }, setPower] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/Pizza/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((power) =>
          setPizza({ data: Pizza, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setPizza({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section>
      <h2>{Pizza.name}</h2>
      <p>{Pizza.description}</p>
      <p>
        <Link to="/Restaurant_pizzas/new">Add Hero Power</Link>
      </p>
      <p>
        <Link to={`/Pizza/${Pizza.id}/edit`}>Edit Pizza Description</Link>
      </p>
    </section>
  );
}

export default Pizza;