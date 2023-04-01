
/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home-intro, .about-container,home-img, .skills__subtitle',{}); 
sr.reveal('.portrait, .about__subtitle,home-img, .skills__img',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 200}); 
sr.reveal('.skills-data, .work-img, home-img,.contact-input',{interval: 200}); 