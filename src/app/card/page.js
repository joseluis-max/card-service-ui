/* --------------------------------------------------------
  Copyright (c) José Valdiviezo. All rights reserved.
  ------------------------------------------------------- */
"use client"
import { useState } from 'react'
import Field from "@/Components/Field";
import Layout from "@/Components/Layout";
import SearchCard from "@/Components/SearchCard";

export default function Page() {
  const [ card, setCard ] = useState({})

  return (
    <Layout>
      <section className="w-full p-2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Card</h1>
        <div className="w-full text-center flex justify-center items-center flex-col">
          <SearchCard
            card={ card }
            setCard={ setCard }
          />
        </div>
        <div className="w-full text-center">
          <Field field="Entrada" value={card?.start} placeholder={'dd/mm/yyyy hh:mm:ss'} format={true} />
          <Field field="Salida" value={card?.end} placeholder={'dd/mm/yyyy hh:mm:ss'} format={true} />
          <Field field="Tiempo" value={card?.time} placeholder={'hh:mm'} />
          <Field field="Total" value={card?.total} placeholder={'00.00'} />
        </div>
      </section>
    </Layout>
  );
}
