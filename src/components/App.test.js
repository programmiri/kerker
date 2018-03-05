import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import App from "./App";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import ListOptions from "./ListOptions";
import Note from "./Note";
import NoteDetails from "./NoteDetails";
import LockButton from "./LockButton";

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

const currentNoteFixture = notesFixtures[0];

describe("<App /> when not logged in", () => {
  it("renders without crashing", () => {
    shallow(<App notes={notesFixtures} userIsLoggedIn={false} />);
  });

  const wrapper = shallow(<App notes={notesFixtures} userIsLoggedIn={false} />);

  it("does not renders <Notes />", () => {
    expect(wrapper.find(Note).exists()).toBe(false);
  });

  it("snapshot test", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("<App /> when logged in", () => {
  it("renders without crashing", () => {
    shallow(<App notes={notesFixtures} userIsLoggedIn={true} />);
  });

  it("renders always <ListOptions /> and <List /> components", () => {
    const wrapper = shallow(
      <App notes={notesFixtures} userIsLoggedIn={true} />
    );
    expect(wrapper.find(ListOptions).exists()).toBe(true);
    expect(wrapper.find(List).exists()).toBe(true);
  });

  describe("renders <Note /> and <NoteDetails /> only when a Note is selcted", () => {
    describe("renders shows an placeholder as long as there is no note selected", () => {
      const wrapper = shallow(
        <App notes={notesFixtures} userIsLoggedIn={true} currentNote={null} />
      );

      it("renders shows an placeholder as long as there is no note selected", () => {
        expect(wrapper.find(NoteDetails).exists()).toBe(false);
        expect(wrapper.find(Note).exists()).toBe(false);
        expect(wrapper.contains("No note yet.")).toBe(true);
      });

      it("snapshot test", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });

    describe("renders shows an placeholder as long as there is no note selected", () => {
      const wrapper = shallow(
        <App
          notes={notesFixtures}
          userIsLoggedIn={true}
          currentNote={currentNoteFixture}
        />
      );
      it("renders <Note /> and <NoteDetails /> when a Note is selcted", () => {
        expect(wrapper.find(NoteDetails).exists()).toBe(true);
        expect(wrapper.find(Note).exists()).toBe(true);
      });

      it("snapshot test", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
