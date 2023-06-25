import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { resetFilters, updateFilters } from "../../features/dsaSlice";

const Filters = ({ filters, questions = [] }) => {
  const dispatch = useDispatch();
  const handleFilterChange = (filterName, value) => {
    dispatch(updateFilters(filterName, value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleResetProgress = () => {
    dispatch(resetProgress());
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <label>
          <input
            type="checkbox"
            checked={filters.checked}
            onChange={(e) => handleFilterChange("checked", e.target.checked)}
          />
          Checked
        </label>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <h3>Patterns</h3>
          <select
            multiple
            value={filters.patterns || []}
            onChange={(e) => handleFilterChange("patterns", e.target.value)}
          >
            <option value="">All</option>
            {questions
              .flatMap((question) => question.pattern)
              .reduce((uniquePatterns, pattern) => {
                if (!uniquePatterns.includes(pattern)) {
                  uniquePatterns.push(pattern);
                }
                return uniquePatterns;
              }, [])
              .map((pattern) => (
                <option key={pattern} value={pattern}>
                  {pattern}
                </option>
              ))}
          </select>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <h3>Difficulty</h3>
          <select
            multiple
            value={filters.difficulty || []}
            onChange={(e) => handleFilterChange("difficulty", e.target.value)}
          >
            <option value="">All</option>
            {questions
              .map((question) => question.difficulty)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
          </select>
        </div>
      </Grid>
      <Grid>
        <div>
          <h3>Companies</h3>
          <select
            multiple
            value={filters.companies || []}
            onChange={(e) =>
              handleFilterChange(
                "companies",
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
          >
            {questions
              .flatMap((question) => question.companies)
              .reduce((uniqueCompanies, company) => {
                if (!uniqueCompanies.some((c) => c.value === company.name)) {
                  uniqueCompanies.push({
                    value: company.name,
                    label: company.name,
                  });
                }
                return uniqueCompanies;
              }, [])
              .map((company) => (
                <option key={company.value} value={company.value}>
                  {company.label}
                </option>
              ))}
          </select>
        </div>
      </Grid>
      {newFunction(handleResetFilters, handleResetProgress)}
    </Grid>
  );
};

export default Filters;
function newFunction(handleResetFilters, handleResetProgress) {
  return (
    <Grid container spacing={2} justifyContent="space-between">
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={handleResetFilters}
        >
          Reset Filters
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          color="warning"
          onClick={handleResetProgress}
        >
          Reset Progress
        </Button>
      </Grid>
    </Grid>
  );
}
