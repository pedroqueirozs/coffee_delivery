import arabe from "../data/imgs/arabe.svg";
import chocolateQuente from "../data/imgs/chocolate_quente.svg";
import cubano from "../data/imgs/cubano.svg";
import expressoAmericano from "../data/imgs/expresso_americano.svg";
import expressoCremoso from "../data/imgs/expresso_cremoso.svg";
import expressoGelado from "../data/imgs/expresso_gelado.svg";
import expressoTradicional from "../data/imgs/expresso_tradicional.svg";
import havaino from "../data/imgs/havaiano.svg";
import irlandes from "../data/imgs/irlandes.svg";
import macaccino from "../data/imgs/macaccino.svg";
import cafeComLeite from "../data/imgs/cafe_com_leite.svg";
import latte from "../data/imgs/latte.svg";
import capuccino from "../data/imgs/capuccino.svg";
import machiato from "../data/imgs/machiato.svg";

export const products = [
  {
    id: 0,
    quantity: 1,
    name: "Expresso Tradicional",
    tags: ["TRADICIONAL"],
    description: "O tradicional café feito com água quente e grãos moídos",
    imgUrl: expressoTradicional,
    price: 9.90,
  },
  {
    id: 1,
    quantity: 1,
    name: "Expresso Americano",
    tags: ["TRADICIONAL"],
    description: "Expresso diluído, menos intenso que o tradicional",
    imgUrl: expressoAmericano,
    price: 7.00,
  },
  {
    id: 2,
    quantity: 1,
    name: "Expresso Cremoso",
    tags: ["TRADICIONAL"],
    description: "Café expresso tradicional com espuma cremosa",
    imgUrl: expressoCremoso,
    price: 10.00,
  },
  {
    id: 3,
    quantity: 1,
    name: "Expresso Gelado",
    tags: ["TRADICIONAL", "GELADO"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    imgUrl: expressoGelado,
    price: 7.00,
  },
  {
    id: 4,
    quantity: 1,
    name: "Café com Leite",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    imgUrl: cafeComLeite,
    price: 7.00,
  },
  {
    id: 5,
    quantity: 1,
    name: "Latte",
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    imgUrl: latte,
    price: 7.00,
  },
  {
    id: 6,
    quantity: 1,
    name: "Capuccino",
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    imgUrl: capuccino,
    price: 9.90,
  },
  {
    id: 7,
    quantity: 1,
    name: "Macchiato",
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    imgUrl: machiato,
    price: 9.90,
  },
  {
    id: 8,
    quantity: 1,
    name: "Mocaccino",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    imgUrl: macaccino,
    price: 9.90,
  },
  {
    id: 9,
    quantity: 1,
    name: "Chocolate Quente",
    tags: ["ESPECIAL", "COM LEITE"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    imgUrl: chocolateQuente,
    price: 15.00,
  },
  {
    id: 10,
    quantity: 1,
    name: "Cubano",
    tags: ["ESPECIAL", "COM LEITE"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    imgUrl: cubano,
    price: 9.90,
  },
  {
    id: 11,
    quantity: 1,
    name: "Havaiano",
    tags: ["ESPECIAL"],
    description: "Bebida adocicada preparada com café e leite de coco",
    imgUrl: havaino,
    price: 9.90,
  },
  {
    id: 12,
    quantity: 1,
    name: "Árabe",
    tags: ["ESPECIAL"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    imgUrl: arabe,
    price: 9.90,
  },
  {
    id: 13,
    quantity: 1,
    name: "Irlandês",
    tags: ["ESPECIAL", "ALCÓLICO"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    imgUrl: irlandes,
    price: 5.90,
  },
];
