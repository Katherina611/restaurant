(()=>{
    //variables
    const $menu = document.querySelectorAll('.menu li'),
          $menuBox = document.querySelector('nav'),
          $header = document.querySelector('.header-box div'),
          $menuIcon = document.querySelector('img'),
          $close = document.querySelector('.close');

    //event listeners
    document.addEventListener('DOMContentLoaded', documentReady);
    $menuIcon.addEventListener('click',showMenu);
    $close.addEventListener('click',hideMenu);

    //function

    //document ready
    function documentReady(){
        const calendar = document.querySelector('.date');
        if(calendar){
            //added calendar
            $('#datetime').datetimepicker();
        }
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