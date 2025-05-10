function creatElm(_name,parent,_class){
 var elm=document.createElement(_name)
    parent.appendChild(elm)
    elm.className=_class
}
creatElm("section",page_wrapper,"banner-two")
creatElm("div",document.querySelector(".banner-two"),"banner-bg-slide")
document.querySelector('.banner-bg-slide').setAttribute("data-options",'{ "delay": 5000, "slides": [ { "src": "assets/images/backgrounds/main-slider-2-1.jpg" }, { "src": "assets/images/backgrounds/main-slider-2-2.jpg" }, { "src": "assets/images/backgrounds/main-slider-2-3.jpg" } ], "transition": "fade", "timer": false, "align": "top" }')
creatElm("div",document.querySelector(".banner-two"),"banner-bg-slide-overly")
creatElm("div",document.querySelector(".banner-two"),"container")
creatElm("div",document.querySelector(".banner-two>.container"),"row")
creatElm("div",document.querySelector(".banner-two .row"),"col-xl-12")
creatElm("div",document.querySelector(".col-xl-12"),"banner-two__content")

const p=document.createElement("p")
p.innerHTML= "مسافرت"
p.className="banner-two__sub-title"
document.querySelector(".banner-two__content").appendChild(p)
const h2=document.createElement("h2")
h2.className="banner-two__title"
h2.innerHTML="سفر شما از اینجا آغاز می شود"
document.querySelector(".banner-two__content").appendChild(h2)
creatElm("div",document.querySelector('.banner-two__content'),"tour-search-box")
const search_box=document.createElement("form")
search_box.action="tour-sidebar.html"
search_box.className="tour-search-one"
document.querySelector(".tour-search-box").appendChild(search_box)
creatElm("div",search_box,"tour-search-one__inner")
creatElm("div",document.querySelector(".tour-search-one__inner"),"tour-search-one__inputs")
creatElm("div",document.querySelector('.tour-search-one__inputs'),"tour-search-one__input-box")
creatElm("div",document.querySelector('.tour-search-one__inputs'),"tour-search-one__input-box")
const info=["کجا می روید","چه زمانی"]
for (i=0;i<info.length;i++) {
    const label_title = document.createElement("label")
    label_title.innerHTML =info[i]
    document.querySelectorAll('.tour-search-one__input-box').item(i).appendChild(label_title)
    var input=document.createElement("input")
    document.querySelectorAll('.tour-search-one__input-box').item(i).appendChild(input)
}
document.querySelectorAll(".tour-search-one__input-box>label").item(0).setAttribute("for","place")
const input1 = ["type", "text", "placeholder", "کلید واژه", "name", "place", "id", "place"]
const input2=["type","text","placeholder","مرداد","name","when","id","datepicker","class","hasDatepicker"]

function tour_search(attribute,index) {
    for (i = 0; i < attribute.length; i += 2) {
        document.querySelectorAll('.tour-search-one__input-box input').item(index).setAttribute(attribute[i], attribute[i + 1])
    }
}
tour_search(input1,0)
tour_search(input2,1)

creatElm("div",document.querySelector('.tour-search-one__inputs'),"tour-search-one__input-box tour-search-one__input-box-last")
const label_select=document.createElement("label")
label_select.setAttribute("for","type")
label_select.innerHTML="نوع"
document.querySelector(".tour-search-one__input-box-last").appendChild(label_select)
function selectItem() {
    const selectOption=["Adventure","ماجرایی","Wildlife","باغ وحش","Sightseeing","منظره"]
    const my_select=document.createElement("select")
    my_select.id="type"
    my_select.className="selectpicker"
    for (i = 0; i < selectOption.length; i += 2) {
        const option = document.createElement('option')
        option.setAttribute("value", selectOption[i])
        option.innerHTML = selectOption[i + 1]
        my_select.appendChild(option)
    }
    document.querySelector('.tour-search-one__input-box-last').appendChild(my_select)
}
selectItem()
creatElm("div",document.querySelector('.tour-search-one__inner'),"tour-search-one__btn-wrap")
creatElm("button",document.querySelector('.tour-search-one__btn-wrap'),"thm-btn tour-search-one__btn tour-search-one__btn-2")
document.querySelector('.tour-search-one__btn-2').setAttribute("type","submit")
document.querySelector('.tour-search-one__btn-2').innerHTML="پیدا کنید"
const p_banner=document.createElement("p")
p_banner.innerHTML="8700 تور در دسترس است ، هم اکنون رزرو کنید"
p_banner.className="banner-two__bottom-text"
document.querySelector('.tour-search-box').appendChild(p_banner)

////////////////Banner Two End//////////

