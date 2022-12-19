import { render, cleanup, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { GeneralFilter } from "components";

import { sortList } from "components/GeneralFilter/model";

afterEach(cleanup);

describe("<GeneralFilter />", () => {
  test("renders select", () => {
    render(
      <Router>
        <GeneralFilter />
      </Router>
    );

    const label = screen.getByTestId("sort-selector-label");
    const select = screen.getByTestId("sort-selector-select");

    expect(label.tagName).toBe("LABEL");
    expect(label.textContent).toBe("Sort by");
    expect(select.options.length).toBe(sortList.length);
  });

  test("vote average should be the default option", () => {
    render(
      <Router>
        <GeneralFilter />
      </Router>
    );

    const defaultOption = screen.getByTestId("vote_average");

    expect(defaultOption.selected).toBe(true);
  });
});
