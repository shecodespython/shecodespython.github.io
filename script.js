document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function highlightNav() {
        let index = sections.length;

        while (--index && window.scrollY + 60 < sections[index].offsetTop) {}

        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    function scrollToSection(index) {
        const targetSection = sections[index];
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    }

    window.addEventListener("scroll", highlightNav);

    navLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToSection(index);
        });
    });
});


// Fetching and Reading About Me, Education, and Hobbies Data Dynamically
fetch('./info.json')
    .then(res => res.json())
    .then(data => {
        const profileSection = document.getElementById('profileSection');
        const educationSection = document.getElementById('educationSection');
        const hobbiesSection = document.getElementById('hobbiesSection');

        // Profile Section
        profileSection.innerHTML = `
            <h2>${data.profile.title}</h2>
            ${generateProfileContent(data.profile.data)}
        `;

        // Education Section
        educationSection.innerHTML = `
            <h2>${data.education.title}</h2>
            ${generateEducationContent(data.education.data)}
        `;

        // Hobbies Section
        hobbiesSection.innerHTML = `
            <h2>${data.hobbies.title}</h2>
            ${generateHobbiesContent(data.hobbies.data)}
        `;
    })
    .catch(error => console.error('Error fetching JSON:', error));

function generateProfileContent(data) {
    return `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Birthday:</strong> ${data.birthday}</p>
        <p><strong>Languages:</strong>${data.languages.map(language => `<p>${language}</p>`).join('')}</p>
        <p><strong>Places Lived:</strong> ${data.placesLived.map(place => `<p>${place}</p>`).join('')}</p>
        <p><strong>Job:</strong> ${data.jobTitle}</p>
        <p><strong>Major:</strong> ${data.major}</p>
    `;
}

function generateEducationContent(data) {
    return `
        <p><strong>Degrees & Qualifications:</strong></p>${data.education.map(edu => `<p>${edu.degree}<br><br><i>(${edu.university}, ${edu.date})</i></p>`).join('')}
        <p><strong>Skills:</strong>${data.skills.map(skill => `<p>${skill}</p>`).join('')}
        <p><strong>Programming Languages:</strong>${data.languages.map(language => `<p>${language}</p>`).join('')}
        <p><strong>Libraries:</strong>${data.libraries.map(library => `<p>${library}</p>`).join('')}
    `;
}

function generateHobbiesContent(data) {
    return `
        <p><strong>Hobbies</strong>${data.hobbies.map(hobby => `<p>${hobby}</p>`).join('')}
        <p><strong>Fun Facts:</strong></p>${data.funFacts.map(fact => `<p>${fact.fact}</p>`).join('')}
    `;
}