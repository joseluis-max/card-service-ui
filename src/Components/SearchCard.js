/* --------------------------------------------------------
  Copyright (c) José Valdiviezo. All rights reserved.
  ------------------------------------------------------- */
"use client"
import getData from '@/utils/getData'
import { URL_API_CARD } from '@/utils/constants'

export default function SearchCard({ card, setCard }) {

  const handlerChange = (ev) => setCard(card => {
    card.id = ev.target.value
    return card
  })
  const handlerSubmit = async (ev) => {
    try {
      ev.preventDefault()
      const data = await getData(URL_API_CARD + card.id, 'POST')
      const searchCardHTML = document.getElementById('search-card')
      searchCardHTML.value = ''
      if (data.card) {
        setCard(data.card)
      } else {
        setCard({})
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className="w-1/2">
      <label>
        <input
          id="search-card"
          type="number"
          className="w-9/12 m-2 text-center border-2 border-gray-300 py-1 rounded-full shadow-md"
          onChange={ handlerChange }
        />
      </label>
      <button
        type="submit"
        className="px-5 py-1 text-white bg-slate-900 rounded-full"
        onClick={ handlerSubmit }
      >
        Buscar
      </button>
    </form>
  );
}
