export const filterQuestions = (questions, filters) => {
  return questions.filter((question) => {
    const { checked, patterns, difficulty, companies, premium } = filters;

    // Apply filters
    if (checked && !question.checked) {
      return false;
    }

    if (
      patterns.length > 0 &&
      !question.pattern.some((p) => patterns.includes(p))
    ) {
      return false;
    }

    if (difficulty && question.difficulty !== difficulty) {
      return false;
    }

    if (
      companies.length > 0 &&
      !question.companies.some((c) => companies.includes(c.name))
    ) {
      return false;
    }

    if (premium && question.premium !== premium) {
      return false;
    }

    return true;
  });
};

export const handleFilterChange = (filterName, value, setFilters) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [filterName]: value,
  }));
};

export const handleResetFilters = (setFilters) => {
  setFilters({
    checked: false,
    patterns: [],
    difficulty: "",
    companies: [],
  });
};

export const handleResetProgress = (questions, setFilters) => {
  handleResetFilters(setFilters);
  questions.forEach((question) => {
    localStorage.removeItem(question.slug);
  });
};
