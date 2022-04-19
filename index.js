// Get reference 

const container = document.querySelector('.container');
const tag = document.querySelector('.tagline h1');
const img = document.querySelector('.header');
const links = document.querySelectorAll('nav a');
let url = './partials/home.html';

// create fetch function 
const loadContent = (e) => {
    e.preventDefault();
    let t = e.target.textContent;

    if (t === "Portfolio"){
        let url = './partials/portfolio.html';
        let tagline = "Here are some pieces of my portfolio.";
// run the fetch 
fetch(url).then(function(response){
    return response.text();
}).then(function(data){
    container.innerHTML = data;
    tag.innerHTML = tagline;
    document.getElementById('bg-img').style.backgroundImage = "url('./img/leaf.jpg";
})
.catch(function(error) {
    console.log(error.message);
});
    } else if(t === "Home") {
        let tagline = "My Hot Topics.";

    fetch(url).then(function(response) {
        return response.text();
    }).then(function(data){
        container.innerHTML = data;tag.innerHTML = tagline;
        document.getElementById('bg-img').style.backgroundImage = "url('./img/leaf.jpg')";
    })
    .catch(function(error){
        console.log(error.message);
    });
    }
}

const selectContent = () => {

    let tagline = "Hot Topics I enjoy";

    fetch(url).then(function(response) {
        return response.text();
    }).then(function(data) {
        container.innerHTML = data;
        tag.innerHTML = tagline;
        document.getElementById('bg-img').style.backgroundImage = "url('./img/leaf.img')";
    })
    .catch(function(error) {
        console.log(error.message);
    });

    for (let link of links) {
        link.addEventListener("click", loadContent);
    }
}
selectContent();