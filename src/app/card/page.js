/* --------------------------------------------------------
  Copyright (c) José Valdiviezo. All rights reserved.
  ------------------------------------------------------- */
import 'tailwindcss'
import Layout from "@/Components/Layout";

export default function Page() {
  return (
    <Layout>
      <section className="w-3/4">
        <h1>Card</h1>
        <div className="">
          <form>
            <label>
              <input type="number" />
            </label>
            <button type="submit">Buscar</button>
          </form>
        </div>
        <div className="">
          <div>
            <span>
              Entrada: <span></span>
            </span>
          </div>
          <div>
            <span>
              Salida: <span></span>
            </span>
          </div>
          <div>
            <span>
              Tiempo: <span></span>
            </span>
          </div>
          <div>
            <span>
              Total: <span></span>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
