import React ,{useRef,useState} from 'react';
import {Form , Card ,Button ,Alert} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login(){
    const emailRef = useRef(null);
    const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) =>{
      e.preventDefault();

      try {
          setMessage("");
          setLoading(true);
          setError("");
          await resetPassword(emailRef.current.value);
          setMessage("check your inbox for futher instructions");
      } catch (error) {
          setError("Failed to reset password");
      }
      setLoading(false);
  };

  return(
      <>
            <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </>
  );
}
export default Login;