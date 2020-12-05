import React from "react";
import { Form, Button, Col } from 'react-bootstrap';

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
    }

    render() {

        let { city } = this.state;
        return (
            <div className="form-data">
                <Form>
                    <Form.Group controlId="search-field">
                        <Form.Control type="text" placeholder="Enter City name to search the college" required
                            onChange={(event) => this.handleSearchField(event)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="search" onClick={(event) => this.handleSubmit(event)}>
                        Search
                </Button>
                </Form>
            </div>
        )
    }
}

export default SearchItems;