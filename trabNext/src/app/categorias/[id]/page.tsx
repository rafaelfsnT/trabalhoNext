'use client'  
import { Card } from "@/app/components/Card";
import { Menu } from "@/app/components/Menu";
import { Iproduto } from "@/app/interfaces";
import axios from "axios";

interface IReqProduto {
  data: Array<Iproduto>;
}

interface Props {
  params: {
    id: string;
  };
}

export default async function CategoriaPage({ params }: Props) {

  const categoriaId = parseInt(params.id); // Pegando o id da categoria da URL

  const { data }: IReqProduto = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/produtos?id_categoria=${categoriaId}` // Realizando a requisição filtrada pela categoria
  );

  return (
    <>
      <Menu />

      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
        }}
      >
        <h2>Produtos da Categoria {categoriaId}</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {data.map((produto) => (
            <Card
              key={produto.id}
              id={produto.id}
              id_categorias={produto.id_categorias}
              imagemg={produto.imagemg}
              nome={produto.nome}
              valor={produto.valor}
              promo={produto.promo}
            />
          ))}
        </div>
      </div>
    </>
  );
}
