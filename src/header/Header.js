
import React from 'react';
import './header.css'


class Header extends React.Component {

    constructor(props) {
        super(props);      
        };


    handleSubmit(evt) {
        evt.preventDefault();                 
  
      // this.props.isLogginActive=true;
      }

    render() {
        return (    
        <div className="header" ref={this.props.containerRef} >
            <span className="header-text">user name : Tamil  {this.props.username} </span>
            <span> <button type="button" className="btn"  onClick={(event) => this.handleSubmit(event)}  >
              Logout
            </button></span>
            <div></div>
        </div>
      );
}
}

export default Header;