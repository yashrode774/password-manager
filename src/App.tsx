import React, {useState} from 'react';
import './App.css';
import PasswordItem from "./components/Password/PasswordItem";

function App() {
    const [passwordList, setPasswordList] = useState<any[]>([]);

    return (
        <>
            <div className="App">
                <div className="formContainer">
                    <PasswordItem passwordList={passwordList} setPasswordList={setPasswordList}></PasswordItem>
                </div>
            </div>
            <div className="passwordList">
                {passwordList.map((password, index) => (
                    <div className="item" key={index}>
                        <p><label>Website:</label><span>{password[0]}</span></p>
                        <p><label>Username:</label><span>{password[1]}</span></p>
                        <p><label>Password:</label><span hidden={true}>{password[2]}</span></p>
                    </div>
                ))}
            </div>
        </>
  );
}

export default App;