//////////Three Icon Box Start/////////
creatElm("section",page_wrapper,"three-icon-box")
creatElm("div",document.querySelector(".three-icon-box"),"container")
creatElm("div",document.querySelector(".three-icon-box>.container"),"row")
function creatIconBox(data_delay,span_class,h4_txt,p_txt,index) {
        creatElm('div', document.querySelector('.three-icon-box .row'), "col-xl-4 col-lg-4 wow fadeInUp")
        document.querySelectorAll('.three-icon-box .fadeInUp').item(index).setAttribute("data-wow-delay", data_delay)
        creatElm('div', document.querySelectorAll(".three-icon-box .fadeInUp").item(index), "three-icon-box__single")
        creatElm("div", document.querySelectorAll('.three-icon-box .three-icon-box__single').item(index), "three-icon-box__icon")
        creatElm('span', document.querySelectorAll('.three-icon-box__icon').item(index), span_class)
        creatElm('div', document.querySelectorAll('.three-icon-box__single').item(index), "three-icon-box__content")
        creatElm("h4", document.querySelectorAll('.three-icon-box__content').item(index), "three-icon-box__title")
        document.querySelectorAll(".three-icon-box__title").item(index).innerHTML = h4_txt
        creatElm('p', document.querySelectorAll('.three-icon-box__content').item(index), "three-icon-box__text")
        document.querySelectorAll('.three-icon-box__text').item(index).innerHTML = p_txt
}
creatIconBox("100ms","icon-cashback","تضمین بهترین قیمت","تنوع بسیاری وجود دارد اما اکثریت آنها متن ساده و رایگان دارند",0)

creatIconBox("200ms","icon-booking","رزرو آسان و سریع","تنوع بسیاری وجود دارد اما اکثریت آنها متن ساده و رایگان دارند",1)
creatIconBox("300ms","icon-travel","بهترین انتخاب تور","تنوع بسیاری وجود دارد اما اکثریت آنها متن ساده و رایگان دارند",2)
/////////Three Icon Box End//////////

///////////Popular Tours Two Start//////////
creatElm("section",page_wrapper,"popular-tours-two")
creatElm("div",document.querySelector('.popular-tours-two'),"container")
creatElm('div',document.querySelector(".popular-tours-two .container"),"section-title text-center")
creatElm("span",document.querySelector('.popular-tours-two .section-title'),"section-title__tagline")
document.querySelector('.section-title__tagline').innerHTML="تورهای ویژه"
creatElm("h4",document.querySelector('.popular-tours-two .section-title'),"section-title__title")
document.querySelector('.section-title__title').innerHTML="محبوب ترین تورها"
creatElm("div",document.querySelector('.popular-tours-two .container'),"row")
/////////////Popular Tours Two Single
function popular_tours(img_address,data,index) {
    creatElm("div", document.querySelector('.popular-tours-two .row'), "col-xl-4 col-lg-6 col-md-6 wow fadeInUp")
    document.querySelectorAll('.wow.fadeInUp').item(index).setAttribute("data-wow-delay",data)
    creatElm("div", document.querySelectorAll('.popular-tours-two .fadeInUp').item(index), "popular-tours__single")
    creatElm('div', document.querySelectorAll('.popular-tours__single').item(index), "popular-tours__img")
    creatElm('img', document.querySelectorAll('.popular-tours__img').item(index), "")
    document.querySelectorAll('.popular-tours__img >img').item(index).src = img_address
    creatElm('div',document.querySelectorAll('.popular-tours__img').item(index),"popular-tours__icon")
    const  a_tours=document.createElement("a")
    a_tours.href="tour-details.html"
    document.querySelectorAll('.popular-tours__icon').item(index).appendChild(a_tours)
    creatElm("i",document.querySelectorAll('.popular-tours__icon>a').item(index),"fa fa-heart")
    creatElm("div",document.querySelectorAll(".popular-tours__single").item(index),"popular-tours__content")
    creatElm('div',document.querySelectorAll('.popular-tours__content').item(index),"popular-tours__stars")
    creatElm("i",document.querySelectorAll('.popular-tours__stars').item(index),"fa fa-star")
    document.querySelectorAll('.popular-tours__stars').item(index).appendChild(document.createElement("span"))
    document.querySelectorAll('.popular-tours__stars span').item(index).innerHTML="8.0 عالی"
    creatElm('h3',document.querySelectorAll('.popular-tours__content').item(index),"popular-tours__title")
    creatElm("a",document.querySelectorAll('.popular-tours__title').item(index))
    document.querySelectorAll('.popular-tours__title>a').item(index).innerHTML="سفر به زیباترین مکانهای جهان"
    document.querySelectorAll('.popular-tours__title>a').item(index).href="tour-details.html"
    creatElm('p',document.querySelectorAll('.popular-tours__content').item(index),"popular-tours__rate")
    document.querySelectorAll('.popular-tours__rate').item(index).innerText="هر نفر/"
    creatElm('span',document.querySelectorAll('.popular-tours__rate').item(index),"")
    document.querySelectorAll('.popular-tours__rate>span').item(index).innerHTML="1800 تومان"
    creatElm("ul",document.querySelectorAll('.popular-tours__content').item(index),"popular-tours__meta list-unstyled")
    const Li_info=["3 روز","+12 ","لس آنجلس"]
        for (i = 0; i < Li_info.length; i++) {
            const li_popular = document.createElement('li')
            document.querySelectorAll('.popular-tours__meta').item(index).appendChild(li_popular)
            const a_popular = document.createElement("a")
            a_popular.innerHTML = Li_info[i]
            a_popular.href = "tour-details.html"
            li_popular.appendChild(a_popular)
        }
}
popular_tours("assets/images/resources/popular-tours-two__img-1.jpg","100ms",0)
popular_tours("assets/images/resources/popular-tours-two__img-2.jpg","200ms",1 )
popular_tours("assets/images/resources/popular-tours-two__img-3.jpg","300ms",2)
popular_tours("assets/images/resources/popular-tours-two__img-4.jpg","400ms",3)
popular_tours("assets/images/resources/popular-tours-two__img-5.jpg","500ms",4)
popular_tours("assets/images/resources/popular-tours-two__img-6.jpg","600ms",5)

