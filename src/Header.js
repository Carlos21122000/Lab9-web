import React from 'react';
import './Header.css';
class Header extends React.Component {
    constructor(props) {
        super(props);
       }

    render(){
       return (
           <header>
                <div className="titulo">Juego Memoria</div>
                <div className="titulo">
                    Intentos: {this.props.cont}
                </div>   
           </header>  
        );
    }
}
export default Header;