const VERSION = '1.0.8';


// This file should not contain code that is to run immediately on page load.
// By default, this file will only run once HTML and CSS has loaded.

window.addEventListener('load', () => {

    console.log(`VERSION:   ${VERSION}`);

    if (location.hostname == "127.0.0.1" || location.hostname == "localhost") {
        document.title = `Local Instance`;
        // FOR DEV ONLY: Adds run_id to header for easy debugging
        document.querySelector('.left').innerHTML += `<span style='margin-left:1em; opacity:0.25;'>${VERSION}</span>`;
    }
    
});


const pageRoot = document.getElementsByTagName('app-page-container')[0];
const header = document.getElementsByTagName('app-header')[0];
const headerLeft = header.querySelector('.left');
const headerRight = header.querySelector('.right');
    const teamMagpies = headerRight.querySelector('.team-name');
    const contacts = teamMagpies.querySelector('.contacts');
    const icon = contacts.querySelectorAll('.icon');

window.addEventListener('scroll', () => {


    if (window.scrollY > 75) {
        header.style.height = "48px";
        headerLeft.style.padding = "0 4px";
        teamMagpies.style.paddingRight = "0.8em";
        teamMagpies.style.width = "100px";
        teamMagpies.style.fontSize = "18px";
        contacts.style.marginRight = "0.8em";
        icon.forEach((icon) => {
            icon.style.opacity = "0";
            icon.style.width = "28px";
            icon.style.height = "28px";
        });

    } else {
        header.style.height = "75px";
        headerLeft.style.padding = "0 1em";
        teamMagpies.style.paddingRight = "1em";
        teamMagpies.style.width = "180px";
        teamMagpies.style.fontSize = "22px";
        contacts.style.marginRight = "1em";  
        icon.forEach((icon) => {
            icon.style.opacity = "1";
            icon.style.width = "34px";
            icon.style.height = "34px";
        });   
    }

});



var navState = false;

function toggleNavState() {
    const nav = document.getElementsByTagName('nav-container')[0].style;
    if (navState) {
        // to close nav
        nav.opacity = 0;
        nav.transform = "translateX(-120%) scale(0.5)";
        navState = false;
        setTimeout(() => {
            // removes the focus from nav button after finished
            document.activeElement.blur()
        }, 250);
    } else {
        // to open nav
        nav.opacity = 1;
        nav.transform = "translateX(0) scale(1)";
        navState = true;
    }
}

// navigate
function navigate(url) {
    if (url) {
        window.open(url,'_blank');
        return false;
    } else {
        console.error('WARNING: Navigate was called without any arguments.')
    }
}
function navigateLocal(url) {
    if (location.hostname == "127.0.0.1" || location.hostname == "localhost") {
        if (url == 'root') {
            location.href = "http:\/\/127.0.0.1:5500/";
            return;
        } else if (url) {
            location.href = "http:\/\/127.0.0.1:5500/" + url + ".html";
            return;
        } else {
            console.error('WARNING: Navigate was called without any arguments.');
            return;
        }
    } else {
        if (url == 'root') {
            location.href = "https:\/\/rodriguessunil.github.io/Magpies/";
            return;
        } else if (url) {
            location.href = "https:\/\/rodriguessunil.github.io/Magpies/" + url;
            return;
        } else {
            console.error('WARNING: Navigate was called without any arguments.');
            return;
        }
    }




    // legacy
    // if (url == 'root') {
    //     location.href = "https:\/\/rodriguessunil.github.io/Magpies/";
    //     return;
    // } else if (url) {
    //     location.href = "https:\/\/rodriguessunil.github.io/Magpies/" + url;
    //     return;
    // } else {
    //     console.error('WARNING: Navigate was called without any arguments.');
    //     return;
    // }
}