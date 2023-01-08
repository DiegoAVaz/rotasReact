import { Link } from "react-router-dom"

function Erro(){
    return(
        <div>
            <h2>Opss... Parece que essa página não existe :(</h2>
            <br/>
            <br/>
            <span>Encontramos essas páginas:</span><br/>
            <Link to='/'>HOME</Link><br/>
            <Link to='/sobre'>SOBRE</Link><br/>
            <Link to='/contato'>CONTATO</Link>
        </div>
    )
}

export default Erro