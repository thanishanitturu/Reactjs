import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// import About from "./components/About";


function App() {
    return (
        <>
<Navbar text="TextUtils" aboutText="About Text"/>
<div className='container my-3'>
<TextForm text="Enter the text here"></TextForm>
</div>
{/* <About/> */}
</>
    );
}

export default App;