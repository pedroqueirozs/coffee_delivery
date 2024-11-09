import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from "@phosphor-icons/react";
import {
  Address,
  CompleteContainer,
  ContainerCart,
  InputContainer,
  Payment,
  MainCart,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface FormData {
  cep: string;
  numero: string;
  bairro: string;
  rua: string;
  cidade: string;
  uf: string;
}

export function Cart() {
  const {
    cartItems,
    decrementItem,
    incrementItem,
    receiveFormData,
    paymentMethod,
    updatePaymentMethod,
    removeToCart,
  } = useCart();
  const [totalItems, setTotalItems] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const deliveryFee = 3.5;
  const navigate = useNavigate();

  const schema = yup.object({
    cep: yup
      .string()
      .required("Informar o cep é obrigatório")
      .matches(/^\d+$/, "CEP deve conter apenas números"),
    numero: yup
      .string()
      .required("Informar o numero é obrigatório")
      .matches(/^\d+$/, "Número deve conter apenas números"),
    bairro: yup.string().required("Informar o bairro é obrigatório"),
    rua: yup.string().required("Informar o a rua é obrigatório"),
    cidade: yup.string().required("Infomar a cidade é obrigatório"),
    uf: yup
      .string()
      .required("Informar o estado é obrigatório")
      .min(2, "Minimo dois caracteres")
      .max(2, "Maximo dois caracteres"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data: FormData) {
    receiveFormData(data);
    navigate("/cart/orderConfirmed");
  }
  function handleRemoveToCart(itemId: number) {
    removeToCart(itemId);
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      setTotalItems(0);
      setFinalTotal(0);
      return;
    }
    const calculatedTotalItems = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalItems(calculatedTotalItems);
    setFinalTotal(calculatedTotalItems + deliveryFee);
  }, [cartItems]);
  return (
    <MainCart>
      <CompleteContainer>
        <h3>Complete seu pedido</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Address>
            <div>
              <p>
                <MapPin color="#C47F17" size={22} />
                Endereço de entrega
              </p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>

            <InputContainer>
              <input type="number" placeholder="CEP" {...register("cep")} />
              <p style={{ color: "red" }}>{errors.cep?.message}</p>
              <input type="text" placeholder="Rua" {...register("rua")} />
              <p style={{ color: "red" }}>{errors.rua?.message}</p>
              <input
                type="number"
                placeholder="Numero"
                {...register("numero")}
              />
              <p style={{ color: "red" }}>{errors.numero?.message}</p>
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" {...register("bairro")} />
              <p style={{ color: "red" }}>{errors.bairro?.message}</p>

              <input type="text" placeholder="Cidade" {...register("cidade")} />
              <p style={{ color: "red" }}>{errors.cidade?.message}</p>

              <input type="text" placeholder="UF" {...register("uf")} />
              <p style={{ color: "red" }}>{errors.uf?.message}</p>
            </InputContainer>
          </Address>

          <Payment>
            <div>
              <p>
                <CurrencyDollar color="#8047F8" size={22} />
                Pagamento
              </p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>

            <div className="Cards">
              <button
                type="button"
                onClick={() => updatePaymentMethod("Cartão de Crédito")}
                className={
                  paymentMethod === "Cartão de Crédito" ? "selected" : ""
                }
              >
                <CreditCard
                  size={22}
                  color={
                    paymentMethod === "Cartão de Crédito" ? "#fff" : "#8047F8"
                  }
                />
                Cartão de Crédito
              </button>
              <button
                type="button"
                onClick={() => updatePaymentMethod("Cartão de Débito")}
                className={
                  paymentMethod === "Cartão de Débito" ? "selected" : ""
                }
              >
                <Bank
                  size={22}
                  color={
                    paymentMethod === "Cartão de Débito" ? "#fff" : "#8047F8"
                  }
                />
                Cartão de Débito
              </button>
              <button
                type="button"
                onClick={() => updatePaymentMethod("Dinheiro")}
                className={paymentMethod === "Dinheiro" ? "selected" : ""}
              >
                <Money
                  size={22}
                  color={paymentMethod === "Dinheiro" ? "#fff" : "#8047F8"}
                />
                Dinheiro
              </button>
            </div>
          </Payment>
        </form>
      </CompleteContainer>

      <CompleteContainer>
        <div className="carrinho">
          <h3>Cafés Selecionados</h3>
          <ContainerCart>
            {cartItems.map((item) => (
              <div className="Products" key={item.id}>
                <img src={item.imgUrl} alt="" />
                <div>
                  <p>{item.name}</p>
                  <div className="AmountButtonRemove">
                    <div className="ButtonIncrementAndDecrement">
                      <button
                        type="button"
                        onClick={() => {
                          decrementItem(item.id);
                        }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => {
                          incrementItem(item.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveToCart(item.id)}
                      className="Remove"
                      type="button"
                    >
                      <Trash size={22} color="#8047F8" />
                      Remover
                    </button>
                  </div>
                </div>

                <span> R$ {item.price.toFixed(2)}</span>
              </div>
            ))}
            <footer>
              <div>
                <span>Total de itens</span>
                <span>R$ {totalItems.toFixed(2)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ {finalTotal.toFixed(2)}</strong>
              </div>

              <button onClick={handleSubmit(onSubmit)} type="button">
                confirmar pedido
              </button>
            </footer>
          </ContainerCart>
        </div>
      </CompleteContainer>
    </MainCart>
  );
}
