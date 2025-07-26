
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface CompanyFilterProps {
  companies: string[];
  selected: string;
  onChange: (company: string) => void;
}

const CompanyFilter = ({ companies, selected, onChange }:CompanyFilterProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="company-filter-label">Company</InputLabel>
      <Select
        labelId="company-filter-label"
        value={selected}
        label="Company"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        {companies && companies?.map((company) => (
          <MenuItem key={company} value={company}>
            {company}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CompanyFilter;
