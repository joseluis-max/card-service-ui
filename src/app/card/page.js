/* --------------------------------------------------------
 Copyright (c) José Valdiviezo. All rights reserved.
 -------------------------------------------------------*/

export default function Page() {
    return (
        <section>
            <h1>Card</h1>
            <div className="">
                <form>
                    <label for="">
                        <input type="number" />
                    </label>
                    <button type="submit">Buscar</button>
                </form>
            </div>
            <div>
                <span>Entrada: <span></span></span>
                <span>Salida: <span></span></span>
                <span>Tiempo: <span></span></span>
                <span>Total: <span></span></span>
            </div>
        </section>
    )
}