(()=>{
    //variables
    const $menu = document.querySelectorAll('.menu li'),
          $menuBox = document.querySelector('nav'),
          $header = document.querySelector('.header-box div'),
          $menuIcon = document.querySelector('img'),
          $close = document.querySelector('.close'),
          $starter = document.querySelector('.starters-order'),
          $main = document.querySelector('.main-dish-order');

    //event listeners
    document.addEventListener('DOMContentLoaded', documentReady);
    $menuIcon.addEventListener('click',showMenu);
    $close.addEventListener('click',hideMenu);
    $main.addEventListener('click', showMain);
    $starter.addEventListener('click', showStarter);
    //function

    //document ready
    function documentReady(){
        const calendar = document.querySelector('.date');
        if(calendar){
            //added calendar
            $('#datetime').datetimepicker();
        }
    }

    function showMain(){
        const $starters = document.querySelector('.dish-order-1');
        const $mains = document.querySelector('.dish-order-2');
        $starters.style.display = 'none';
        $starter.style.borderRight = '0';
        $mains.style.display = 'flex';
        $main.style.borderRight = '2px solid black';
    }

    function showStarter(){
        const $starters = document.querySelector('.dish-order-1');
        const $mains = document.querySelector('.dish-order-2');
        $starters.style.display = 'flex';
        $starter.style.borderRight = '2px solid black';
        $mains.style.display = 'none';
        $main.style.borderRight = '0';
    }

    //show  and hide menu
    function showMenu(){
        $header.prepend($menuBox);
        $menu.forEach(li =>{
            li.style.display = 'block';
            $menuIcon.style.display = 'none';
            $close.style.display = 'block';
        });
    }
    function hideMenu(){
        $menu.forEach(li =>{
            li.style.display = 'none';
            $menuIcon.style.display = 'block';
            $close.style.display = 'none';
        });
    }
})();