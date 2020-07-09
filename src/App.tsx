import React, {useState} from 'react';

import {InputSearch} from "./components/InputSearsh";
import {SearchResult} from "./components/SearchResult";
import {SelectedPictures} from "./components/SelectedPictures";
import {useQuery} from "@apollo/react-hooks";
import * as Characters from "./graphql/Characters.gql";

const App: React.FunctionComponent = () => {
  const {data, loading} = useQuery(Characters)

  const [
    selectedRick,
    selectedMorty,
    searchResult,
  ] = useState();

  return (
    <>
      <h1>App</h1>
      <section>
        <InputSearch
          onInput={() => }
        />
        <SearchResult
          searchResult={data.Characters}
        />
        <SelectedPictures
          imageRick={selectedRick}
          imageMorty={selectedMorty}
        />
      </section>
    </>
  )
}

export default App
