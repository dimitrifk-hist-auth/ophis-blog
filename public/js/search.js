// javascript code for search button on main menu, delete if problem arises
document.getElementById('search-btn').addEventListener('click', function() {
    var modal = document.getElementById('search-modal');
    modal.style.display = 'block';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('search-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
