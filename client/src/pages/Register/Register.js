import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/Actions/authActions';
import '../Login/login.css';

const Register = () => {
  const [regInfo, setRegInfo] = useState({
    name: "",
    email: "",
    password: "",
    errorMessage: ""
  })
  const  auth = useSelector((state)=>state.authReducer)
  const handleChange = (e) => {
    e.preventDefault()
    setRegInfo({
      ...regInfo,
      [e.target.name]: e.target.value,
      errorMessage: ""
    })
  }
  const dispatch = useDispatch()
  const handleRegister = (e) => {
    e.preventDefault()
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!emailPattern.test(regInfo.email)) {
      setRegInfo({ ...regInfo, errorMessage: "Email invalid" })
      return;
    }
    if (!passwordPattern.test(regInfo.password)) {
      setRegInfo({ ...regInfo, errorMessage: "Password should be minimum of 8 characters, including at least one letter and one number" })
      return;
    }
    dispatch(register(regInfo))
  }
  
  const navigate=useNavigate()
  useEffect(()=>{
      if(auth.isAuth===true){
          navigate('/profile')
      }
  },[navigate,auth.isAuth])
  return (
    <div>
      <div className="login-container">
        <div className="form-container">
          <h2 className="form-title">Welcome</h2>
          <div className="input-container">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="username" className="input-field" name='name' onChange={handleChange} />

          </div>
          <div className="input-container">
            <i className="fa fa-envelope"></i>
            <input type="text" placeholder="email" className="input-field" name='email' onChange={handleChange} />

          </div>
          <div className="input-container">
            <i className="fa fa-key"></i>
            <input type="password" placeholder="Password" className="input-field" name='password'
              onChange={handleChange} />
          </div>
          {regInfo.errorMessage !== "" && <p style={{ color: "red" }}>{regInfo.errorMessage}</p>}
          <button className="login-button" onClick={handleRegister}>REGISTER</button>
          <Link to="/login" className="signup-link">LogIn</Link>
        </div>

      </div>
    </div>
  );
}
export default Register
