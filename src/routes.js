import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Contato from './Pages/Contato'
import Header from './components/Header'
import Erro from './Pages/Erro'
import Produto from './Pages/Produto'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/contato' element={<Contato/>}/>
                <Route path='/produto/:id' element={<Produto/>} />
                <Route path='*' element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp