import React, {useEffect, useState} from 'react';
import './App.css';
import PasswordItem from "./components/Password/PasswordItem";

function App() {
    const [passwordList, setPasswordList] = useState<any[]>([]);
    const [showPasswords, setShowPasswords] = useState<boolean[]>(Array(passwordList.length).fill(false));

    // Fetch the existing passwords form the file, at the start of the app.
    useEffect(() => {
    fetch('/Passwords.json')
      .then(response => response.text())
      .then(data => {
        const passwordsArray = JSON.parse(data);
        setPasswordList(passwordsArray);
        setShowPasswords(Array(passwordsArray.length).fill(false));
      })
      .catch(err => console.error('Error fetching file:', err));
  }, []);

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
