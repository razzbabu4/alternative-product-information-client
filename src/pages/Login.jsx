import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../public/login.svg';
// import useAuth from '../hooks/useAuth';
// import {toast} from "react-toastify"

const Login = () => {
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card card-body shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex items-center pt-4">
                        <div className="flex-grow h-px dark:bg-gray-300"></div>
                        <p className="text-center text-sm">Login with social accounts</p>
                        <div className="flex-grow h-px  dark:bg-gray-300"></div>
                    </div>
                    <div className="mt-6">
                            <button className="btn btn-block">Google</button>
                        </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600 ">Do not have an account? 
                        <Link to='/register' className="text-base text-violet-700"> Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;