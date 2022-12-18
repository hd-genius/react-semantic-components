import React from "react";
import { render, screen } from "@testing-library/react";
import { Try } from "./try";
import { TryCatch } from "./try-catch";
import { Catch } from "./catch";

describe("TryCatch", () => {
  const ComponentWithError = () => {
    throw new Error("some error");
  };

  it("should show the Try content when no error is thrown", () => {
    const textContent = "Some text";
    render(
      <TryCatch>
        <Try>{textContent}</Try>
      </TryCatch>
    );
    expect(screen.getByText(textContent)).toBeVisible();
  });

  it("should not show the Try content when an error is thrown", () => {
    const textContent = "Some text";
    render(
      <TryCatch>
        <Try>
          <ComponentWithError />
          {textContent}
        </Try>
      </TryCatch>
    );
    expect(screen.queryByText(textContent)).toBeNull();
  });

  it("should show the catch content when an error is thrown", () => {
    const textContent = "Some text";
    render(
      <TryCatch>
        <Try>
          <ComponentWithError />
        </Try>
        <Catch>{textContent}</Catch>
      </TryCatch>
    );
    expect(screen.getByText(textContent)).toBeVisible();
  });

  it("should not show the catch content when an error is not thrown", () => {
    const textContent = "Some text";
    render(
      <TryCatch>
        <Try>success</Try>
        <Catch>{textContent}</Catch>
      </TryCatch>
    );
    expect(screen.queryByText(textContent)).toBeNull();
  });
});