///////////Popular Tours Two End//////
//////////Singapore Tour Start/////////
creatElm("div",page_wrapper,"singapore-tour")
creatElm("div",document.querySelector('.singapore-tour'),"singapore-tour__container")
creatElm("div",document.querySelector('.singapore-tour__container'),"singapore-tour__left")
creatElm("div",document.querySelector('.singapore-tour__left'),"singapore-tour-bg")
document.querySelector('.singapore-tour-bg').style.backgroundImage="url(assets/images/backgrounds/singapore-tour-bg.jpg)"
creatElm('div',document.querySelector('.singapore-tour__container'),'singapore-tour__right')
creatElm("div",document.querySelector('.singapore-tour__right'),"singapore-tour-right-shape")
document.querySelector('.singapore-tour-right-shape').style.backgroundImage="url(assets/images/shapes/singapore-tour-right-shape.png)"
creatElm("div",document.querySelector('.singapore-tour__right'),"singapore-tour__content")
creatElm("h2",document.querySelector('.singapore-tour__content'),"singapore-tour__title")
document.querySelector('.singapore-tour__title').innerHTML="سنگاپور"
creatElm("p",document.querySelector('.singapore-tour__content'),"singapore-tour__text")
document.querySelector('.singapore-tour__text').innerHTML=`مکانی کاملاً مناسب<br>برای گم شدن`
creatElm('a',document.querySelector('.singapore-tour__content'),"thm-btn singapore-tour__btn")
document.querySelector('.singapore-tour__btn').href="#"
document.querySelector('.singapore-tour__btn').innerHTML="دیدن جزئیات"
creatElm("div",document.querySelector('.singapore-tour__right'),"singapore-tour__trusted")
const p_singapore=document.createElement("p")
p_singapore.innerHTML="مشاهده معاملات"
document.querySelector('.singapore-tour__trusted').appendChild(p_singapore)
creatElm("h2",document.querySelector('.singapore-tour__trusted'),"odometer")
document.querySelector('.odometer').setAttribute("data-count","4890")
document.querySelector('.singapore-tour__trusted h2').innerText="00"
creatElm("div",document.querySelector('.singapore-tour__trusted'),"singapore-tour__trusted-icon")
creatElm("i",document.querySelector('.singapore-tour__trusted-icon'),"fas fa-sort-up")
///////////Singapore Tour End///////

/////////Video Two Start////////
creatElm("div",page_wrapper,"video-two")
creatElm("div",document.querySelector(".video-two"),'video-two-bg jarallax')
const attr_Video=["data-speed","0.2" ,"data-imgPosition","50% 0%",
    "style","background-image:url(assets/images/backgrounds/video-one-two-bg.jpg)","data-jarallax"]
