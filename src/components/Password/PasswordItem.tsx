import {useState} from "react";
import './PasswordItem.css'

interface PasswordItemProps {
  passwordList: any[]; // Adjust the type according to your passwordList data structure
  setPasswordList: React.Dispatch<React.SetStateAction<any[]>>;
}

const PasswordItem: React.FC<PasswordItemProps> = ({ passwordList, setPasswordList }) => {
    const [input, setInput] = useState({website: "", username: "", password: ""})
    function handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        setInput(prevInput=>({
            ...prevInput,
            [name]: value
        }));
    }

    function handleClick() {
        if (input.website && input.username && input.password) {
            setPasswordList([...passwordList, [input.website, input.username, input.password]]);
            setInput({website: "", username: "", password: ""})
        }
        else {
            alert("Enter all three fields before submitting.")
        }
    }
    return <>
        <div className="passwordItem">
            {/*website*/}
            <div className="inputGroup">
                <label>Website:</label>
                <input
                    name="website"
                    value={input.website}
                    onChange={handleChange}
                    placeholder="Website"
                ></input>
            </div>

            {/*Username*/}
            <div className="inputGroup">
                <label>User name:</label>
                <input
                    name="username"
                    value={input.username}
                    onChange={handleChange}
                    placeholder="username"
                ></input>
            </div>

            {/*password*/}
            <div className="inputGroup">
                <label>password:</label>
                <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    placeholder="password"
                ></input>
            </div>

            <button className="submitButton" onClick={handleClick}>Save password</button>
        </div>
    </>
}

export default PasswordItem;
