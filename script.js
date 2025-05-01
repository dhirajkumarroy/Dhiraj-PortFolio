const navHardSkills = document.getElementById('nav-hard-skills');
    const navSoftSkills = document.getElementById('nav-soft-skills');
    const hardSkills = document.getElementById('hard-skills');
    const softSkills = document.getElementById('soft-skills');

    navHardSkills.addEventListener('click', (e) => {
      e.preventDefault();
      hardSkills.style.display = 'grid';
      softSkills.style.display = 'none';
      document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    });

    navSoftSkills.addEventListener('click', (e) => {
      e.preventDefault();
      softSkills.style.display = 'grid';
      hardSkills.style.display = 'none';
      document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    });



    const target = document.querySelector('.highlight');
const text = "Dhiraj Kumar";
let index = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 50;

function typeText() {
    if (isDeleting) {
        target.textContent = text.substring(0, index - 1);
        index--;
    } else {
        target.textContent = text.substring(0, index + 1);
        index++;
    }

    if (!isDeleting && index === text.length) {
        isDeleting = true;
        setTimeout(typeText, 1000);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', typeText);

const downloadButton = document.querySelector('.download-button');
downloadButton.addEventListener('click', function() {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the path of your CV file
    link.href = 'cv.pdf';  // Replace with the actual path to your CV
    // Set the download attribute to specify the filename
    link.download = 'Marlon_CV.pdf'; //  filename
    // Append the link to the body
    document.body.appendChild(link);
    // Simulate a click event to trigger the download
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
});

const sendMessageButton = document.querySelector('.submit-button');
sendMessageButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here, you would typically send the data to a server
    // using AJAX (e.g., fetch) or a library like Axios.
    // For this example, we'll just log the data to the console.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can display a success message to the user
    alert('Message sent successfully!');

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

//  silder section

const swiper = new Swiper('.certifications__container', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
});