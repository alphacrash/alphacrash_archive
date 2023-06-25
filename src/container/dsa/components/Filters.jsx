import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Filters = ({ filters, questions = [], setFilters }) => {
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      checked: false,
      patterns: [],
      difficulty: "",
      companies: [],
    });
  };

  const handleResetProgress = () => {
    handleResetFilters();
    questions.forEach((question) => {
      localStorage.removeItem(question.slug);
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <h2>Filters</h2>
        <button onClick={handleResetFilters}>Reset Filters</button>
        <button onClick={handleResetProgress}>Reset Progress</button>
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
    </Grid>
  );
};

export default Filters;
