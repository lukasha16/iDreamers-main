console.log('asdasd');
var el = document.querySelector('.Notif');

document.querySelector('button').addEventListener('click', function(){
    var count = Number(el.getAttribute('data-count')) || 0;
    el.setAttribute('data-count', count + 1);
    el.classList.remove('notify');
    el.offsetWidth = el.offsetWidth;
    el.classList.add('notify');
    if(count === 0){
        el.classList.add('show-count');
    }
}, false);

$('buttonfav1').hide();
        $('favsvg').on('click',function(){
        	$('favsvg1').toggle()
});
