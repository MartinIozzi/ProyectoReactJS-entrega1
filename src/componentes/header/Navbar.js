import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {
    return (
        <header>
            <nav className='barra_de_navegacion'>
                <a href="../../index.html"><img className='logo' src="../../one_piece.png" alt="Logo" /></a>
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Destacados</a></li>
                        <li><a class="dropdown-item" href="#">Nuevas Opciones</a></li>
                    </ul>
                </div>
                <a className='nav_categories' href="../">Ofertas</a>
                <a className='nav_categories' href="../">Preguntas</a>
                <a className='nav_categories' href="../">Contáctanos</a>
                <a className='carrito' href=""><ShoppingCartIcon sx={{ fontSize: 60 }} /></a>
            </nav>
        </header>
    )
}

export default Navbar