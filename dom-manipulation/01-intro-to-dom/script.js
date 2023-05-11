
// Sanity test to make sure javascript script is linked
// alert('Hello!')


let btn = document.querySelector('#my-button')
btn.addEventListener('click', function() {
    
    document.querySelector('#title').style.backgroundColor = 'red'
})