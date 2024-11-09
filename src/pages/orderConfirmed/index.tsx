import { OrderConfirmedContainer } from "./styles";
import ImgConfirmedPage from "../../assets/img_confirmed_page.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export function OrderConfirmed() {
  const navigate = useNavigate();
  const { formData, paymentMethod, resetToCart } = useCart();

  function returnToHome() {
    navigate("/");
    resetToCart();
  }

  if (!formData) {
    return <p>Carregando informações do pedido...</p>; // Ou qualquer mensagem apropriada
  }

  return (
    <OrderConfirmedContainer>
      <div className="Header">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div className="Container">
        <div className="OrderInformation">
          <p>
            <div className="Icons">
              <MapPin size={22} color="#FAFAFA" weight="fill" />
            </div>
            <span>
              Entrega em{" "}
              <strong>
                {formData.rua}, {formData.numero}
              </strong>{" "}
              <br />
              {formData.bairro} - {formData.cidade}, {formData.uf}
            </span>
          </p>
          <p>
            <div className="Icons">
              <Timer size={22} color="#FAFAFA" weight="fill" />
            </div>
            <span>
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>
            </span>
          </p>
          <p>
            <div className="Icons">
              <CurrencyDollar size={22} color="#FAFAFA" weight="fill" />
            </div>
            <span>
              Pagamento na entrega <br />
              <strong>{paymentMethod}</strong>
            </span>
          </p>
        </div>
        <div>
          <img src={ImgConfirmedPage} alt="" />
        </div>
      </div>

      <button onClick={returnToHome}>Novo Pedido</button>
    </OrderConfirmedContainer>
  );
}
