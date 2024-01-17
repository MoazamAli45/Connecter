"use client";

import React from "react";
import { EmailInput, TextInput } from "./Input";
import { SubscribeButton } from "./Button";
import { useState } from "react";
import { toast } from "sonner";

const NewsLetterForm = ({ styles, status, message, onValidate }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //   For formating status
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !firstName || !lastName) {
      toast.error("Please fill all the fields");
      return;
    }

    if (status === "error") {
      toast.error(getMessage(message));
      return;
    }

    // onValidate({
    //   EMAIL: email,
    //   FNAME: firstName,
    //   LNAME: lastName,
    // });
  };

  return (
    <form className={`${styles}`} onSubmit={submitHandler}>
      <div className="flex flex-col   sm:flex-row gap-[20px] custom-md:gap-[30px] lg:pr-[20px] ">
        <TextInput
          placeholder={"Enter Your First Name"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextInput
          placeholder={"Enter Your Last Name"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      {/*   DOWN INPUT  */}
      <div className="flex flex-col sm:flex-row gap-[20px] custom-md:gap-[30px] my-[20px] ">
        <EmailInput
          placeholder={"Enter Your Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="w-full sm:w-1/3 text-center sm:text-start">
          <SubscribeButton onClick={submitHandler}>
            {" "}
            {status === "sending" ? "Loading..." : "Subscribe"}
          </SubscribeButton>
        </div>
      </div>
      {"success" === status && (
        <div
          className="text-green-200 font-bold pt-2"
          dangerouslySetInnerHTML={{ __html: sanitize(message) }}
        />
      )}
    </form>
  );
};

export default NewsLetterForm;
