import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import AuthInitialization from "./AuthInitialization";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    AuthInitialization();
    const auth = getAuth();
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
         sendEmailVerification(auth.currentUser).then((result) => {
           console.log(result);
         });
        if (user.user.emailVerified) {
         console.log(user);
       }
      }) 
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
  }; const handleResetPass = (e) => {
     e.preventDefault();
     AuthInitialization();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
 
  return (
    <div>
      <h1>Sign Up</h1>
      <div className="container text-start w-50">
        <Form onSubmit={handleRegistration}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={getEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={getPassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleRegistration}
          >
            Register
          </button>
          <button className="btn btn-warning" onClick={handleResetPass}>Reset Password</button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
