
// base functions for easy use
function scrollToObject(obj){
    obj.scrollIntoView({
        behavior: 'smooth',
    });
}

//end section

// menu scroll events

let demoBotton = document.getElementById('demo-btn');
demoBotton.addEventListener('click' , () => {
    scrollToObject(demo);
});

let aboutusBotton = document.getElementById('aboutus-btn');
aboutusBotton.addEventListener('click' , () => {
    scrollToObject(me);
});

let contactusBotton = document.getElementById('contactus-btn');
contactusBotton.addEventListener('click' , () => {
    scrollToObject(contact);
});
// end section

// footer scroll events

let footerDemoBotton = document.getElementById('footerDemo');
footerDemoBotton.addEventListener('click' , () => {
    scrollToObject(demo);
});

let footerAboutusBotton = document.getElementById('footerAbout');
footerAboutusBotton.addEventListener('click' , () => {
    scrollToObject(me);
});

let footerContactusBotton = document.getElementById('footerContact');
footerContactusBotton.addEventListener('click' , () => {
    scrollToObject(contact);
});
// end section