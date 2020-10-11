var i = 0;
var o = 0;
document.addEventListener('click', function(){
  o++;
  $('.all-score').html(o)
  return this
})

console.log(o);



$('.target').on('click',function (e) {
    let aimY = Math.round(Math.random() * 90);
    let aimX = Math.round(Math.random() * 90);
    e.preventDefault()
    $('.target').css({
        'top': aimY + '%', 'left': aimX + '%'
    })
    
   i++
    $('.score').html(i)
})    
