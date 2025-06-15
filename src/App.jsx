import { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState("Mattia Natale");
  const [userName, setUserName] = useState("matt99");
  const [password, setPassword] = useState("password");
  const [specialization, setSpecialization] = useState("FrontEnd");
  const [experienceYears, setExperienceYears] = useState("1");
  const [description, setDescription] = useState("Junior webdeveloper");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim()
    ) {
      alert("Compilare tutti i campi correttamente");
      return;
    }
    console.log("Submit effettuato", {
      fullName,
      userName,
      password,
      specialization,
      experienceYears,
      description,
    });
  };

  return (
    <div>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome e Cognome</p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Specializzazione</p>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="Full Stack">Full Stack</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input
            type="number"
            value={experienceYears}
            onChange={(e) => setExperienceYears(e.target.value)}
          />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}
