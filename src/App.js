import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom"

const Shop = () => {
    return (
        <h1>I am the shop page</h1>
    )
}

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Routes>
    );
}

export default App;
