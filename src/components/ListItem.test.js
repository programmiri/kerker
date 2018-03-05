import React from "react";
import { shallow } from "enzyme";
import ListItem from "./ListItem";

const noteFixture = {
  id: "209156be-c4fb-41ea-b1b4-efe1671c5836",
  title: "Another note",
  body: "Another body",
  bodyPersistedVersion: "Another body",
  bodyEncrypted: "SECRET2",
  createdAt: new Date(1517743704 * 1000),
  updatedAt: new Date(1517743704 * 1000)
};

it("renders without crashing", () => {
  shallow(
    <ListItem
      id={noteFixture.id}
      title={noteFixture.title}
      createdAt={noteFixture.createdAt}
      key={noteFixture.id}
    />
  );
});

describe("renders a list item", () => {
  const wrapper = shallow(
    <ListItem
      id={noteFixture.id}
      title={noteFixture.title}
      createdAt={noteFixture.createdAt}
      key={noteFixture.id}
    />
  );

  it("renders an li element with the class list-group-item", () => {
    expect(wrapper.hasClass("list-group-item")).toEqual(true);
  });

  it("displays a custom text as name", () => {
    expect(wrapper.text()).toContain(noteFixture.title);
  });

  it("contains a date in the format YYYY-MM-DD", () => {
    expect(wrapper.text()).toContain("2018-02-04");
  });
});
