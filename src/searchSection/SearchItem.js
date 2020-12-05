import React from "react";
import { Form, Button, Col } from 'react-bootstrap';
import './searchItem.css'

class SearchItems extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city: "",
        }

        this.handleSearchField = this.handleSearchField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchField(event) {
        this.setState({ city: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        //load college / cities
    }

    render() {

        let { city } = this.state;
        return (
            <div className="form-data">
                <Form>
                    <Form.Row>
                        <Form.Group controlId="star-filter" as={Col}>
                            <Form.Label>Search By </Form.Label>
                            <Form.Control as="select"
                            >
                                <option>All</option>
                                <option>City</option>
                                <option>College</option>

                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="search-field">
                            <Form.Control type="text" placeholder="Enter City / College name to search the college" required
                                onChange={(event) => this.handleSearchField(event)} />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" className="search" onClick={(event) => this.handleSubmit(event)}>
                        Search
                </Button>
                </Form>
            </div>
        )
    }
}

export default SearchItems;