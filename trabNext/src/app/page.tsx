'use client'
import axios from "axios";
import { Card } from "./components/Card";
import { Menu } from "./components/Menu";
import { Iproduto } from "./interfaces";

interface IReqproduto {
  data: Array<Iproduto>
}

export default async function Home() {

  const { data }: IReqproduto = await axios.get(process.env.NEXT_PUBLIC_API_URL +
    '/produtos'
  )

  console.log(data);
  
  return (
    <>
      <Menu />

      <div style={{
        paddingLeft: "6%",
        paddingRight: "6%",
      }}
      >
        <h2 style={{
          textAlign: "center",
          paddingTop: '30px'
        }}>Produtos em destaque</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: 'wrap'
          }}>
          {
            data.map((produto) => (
              <Card
                key={produto.id}
                id={produto.id}
                id_categorias={produto.id_categorias}
                imagemg={produto.imagemg}
                nome={produto.nome}
                valor={produto.valor}
                promo={produto.valor}
              />
            ))
          }

        </div>
      </div>
    </>
  );
}
