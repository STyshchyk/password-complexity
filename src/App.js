import './App.scss';
import MyInput from "./components/UI/MyInput/MyInput";
import React from "react";
function App() {
    const [value, setValue] = React.useState("");
    function handleChange(e){
        setValue(e.target.value)
    }
    return (
        <div className="App">
            <MyInput
                value={value}
                onChange={ handleChange}
                type={"password"}
            />
            <div className="box-complexity">
                <div className="easy"></div>
                <div className="mid"></div>
                <div className="hard"></div>
            </div>
            <div className="text-complexity">
                <p>Your text is easy</p>
            </div>
        </div>
    );
}

export default App;
