import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailedCard from "../components/detailedCard"

function ProductPageDetail() {
  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetching = await fetch(
          `http://localhost:3000/comidas/${params.productId}`
        );
        const res = await fetching.json();
        setProduct(res);
      } catch (e) {
        throw new Error("No se pudo recuperar el objeto", e);
      }
    };

    fetchProducts();
  }, [params.productId]);

  if (!product) return <p>Loading product...</p>;

  return (
    <>
      <DetailedCard product={product} params={params}/>
    </>
  );
}

export default ProductPageDetail;
