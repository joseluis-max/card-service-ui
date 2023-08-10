/* --------------------------------------------------------
  Copyright (c) José Valdiviezo. All rights reserved.
  ------------------------------------------------------- */

export default function SearchBar({ submit }) {
  return (
    <form className="w-1/2">
      <label>
        <input
          type="number"
          className="w-9/12 m-2 border py-1 rounded-full shadow-md"
        />
      </label>
      <button
        type="submit"
        className="px-5 py-1 text-white bg-slate-900 rounded-full"
        onClick={ (ev) => submit(ev) }
      >
        Buscar
      </button>
    </form>
  );
}
