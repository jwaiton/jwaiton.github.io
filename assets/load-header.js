// assets/load-header.js

function loadHeader() {
        
        // determine base path
        let basePath = window.location.pathname.includes('/pages/') ? '../components' : 'components/';

        fetch(basePath + 'header.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

// Run function after loaded
window.addEventListener('DOMContentLoaded', loadHeader);
