import React from "react";
import { searchResult } from '../types'

const item = {
  id: "152",
  name: "Hammerhead Morty",
  image: "https://rickandmortyapi.com/api/character/avatar/152.jpeg"
}

export const SearchResult: React.FunctionComponent = (searchResult:searchResult) => {
  return (
    <div className='result-collection'>
      <div
        className='result-collection__item'
      >
        <img
          className='item__image'
          src={item.image}
        />
        <p
          className='item__name'
        >{item.name}</p>
      </div>
    </div>
  )
}