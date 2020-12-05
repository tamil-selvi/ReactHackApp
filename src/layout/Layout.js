import React from "react";
//import data from "../data/data.json"
import Login from '../login/Login';




class Layout extends React.Component {

    constructor(props) {
        super(props);
    
      
        this.containerRef = React.createRef();
        const isLogginActive = false;

        this.state = {
            city: "",
            isLogginActive: false
        }

        this.getCityList = this.getCityList.bind(this);

    }

    getCityList(city) {
        this.setState({ city: city });
    }

    render() {

       // const { city, isLogginActive } = this.state;
       // this.isLogginActive = true;

      debugger;
        return (

            <div>              
                <Login isLogginActive={true} ref={this.containerRef} />

            </div>
        )
    }
}

export default Layout;