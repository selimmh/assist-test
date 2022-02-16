import React, { useState } from "react";

export const Contact = () => {
  const [jsonData, setJsonData] = useState({
    name: "",
    surname: "",
    phoneNum: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const emailValidator = (email) => (email.includes("@") ? true : false);
  const isOnlyLetters = (text) => (/^[a-zA-Z]+$/.test(text) ? true : false);
  const isOnlyNumbers = (number) => (number.match(/^[0-9]+$/) ? true : false);
  const [submitted, setSubmitted] = useState(false);

  const dataValidator = () => {
    !emailValidator(jsonData.email) && setError("Email error");
    !isOnlyLetters(jsonData.name) && setError("Name error");
    !isOnlyLetters(jsonData.surname) && setError("Surname error");
    !isOnlyNumbers(jsonData.phoneNum) && setError("Phone error");

    return emailValidator(jsonData.email) &&
      isOnlyLetters(jsonData.name) &&
      isOnlyLetters(jsonData.surname) &&
      isOnlyNumbers(jsonData.phoneNum)
      ? true
      : false;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pl-[100px] md:pl-[230px]">
      <div className="flex flex-col space-y-5">
        <input
          className="border-2 border-black"
          placeholder="Name"
          type="text"
          onChange={(e) => setJsonData({ ...jsonData, name: e.target.value })}
        />
        <input
          className="border-2 border-black"
          placeholder="Surname"
          type="text"
          onChange={(e) =>
            setJsonData({ ...jsonData, surname: e.target.value })
          }
        />
        <input
          className="border-2 border-black"
          type="tel"
          placeholder="Phone"
          onChange={(e) =>
            setJsonData({ ...jsonData, phoneNum: e.target.value })
          }
        />
        <input
          className="border-2 border-black"
          placeholder="Email"
          type="email"
          onChange={(e) => setJsonData({ ...jsonData, email: e.target.value })}
        />
        <button
          className="border-2 border-black hover:bg-black hover:text-white"
          onClick={() => {
            dataValidator();
            dataValidator() && setSubmitted(true);
          }}
        >
          Submit
        </button>
      </div>
      {!submitted && error && error}
      {submitted && (
        <div>
          Name: {jsonData.name}
          Surname:{jsonData.surname}
          Email:{jsonData.email}
          PhoneNum:{jsonData.phoneNum}
        </div>
      )}
    </div>
  );
};

export default Contact;
