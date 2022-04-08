const imageBox = document.querySelectorAll(".imageBox");
imageBox.forEach(popup => popup.addEventListener('click', function(){
    popup.classList.toggle('active');
}))
// imageBox.addEventListener('click' , function(){
//     imageBox.classList.toggle("active")
// });