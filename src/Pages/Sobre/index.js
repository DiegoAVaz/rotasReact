import { Link } from "react-router-dom";

function Sobre() {
    return (
      <div>
        <h1>Bem-vindo à página Sobre</h1>
        <br/><br/>

        <Link to='/'>HOME</Link><br/>
        <Link to='/contato'>CONTATO</Link>
      </div>
    );
  }
  
  export default Sobre;
  