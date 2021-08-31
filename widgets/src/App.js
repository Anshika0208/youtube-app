import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is frontend JS framework.",
  },
  {
    title: "How is it used?",
    content: "It is used by using reusable components",
  },
  {
    title: "Any one feature of JS?",
    content: "It uses virtual DOM for fast rendering",
  },
];

const colors = [
  {
    label: "Fire",
    value: "red",
  },
  {
    label: "Ocean",
    value: "blue",
  },
  {
    label: "Trees",
    value: "green",
  },
];

export default () => {
  const [selectedItem, selectItem] = useState(colors[0]);

  return (
    <div>
      <Header />
      <Route pathname="/">
        <Accordion items={items} />
      </Route>
      <Route pathname="/list">
        <Search />;
      </Route>
      <Route pathname="/dropdown">
        <Dropdown
          options={colors}
          selected={selectedItem}
          onSelectedChange={selectItem}
        />
      </Route>
      <Route pathname="/translate">
        <Translate />
      </Route>
    </div>
  );
};

// export default () => {
