import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>Bem-vindo à página Home</h1>
        <span>SUJEITO PROGRAMADOR</span> <br/><br/>

        <Link to='/sobre'>SOBRE</Link><br/>
        <Link to='/contato'>CONTATO</Link><br/><br/>
        <hr/><br/>
        <Link to="/produto/12345">Acessar produto 12345</Link>
      </div>
    );
  }
  
  export default Home;
  