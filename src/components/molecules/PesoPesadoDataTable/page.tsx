import DataTable from "@components/molecules/DataTable/page";
import React from "react";
import { ColumnType, RowType } from "../DataTable/types";
import RankingPosition from "@components/atoms/RankingPosition/page";
import PesoPesadoIcon from "@components/atoms/PesoPesadoIcon/page";
import PesoPesadoPagination from "../PesoPesadoPagination/page";


const PesoPesadoDataTable = () => {
  const columns: ColumnType[] = [
    { title: 'Posição', alignment: 'left', width: '10%' },
    { title: 'Email', alignment: 'left', width: '20%' },
    { title: 'Nota', alignment: 'center', width: '20%' },
    { title: 'Data Envio', alignment: 'left', width: '20%' },
    { title: 'Linguagem', alignment: 'center', width: '10%' },
    { title: 'Categoria', alignment: 'center', width: '20%' },
  ];

  const rows: RowType[] = [
    {
      posicao: <RankingPosition value={4} />,
      email: "@teste.comdasdaasda dasd",
      nota: 50,
      dataEnvio: "15/09/2023",
      linguagem: "Java",
      categoria: <PesoPesadoIcon />
    },
    {
      posicao: <RankingPosition value={5} />,
      email: "@teste.comdasdaasda dasd",
      nota: 50,
      dataEnvio: "15/09/2023",
      linguagem: "Java",
      categoria: <PesoPesadoIcon />
    },
    {
      posicao: <RankingPosition value={6} />,
      email: "@teste.comdasdaasda dasd",
      nota: 50,
      dataEnvio: "15/09/2023",
      linguagem: "Java",
      categoria: <PesoPesadoIcon />
    },
    {
      posicao: <RankingPosition value={7} />,
      email: "@teste.comdasdaasda dasd",
      nota: 50,
      dataEnvio: "15/09/2023",
      linguagem: "Java",
      categoria: <PesoPesadoIcon />
    }
  ]

  return <div className="bg-[#3D3D3D80] rounded-xl">
    <DataTable columns={columns} rows={rows} />
    <PesoPesadoPagination />
  </div>;
};

export default PesoPesadoDataTable;