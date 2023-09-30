import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import Link from "next/link";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("science");

  return (
    <div className="flex justify-center  items-center gap-x-6 text-white max-md:flex-col">
      <InputText
        className="form-control"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></InputText>

      <Link
        href={`/Search/?search=${searchValue}`}
      >
        Search
      </Link>


    </div>
  );
};

export default SearchBox;
