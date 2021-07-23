import { Row, Col, Form, Button } from 'react-bootstrap';
const ResetPassword = () => {
    return (
        <div className="register-container container">
            <Row className="justify-content-md-center">
                <Row ><h2 className="text-center display-5">Reset Your Password</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="6">
                        <br />
                        <p className="text-center" >Type your new password below for future login. </p>
                    </Col>
                </Row>
                <Col md="4">
                    <Form name="form">
                        <Row>
                            <Form.Group classsName="mb-3" controlId="formBasicPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" name="password" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control required type="password" placeholder="Confirm Password" name="confirmPassword" />
                            </Form.Group>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto"><Button variant="primary" type="submit" >RESET PASSWORD </Button></Col>
                        </Row>
                    </Form>
                </Col>

            </Row>
        </div>);
}

export default ResetPassword;