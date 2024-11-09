"use strict";
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
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
        console.error(`Element with ID "${sectionId}" not found.`);
    }
}
