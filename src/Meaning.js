import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>definition: </strong>
              {definition.definition}
              <br />

              <em>
                {" "}
                <Example example={definition.example} />
              </em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
