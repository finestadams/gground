import { render, screen } from "@testing-library/react";
import { BooksLists } from "@/components/BooksLists";

import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import { Footer } from "@/components/Footer";

describe("Books", () => {
  let store: any;
  it("Home component should render", () => {
    <Provider store={store}>
      <BooksLists />
    </Provider>;
  });
});

describe("Footer", () => {
  let store: any;
  it("footer", () => {
    render(<Footer />);
  });
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
