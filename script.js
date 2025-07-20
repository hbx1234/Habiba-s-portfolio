// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Modal for Projects
const modal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.projects-grid .project').forEach(project => {
    project.addEventListener('click', () => {
        modal.style.display = 'block';
        document.getElementById('modal-content').innerHTML = project.innerHTML;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
