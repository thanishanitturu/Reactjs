import { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from "./components/About";

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     Routes
// } from "react-router-dom";


function App() {
    const [mode,setMode]=useState("light")
    const [alert,setAlert]=useState(null)

    const showAlert=(message,type)=>
    {
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    const toggleMode=()=>
    {
        if(mode==='light')
        {
            setMode('dark');
            document.body.style.backgroundColor="#042743";
            showAlert("dark mode enabled","success");
            document.title="TextUtils:Dark Mode";

            // To change the title of webage
            // setInterval(()=>
            // {
            //     document.title="TextUtils:Dark Mode";
            // },2000)
            // setInterval(()=>
            // {
            //     document.title="dark mode is amazing"
            // },1500)

        }
        else{
            setMode('light')
            document.body.style.backgroundColor="white";
            showAlert("light mode enabled","success");
            // document.title="TextUtils:Light Mode";


            // setInterval(()=>
            // {
            //     document.title="TextUtils:Light Mode";
            // },2000)
            // setInterval(()=>
            // {
            //     document.title="Light mode is amazing"
            // },1500)
        }
    }
    const greenMode=()=>
    {
        document.body.style.backgroundColor="green";
        showAlert("Green mode enabled","success");
    
    }
    return (
        <>
        {/* <Router> */}
{/* For we remove the things regarding routes and also in navbar.js we change link to -a href since we will remove Link */}
<Navbar text="TextUtils" aboutText="About Text" mode={mode} toggleMode={toggleMode} greenMode={greenMode}/>
<Alert alert={alert}/>
{/* This is without routing */}
{/* <div className='container my-3'>
<TextForm text="Enter the text here" mode={mode} showAlert={showAlert}/>
</div> */}
{/* <switch>
    <Routes>
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/" element={<div className='container my-3'><TextForm text="Enter the text here" mode={mode} showAlert={showAlert}/></div>}>
    </Route>
    </Routes>
</switch> */}
<div className='container my-3'><TextForm text="Enter the text here" mode={mode} showAlert={showAlert}/></div>
{/* <About/> */}
{/* </Router> */}
</>
    );
}

export default App;