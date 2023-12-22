const ul = document.querySelector('ul');
const lis = ul.querySelectorAll('li');
const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener('input', () => {
    lis.forEach((li) => {
        if (!li.innerHTML.toLowerCase().includes(searchInput.value.toLowerCase())) {
            li.style.display = 'none';
        } else {
            li.style.display = 'block';
        }
    });
});
