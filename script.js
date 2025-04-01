document.addEventListener('DOMContentLoaded', function() {
    // Dummy menu items
    const menuItems = [
        { name: 'Item 1', price: '$10' },
        { name: 'Item 2', price: '$12' },
        { name: 'Item 3', price: '$15' },
        { name: 'Item 4', price: '$8' }
    ];

    // Display menu items
    const menuContainer = document.getElementById('menu-items');
    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
        menuContainer.appendChild(menuItemDiv);
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Handle form data (you can send the data to a server using fetch API or AJAX)
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        
        // Reset the form after submission
        contactForm.reset();
    });
});
