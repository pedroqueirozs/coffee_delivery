import { ProductCard } from "../productCard";
import { ListProducts, MainContainer } from "./styles";
import { products } from "../../services/data/Products";

export function MainContent() {
  return (
    <MainContainer>
      <h2>Nossos cafés</h2>
      <ListProducts>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ListProducts>
    </MainContainer>
  );
}
