import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch( err => console.log(err));
     }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row ">
              <div className="text-center lg:text-left">
                 <img src={login} className="w-3/4" alt="" />
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
              <h1 className="text-5xl text-center font-bold">Sign Up </h1>
              <form  onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered"
                      name='name'
                  />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      name='email'
                      required
                  />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input
                      type="text"
                      placeholder="password"
                      name='password'
                      className="input input-bordered"
                      required
                  />
                
                  </div>
                  <div className="form-control mt-6">
                  <input  className="btn btn-primary" type="submit" value="Sign Up" />
                 
                  </div>
              </form>
                <p className="text-center" >Already Have and Account ? <Link className="text-orange-600 font-bold" to="/login">Log In</Link> </p>
              </div>
        </div>
      </div>
    );
};

export default SignUp;