import React, {Fragment} from "react";
import { useEffect, useState } from "react"
import styled from "@emotion/styled";

const Container = styled.div`
`

const SearchInput = styled.input` 


`
const ResultContainer = styled.div`

`



const SuggestionList = ({results}) =>{

  return (
    <Fragment>
      {results.map(result => {
        return (
          <ResultContainer key={result}>
            <span>{result.name}</span>
            {console.log(result)}
          </ResultContainer>
        )
      })}
    </Fragment>
  );
}

const data =  [
  {
    id: 1,
    name: "Vinay"
  },
  {
    id: 1,
    name: "Datta"
  },
  {
    id: 1,
    name: "Vinay Pinnaka"
  },
  {
    id: 1,
    name: "Binay"
  },
  {
    id: 1,
    name: "Vinay Datta"
  },
]

const PatientSearch = () => {
  const [results, setResults] = useState([]);
  const [query, updateQuery] = useState("");

  const fetchResults =  async () => {
    let filterdData = data.filter(result => {
      if(query){
        return result.name.toLowerCase().includes(query.toLowerCase());
      }
      else{
        return null;
      }
    });
    setResults(filterdData);
  }

  useEffect(() => fetchResults(), [query]);

  return (
      <Fragment>
        <Container>
        <SearchInput onChange={e => updateQuery(e.target.value)} />
        <SuggestionList results={results}/>
        </Container>
      </Fragment>
  );
};

export default PatientSearch;
