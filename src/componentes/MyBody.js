import React from 'react';

const MyBody = (props) => {

  return (
    <>

    <h2>Meu componente body! {props.conteudo}</h2>
    <p>{props.conteudo2}</p>
    </>
  )

}

export default MyBody;