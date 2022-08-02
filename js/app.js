'use strict';

const nav = document.querySelector('nav');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.menu-item');
const features = document.querySelector('.features');
const cities = document.querySelector('.cities');
const plans =  document.querySelector('.plans');
const scrollToPlans = document.querySelector('.btn-full');
const scrollToFeatures = document.querySelector('.btn-ghost');

const openIcon = document.querySelector('.mobile-nav-icon.open');
const mainNav = document.querySelector('.main-nv');
const form = document.querySelector('form');


// selected for animations
const featuresItems = document.querySelectorAll('.features-item');
const works = document.querySelector('.how-it-works');
const appScreen = document.querySelector('.app-screen');
const citiesCards = document.querySelector('.cards');
const planPulse = document.querySelector('.plan-pulse');



// sticky nav
window.addEventListener('scroll', () => {  
   if (window.pageYOffset >= features.offsetTop - 100) {
    header.classList.add('sticky');
    nav.classList.remove('mobile-nav')
   }
   else 
     header.classList.remove('sticky');   
})


// scroll to plans section on btnFull click
scrollToPlans.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
          top: plans.offsetTop,
          behavior: 'smooth'
      })
     
})

// scroll to plans section on btnGhost click
scrollToFeatures.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: features.offsetTop,
        behavior: 'smooth'
    })
})

// scroll to section on navLink click & add active class to li
navLinks.forEach( link => link.addEventListener('click', e => {

    if (e.target.hash !== '') {
        e.preventDefault();
        const hash = e.target.hash;
            const targetSection = document.querySelector(hash);
            const y = targetSection.offsetTop;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        })

        navLinks.forEach( link => link.classList.remove('active'));
        e.target.parentNode.classList.add('active');
        
    }
}))


// get active section & add activ-section class to it
const sections = document.querySelectorAll('section');

// const sections = [features, works, cities, plans];
function activeSection() {
    for (let section of sections) {
        let sectionBounding = section.getBoundingClientRect();
        if (sectionBounding.top > -300 & sectionBounding.top < 1000000)  return section;
        
    }
}


window.addEventListener('scroll', function() {
    
    if (window.pageYOffset < 100 ) {
        navLinks.forEach( link => link.classList.remove('active') );
    }

    let active = activeSection();
    
    // add active class to active section
    sections.forEach( section => section.classList.remove('active-section'));
    active.classList.add('active-section');
    
    // add active class to active link
    navLinks.forEach( link => {
        link.classList.remove('active');
        if (active.id === link.dataset.nav ) link.classList.add('active') ;
    })

    if (window.pageYOffset < 100 ) {
        navLinks.forEach( link => link.classList.remove('active') );
        active.classList.remove('active-section');
    }
 })


//////////////// Animation using animate.css
window.addEventListener('scroll', () => {  
    if (window.pageYOffset >= features.offsetTop - 120) featuresItems.forEach( item => 
        item.classList.add('animate__animated', 'animate__fadeIn') 
        );

    if (window.pageYOffset >= works.offsetTop - 250) appScreen.classList.add('animate__animated', 'animate__fadeInUp' );
    if (window.pageYOffset >= cities.offsetTop - 250 ) citiesCards.classList.add('animate__animated', 'animate__fadeIn' );
    if (window.pageYOffset >= plans.offsetTop - 100) planPulse.classList.add('animate__animated', 'animate__pulse');     
 })

 /////////////////////////////////// Toggle nav
if (openIcon) 
   openIcon.addEventListener('click', () => nav.classList.toggle('mobile-nav') )
  
///////////////////////////////////////////////////////
form.addEventListener('submit', e => {
    e.preventDefault()
})