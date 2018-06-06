(()=>{
    //variables
    const $menu = document.querySelectorAll('.menu li'),
          $menuBox = document.querySelector('nav'),
          $header = document.querySelector('.header-box div'),
          $menuIcon = document.querySelector('img'),
          $close = document.querySelector('.close');

    //event listeners
    $menuIcon.addEventListener('click',showMenu);
    $close.addEventListener('click',hideMenu);

    //function
    //added calendar
    $('#datetime').datetimepicker();

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