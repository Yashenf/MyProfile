/*
* Created by : @yash
*              4/30/2023 , Sunday
*              07:09 PM
* Project : MyProfile
* Contact me : contact.yashen@gmail.com 
*/

$(document).ready(()=>{
    const name= localStorage.getItem('userName');
    $('.hamburger').click(()=>{
       $('nav').toggleClass('active');
       $('active').css({
           transaction:'all 1s'
       });
    });

    //----- pre loader in class
   if (name) {
       x(name);
   }else{
       getName();
   }
});


/*--------------------------------------*/

function getName() {
    const popupContainer = $('#popup-container');
    const nameInput = $('#name-input');
    const submitButton = $('#submit-button');

    // Show the popup when the page loads
    popupContainer.show();

    // Handle Enter key press event on the name input
    nameInput.keypress((event) => {
        if (event.which === 13) {
            event.preventDefault(); // Prevent form submission
            submitButton.focus(); // Set focus on the submit button
        }
    });

    // Disable submit button if name input is empty
    nameInput.on('input', () => {
        const visitorName = nameInput.val().trim();
        submitButton.prop('disabled', visitorName === '');
    });

    // Handle form submission
    submitButton.click(() => {
        const visitorName = nameInput.val().trim();

        // Check if the input is empty
        if (visitorName === '') {
            alert('Please enter your name.');
            return;
        }

        // Store the visitor's name or perform any desired action
        // For this example, we'll just display an alert
        localStorage.setItem('userName',visitorName);
        // Hide the popup
        popupContainer.hide();

        // Call the x() method after name submission
        x(visitorName);
    });
}

/*--------------------------------------*/

function toggleMenuIcon() {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('cross');
    $('nav').toggleClass('active');
    $('active').css({
        transaction:'all 1s'
    });
}


/*--------------  preloader -----------*/
const x = function (name) {
    const preloader = $('#preloader');
    const countdown = $('#countdown');
    let count = 3;

    const countdownInterval = setInterval( ()=> {
        countdown.html(getNumberWord(count));
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            preloader.css('display','none');
        }
    }, 1500);
    $('#visiterName').text(name);
};

function getNumberWord(number) {
    switch (number) {
        case 3:
            return '<h2>Three 👌</h2>';
        case 2:
            return '<h2>Two ✌️</h2>';
        case 1:
            return '<h2>Online 👍</h2>';
        default:
            return '';
    }
}
/*-----X--------  preloader ------X----*/

const showMoreProjects= ()=>{
    if ($('.see-more-project-btn').text() === 'See more'){
        $('.see-more-project-btn').text('Show less');
        $('.more-project-1,.more-project-2').css({
            'display':'block',
            'transition':'display 2s'
        });
    }else {
        $('.see-more-project-btn').text('See more');
        if(window.matchMedia('(max-width: 1097px)').matches && window.matchMedia('(min-width: 428px)').matches){
            $('.more-project-1').css({
                'display':'none',
                'transition':'2s'
            });
        }else{
            $('.more-project-1,.more-project-2').css({
                'display':'none',
                'transition':'2s'
            });
        }

    }
}

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector("header").style.transform = "translateY(0)";
    } else {
        document.querySelector("header").style.transform = "translateY(-100%)";
    }
    prevScrollPos = currentScrollPos;
};

$('.myProjects-item-inner').on("mouseenter", function() {
    $(this).find('.myProjects-item-image-shaddow').css({
        display: 'block'
    });
}).on("mouseleave", function() {
    $(this).find('.myProjects-item-image-shaddow').css({
        display: 'none'
    });
});

/*----------------------------------*/

/*----------------------------------*/