import React from "react";
import {useQuery} from "@apollo/react-hooks";
import * as Characters from '../graphql/Characters.gql'

export const InputSearch: React.FunctionComponent = () => {


  return (
    <li className="input-field col s6">
      <input
        placeholder="Placeholder"
        type="search"
        id="search-input"
        onInput={() => onInput(value)}
      />
      <label
        htmlFor="search-input"
      >
        Введите поисковый запрос
      </label>
    </li>
  )
}