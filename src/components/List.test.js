import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import List from "./List";
import ListItem from "./ListItem";

const notesFixtures = [
  {
    id: "109156be-c4fb-41ea-b1b4-efe1671c5836",
    title: "Hello",
    body: "This is my body",
    bodyPersistedVersion: "This is my body",
    bodyEncrypted: "SECRET",
    createdAt: new Date(1517743704 * 1000),
    updatedAt: new Date(1517743704 * 1000)
  },
  {
    id: "209156be-c4fb-41ea-b1b4-efe1671c5836",
    title: "Another note",
    body: "Another body",
    bodyPersistedVersion: "Another body",
    bodyEncrypted: "SECRET2",
    createdAt: new Date(1517743704 * 1000),
    updatedAt: new Date(1517743704 * 1000)
  }
];

it("renders without crashing", () => {
  shallow(<List notes={notesFixtures} />);
});

describe("renders a list of notes", () => {
  const wrapper = shallow(<List notes={notesFixtures} />);

  it("renders an ul with the class list-group", () => {
    expect(wrapper.find("div").hasClass("list-group")).toEqual(true);
  });

  it("renders every note as <ListItem />", () => {
    expect(wrapper.find(ListItem).length).toEqual(notesFixtures.length);
  });

  it("snapshot test", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
