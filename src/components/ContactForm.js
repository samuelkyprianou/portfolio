import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Input } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactForm({
  sendEmail,
  messageSuccess,
  messageError,
}) {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (name && userEmail && message) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, userEmail, message]);

  const createEmail = (e) => {
    setButtonDisabled(true);
    e.preventDefault();
    let email = {
      from_name: name,
      from_email: userEmail,
      message: message,
    };
    sendEmail(email);
  };

  return (
    <form
      className="contact-form"
      id="contact-form"
      onSubmit={(e) => createEmail(e)}
    >
      <Input
        fluid
        placeholder="Full Name"
        type="text"
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        fluid
        placeholder="E-mail"
        type="email"
        name="user_email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <div className="ui fluid input">
        <TextareaAutosize
          minRows={6}
          className="form-textarea"
          placeholder="TALK TO ME!"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="send-container">
        <div className="confirmation-message">
          <div
          className="message-style"
         
          >
                {messageError && (
              <>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className="confirmation-icon"
                  style={{ color: "aqua"}}
                />
                <p>Thanks for the message, I will get back to you ASAP!</p>{" "}
              </>
                )}
            

            {messageError && (
              <>
                <FontAwesomeIcon
                  icon={faExclamation}
                  className="confirmation-icon"
                  style={{
                    color: "#9c0039",

                  }}
                />
                <p>
                  Error. Please click{" "}
                  <a href="mailto:samuelkyprianou@gmail.com">HERE</a> to send
                  manually
                </p>{" "}
              </>
            )}
          </div>
        </div>

        <input
          disabled={buttonDisabled}
          className={buttonDisabled ? "form-button disabled" : "form-button"}
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
}
