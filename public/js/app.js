document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const location = document.getElementById('location').value;
        try {
            const response = await fetch('/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `location=${encodeURIComponent(location)}`
            });

            const hotels = await response.json();
            console.log(hotels); // Logs response
            const hotelsContainer = document.getElementById('hotels');
            hotelsContainer.innerHTML = '';

            if (hotels.length > 0) {
                hotels.forEach(hotel => {
                    const hotelElement = document.createElement('div');
                    hotelElement.classList.add('hotel');
                    hotelElement.innerHTML = `
                        <h2>${hotel.name}</h2>
                        <p>${hotel.formatted_address}</p>
                        <p>Rating: ${hotel.rating}</p>
                    `;
                    hotelsContainer.appendChild(hotelElement);
                });
            } else {
                hotelsContainer.innerHTML = '<p>No hotels found.</p>';
            }
        } catch (error) {
            console.error('Error:', error); // Logs console errors
        }
    });
});