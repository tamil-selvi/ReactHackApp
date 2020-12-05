import React from "react";
import data from "./data";
import { Row, Col } from "react-bootstrap";

class ListCities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }

    }
    render() {
        let { data } = this.state
        let { city } = this.props;

        const citiList = (
            <ul>
                {data.map((value, index) =>
                    <li key={index}>
                      <p> {value.city} </p>
                    </li>
                )}
            </ul>
        );
        return (
            <div className="Container">
                <Row className="list-content">
                    <Col> {citiList}</Col>
                    <Col>{content}</Col>
                </Row>

            </div>
        )
    }
}
export default ListCities;