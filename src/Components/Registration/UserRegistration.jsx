import React, { useState } from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap';
import { PasswordHashing, PasswordValidation } from '../Password/Password';
import './UserRegistration.css';


const UserRegistration = () => {

    const [user, setUser] = useState({
        mail: '',
        password: '',
        confirmPassword:''
    });
    const [errors,setError]=useState(null);
    const [submitted, setSubmitted] = useState(false); 
    const [register, setRegister] = useState(false);    

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }
    function validation(){
        let error={};
        if(!user.mail){
            error["mail"] = "Mail Cannot be empty";
        }
        if(!user.password){
            error["password"] = "Password Cannot be empty";
        }
        if(!user.confirmPassword){
            error["confirmPassword"] = "Confirm PasswordCannot be empty";
        }
        if (user.password!==user.confirmPassword){
            error["confirmPassword"] = "Passwords are not same" ;
        }
        else{
            if (!PasswordValidation(user.password)){
                error["password"] = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
            }
        }
        
        setError(error);
        if (Object.keys(error).length === 0) 
        {return true;}
        return false;
    }

    function handleSubmit(e) {
            e.preventDefault();
            if (user.mail && user.password && user.confirmPassword) {
                setSubmitted(true);
                if (validation()){
                    setRegister(true);
                    const mail=user.mail;
                    const hashedPassword = PasswordHashing(user.password);
                    console.log(mail,hashedPassword);
                }                 
            }
        }
        
        return (
            <div className="register-container container">
                <Row className="justify-content-md-center">
                    <Col md="4">
                        <Row id = "header"><h2 className="text-center display-5">Register</h2></Row>
                        <Row>
                            <Form name="form" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email" name="mail" value={user.mail} onChange={handleChange}/>
                                    <Form.Text className="text-muted">
                                        {submitted && <span style={{color: "red"}}>{errors["mail"]}</span>}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
                                    <Form.Text className="text-muted">
                                        {submitted && <span style={{color: "red"}}>{errors["password"]}</span>}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control required type="password" placeholder="Confirm Password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                                    <Form.Text className="text-muted">
                                        {submitted && <span style={{color: "red"}}>{errors["confirmPassword"]}</span>}
                                    </Form.Text>
                                </Form.Group>
                                
                                {!register && <Button variant="primary" type="submit"> Submit </Button>}
                                { register && submitted && <button disabled>Submit..<span className="spinner-border spinner-border-sm mr-1"></span></button>}
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </div>    
     );
}
 
export default UserRegistration;
 
