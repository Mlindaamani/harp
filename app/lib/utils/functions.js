// Search functionality.

export const filteredProjects = (
  searchTerm,
  projects,
  fields = ["name", "scope", "objective", "description"]
) => {
  const searchTermLower = searchTerm.toLowerCase();

  return projects.filter((project) => {
    return fields.some((field) => {
      const projectFieldValue = project[field];
      return (
        projectFieldValue &&
        projectFieldValue.toLowerCase().includes(searchTermLower)
      );
    });
  });
};
