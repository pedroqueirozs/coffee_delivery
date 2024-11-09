import { ProductContainer } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

interface Product {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, imgUrl, name, description, price, tags } = product;
  const { addToCart } = useCart();
  const [amount, setAmount] = useState(1);

  function handleIncreaseQuantity() {
    setAmount((state) => state + 1);
  }
  function handleDecreaseQuantity() {
    setAmount((state) => Math.max(state - 1, 1));
  }

  function handleAddToCart() {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        imgUrl: product.imgUrl,
        quantity: amount,
      },
      amount
    );
  }

  return (
    <ProductContainer key={id}>
      <div className="ImgDescription">
        <img src={imgUrl} alt={name} />
        <div className="Tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      <footer>
        <span className="Price">R$ {price.toFixed(2)}</span>
        <div>
          <button onClick={() => handleDecreaseQuantity()}>-</button>
          <span className="Amount">{amount}</span>
          <button onClick={() => handleIncreaseQuantity()}>+</button>
        </div>
        <span>
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} color="#4B2995" weight="fill" />
          </button>
        </span>
      </footer>
    </ProductContainer>
  );
}
