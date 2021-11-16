import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
    submitting: false,
    success: false,
    submitted: false,
    verifying: false,
  });
  const [focus, setFocus] = useState({ email: false, password: false });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const isValid = (type, value) => {
    console.log(type + " " + value);
    if (type === "username")
      if (value !== "")
        setValidation((oldValues) => {
          return { ...oldValues, email: true };
        });
      else
        setValidation((oldValues) => {
          return { ...oldValues, email: false };
        });
    else if (type === "password")
      if (value !== "")
        setValidation((oldValues) => {
          return { ...oldValues, password: true };
        });
      else
        setValidation((oldValues) => {
          return { ...oldValues, password: false };
        });
  };

  return (
    <div className="App">
      <div className="brand">
        <a href="https://www.codechef.com" target="_blank" rel="noreferrer">
          <img src="/cc-logo.png" alt="" />
        </a>
      </div>
      <div
        className={`login ${
          data.submitting
            ? data.verifying
              ? "test testtwo"
              : data.submitted
              ? "test"
              : "test"
            : ""
        }`}
      >
        <div
          className="login_title"
          style={{ display: data.success ? "none" : "block" }}
        >
          <span>Login to your account</span>
        </div>
        <div
          className="login_fields"
          style={{ display: data.success ? "none" : "block" }}
        >
          <div className="login_fields__user">
            <div
              className="icon"
              style={{ opacity: focus.email ? "1" : "0.5" }}
            >
              <img src="/icons/user_icon.png" alt="" />
            </div>
            <input
              placeholder="Username"
              type="text"
              value={data.email}
              onChange={(e) => {
                isValid("username", e.target.value);
                setData((oldValues) => {
                  return { ...oldValues, email: e.target.value };
                });
              }}
              onFocus={() =>
                setFocus((oldValues) => {
                  return { ...oldValues, email: true };
                })
              }
              onBlur={() =>
                setFocus((oldValues) => {
                  return { ...oldValues, email: false };
                })
              }
            />
            <div
              className="validation"
              style={
                validation.email
                  ? { opacity: "1", right: "30px" }
                  : { opacity: "0", right: "20px" }
              }
            >
              <img src="/icons/tick.png" alt="" />
            </div>
          </div>
          <div className="login_fields__password">
            <div
              className="icon"
              style={{ opacity: focus.password ? "1" : "0.5" }}
            >
              <img src="/icons/lock_icon.png" alt="" />
            </div>
            <input
              placeholder="Password"
              type="password"
              value={data.password}
              onChange={(e) => {
                isValid("password", e.target.value);
                setData((oldValues) => {
                  return { ...oldValues, password: e.target.value };
                });
              }}
              onFocus={() =>
                setFocus((oldValues) => {
                  return { ...oldValues, password: true };
                })
              }
              onBlur={() =>
                setFocus((oldValues) => {
                  return { ...oldValues, password: false };
                })
              }
            />
            <div
              className="validation"
              style={
                validation.password
                  ? { opacity: "1", right: "30px" }
                  : { opacity: "0", right: "20px" }
              }
            >
              <img src="/icons/tick.png" alt="" />
            </div>
          </div>
          <div className="login_fields__submit">
            <input
              type="submit"
              value="Log In"
              onClick={() => {
                setData((oldValues) => {
                  return { ...oldValues, submitting: true };
                });
                setTimeout(() => {
                  setData((oldValues) => {
                    return { ...oldValues, submitting: true, verifying: true };
                  });
                }, [300]);
                setTimeout(() => {
                  setData((oldValues) => {
                    return {
                      ...oldValues,
                      submitting: true,
                      verifying: false,
                      submitted: true,
                    };
                  });
                }, [3000]);
                setTimeout(() => {
                  setData((oldValues) => {
                    return {
                      ...oldValues,
                      submitting: false,
                      verifying: false,
                      submitted: true,
                      success: true,
                    };
                  });
                }, [3500]);
              }}
            />
            <div className="forgot">
              <a href="/">Forgotten password?</a>
            </div>
          </div>
        </div>
        <div
          className="success"
          style={{ display: data.success ? "block" : "none" }}
        >
          <h2>Authentication Success</h2>
          <p>Welcome back</p>
        </div>
        <div
          className="disclaimer"
          style={{ display: data.success ? "none" : "block" }}
        >
          <p>
            By logging in, you agree to our terms of service and privacy policy
          </p>
        </div>
      </div>
      <div
        className={`authent ${data.submitted ? "visible" : ""}`}
        style={
          data.verifying
            ? { display: "block", right: "-320px", opacity: 1 }
            : data.submitted
            ? { display: "block", right: "90px", opacity: 0 }
            : {}
        }
      >
        <img src="/icons/puff.svg" alt="" />
        <p>Authenticating...</p>
      </div>
      <div className="love">
        <p>&copy; 2021, CodeChef MACE Chapter, All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
