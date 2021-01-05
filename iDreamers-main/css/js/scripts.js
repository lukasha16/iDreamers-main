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
  var image = document.getElementById('favsvg');

      image.addEventListener('click', function(){
        changeImage();
      });
      function changeImage(){
          image.src = 'css/img/favorites-purple.svg';
          if (image.src = 'css/img/favorites-purple.svg') {

            image.addEventListener('click', function(){
              changeImage();
            });
            function changeImage(){
                image.src = 'css/img/favorites-green.svg';
            };
          }
      };
