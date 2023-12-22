//make code functions that takes reference the search input field and filters the li that not match the input field
const search = document.getElementById("search");
const filter = () => {
    const filter = search.value.toUpperCase();
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
        const name = element.textContent;
        if (name.toUpperCase().indexOf(filter) > -1) {
            element.style.display = "";
        } else {
            element.style.display = "none";
        }
    }
}

search.addEventListener("keyup", filter);
