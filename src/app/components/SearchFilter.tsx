// app/components/SearchFilter.tsx
import React from "react";
import { TextField } from "@mui/material";

interface SearchFilterProps {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  search,
  handleSearch,
}) => {
  return (
    <TextField
      label="Search Facilities"
      type="text"
      value={search}
      onChange={handleSearch}
      fullWidth
      margin="normal"
    />
  );
};

export default SearchFilter;
