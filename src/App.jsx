import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "what is react?",
    content: "react is good",
  },
  {
    title: "Whats your name?",
    content: "Tom brady",
  },
  {
    title: "Where are you?",
    content: "None of your bussiness",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
