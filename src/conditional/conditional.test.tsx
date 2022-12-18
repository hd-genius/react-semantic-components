import React from "react";
import { render, screen } from "@testing-library/react";
import { Conditional } from "./conditional";
import { If } from "./if";

describe("Conditional", () => {
    it("should show the If's content when the condition is true", () => {
        const content = "some content";
        render(<Conditional>
            <If condition={true}>{content}</If>
        </Conditional>);
        expect(screen.getByText(content)).toBeVisible();
    });

    it("should not show the If's content when the condition is false", () => {
        const content = "some content";
        render(<Conditional>
            <If condition={false}>{content}</If>
        </Conditional>);
        expect(screen.queryByText(content)).toBeNull();
    });

    it.todo("should not show the ElseIf's content when the If's condition is true");

    it.todo("should not show the ElseIf's content when a preceding ElseIf's condition is true");

    it.todo("should not show the ElseIf's content when all preceding If and ElseIf's conditions are false");

    it.todo("should show the Else's content when all If and ElseIf conditions are false");

    it.todo("should not show the Else's content when any If or ElseIf's condition is true");
});
