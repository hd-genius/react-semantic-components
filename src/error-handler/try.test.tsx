import React from "react";
import { render, screen } from "@testing-library/react";
import { Try } from "./try";

describe("Try", () => {
    const ComponentWithError = () => {
        throw new Error("some error");
    };

    it("should show it's content when no error is thrown", () => {
        const textContent = "Some text";
        render(<Try>{textContent}</Try>);
        expect(screen.getByText(textContent)).toBeVisible();
    });

    it("should not show it's content when an error is thrown", () => {
        const textContent = "Some text";
        render(
            <Try>
                <ComponentWithError />
                {textContent}
            </Try>
        );
        expect(screen.queryByText(textContent)).toBeNull();
    });
});