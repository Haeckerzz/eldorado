import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";

const LoginForm = () => {
    return (
        <div className="register-container container">
      <Row className="justify-content-md-center">
        <Col md="4">
          <Row>
            <h2 className="text-center display-5">Sign in</h2>
          </Row>
          <br></br>
          <Form name="form">
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  name="mail"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Button variant="primary" type="submit">
                  LOGIN{" "}
                </Button>
              </Col>
            </Row>
          </Form>
          <hr></hr>
          <h6 className="text-center">
            <a href=""> Forgot password?</a>
            <br></br>
            <br></br>
            New to El Dorado? <a href="">Sign Up</a>
          </h6>
        </Col>
      </Row>
    </div>
    );
};

export default LoginForm;