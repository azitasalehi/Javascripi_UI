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
creatElm('header',document.querySelector('.page-wrapper'),'main-header clearfix')
creatElm('div',document.querySelector('.main-header'),'main-header__top')
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
creatElm('nav',document.querySelector('.main-header'),'main-menu clearfix')
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
creatImage('assets/images/resources/logo-1.png',document.querySelector('.main-menu-wrapper__logo a'))
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
creatElm('div',page_wrapper,'stricky-header stricked-menu main-menu')
creatElm('div',document.querySelector('.stricky-header'),'sticky-header__content')
////.stricky-header-end////
////Page Header Start////
creatElm('section',page_wrapper,'page-header')
creatElm('div',document.querySelector('.page-header'),'page-header__top')
creatElm('div',document.querySelector('.page-header__top'),'page-header-bg')
document.querySelector('.page-header-bg').style.backgroundImage="url(assets/images/backgrounds/page-header-bg.jpg)"
creatElm('div',document.querySelector('.page-header__top'),'page-header-bg-overly')
creatElm('div',document.querySelector('.page-header__top'),'container')
creatElm('div',document.querySelector('.page-header__top .container'),'page-header__top-inner')
creatElm('h2',document.querySelector('.page-header__top-inner'),'')
document.querySelector('.page-header__top-inner h2').innerHTML="آخرین خبرها"
creatElm('div',document.querySelector('.page-header'),'page-header__bottom')
creatElm('div',document.querySelector('.page-header__bottom'),'container')
creatElm('div',document.querySelector('.page-header__bottom .container'),'page-header__bottom-inner')
creatElm('ul',document.querySelector('.page-header__bottom-inner'),'thm-breadcrumb list-unstyled')
for (i=0;i<3;i++){
creatElm('li',document.querySelector('.thm-breadcrumb.list-unstyled'),"")}
creat_A(document.querySelectorAll('.thm-breadcrumb li').item(0),'index.html','خانه')
creatElm('span',document.querySelectorAll('.thm-breadcrumb li').item(1),'')
document.querySelector('.thm-breadcrumb li span').innerHTML="."
document.querySelectorAll('.thm-breadcrumb li').item(2).classList="active"
document.querySelectorAll('.thm-breadcrumb li').item(2).innerHTML="خبر"
////Page Header End////
//////News One Start//////
creatElm('div',page_wrapper,'news-one')
creatElm('div',document.querySelector('.news-one'),'container')
creatElm('div',document.querySelector('.news-one .container'),'row')
function creatNews(index,data_delay,img_src) {
    creatElm('div', document.querySelector('.news-one .row'), 'col-xl-4 col-lg-6 col-md-6 wow fadeInUp')
    document.querySelectorAll('.news-one .row .col-xl-4').item(index).setAttribute('data-wow-delay',data_delay)
    creatElm('div',document.querySelectorAll('.col-xl-4').item(index),'news-one__single')
    creatElm('div',document.querySelectorAll('.news-one__single').item(index),'news-one__img')
    creatImage(img_src,document.querySelectorAll('.news-one__img').item(index))
    creat_A(document.querySelectorAll('.news-one__img').item(index),'news-details.html',`<span class="news-one__plus"></span>`)
    creatElm('div',document.querySelectorAll('.news-one__img').item(index),'news-one__date')
    document.querySelectorAll('.news-one__date').item(index).innerHTML=`<p>28 <br> <span>مرداد</span></p>`
    creatElm('div',document.querySelectorAll('.news-one__single').item(index),'news-one__content')
    creatElm('ul',document.querySelectorAll('.news-one__content').item(index),'list-unstyled news-one__meta')
    for (i=0;i<2;i++) {
        creatElm('li', document.querySelectorAll('.news-one__meta').item(index), '')
    }
    creatElm('a',document.querySelectorAll('.news-one__meta li').item(index),'')
    creatElm('h3',document.querySelectorAll('.news-one__content').item(index),'news-one__title')
    document.querySelectorAll('.news-one__title').item(index).innerHTML=`<a href="news-details.html">سفر به زیباترین مکانهای جهان</a>`
}
creatNews(0,"100ms",'assets/images/blog/news-page-1.jpg')
creatNews(1,"200ms",'assets/images/blog/news-page-2.jpg')
creatNews(2,"300ms",'assets/images/blog/news-page-3.jpg')
creatNews(3,"400ms",'assets/images/blog/news-page-4.jpg')
creatNews(4,"500ms",'assets/images/blog/news-page-5.jpg')
creatNews(5,"600ms",'assets/images/blog/news-page-6.jpg')
for (i=0;i<11;i++){
    document.querySelectorAll('.news-one__meta li').item(i).innerHTML=`<a href="news-details   .html"><i class="far fa-user-circle"></i>مدیر</a>`
    document.querySelectorAll('.news-one__meta li').item(i+1).innerHTML=`<a href="news-details.html"><i class="far fa-comments"></i>2 نظر</a>`
}
//////News One End/////////
///////site-footer///////
//////script-footer.js/////////
//////site-footer-end////////
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