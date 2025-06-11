import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

  function App() {
 const navigate = useNavigate();
 const [email,setemail] = useState("")
const [pass,setpass] = useState("")

function handleemail(evt)
{
  setemail(evt.target.value)
}
function handlepass(evt)
{
  setpass(evt.target.value)
}

  const check = () => {
    axios.post("https://login-expressreact.onrender.com", {
      email: email,
      password: pass
    })
    .then(res => {
      if (res.data === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    })
    .catch(err => {
      console.error("Login failed:", err);
      navigate("/fail");
    });
  };

return (
  <div className="min-h-screen w-full bg-black relative">
    <img
      className="w-full h-full object-cover absolute top-0 left-0"
      src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
      alt="netfiypic"
      style={{ zIndex: 0 }}
    />
    <div className='flex justify-center items-center relative pt-36 opacity-80 z-10'>
      <div className='bg-black p-10 rounded-md max-w-md w-full text-white shadow-lg opacity-90'>
        <h2 className='text-3xl font-bold'>Sign In</h2>
        <div>
          <input  onChange={handleemail} name='email'  className='p-4 mt-5 rounded bg-gray-700 w-full placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-slate-400' type='email' placeholder='Enter the Email or Mobile no'></input><br />
          <input   onChange={handlepass}  name='password'className='p-3 mt-5 rounded bg-gray-700 w-full placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-slate-400' type='password' placeholder='Password'></input><br />
          <button onClick={check} type='submit'  className='bg-red-600 hover:bg-red-700 w-full py-3 mt-5 rounded font-semibold text-white transition'>Sign In</button>
          <h2 className='mt-3 text-gray-400'> OR</h2>
          <button type='submit' className='bg-gray-500 hover:bg-gray-700 w-full py-3 mt-3 rounded font-semibold text-white transition'>Use a Sign-in Code</button>
          <h2 className='text-xs mt-5 hover:underline'>Forgot Password?</h2>
          <div className="flex items-center mt-4">
            <input id="rememberMe" type="checkbox" className="mr-2" />
            <label className="text-sm">Remember me</label>
          </div>
          <h2 className='text-gray-400 mt-5'>New to Netflix?<a className='text-white hover:underline cursor-pointer font-bold'>Sign up now.</a></h2>
          <p className='p-3 text-gray-300 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          <h3 className='text-xs text-blue-600 hover:underline cursor-pointer'>Learn now</h3>
        </div>
      </div>
    </div>
    <div className='border mt-5 w-full bg-black relative z-10'>
      <h1 className='p-10 text-gray-300'>Questions? Call 000-800-919-1743 (Toll-Free)</h1>
      <div className='p-4 flex flex-wrap underline gap-16 text-gray-300'>
        <div className="flex flex-wrap w-full">
          <div className="flex flex-row flex-wrap w-full">
            <h1 className="w-1/2 sm:w-1/4 min-w-max">FAQ</h1>
            <h2 className="w-1/2 sm:w-1/4 min-w-max">Help Centre</h2>
            <h3 className="w-1/2 sm:w-1/4 min-w-max">Help Centre</h3>
            <h4 className="w-1/2 sm:w-1/4 min-w-max">Privacy</h4>
          </div>
          <div className="flex flex-row flex-wrap w-full mt-2">
            <h5 className="w-1/2 sm:w-1/4 min-w-max">Cookie Preferences</h5>
            <h6 className="w-1/2 sm:w-1/4 min-w-max">Corporate Information</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
  


export default App