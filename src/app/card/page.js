/* --------------------------------------------------------
  Copyright (c) José Valdiviezo. All rights reserved.
  ------------------------------------------------------- */
"use client"
import Field from "@/Components/Field";
import Layout from "@/Components/Layout";
import SearchBar from "@/Components/SearchBar";

export default function Page() {

  const handlerSearch = (ev) => {
    ev.preventDefault();
  };

  return (
    <Layout>
      <section className="w-full p-2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Card</h1>
        <div className="w-full text-center flex justify-center items-center flex-col">
          <SearchBar submit={ handlerSearch } />
        </div>
        <div className="w-full text-center">
          <Field field="Entrada" />
          <Field field="Salida" />
          <Field field="Tiempo" />
          <Field field="Total" />
        </div>
      </section>
    </Layout>
  );
}
