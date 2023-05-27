/*
* Created by : @yash
*              4/30/2023 , Sunday
*              07:09 PM
* Project : MyProfile
* Contact me : contact.yashen@gmail.com 
*/

$(document).ready(()=>{
    $('.hamburger').click(()=>{
       $('nav').toggleClass('active');
       $('active').css({
           transaction:'all 1s'
       });
    });

    //----- pre loader in class
    x();
});

function toggleMenuIcon() {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('cross');
    $('nav').toggleClass('active');
    $('active').css({
        transaction:'all 1s'
    });
}


/*--------------  preloader -----------*/
const x = function () {
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
        $('.more-project-1').css({
            'display':'block',
            'transition':'display 2s',
            'margin-left':'35px'
        });
    }else {
        $('.see-more-project-btn').text('See more');
        $('.more-project-1').css({
            'display':'none',
            'transition':'2s'
        });
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

$('.myProjects-item-description').on('mouseenter',(e)=>{
    $('.myProjects-item-image-shaddow').css({
        'display':'block'
    });
    console.log(e.target.classList);
    console.log(e.target.id);
});

$('.myProjects-item-description').on('mouseleave',()=>{
    $('.myProjects-item-image-shaddow').css({
        'display':'none'
    });
});

/*----------------------------------*/

/*----------------------------------*/