const video_two_bg=document.querySelector('.video-two-bg')
for (i=0;i<=attr_Video.length;i+=2){
    video_two_bg.setAttribute(attr_Video[i],attr_Video[i+1])
}
creatElm("div",document.querySelector('.video-two'),"container")
creatElm('div',document.querySelector('.video-two .container'),"row")
creatElm('div',document.querySelector('.video-two .row'),"col-xl-12")
creatElm('div',document.querySelector('.video-two .col-xl-12'),"video-two__inner")
creatElm("div",document.querySelector('.video-two__inner'),"video-one__video-link")
creatElm("a",document.querySelector('.video-one__video-link'),"video-popup")
document.querySelector('.video-popup').href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
creatElm('div',document.querySelector('.video-popup'),"video-one__video-icon")
creatElm("span",document.querySelector('.video-one__video-icon'),"icon-play-button")
creatElm("i",document.querySelector('.video-one__video-icon'),"ripple")
creatElm("p",document.querySelector('.video-two__inner'),"video-one__tagline")
document.querySelector('.video-one__tagline').innerHTML="آیا آماده سفر هستید؟"
creatElm("h2",document.querySelector('.video-one__tagline'),"video-one__title")
document.querySelector('.video-one__title').innerHTML=` یک برنامه جهانی <br>رزرو آنلاین تور جهانی است`
////////Video Two End/////////
////Counter One Start////////
creatElm("div",page_wrapper,"counter-one")
creatElm("div",document.querySelector('.counter-one'),"counter-one__container")
creatElm('ul',document.querySelector('.counter-one__container'),"list-unstyled counters-one__box")
function counterOne(index,data,data_count,counter_txt){
    creatElm("li",document.querySelector('.counters-one__box'),"counter-one__single wow fadeInUp animated")
    document.querySelectorAll('.counters-one__box li').item(index).setAttribute("data-wow-delay",data)
    creatElm("h3",document.querySelectorAll('.counter-one__single').item(index),"odometer odometer-auto-theme")
    document.querySelectorAll('.counter-one__single h3').item(index).innerHTML="00"
    document.querySelectorAll('.counter-one__single h3').item(index).setAttribute("data-count",data_count)
    creatElm("p",document.querySelectorAll('.counter-one__single').item(index),"counter-one__text")
    document.querySelectorAll(".counter-one__text").item(index).innerHTML=counter_txt
    document.querySelectorAll('.counters-one__box li').item(index).setAttribute("style","visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;")
}
counterOne(0,"100ms","870","مجموع کمک های مالی")
counterOne(1,"200ms","480","کمپین ها بسته شد")
counterOne(2,"300ms","930","مردم شاد")
counterOne(3,"400ms","63","داوطلبان ما")
//////Counter One End////////
//////Destinations Two Start/////////
creatElm("section",page_wrapper,"destinations-two")
creatElm("div",document.querySelector(".destinations-two"),"destinations-two-shape wow slideInLeft")
document.querySelector('.slideInLeft').setAttribute("data-wow-delay","100ms")
document.querySelector('.slideInLeft').setAttribute("data-wow-duration","2500ms")
creatElm('img',document.querySelector('.destinations-two .slideInLeft'))
document.querySelector('.slideInLeft>img').src="assets/images/shapes/destinations-two-shape.png"
creatElm("div",document.querySelector(".destinations-two"),"container")
creatElm("div",document.querySelector('.destinations-two .container'),'destinations-two__top')
creatElm("div",document.querySelector('.destinations-two__top'),"row")
creatElm("div",document.querySelector('.destinations-two__top .row'),"col-xl-6 col-lg-6")
creatElm('div',document.querySelector('.row>.col-xl-6'),"destinations-two__top-left")
creatElm('div',document.querySelector('.destinations-two__top-left'),"section-title text-left")
creatElm('span',document.querySelector('.section-title.text-left'),"section-title__tagline")
document.querySelector('.section-title.text-left>span').innerText="لیست مقدماتی ما"
creatElm('h2',document.querySelector('.section-title.text-left'),"section-title__title")
document.querySelector(".section-title.text-left>.section-title__title").innerHTML="پرداخت مکان های زیبا در سراسر جهان"
creatElm("div",document.querySelector(".destinations-two__top>.row"),"col-xl-6 col-lg-6")
const col_xl_6_2=document.querySelectorAll('.destinations-two__top>.row>.col-xl-6.col-lg-6').item(1)
creatElm("div",col_xl_6_2,"row")
const  col_xl_6_2_row=document.querySelector('.destinations-two__top>.row>.col-xl-6.col-lg-6>.row')
//////Destinations Two Single
function destination(data_delay,src_img,a_text,p_destination,index,parent,col_class) {
    creatElm('div',parent,col_class)
    creatElm("div",document.querySelectorAll('.col-xl-6>.row>.col-xl-6').item(index),"destinations-two__top-single wow fadeInUp")
    document.querySelectorAll(".destinations-two__top-single").item(index).setAttribute("data-wow-delay",data_delay)
    creatElm('div',document.querySelectorAll('.destinations-two__top-single').item(index),"destinations-two__top-img")
    creatElm("img",document.querySelectorAll('.destinations-two__top-img').item(index))
    document.querySelectorAll('.destinations-two__top-img>img').item(index).src=src_img
    creatElm('div',document.querySelectorAll('.destinations-two__top-img').item(index),"destinations-two__top-content")
    creatElm('h2',document.querySelectorAll('.destinations-two__top-content').item(index),'destinations-two__top-title')
    const a_destination=document.createElement("a")
    a_destination.href="destinations-details.html"
    a_destination.innerHTML=a_text
    document.querySelectorAll('.destinations-two__top-title').item(index).appendChild(a_destination)
    creatElm('p',document.querySelectorAll('.destinations-two__top-content').item(index),"destinations-two__top-sub-title")
    document.querySelectorAll('.destinations-two__top-sub-title').item(index).innerHTML=p_destination
}
destination("100ms","assets/images/resources/destinations-two-img-1.jpg",'اسپانیا',"",0,col_xl_6_2_row,"col-xl-6 col-lg-6")
destination('200ms',"assets/images/resources/destinations-two-img-2.jpg","اسپانیا","جدید",1,col_xl_6_2_row,"col-xl-6 col-lg-6")

