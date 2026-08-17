let currentSection = 0;
const sections = document.querySelectorAll('.section');

function showSection(index) {
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show current section
    if (sections[index]) {
        sections[index].style.display = 'block';
        currentSection = index;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function nextSection() {
    if (currentSection < sections.length - 1) {
        showSection(currentSection + 1);
    }
}

function prevSection() {
    if (currentSection > 0) {
        showSection(currentSection - 1);
    }
}

function forgive() {
    showSection(sections.length - 1);
}

function restartPage() {
    showSection(0);
}

// Initialize
window.addEventListener('load', () => {
    showSection(0);
});