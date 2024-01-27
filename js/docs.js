function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: "start" });
  }
}