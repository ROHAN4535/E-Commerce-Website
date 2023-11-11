import { useRef } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const contactsObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };
    try {
      await fetch(
        "https://react-http-735e9-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(contactsObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("Something bad happened");
    }

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
  };
  return (
    <div>
      <h1 className={classes.title}>Contact US</h1>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label>Email ID:</label>
          <input type="text" ref={emailRef} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="number" ref={phoneNumberRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;