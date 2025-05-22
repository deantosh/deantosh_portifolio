document.querySelector('form[name="contact"]').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const data = new FormData(form);
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
    const formMessages = document.getElementById("form-messages");

    // Clear previous messages
    successMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");
    formMessages.classList.add("hidden");

    // Send form data to netlify
    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(data).toString()
    })
    .then(response => {
        if (response.ok) {
            formMessages.classList.remove('hidden');
            successMessage.classList.remove("hidden");
            form.reset(); // Reset the form
        } else {
            throw new Error("Form submission failed");
        }
    })
    .catch(() => {
        formMessages.classList.remove('hodden');
        errorMessage.classList.remove("hidden");
    });
});
