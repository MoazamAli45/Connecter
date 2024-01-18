"use client";

import React from "react";
import { EmailInput, TextInput } from "./Input";
import { SubscribeButton } from "./Button";
import { useState } from "react";
import { toast } from "sonner";
import jsonp from "jsonp";

const NewsLetterForm = ({ styles }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !firstName || !lastName) {
      toast.error("Please fill all the fields");
      return;
    }
    const url = process.env.NEXT_PUBLIC_MAIL_CHIMP_URL;
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {});
    toast.success("Subscribed Successfully");
    setEmail("");
    setFirstName("");
    setLastName("");
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
          name="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="w-full sm:w-1/3 text-center sm:text-start">
          <SubscribeButton onClick={submitHandler}>Subscribe</SubscribeButton>
        </div>
      </div>
    </form>
  );
};

export default NewsLetterForm;
