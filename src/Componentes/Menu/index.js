import './styles.css';
import React from 'react';
import Button from '../Button';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/TelesFlix Logo.png';
//import ButtonLink from './Componentes/ButtonLink';

function Menu (){
    return(
        <nav className="Menu">

            <Link to="/">
                <img src={Logo} alt="Logo TelesFlix" className="Logo"/>
            </Link>
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

        </nav>
    );
}
export default Menu;