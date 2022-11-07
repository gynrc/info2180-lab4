window.onload = function () {
    let searchBtn = document.querySelector('.search');
    let searchField = document.querySelector('#input');
    let searchInput = searchField.value;

    searchBtn.addEventListener('click', e => {
        fetch('http://localhost/info2180-lab4/superheroes.php?query='+searchInput)
            .then(response => response.text())
            .then(data => {
                let result = document.querySelector('#result');
                result.innerHTML = data;
                //alert(data)
            })
            .catch(error => console.log(error));
        });
}