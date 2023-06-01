//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({nombre, color}) {

  const buttonStyle = {
    backgroundColor:color
  };

  return (
    <div>
      <h2>Hola {" "+nombre}</h2>
      <h3>Sabenos que tu color favorito es:</h3>
      <button style={buttonStyle} >#{color}</button>
    </div>
  );
}

export default Card;
