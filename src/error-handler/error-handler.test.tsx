import React from "react";
import { render, screen } from "@testing-library/react";
import { Try } from "./try";
import { ErrorHandler } from "./error-handler";
import { Catch } from "./catch";

describe("ErrorHandler", () => {
  const ComponentWithError = () => {
    throw new Error("some error");
  };

  it("should show the Try content when no error is thrown", () => {
    const textContent = "Some text";
    render(
      <ErrorHandler>
        <Try>{textContent}</Try>
      </ErrorHandler>
    );
    expect(screen.getByText(textContent)).toBeVisible();
  });

  it("should not show the Try content when an error is thrown", () => {
    const textContent = "Some text";
    render(
      <ErrorHandler>
        <Try>
          <ComponentWithError />
          {textContent}
        </Try>
      </ErrorHandler>
    );
    expect(screen.queryByText(textContent)).toBeNull();
  });

  it("should show the catch content when an error is thrown", () => {
    const textContent = "Some text";
    render(
      <ErrorHandler>
        <Try>
          <ComponentWithError />
        </Try>
        <Catch>{textContent}</Catch>
      </ErrorHandler>
    );
    expect(screen.getByText(textContent)).toBeVisible();
  });

  it("should not show the catch content when an error is not thrown", () => {
    const textContent = "Some text";
    render(
      <ErrorHandler>
        <Try>success</Try>
        <Catch>{textContent}</Catch>
      </ErrorHandler>
    );
    expect(screen.queryByText(textContent)).toBeNull();
  });
});