//////destinations-two__bottom///////

creatElm('div',document.querySelector('.destinations-two>.container'),"destinations-two__bottom")
creatElm('div',document.querySelector('.destinations-two__bottom'),"row")
const destination_bottom=document.querySelector('.destinations-two__bottom>.row')
function destination_2(data_delay,src_img,a_text,p_destination,index) {
    creatElm('div',document.querySelector('.destinations-two__bottom>.row'),"col-xl-3 col-lg-3")
    creatElm("div",document.querySelectorAll('.destinations-two__bottom>.row>.col-xl-3').item(index),"destinations-two__top-single wow fadeInUp")
    document.querySelectorAll(".destinations-two__bottom .destinations-two__top-single").item(index).setAttribute("data-wow-delay",data_delay)
    creatElm('div',document.querySelectorAll('.destinations-two__bottom .destinations-two__top-single').item(index),"destinations-two__top-img")
    creatElm("img",document.querySelectorAll('.destinations-two__bottom .destinations-two__top-img').item(index))
    document.querySelectorAll('.destinations-two__bottom .destinations-two__top-img>img').item(index).src=src_img
    creatElm('div',document.querySelectorAll('.destinations-two__bottom .destinations-two__top-img').item(index),"destinations-two__top-content")
    creatElm('h2',document.querySelectorAll('.destinations-two__bottom .destinations-two__top-content').item(index),'destinations-two__top-title')
    const a_destination_btm=document.createElement("a")
    a_destination_btm.href="destinations-details.html"
    a_destination_btm.innerHTML=a_text
    document.querySelectorAll('.destinations-two__bottom .destinations-two__top-title').item(index).appendChild(a_destination_btm)
    creatElm('p',document.querySelectorAll('.destinations-two__bottom .destinations-two__top-content').item(index),"destinations-two__top-sub-title")
    document.querySelectorAll('.destinations-two__bottom .destinations-two__top-sub-title').item(index).innerHTML=p_destination
}
destination_2("100ms","assets/images/resources/destinations-two-img-3.jpg","اسپانیا","",0)
destination_2("200ms","assets/images/resources/destinations-two-img-4.jpg","اسپانیا","حیات وحش",1)
destination_2("300ms","assets/images/resources/destinations-two-img-5.jpg","اسپانیا","",2)
////destination-banner////
creatElm("div",document.querySelector('.destinations-two__bottom>.row'),"col-xl-3 col-lg-3")
creatElm('div',document.querySelectorAll('.destinations-two__bottom>.row>.col-xl-3').item(3),"destinations-two__top-single wow fadeInUp")
document.querySelectorAll('.destinations-two__top-single').item(5).setAttribute("data-wow-delay","400ms")
creatElm('div',document.querySelectorAll('.destinations-two__top-single').item(5),"destinations-two__top-banner")
creatElm('p',document.querySelector('.destinations-two__top-banner'),"")
document.querySelector('.destinations-two__top-banner>p').innerHTML="تا 30 % تخفیف"
creatElm('h2',document.querySelector('.destinations-two__top-banner'),"")
document.querySelector('.destinations-two__top-banner h2').innerHTML=`تابستان <span>پر از سرگرمی</span>`
creatElm('a',document.querySelector('.destinations-two__top-banner'),'thm-btn destinations-two__btn')
document.querySelector('.destinations-two__btn').innerHTML='دیدن بیشتر'
document.querySelector('.destinations-two__btn').href='#'
////Destinations Two End/////
////About Two Start///
creatElm("section",page_wrapper,"about-two")
creatElm('div',document.querySelector('.about-two'),"about-two-shape float-bob-y")
creatElm('img',document.querySelector('.about-two-shape'),"")
document.querySelector('.about-two-shape>img').src="assets/images/shapes/about-two-shape.png"
creatElm('div',document.querySelector('.about-two'),"container")
creatElm("div",document.querySelector('.about-two .container'),"row")
creatElm('div',document.querySelector('.about-two .row'),"col-xl-6")
creatElm('div',document.querySelector(".about-two .col-xl-6"),"about-two__left")
creatElm('div',document.querySelector('.about-two__left'),"about-tow__left-img wow slideInLeft")
document.querySelector(".about-tow__left-img").setAttribute("data-wow-delay","100ms")
document.querySelector(".about-tow__left-img").setAttribute("data-wow-duration","2500ms")
creatElm("img",document.querySelector('.about-tow__left-img'),"")
document.querySelector('.about-tow__left-img>img').src="assets/images/resources/about-two-img.jpg"
creatElm('a',document.querySelector('.about-tow__left-img'),"video-popup")
document.querySelector('.video-popup').href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
creatElm('div',document.querySelector('.about-tow__left-img'),"about-two__video-btn")
creatElm('span',document.querySelector('.about-two__video-btn'),'icon-play-button')
creatElm('div',document.querySelector('.about-two .row'),"col-xl-6")
creatElm('div',document.querySelectorAll('.about-two .row .col-xl-6').item(1)
,"about-two__right")
creatElm('div',document.querySelector('.about-two__right'),"section-title text-left")
creatElm('span',document.querySelector('.about-two__right .section-title'),"section-title__tagline")
document.querySelector('.about-two__right .section-title__tagline').innerHTML="با ما آشنا بشو"
creatElm('h2',document.querySelector('.about-two__right .section-title'),"section-title__title")
document.querySelector('.about-two__right .section-title__title').innerHTML="ما آژانس مسافرتی هستیم"
creatElm('div',document.querySelector('.about-two__right'),"about-two__tour-points")
creatElm('ul',document.querySelector('.about-two__tour-points'),'list-unstyled about-two__list')
function aboutUL(p_text,index,parentNum){
    creatElm('li',document.querySelectorAll('.about-two__list').item(parentNum),"")
    creatElm('div',document.querySelectorAll('.about-two__list>li').item(index),"icon")
    creatElm('i',document.querySelectorAll('.about-two__list>li>.icon').item(index),"fa fa-check")
    creatElm('div',document.querySelectorAll('.about-two__list>li').item(index),"text")
    creatElm('p',document.querySelectorAll('.about-two__list li .text').item(index),"")
    document.querySelectorAll('.about-two__list li .text>p').item(index).innerHTML=p_text
}
aboutUL('اعتماد و ایمنی',0,0)
aboutUL('تضمین بهترین قیمت',1,0)
creatElm('ul',document.querySelector('.about-two__tour-points'),"list-unstyled about-two__list about-two__list-two")
aboutUL('رزرو آسان و سریع',2,1)
aboutUL('بهترین نمایندگی های مسافرتی',3,1)
creatElm('p',document.querySelector('.about-two__right'),'about-two__right-text-1')
document.querySelector('.about-two__right-text-1').innerHTML="مکان خود را تغییر دهید تا هوای تازه دریافت کنید"
creatElm('p',document.querySelector('.about-two__right'),'about-two__right-text-2')
document.querySelector('.about-two__right-text-2').innerHTML="بسیاری از متن های موجود وجود دارد اما اکثریت با تزریق واژه های تصادفی همهمه که حتی کمی به نظر نمی رسند ، به نوعی دچار تغییر شده اند."
creatElm('a',document.querySelector('.about-two__right'),'thm-btn about-two__btn')
document.querySelector('.thm-btn.about-two__btn').innerHTML="رزرو کنید"
document.querySelector('.thm-btn.about-two__btn').href="#"
///////About Two End////////
//////Tour Types Start////////
creatElm('section',page_wrapper,"tour-types")
creatElm('div',document.querySelector('.tour-types'),"container")
creatElm('div',document.querySelector('.tour-types>.container'),"tour-types-map")
document.querySelector('.tour-types-map').style.backgroundImage="url(assets/images/shapes/tour-types-map.png)"
creatElm('div',document.querySelector('.tour-types>.container'),"section-title text-center")
creatElm('span',document.querySelector('.tour-types>.container .section-title'),"section-title__tagline")
document.querySelector('.tour-types .section-title__tagline').innerHTML="بهترین تور را پیدا کنید"
creatElm('h2',document.querySelector('.tour-types .section-title'),"section-title__title")
document.querySelector('.tour-types .section-title__title').innerHTML="انواع تور را انتخاب کنید"
creatElm('ul',document.querySelector('.tour-types>.container'),"list-unstyled tour-types_list")
function tour_type_list(data,span_icon,h4_txt,index){
    creatElm('li',document.querySelector('.tour-types_list'),"tour-types__single wow fadeInUp")
    document.querySelectorAll('.tour-types__single').item(index).setAttribute("data-wow-delay",data)
    creatElm('div',document.querySelectorAll('.tour-types_list>.tour-types__single').item(index),"tour-types__content")
    creatElm("div",document.querySelectorAll('.tour-types__content').item(index),"tour-types__icon")
    creatElm('span',document.querySelectorAll('.tour-types__icon').item(index),span_icon)
    creatElm('h4',document.querySelectorAll('.tour-types__content').item(index),"tour-types__title")
    document.querySelectorAll('.tour-types__title').item(index).innerHTML=h4_txt
}
tour_type_list("100ms","icon-deer","حیات وحش",0)
tour_type_list("200ms","icon-paragliding","پاراگلایدر",1)
tour_type_list('300ms',"icon-flag","ماجرا",2)
tour_type_list("400ms","icon-hang-gliding","آویز گلایدر",3)
tour_type_list('500ms',"icon-booking","تماشا",4)
////Tour Types End/////
////Brand Two Start////
creatElm('section',page_wrapper,'brand-two')
creatElm('div',document.querySelector('.brand-two'),'container')
document.querySelector('.brand-two>.container').innerHTML=`<div class="thm-swiper__slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-rtl" data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                    "0": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "375": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "575": {
                        "spaceBetween": 30,
                        "slidesPerView": 3
                    },
                    "767": {
                        "spaceBetween": 50,
                        "slidesPerView": 4
                    },
                    "991": {
                        "spaceBetween": 50,
                        "slidesPerView": 5
                    },
                    "1199": {
                        "spaceBetween": 100,
                        "slidesPerView": 5
                    }
                }}'>`
