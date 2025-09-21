// scrollToProjects.js
export function scrollToProjects() {
  const element = document.getElementById("projects");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
