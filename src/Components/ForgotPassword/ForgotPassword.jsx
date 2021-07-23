import { Row, Col, Form, Button } from 'react-bootstrap';
const ForgotPassword = () => {
    return (
        <div className="register-container container">
            <Row className="justify-content-md-center">
                <Row ><h2 className="text-center display-5">Forgot Password</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="6">
                        <br />
                        <p className ="text-center" >Enter the email associated with your account and we'll send an email with instructions to reset your password</p>                    
                    </Col>
                </Row>

                <Col md="4">
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Send Instructions
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>);
}

export default ForgotPassword;