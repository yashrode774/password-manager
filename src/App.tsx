import React, {useState} from 'react';
import './App.css';
import PasswordItem from "./components/Password/PasswordItem";

function App() {
    const [passwordList, setPasswordList] = useState<any[]>([]);
    const [showPasswords, setShowPasswords] = useState<boolean[]>(Array(passwordList.length).fill(false));

    function togglePasswordVisibility(index: number) {
        const newShowPasswords = [...showPasswords];
        newShowPasswords[index] = !newShowPasswords[index];
        setShowPasswords(newShowPasswords);
    }
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
                        <p><label>Password:</label><span>{showPasswords[index] ? password[2] : "****"}</span></p>
                        <input type="button" value={showPasswords[index] ? 'hide' : 'show' } onClick={()=>togglePasswordVisibility(index)}/>
                    </div>
                ))}
            </div>
        </>
  );
}

export default App;
