
function responsiveMenu() {

    let menu = document.getElementById("responsive");
    
    if (document.getElementById("hamburger").classList.contains('hidden')) {

        // if menu is open

        let body = document.getElementsByTagName('body')[0];
        body.classList.remove('fixed');

        document.getElementById("hamburger").classList.remove('hidden')
        document.getElementById("hamburger").classList.add('block');
        menu.classList.remove('block');
        menu.classList.add('hidden');
        document.getElementById("close").classList.remove('block');
        document.getElementById("close").classList.add('hidden');

    }else{

        let body = document.getElementsByTagName('body')[0];
        body.classList.add('fixed');
        
        menu.classList.remove('hidden');
        menu.classList.add('block');
        document.getElementById("close").classList.remove('hidden');
        document.getElementById("close").classList.add('block');
        document.getElementById("hamburger").classList.add('hidden');

    }

}
