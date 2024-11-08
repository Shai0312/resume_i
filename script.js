function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        // Null check and toggle logic
        if (section.style.display === "none" || !section.style.display) {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
    else {
        console.error("Element with ID \"".concat(sectionId, "\" not found."));
    }
}
