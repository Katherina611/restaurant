(()=>{
    //variables
    const $menu = document.querySelectorAll('.menu li'),
          $menuBox = document.querySelector('nav'),
          $header = document.querySelector('.header-box div'),
          $menuIcon = document.querySelector('img'),
          $close = document.querySelector('.close'),
          $starter = document.querySelector('.starters-order'),
          $main = document.querySelector('.main-dish-order'),
          $dessert = document.querySelector('.dessert-order'),
          $plus = document.querySelectorAll('.plus'),
          $name = document.querySelector('#name'),
          $sendBtn = document.querySelector('#send'),
          $email = document.querySelector('#email'),
          $subject = document.querySelector('#subject'),
          $message = document.querySelector('#message');
    let sum = 0;

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
        const dish = document.querySelector('.menu-list');
        if(dish){
            $main.addEventListener('click', showMain);
            $starter.addEventListener('click', showStarter);
            $dessert.addEventListener('click', showDessert);
            $plus.forEach(plus =>{
                plus.addEventListener('click', addDish)
            });
        }
        const form = document.querySelector('form');
        if(form){
            $sendBtn.disabled = true;
            $name.addEventListener('blur', validateField);
            $email.addEventListener('blur', validateField);
            $subject.addEventListener('blur', validateField);
            $message.addEventListener('blur', validateField);
        }
    }

    function showMain(){
        const $starters = document.querySelector('.dish-order-1');
        const $mains = document.querySelector('.dish-order-2');
        const $desserts = document.querySelector('.dish-order-3');
        $starters.style.display = 'none';
        $starter.style.borderRight = '0';
        $mains.style.display = 'flex';
        $main.style.borderRight = '2px solid black';
        $desserts.style.display = 'none';
        $dessert.style.borderRight = '0';
    }

    function showStarter(){
        const $starters = document.querySelector('.dish-order-1');
        const $mains = document.querySelector('.dish-order-2');
        const $desserts = document.querySelector('.dish-order-3');
        $starters.style.display = 'flex';
        $starter.style.borderRight = '2px solid black';
        $mains.style.display = 'none';
        $main.style.borderRight = '0';
        $desserts.style.display = 'none';
        $dessert.style.borderRight = '0';
    }

    function showDessert(){
        const $starters = document.querySelector('.dish-order-1');
        const $mains = document.querySelector('.dish-order-2');
        const $desserts = document.querySelector('.dish-order-3');
        $desserts.style.display = 'flex';
        $dessert.style.borderRight = '2px solid black';
        $starters.style.display = 'none';
        $starter.style.borderRight = '0';
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
    function addDish(){
        let $item = $(this).prev().data("name");
        let price = $(this).prev().data("id");
        let $li = document.createElement('li');
        $li.dataset.id = price;
        $li.innerText = $item;
        $('.list-order').append($li);
        let basket = document.querySelector('.basket-price');
        sum += price;
        basket.textContent = 'Subtotal: ' + sum + "$";
    }

    function validateLength(field){
        if(field.value.length>0){
            field.style.border = '2px solid rgb(79, 76, 69)';
        }else{
            $email.style.border = '2px solid darkred'
        }
    }

    function validateEmail(email){
        let emailText = email.value;
        if(emailText.indexOf('@') !== -1){
            email.style.border = '2px solid rgb(79, 76, 69)'
        }else{
            email.style.border = '2px solid darkred'
        }
    }

    function validateField() {
        validateLength(this);
        if (this.type === 'email') {
            validateEmail(this)
        }
        if ($email.value !== '' && $subject.value !== '' && $message.value !== '' && $name.value !== '') {
            $sendBtn.disabled = false;
            $sendBtn.addEventListener('click', sendMessage);
        }else{
            $sendBtn.disabled = true;
        }
    }

    function sendMessage(event){
        event.preventDefault();
        let emailForm = $email.value;
        let nameForm = $name.value;
        let messageForm = $message.value;
        let subjectForm = $subject.value;
        console.log(nameForm, emailForm, messageForm, subjectForm);
        $name.value = 'Name *';
        $email.value = 'Email *';
        $subject.value = 'Subject *';
        $message.value = 'Message *';
        $name.style.border = '1px solid black';
        $email.style.border = '1px solid black';
        $subject.style.border = '1px solid black';
        $message.style.border = '1px solid black';
    }

})();