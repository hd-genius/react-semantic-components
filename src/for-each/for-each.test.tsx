import React from "react";
import { render, screen } from "@testing-library/react";
import { ForEach } from "./for-each";

describe("ForEach", () => {
  it("should render the content once for each item when the children is an element", () => {
    render(
      <ForEach items={[1, 2, 3]}>
        <div>Test text</div>
      </ForEach>
    );
    expect(screen.getAllByText("Test text")).toHaveLength(3);
  });

  it("should render the content once for each item when the children is a render function", () => {
    render(
      <ForEach items={[1, 2, 3]}>
        {(item: number) => <div key={item}>Test text</div>}
      </ForEach>
    );
    expect(screen.getAllByText("Test text")).toHaveLength(3);
  });

  it("should render the result of passing the each to the render function", () => {
    const renderItem = (item: number) => (
      <div key={item}>Test text {item} </div>
    );
    render(<ForEach items={[1, 2]}>{renderItem}</ForEach>);
    expect(screen.getByText("Test text 1")).toBeVisible();
    expect(screen.getByText("Test text 2")).toBeVisible();
  });

  it("should not show anything when there are not any items", () => {
    render(<ForEach items={[]}>Test text</ForEach>);
    expect(screen.queryByText("Test text")).toBeNull();
  });
});
