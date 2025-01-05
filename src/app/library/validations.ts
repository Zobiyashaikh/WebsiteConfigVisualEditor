
export const validateConfig = (config: any): boolean => {
  if (!config.appName || !config.version) {
    alert("Validation Error - App name and version are required.");
    return false;
  }
  if (!config.roles || !["Admin", "Guest", "Member"].includes(config.roles)) {
    alert(`Invalid role "${config.roles}". Role must be one of: Admin, Guest, Member.`);
    return false;
  }

  for (const screen of config.screens) {
    if (!screen.id || !screen.title) {
      alert("Validation Error - Each screen must have an ID and title.");
      return false;
    }

    for (const section of screen.sections) {
      if (!section.id || !section.title) {
        alert("Validation Error - Each section must have an ID and title.");
        return false;
      }
    }
  }

  return true;
};
