const searchBox = document.getElementById('search-box');
const cardContainer = document.getElementById('card-container');
const toolCards = document.querySelectorAll('.tool-card');
const noResultsContainer = document.getElementById('no-results-container'); // Get the no results container

searchBox.addEventListener('input', () => {
    const searchText = searchBox.value.toLowerCase();
    let hasResults = false; // Flag to track if results are found

    toolCards.forEach(card => {
        const toolName = card.querySelector('.tool-info h3').textContent.toLowerCase();
        if (toolName.includes(searchText)) {
            card.style.display = 'flex'; // Show matching card
            hasResults = true; // Set flag to true
        } else {
            card.style.display = 'none'; // Hide non-matching card
        }
    });

    // Show or hide the no results container based on the flag
    if (hasResults) {
        noResultsContainer.style.display = 'none'; // Hide message if results are found
    } else {
        noResultsContainer.style.display = 'flex'; // Show message if no results found
    }
});
