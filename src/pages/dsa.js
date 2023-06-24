import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import QuestionItem from "../container/components/QuestionItem";
import data from "../container/data/questions.json";
import { filterQuestions } from "../container/utils/utils";

const QuestionList = ({ questions = data }) => {
  const [key, setKey] = useState(Date.now());
  const [filters, setFilters] = useState({
    checked: false,
    patterns: [],
    difficulty: "",
    companies: [],
    premium: false,
  });

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
      premium: false,
    });
  };

  const handleResetProgress = () => {
    handleResetFilters();
    questions.forEach((question) => {
      localStorage.removeItem(question.slug);
    });
    setKey(Date.now());
  };

  const filteredQuestions = filterQuestions(questions, filters);

  return (
    <Layout>
      <Container>
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

        <div>
          <h3>Patterns</h3>
          <select
            value={filters.patterns}
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

        <div>
          <h3>Difficulty</h3>
          <select
            value={filters.difficulty}
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

        <div>
          <h3>Companies</h3>
          <select
            multiple
            value={filters.companies}
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

        <label>
          <input
            type="checkbox"
            checked={filters.premium}
            onChange={(e) => handleFilterChange("premium", e.target.checked)}
          />
          Premium
        </label>

        <h2>Question List</h2>
        {filteredQuestions.length === 0 ? (
          <p>No questions found matching the selected filters.</p>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Done</TableCell>
                  <TableCell>Question</TableCell>
                  <TableCell>Pattern</TableCell>
                  <TableCell>Difficulty</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredQuestions.map((question) => (
                  <QuestionItem key={question.id} question={question} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Layout>
  );
};

export default QuestionList;
