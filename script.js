// Array for storing events
let events = JSON.parse(localStorage.getItem('events')) || [];

// Function to display the event list
function displayEvents() {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = '';
    
    events.forEach((event, index) => {
        const eventCard = `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Venue:</strong> ${event.venue}</p>
                <p><strong>Organizer:</strong> ${event.organizer}</p>
                <button onclick="showEventDetails(${index})">Details</button>
            </div>
        `;
        eventList.innerHTML += eventCard;
    });
}

// Function to handle form submission
document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const venue = document.getElementById('event-venue').value;
    const organizer = document.getElementById('event-organizer').value;
    const description = document.getElementById('event-description').value;
    const submissionMessage = document.getElementById('submission-message');
    
    // Validate and add event
    if (title && date && venue && organizer && description) {
        events.push({ title, date, venue, organizer, description });
        localStorage.setItem('events', JSON.stringify(events));
        submissionMessage.style.color = 'green';
        submissionMessage.textContent = 'Event submitted successfully!';
        displayEvents();
        document.getElementById('event-form').reset();
    } else {
        submissionMessage.style.color = 'red';
        submissionMessage.textContent = 'Please fill out all fields!';
    }
});

// Initial call to display existing events
displayEvents();





    



// JavaScript for Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to a server for now

    // Get the form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill out all fields.';
    } else if (!validateEmail(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address.';
    } else {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Thank you! Your message has been sent.';

        // Reset the form fields after submission
        document.getElementById('contact-form').reset();
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}



// Function to filter events by date when a day is clicked
function filterEventsByDate(date) {
    const filteredEvents = events.filter(event => event.date === date);
    if (filteredEvents.length > 0) {
        displayEvents(filteredEvents); // Display filtered events
    } else {
        alert("No events found for this date.");
    }
}


