import { Link } from "react-router-dom"

function Contato(){
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Contato da empresa: (xx)xxxxx-xxxx</span>
            <br/>
            <br/>

            <Link to='/'>HOME</Link> <br/>
            <Link to='/sobre'>SOBRE</Link>
        </div>
    )
}

export default Contato