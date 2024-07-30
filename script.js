

// faq
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});

function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

setInterval(updateTime, 1000);
updateTime(); // initial call to display the time immediately



// function updateDateTime() {
//     const datetimeElement = document.getElementById('datetime');
//     const now = new Date();
    
//     const options = { 
//         weekday: 'long', 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric', 
//         hour: '2-digit', 
//         minute: '2-digit', 
//         second: '2-digit' 
//     };
    
//     const formattedDateTime = now.toLocaleDateString('en-US', options);
//     datetimeElement.textContent = formattedDateTime;
// }

// setInterval(updateDateTime, 1000);
// updateDateTime(); // Initial call to display the time immediately on page load

// mobile manu
function showmenu(){
const showmenu = document.querySelector('.mobile_menu')
showmenu.style.display = 'block'
    
}
function hidemenu(){
const hidemenu = document.querySelector('.mobile_menu')
hidemenu.style.display = 'none'
    
}
// pop up 
function msg(){
    alert("CAN YOU BUY THIS ")
    
}

// carosuel 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot: false,
    autoplay: 2000,
    autospeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
