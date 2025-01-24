import { useEffect, useState } from "react";

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!searchValue) return;

    fetch(
      `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchValue}`
    );
  }, [searchValue]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
