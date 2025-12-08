import React, { useContext } from 'react';
import { MyContext } from '../Context/ContextProvider';
import { Link } from 'react-router-dom';

const Register = () => {
  const { firstName, setFirstName, lastName, setLastName, password, setPassword, email, setEmail, RegisterSubmitFun } = useContext(MyContext);

  return (
    <>
      <div className="login-wrapper">
        <div className="login-card shadow">
          <h1 className="text-center mb-4">Register Here</h1>

          <form onSubmit={RegisterSubmitFun}>
            <input type="text" className="form-control mb-3" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <input type="text" className="form-control mb-3" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
            <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="submit" className="btn btn-primary w-100" value="Register" />
          </form>

          {/* ⭐ Already registered? Section */}
          <div className="text-center mt-3">
            <p className="mb-0">
              Already have an account?{" "}
              <Link to="/login" className="text-primary fw-semibold">
                Sign In
              </Link>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Register;
