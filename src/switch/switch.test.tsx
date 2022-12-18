import React from "react";
import { render, screen } from "@testing-library/react";
import { Switch } from "./switch";
import { Case } from "./case";
import { DefaultCase } from "./default-case";

describe("Switch", () => {
  it("should show a case that matches the value", () => {
    render(
      <Switch value={1}>
        <Case value={1}>Test text</Case>
      </Switch>
    );
    expect(screen.getByText("Test text")).toBeVisible();
  });

  it("should not show a case that does not match the value", () => {
    render(
      <Switch value={0}>
        <Case value={1}>Test text</Case>
      </Switch>
    );
    expect(screen.queryByText("Test text")).toBeNull();
  });

  it("should show the default case if no other cases match the value", () => {
    render(
      <Switch value={0}>
        <Case value={1}>Some case</Case>
        <DefaultCase>Test text</DefaultCase>
      </Switch>
    );
    expect(screen.getByText("Test text")).toBeVisible();
  });

  it("should show the default case if there are no other cases", () => {
    render(
      <Switch value={1}>
        <DefaultCase>Test text</DefaultCase>
      </Switch>
    );

    expect(screen.getByText("Test text")).toBeVisible();
  });

  it("should not show the default case if any other case matches the value", () => {
    render(
      <Switch value={1}>
        <Case value={1}>Some case</Case>
        <DefaultCase>Test text</DefaultCase>
      </Switch>
    );
    expect(screen.queryByText("Test text")).toBeNull();
  });
});
