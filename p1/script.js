function toggleMode(){
    const html = document.documentElement;
    
    /*if(html.classList.contains('light')){
        html.classList.remove('light');
    }else{
        html.classList.add('light');
    }*/

    html.classList.toggle('light'); //faz o mesmo q o if else

    //pegar img
    const img = document.querySelector("#profile img");

    //substituir img
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png');
    }else{
        img.setAttribute('src', './assets/avatar.png');
    }
}