creatElm('div',document.querySelector('.thm-swiper__slider'),"swiper-wrapper")
for (i=0;i<10;i++){
    creatElm('div',document.querySelector('.swiper-wrapper'),'swiper-slide')
    creatElm('img',document.querySelectorAll('.swiper-slide').item(i),"")
}
const _imgSrc=["assets/images/brand/brand-2-1.png",'assets/images/brand/brand-2-2.png','assets/images/brand/brand-2-3.png','assets/images/brand/brand-2-4.png',"assets/images/brand/brand-2-5.png",'assets/images/brand/brand-2-1.png','assets/images/brand/brand-2-2.png','assets/images/brand/brand-2-3.png','assets/images/brand/brand-2-4.png','assets/images/brand/brand-2-5.png']
for (i=0;i<_imgSrc.length;i++) {
    document.querySelectorAll('.swiper-slide>img').item(i).src = _imgSrc[i]
}
/////////News Two Start/////
creatElm('section',page_wrapper,'news-two')
creatElm('div',document.querySelector('.news-two'),"container")
creatElm('div',document.querySelector('.news-two .container'),'row')
creatElm('div',document.querySelector('.news-two .row'),'col-xl-4')
creatElm('div',document.querySelector('.news-two .col-xl-4'),"news-two_left")
creatElm('div',document.querySelector('.news-two_left'),'section-title text-left')
creatElm('span',document.querySelector('.news-two_left .section-title'),'section-title__tagline')
document.querySelector('.news-two_left .section-title__tagline').innerHTML="از پست وبلاگ"
creatElm('h2',document.querySelector('.news-two_left .section-title'),'section-title__title')
document.querySelector('.news-two_left .section-title__title').innerHTML='آخرین اخبار و مقالات'
creatElm('p',document.querySelector('.news-two_left'),'news-two__text')
document.querySelector('.news-two__text').innerHTML='بسیاری از آخرین تغییرات معابر در دسترس نیست اما اکثر آنها به نوعی دچار تغییراتی شده اند ، از طریق تزریق یا تصادفی.'
creatElm('div',document.querySelector('.news-two .row'),'col-xl-8')
creatElm('div',document.querySelector('.news-two .col-xl-8'),'news-two__right')
creatElm('div',document.querySelector('.news-two__right'),"news-two__carousel owl-theme owl-carousel")
function news_box(data_delay,index,img_src) {
    creatElm('div', document.querySelector('.news-two__carousel'), 'news-one__single wow fadeInUp')
    document.querySelectorAll('.news-one__single').item(index).setAttribute('data-wow-delay',data_delay)
    creatElm('div',document.querySelectorAll('.news-one__single').item(index),'news-one__img')
    creatElm('img',document.querySelectorAll('.news-one__img').item(index),"")
    document.querySelectorAll('.news-one__img>img').item(index).src=img_src
    creatElm('a',document.querySelectorAll('.news-one__img').item(index),"")
    document.querySelectorAll('.news-one__img a').item(index).href="news-details.html"
    creatElm('span',document.querySelectorAll('.news-one__img>a').item(index),'news-one__plus')
    creatElm('div',document.querySelectorAll('.news-one__img').item(index),'news-one__date')
    document.querySelectorAll('.news-one__date').item(index).innerHTML=` <p>28 <br> <span>مرداد</span></p>`
    creatElm('div',document.querySelectorAll('.news-one__single').item(index),"news-one__content")
    creatElm('ul',document.querySelectorAll('.news-one__content').item(index),"list-unstyled news-one__meta")
    document.querySelectorAll('.news-one__meta').item(index).innerHTML=`<li><a href="news-details.html"><i class="far fa-user-circle"></i>مدیر</a></li><li><a href="news-details.html"><i class="far fa-comments"></i>2 نظر</a></li>`
    creatElm('h3',document.querySelectorAll('.news-one__content').item(index),"news-one__title")
    creatElm('a',document.querySelectorAll('.news-one__title').item(index),'')
    document.querySelectorAll('.news-one__title>a').item(index).innerHTML='سفر به زیباترین مکانهای جهان'
    document.querySelectorAll('.news-one__title>a').item(index).href="news-details.html"
}
news_box("100ms",0,'assets/images/blog/news-one-img-1.jpg')
news_box("200ms",1,'assets/images/blog/news-one-img-2.jpg')
news_box("300ms",2,'assets/images/blog/news-one-img-3.jpg')
/////News Two End//////
///////Book Now Start/////
creatElm('section',page_wrapper,"book-now")
creatElm('div',document.querySelector('.book-now'),'book-now-shape')
document.querySelector('.book-now-shape').style.backgroundImage="url(assets/images/shapes/book-now-shape.png)"
creatElm('div',document.querySelector('.book-now'),"container")
creatElm('div',document.querySelector('.book-now .container'),"row")
creatElm('div',document.querySelector('.book-now .row'),'col-xl-12')
creatElm('div',document.querySelector('.book-now .col-xl-12'),'book-now__inner')
creatElm('div',document.querySelector('.book-now__inner'),'book-now__left')
creatElm('p',document.querySelector('.book-now__left'),"")
document.querySelector('.book-now__left p').innerHTML="سفر خود را با ما برنامه ریزی کنید"
creatElm('h2',document.querySelector('.book-now__left'),"")
document.querySelector('.book-now__left h2').innerHTML="برای یک تور فراموش نشدنی آماده هستید؟"
creatElm('div',document.querySelector('.book-now__inner'),'book-now__right')
creatElm('a',document.querySelector('.book-now__right'),'thm-btn book-now__btn')
document.querySelector('.book-now__btn').innerHTML="رزرو تور"
document.querySelector('.book-now__btn').href="#"
//////Book Now End/////
//////Site Footer One Start///
///script-footer-js//////
////////page-wrapper-end//////
creatElm('div',document.querySelector('#root'),'mobile-nav__wrapper')
creatElm('div',document.querySelector('.mobile-nav__wrapper'),'mobile-nav__overlay mobile-nav__toggler')
creatElm('div',document.querySelector('.mobile-nav__overlay'),'mobile-nav__content')
document.querySelector('.mobile-nav__content').innerHTML=`<span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>`
creatElm('div',document.querySelector('.mobile-nav__content'),'logo-box')
creatElm('a',document.querySelector('.logo-box'),'')
document.querySelector('.logo-box a').setAttribute('aria-label','logo image')
creatElm('img',document.querySelector('.logo-box a'),'')
document.querySelector('.logo-box img').src='assets/images/resources/logo-2.png'
document.querySelector('.logo-box img').style.width="155px"
creatElm('div',document.querySelector('.mobile-nav__content'),'mobile-nav__container')
 creatElm('ul',document.querySelector('.mobile-nav__content'),'mobile-nav__contact list-unstyled')
    function mobile_nav(a_href,a_mobile,i_class,index) {
        creatElm('li',document.querySelector('.mobile-nav__contact'),"")
        creatElm('i',document.querySelectorAll('.mobile-nav__contact li').item(index),i_class)
        creatElm('a',document.querySelectorAll('.mobile-nav__contact li').item(index),'')
        document.querySelectorAll('.mobile-nav__contact a').item(index).href=a_href
        document.querySelectorAll('.mobile-nav__contact a').item(index).innerHTML=a_mobile
    }
mobile_nav('mailto:setinco@gmail.com','setinco@gmail.com',"fa fa-envelope",0)
mobile_nav("tel:666-888-0000",'09162352304','fa fa-phone-alt',1)
////mobile-nav__contact-end////
creatElm('div',document.querySelector('.mobile-nav__content'),'mobile-nav__top')
creatElm('div',document.querySelector('.mobile-nav__top'),'mobile-nav__social')
const mobile_social=['fab fa-twitter',"fab fa-facebook-square","fab fa-pinterest-p","fab fa-instagram"]
for (i=0;i<mobile_social.length;i++){
    creatElm('a',document.querySelector('.mobile-nav__social'),mobile_social[i])
    document.querySelectorAll('.mobile-nav__social a').item(i).href="#"
}
///////search-popup////
///search-popup.js
// search-popup-end/////