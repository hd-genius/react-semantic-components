import React from "react";
import { render, screen } from "@testing-library/react";
import { Conditional } from "./conditional";
import { If } from "./if";
import { Else } from "./else";
import { ElseIf } from "./else-if";

describe("Conditional", () => {
  it("should show the If's content when the condition is true", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={true}>{content}</If>
      </Conditional>
    );
    expect(screen.getByText(content)).toBeVisible();
  });

  it("should not show the If's content when the condition is false", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={false}>{content}</If>
      </Conditional>
    );
    expect(screen.queryByText(content)).toBeNull();
  });

  it("should not show the ElseIf's content when the If's condition is true", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={true}></If>
        <ElseIf condition={true}>{content}</ElseIf>
      </Conditional>
    );
    expect(screen.queryByText(content)).toBeNull();
  });

  it("should not show the ElseIf's content when a preceding ElseIf's condition is true", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={false}></If>
        <ElseIf condition={true}></ElseIf>
        <ElseIf condition={true}>{content}</ElseIf>
      </Conditional>
    );
    expect(screen.queryByText(content)).toBeNull();
  });

  it("should not show the ElseIf's content when all preceding If and ElseIf's conditions are false", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={true}></If>
        <ElseIf condition={true}></ElseIf>
        <ElseIf condition={true}>{content}</ElseIf>
      </Conditional>
    );
    expect(screen.queryByText(content)).toBeNull();
  });

  it("should not show the ElseIf's content when it's condition is false", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={false}></If>
        <ElseIf condition={false}></ElseIf>
        <ElseIf condition={false}>{content}</ElseIf>
      </Conditional>
    );
    expect(screen.queryByText(content)).toBeNull();
  });

  it("should show the ElseIf's content when all If and ElseIf conditions are false and it's condition is true", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={false}></If>
        <ElseIf condition={false}></ElseIf>
        <ElseIf condition={true}>{content}</ElseIf>
      </Conditional>
    );
    expect(screen.getByText(content)).toBeVisible();
  });

  it("should show the Else's content when all If and ElseIf conditions are false", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={false}></If>
        <ElseIf condition={false}></ElseIf>
        <Else>{content}</Else>
      </Conditional>
    );
    expect(screen.getByText(content)).toBeVisible();
  });

  it("should not show the Else's content when an If's condition is true", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={true}></If>
        <Else>{content}</Else>
      </Conditional>
    );
    expect(screen.queryByText(content)).toBeNull();
  });

  it("should not show the Else's content when any ElseIf's condition is true", () => {
    const content = "some content";
    render(
      <Conditional>
        <If condition={false}></If>
        <ElseIf condition={true}></ElseIf>
        <Else>{content}</Else>
      </Conditional>
    );
    expect(screen.queryByText(content)).toBeNull();
  });
});
