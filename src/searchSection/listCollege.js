import React from "react";
import data from "./data";
import { Row, Col } from "react-bootstrap";

class ListCollege extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }
    render() {
        let { data } = this.state
        let { college } = this.props;

        const collegeList = (
            <ul>
                {data.map((value, index) =>
                    <li key={index}>
                        <p> {value.collegeName} </p>
                    </li>
                )}
            </ul>
        );
        return (
            <div className="Container">
                <Row className="list-content">
                    <Col> {collegeList}</Col>
                    <Col>{content}</Col>
                </Row>

            </div>
        )
    }
}
export default ListCollege;