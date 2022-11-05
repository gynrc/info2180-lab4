window.onload = function () {
    let searchBtn = document.querySelector('.search');
    searchBtn.addEventListener('click', e => {
        e.preventDefault();
        fetch('http://localhost/info2180-lab4/superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data)
            })
            .catch(error => console.log(error));
        });
}