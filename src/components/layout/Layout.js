import React from "react";
//import data from "./data";
//import './style.css';
import Header from '../header/Header';
import Login from '../login/Login';
import SearchItem from '../searchSection/SearchItem';

class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city: ""
        }

        this.getCityList = this.getCityList.bind(this);

    }

    getCityList(city) {
        this.setState({ city: city });
    }

    render() {
        return (

            <div>

                <Header></Header>

                <SearchItem getCityList={this.getCityList} />


                {/* <Login /> */}


            </div>
        )
    }
}

export default Layout;