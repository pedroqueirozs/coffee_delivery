import { HeaderContainer } from "./styles";
import imgLogo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export function Header() {
  const { cartItems } = useCart();

  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <img src={imgLogo} alt="logo coffee delivery" />

      <div className="CartLocation">
        <div className="Location">
          <MapPin size={22} color="#4B2995" weight="fill" />
          <span>Montes Claros - MG</span>
        </div>
        <div className="Cart">
          <button onClick={() => navigate("/cart")}>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </button>
          {cartItems.length > 0 ? <span>{cartItems.length}</span> : null}
        </div>
      </div>
    </HeaderContainer>
  );
}
