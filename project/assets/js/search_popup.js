////search-popup////
creatElm('div',document.querySelector('#root'),'search-popup')
creatElm('div',document.querySelector('.search-popup'),'search-popup__overlay search-toggler')
creatElm('div',document.querySelector('.search-popup'),'search-popup__content')
creatElm('form',document.querySelector('.search-popup__content'),'')
document.querySelector('.search-popup__content form').setAttribute('action','#')
creatElm('label',document.querySelector('.search-popup__content form'),'sr-only')
document.querySelector('.search-popup__content label').setAttribute('for','search')
document.querySelector('.search-popup__content label').innerHTML='جستجو کنید'
creatElm('input',document.querySelector('.search-popup__content form'),'')
document.querySelector('.search-popup__content form input').setAttribute("type","text")
document.querySelector('.search-popup__content input').setAttribute("id","search")
document.querySelector('.search-popup__content input').setAttribute("placeholder","جستجو کنید...")
creatElm('button',document.querySelector('.search-popup__content form'),'thm-btn')
document.querySelector('.search-popup__content form button').setAttribute("type","submit")
document.querySelector('.search-popup__content form button').setAttribute("aria-label","search submit")

creatElm('i',document.querySelector('.search-popup__content form button'),'icon-magnifying-glass')
/////////search-popUp-end/////////