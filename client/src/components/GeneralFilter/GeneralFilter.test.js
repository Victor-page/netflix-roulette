import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { GeneralFilter } from "components";

import { sortList } from "components/GeneralFilter/model";

afterEach(cleanup);

test("<GeneralFilter />", () => {
  render(
    <Router>
      <GeneralFilter />
    </Router>
  );
  // screen.debug();

  const label = screen.getByTestId("sort-selector-label");
  const select = screen.getByTestId("sort-selector-select");
  const defaultOption = screen.getByTestId("vote_average");
  // const releaseDateOption = screen.getByTestId('release_date');

  expect(label.tagName).toBe("LABEL");
  expect(label.textContent).toBe("Sort by");
  expect(defaultOption.selected).toBe(true);
  expect(select.options.length).toBe(sortList.length);

  // fireEvent.change(select, {
  //   target: { value: releaseDateOption.textContent },
  // });

  // expect(releaseDateOption.selected).toBe(true);
});
