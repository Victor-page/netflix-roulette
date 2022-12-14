import { useNavigate, useLocation, createSearchParams } from "react-router-dom";

import { SortSelector } from "components";

const sortOptionsList = [
  { value: "vote_average", label: "Rating" },
  { value: "release_date", label: "Release date" },
];

export const GeneralFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;
  const sortByURLSearchParam = new URLSearchParams(search).get("sortBy");

  const onSortOptionChange = (option) => {
    const searchParams = { sortBy: option };
    const genreSearchParam = new URLSearchParams(search).get("genre");

    if (genreSearchParam) searchParams.genre = genreSearchParam;

    navigate({
      ...location,
      search: `${createSearchParams(searchParams)}`,
    });
  };

  return (
    <SortSelector
      options={sortOptionsList}
      onChange={onSortOptionChange}
      value={sortByURLSearchParam ?? "vote_average"}
      label="Sort by"
    />
  );
};
