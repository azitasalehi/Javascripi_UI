function creatElm(_name,parent,_class){
    var elm=document.createElement(_name)
    parent.appendChild(elm)
    elm.className=_class
}
creatElm('div',document.querySelector('#root'),'preloader')
creatElm('img',document.querySelector('.preloader'),'preloader__image')
document.querySelector('.preloader__image').src='assets/images/loader.png'
document.querySelector('.preloader__image').style.width="60px"
creatElm('div',document.querySelector('#root'),'page-wrapper')
creatElm('header',document.querySelector('.page-wrapper'),'main-header main-header-two clearfix')
creatElm('div',document.querySelector('.main-header-two'),'main-header__top')
creatElm('div',document.querySelector('.main-header__top'),'container')
creatElm('div',document.querySelector('.main-header__top .container'),'main-header__top-inner clearfix')
creatElm('div',document.querySelector('.main-header__top-inner'),'main-header__top-left')
creatElm('ul',document.querySelector('.main-header__top-left'),'list-unstyled main-header__top-address')
const page_wrapper=document.querySelector('.page-wrapper')
function creatUl_header(index,sIcon,a_link,a_text) {
    creatElm('li',document.querySelector('.main-header__top-address'),'')
    creatElm('div',document.querySelectorAll('.main-header__top-address li').item(index),'icon')
    creatElm('span',document.querySelectorAll('.main-header__top-address .icon').item(index),sIcon)
    creatElm('div',document.querySelectorAll('.main-header__top-address li').item(index),'text')
    creatElm('a',document.querySelectorAll('.main-header__top-address .text').item(index),'')
    document.querySelectorAll('.main-header__top-address a').item(index).href=a_link
    document.querySelectorAll('.main-header__top-address a').item(index).innerHTML=a_text
}
creatUl_header(0,'icon-phone-call','tel:09162352304','09162352304')
creatUl_header(1,'icon-at','mailto:setinco@gmail.com','setinco@gmail.com')
creatElm('div',document.querySelector('.main-header__top-inner'),'main-header__top-right')
creatElm('div',document.querySelector('.main-header__top-right'),'main-header__top-right-inner')
creatElm('div',document.querySelector('.main-header__top-right-inner'),'main-header__top-right-social')
const social_header=["fab fa-facebook","fab fa-twitter",'fab fa-instagram','fab fa-dribbble']
for (i=0;i<social_header.length;i++){
    creatElm('a',document.querySelector('.main-header__top-right-social'),"")
    creatElm('i',document.querySelectorAll('.main-header__top-right-social a').item(i),social_header[i])
}
creatElm('div',document.querySelector('.main-header__top-right-inner'),'main-header__top-right-btn-box')
creatElm('a',document.querySelector('.main-header__top-right-btn-box'),'thm-btn main-header__top-right-btn')
document.querySelector('.main-header__top-right-btn').innerHTML="راهنمایی"
document.querySelector('.main-header__top-right-btn').href="#"
creatElm('nav',document.querySelector('.main-header'),'main-menu main-menu-two clearfix')
creatElm('div',document.querySelector('.main-menu'),"main-menu-wrapper clearfix")
creatElm('div',document.querySelector('.main-menu-wrapper'),'container clearfix')
creatElm('div',document.querySelector('.main-menu-wrapper .container'),'main-menu-wrapper-inner clearfix')
creatElm('div',document.querySelector('.main-menu-wrapper-inner'),'main-menu-wrapper__left clearfix')
creatElm('div',document.querySelector('.main-menu-wrapper__left'),'main-menu-wrapper__logo')
function creat_A(parent,my_link,inner_a){
    var my_a=document.createElement('a')
    parent.appendChild(my_a)
    my_a.href=my_link
    my_a.innerHTML=inner_a
}
function creatImage(img_Src,parent){
    myImg=document.createElement('img')
    myImg.src=img_Src
    parent.appendChild(myImg)
}
creat_A(document.querySelector('.main-menu-wrapper__logo'),"index.html","")
creatImage("assets/images/resources/logo-2.png",document.querySelector('.main-menu-wrapper__logo a'))
creatElm('div',document.querySelector('.main-menu-wrapper__left'),'main-menu-wrapper__main-menu')
creatElm('a',document.querySelector('.main-menu-wrapper__main-menu'),'mobile-nav__toggler')
document.querySelector('.mobile-nav__toggler').href="#"
creatElm('i',document.querySelector('.mobile-nav__toggler'),"fa fa-bars")
creatElm('ul',document.querySelector('.main-menu-wrapper__main-menu'),'main-menu__list')
function creatMenu(){
    const li=document.createElement("li")
    const a=document.createElement("a")
    li.appendChild(a)
    a.href="#"
    li.className="dropdown"
    document.querySelector('.main-menu__list').appendChild(li)
}
for (var i=0;i<=5;i++){creatMenu()}
document.querySelectorAll('.main-menu__list li').item(4).classList.add("current")
document.querySelector(".main-menu__list > li> a").href = "index.html"
const a_inner2 = document.querySelectorAll(".main-menu__list>li a")
const a_txt = ["خانه", "مقصد", "تور", "صفحات", "خبر", "تماس با ما"]
for (i in a_txt) {a_inner2[i].innerHTML = a_txt[i]}
const dropDown2=document.querySelectorAll(".dropdown")
function subMenu(num,a_sub,a_href,li) {
    var ul_2 = document.createElement("ul")
    dropDown2.item(li).appendChild(ul_2)
    for (i=0;i<num;i++){
        var a_2 = document.createElement("a")
        var li_2=document.createElement("li")
        a_2.innerHTML = a_sub[i]
        a_2.href = a_href[i]
        li_2.appendChild(a_2)
        ul_2.appendChild(li_2)
    }
}
const a_sub_2=["خانه اول","خانه دوم","سبک هدر"]
const a_link_2=["index.html","index2.html","#"]
subMenu(3,a_sub_2,a_link_2,0)
const a_sub2=["مقصد","جزئیات مقصد"]
const a_link2=["destinations.html","destinations-details.html"]
subMenu(2,a_sub2,a_link2,1)
const a_sub3=["تور","لیست تور","جزئیات تور"]
const a_link3=["tours.html","tours-list.html","tour-details.html"]
subMenu(3,a_sub3,a_link3,2)
const a_sub4=["درباره ما"]
const a_link4=["about.html"]
subMenu(1,a_sub4,a_link4,3)
const a_sub5=["خبر","جزئیات خبر"]
const a_link5=["news.html","news-details.html"]
subMenu(2,a_sub5,a_link5,4)
creatElm('div',document.querySelector('.main-menu-wrapper-inner'),'main-menu-wrapper__right')
creatElm('a',document.querySelector('.main-menu-wrapper__right'),'main-menu__search search-toggler icon-magnifying-glass')
creatElm('a',document.querySelector('.main-menu-wrapper__right'),"main-menu__user icon-avatar")
creatElm('div',page_wrapper,'stricky-header stricked-menu main-menu main-menu-two')
creatElm('div',document.querySelector('.stricky-header'),'sticky-header__content')