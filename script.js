document.addEventListener('DOMContentLoaded', () => {
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
    const originalContent = skillsGrid.innerHTML;
    skillsGrid.innerHTML = originalContent + originalContent;
    }
});

document.getElementById('download-cv').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'assets/CV/Dummy Curriculum Vitae.pdf'; // Pastikan path file CV benar
    link.download = 'Dummy_CV_JSGDev.pdf'; // Nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, 
{ threshold: 0.1 });
    sections.forEach(section => {
        observer.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.social-media-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-5px) scale(1.2)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

const darkModeToggle = document.createElement('div');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
