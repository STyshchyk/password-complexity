import './App.scss';
import MyInput from "./components/UI/MyInput/MyInput";
import React from "react";

function App() {
    const [password, setPassword] = React.useState("");
    const [passComplexity, setPassComplexity] = React.useState(
        {
            box1: "gray",
            box2: "gray",
            box3: "gray"
        }
    )
    function handleChange(e) {
        setPassword(prevState => prevState = e.target.value)
        getComplexity(e.target.value);
    }

    function getComplexity(pass) {
        if (pass.length <= 0) {
            setPassComplexity({
                box1: "gray",
                box2: "gray",
                box3: "gray"
            })
            return;
        }
        let med = new RegExp(`(?=.*([a-z]|[A-Z]))(?=.*[!@#$%^&*])(?=.{8,})|(?=.*([a-z]|[A-Z]))(?=.*[0-9])(?=.{8,})|(?=.*([!@#$%^&*]))(?=.*[0-9])(?=.{8,})`)
        let hard = new RegExp(`(?=.*([a-z]|[A-Z]))(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{8,})`)
        if (hard.test(pass)) {
            setPassComplexity({
                box1: "green",
                box2: "green",
                box3: "green"
            })
        } else if (med.test(pass)) {
            setPassComplexity({
                box1: "yellow",
                box2: "yellow",
                box3: "gray"
            })
        } else {
            setPassComplexity({
                box1: "red",
                box2: "gray",
                box3: "gray"
            })
        }

    }

    return (
        <div className="App">
            <MyInput
                value={password}
                onChange={handleChange}
                type={"password"}
            />
            <div className="box-complexity">
                <div className={`easy ${passComplexity.box1}`}></div>
                <div className={`mid ${passComplexity.box2}`}></div>
                <div className={`hard ${passComplexity.box3}`}></div>
            </div>
        </div>
    );
}

export default App;
