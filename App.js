
import './App.css';

import abc from './assets/doggie.jpg';
function App({name,time,message}) {
  
  return (
  <>
  <div className={`container${name==="Mugil" ? "intend":""}`} >
    <div><img width="50px"src="https://t4.ftcdn.net/jpg/01/18/03/35/360_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg"></img></div>
    <div className="right">
      <div className="top"><strong>{name}</strong><span style={{color:"grey"}}>Today at {time}</span></div>
      <p>{message}</p>
    </div>
  </div>
  </>
  );
}

export default App;
