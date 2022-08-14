import React from "react";
import { render, screen } from "@testing-library/react";
import { If } from "./if";

describe("If", () => {
    it("should show its children when the condition is true", () => {
        render(<If condition={true}>
            Test text
        </If>);
        expect(screen.getByText("Test text")).toBeVisible();
    });

    it("should not show its children when the condition is false", () => {
        render(<If condition={false}>
            Test text
        </If>);
        expect(screen.queryByText("Test text")).toBeNull();
    });
})