import { useMemo, useState, useRef, useEffect } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

export default function App() {
  const [userName, setUserName] = useState("matt99");
  const [password, setPassword] = useState("password1!");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tenetur molestiae repellendus voluptas, distinctio eaque saepe possimus nihil, iusto, recusandae quibusdam pariatur dolorem voluptatum maiores qui quae accusantium deserunt nemo."
  );
  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceYearsRef = useRef();

  const formRef = useRef();

  const isUserNameValid = useMemo(() => {
    const charsValid = userName
      .split("")
      .every(
        (char) => letters.includes(char.toLowerCase()) || numbers.includes(char)
      );
    return charsValid && userName.trim().length >= 6;
  }, [userName]);

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((char) => letters.includes(char)) &&
      password.split("").some((char) => numbers.includes(char)) &&
      password.split("").some((char) => symbols.includes(char))
    );
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    const len = description.trim().length;
    return len >= 100 && len <= 1000;
  }, [description]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value;

    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim() ||
      !isUserNameValid ||
      !isPasswordValid ||
      !isDescriptionValid
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

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);

  const resetForm = (e) => {
    e.preventDefault();
    setUserName("");
    setPassword("");
    setDescription("");
    fullNameRef.current.value = "";
    specializationRef.current.value = "";
    experienceYearsRef.current.value = "";
    fullNameRef.current.focus();
  };

  return (
    <div>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label>
          <p>Nome e Cognome</p>
          <input type="text" ref={fullNameRef} />
        </label>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {userName.trim() && (
            <p style={{ color: isUserNameValid ? "green" : "red" }}>
              {isUserNameValid
                ? "Username valido"
                : "Deve avere almeno 6 caratteri alfanumerici"}
            </p>
          )}
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.trim() && (
            <p style={{ color: isPasswordValid ? "green" : "red" }}>
              {isPasswordValid
                ? "Password valida"
                : "Deve avere almeno 8 caratteri, una lettera, un numero, un simbolo"}
            </p>
          )}
        </label>
        <label>
          <p>Specializzazione</p>
          <select ref={specializationRef}>
            <option>Seleziona</option>
            <option value="Full Stack">Full Stack</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input type="number" ref={experienceYearsRef} />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {description.trim() && (
            <p style={{ color: isDescriptionValid ? "green" : "red" }}>
              {isDescriptionValid
                ? "Descrizione valida"
                : `Deve avere tra 100 e 1000 caratteri (${
                    description.trim().length
                  })`}
            </p>
          )}
        </label>
        <button type="submit">Registrati</button>
        <button onClick={resetForm}>Reset</button>
      </form>
      <button
        onClick={() => {
          formRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        className="scroll-top-btn"
      >
        ⇑
      </button>
    </div>
  );
}
