import React from "react"
import styles from '../styles/Login.module.css'
import { route } from "next/dist/server/router"
import { useRouter } from "next/router"
import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      const data = { username: email, password };

      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "username": "",
        "password": ""
      });

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      if (response.status == 200) {
        const resJson = await response.json();
        console.log("response =>", resJson);
        window.localStorage.setItem("token", resJson.token);
        window.localStorage.setItem("tokenExpTime", resJson.tokenExpTime);
        router.push("/home");
      } else if (response.status == 401) {
        setErrorMessage("Хэрэглэгчийн нэр эсвэл нууц үг буруу байна");
      } else {
        setErrorMessage("Алдаа гарлаа");
      }
    } catch (err) { }
  };
  return (
    <div className={styles.laana}>
      <div>
        <div className={styles.laana1}>
          <div className={styles.logo2}></div>
        </div>
      </div>
      <div className={styles.cont}>
        <div className={styles.mail}>
          <i className="fa-solid fa-envelope"></i>
          <input
            id="username-address"
            name="username"
            type="text"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="mail"
            placeholder="Цахим шуудан"
          />
        </div>
        <div className={styles.pass}>
          <i className="fa-solid fa-lock"></i>
          <input
            id="password"
            name="password"
            type="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="pass"
            placeholder="Нууц үг"
          />
          <div className={styles.check}>
            <input type="checkbox" />
            <label>Намайг сануул</label>
          </div>
        </div>
        <div className={styles.submit}>
          <a href="/home">
            <input value="Нэвтрэх" type="button" />
          </a>
          <div className={styles.create}>
            <a href="/create_acc"> Хаяг нээх </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;
