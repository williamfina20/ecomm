import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Header from "./Header";
import ProductList from "./ProductList";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <Header />
      <div className="py-2">
        {loading ? (
          <Spinner animation="grow" variant="info" />
        ) : (
          <ProductList />
        )}
      </div>
    </div>
  );
}
export default Home;
