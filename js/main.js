const times = document.querySelector('.times');
const bars = document.querySelector('.bars');
const navlist = document.querySelector('.navlist')



bars.addEventListener('click', function() {
    navlist.style.display = 'block';
    bars.style.display = 'none';
    times.style.display = 'block';
})

times.addEventListener('click', function() {
    navlist.style.display = 'none';
    bars.style.display = 'block';
    times.style.display = 'none';
})