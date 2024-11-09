import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import imgPrincipal from "../../assets/imgPrincipal.svg";
import { IntroContainer } from "./style";

export function Introduction() {
  return (
    <IntroContainer>
      <div className="Infos">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="Tags">
          <div className="Tags-p">
            <p>
              <span>
                <ShoppingCart size={22} color="#FAFAFA" weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span>
                <Timer size={22} color="#FAFAFA" weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
          </div>
          <div className="Tags-p">
            <p>
              <span>
                <Package size={22} color="#FAFAFA" weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span>
                <Coffee size={22} color="#FAFAFA" weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src={imgPrincipal} alt="" />
      </div>
    </IntroContainer>
  );
}
