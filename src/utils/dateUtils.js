export const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let diffString = "";
  if (years > 0) {
    diffString += `${years} yr${years > 1 ? "s" : ""} `;
  }
  if (months > 0) {
    diffString += `${months} mos`;
  }
  if (years === 0 && months === 0) {
    diffString = "Less than a month";
  }

  return diffString.trim();
};

export const formatDate = (dateString, isPresent = false) => {
  if (isPresent) return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};
