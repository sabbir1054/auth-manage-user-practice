import {
  getAuth,
  signInWithEmailAndPassword,
  
} from "firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import AuthInitialization from "./AuthInitialization";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    AuthInitialization();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
          const user = userCredential.user;
          
          console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  
  return (
    <div>
      <h1>Login</h1>
      <div className="container text-start w-50">
        <Form onSubmit={handleLogin}>
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
            onClick={handleLogin}
          >
            Register
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
