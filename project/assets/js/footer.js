creatElm('footer',page_wrapper,'site-footer')
creatElm('div',document.querySelector('.site-footer'),'site-footer__top')
creatElm('div',document.querySelector('.site-footer__top'),'container')
creatElm('div',document.querySelector('.site-footer__top .container'),'site-footer__top-inner')
creatElm('div',document.querySelector('.site-footer__top-inner'),'row')

creatElm('div',document.querySelector('.site-footer__top-inner .row'),'col-xl-4 col-lg-6 col-md-6 wow fadeInUp')
document.querySelectorAll('.site-footer__top-inner .col-xl-4').item(0).setAttribute('data-wow-delay','100ms')

const data_delay_Col2=["200ms","300ms"]
for (i in data_delay_Col2){
    creatElm('div',document.querySelector('.site-footer__top-inner .row'),'col-xl-2 col-lg-6 col-md-6 wow fadeInUp')
    document.querySelectorAll('.site-footer__top-inner .col-xl-2').item(i).setAttribute('data-wow-delay',data_delay_Col2[i])
}
creatElm('div',document.querySelector('.site-footer__top-inner .row'),'col-xl-4 col-lg-6 col-md-6 wow fadeInUp')
document.querySelectorAll('.site-footer__top-inner .col-xl-4').item(0).setAttribute('data-wow-delay','400ms')

creatElm('div',document.querySelectorAll('.site-footer__top-inner .col-xl-4').item(0),'footer-widget__column footer-widget__about')
creatElm('div',document.querySelector('.footer-widget__column'),'footer-widget__about-logo')
creatElm('a',document.querySelector('.footer-widget__about-logo'),'')
creatElm('img',document.querySelector('.footer-widget__about-logo>a'),'')
document.querySelector('.footer-widget__about-logo>a>img').src="assets/images/resources/footer-logo.png"
document.querySelector('.footer-widget__about-logo>a').href="index.html"
creatElm('p',document.querySelector('.footer-widget__column'),'footer-widget__about-text')
document.querySelector('.footer-widget__about-text').innerHTML="به آژانس سفر و تور ما خوش آمدید. لورم به سادگی متن  را ارسال می کند."
creatElm('ul',document.querySelector('.footer-widget__column'),'footer-widget__about-contact list-unstyled')
const li_icon=["fas fa-phone-square-alt",'fas fa-envelope','fas fa-map-marker-alt']
const a_footer=["tel:09162352304",'mailto:setinco@gmail.com',""]
const a_FooterTxt=['09162352304','setinco@gmail.com',""]
for ( i=0;i<3;i++) {
    creatElm('li', document.querySelector('.footer-widget__about-contact'), '')
    creatElm('div', document.querySelectorAll('.footer-widget__about-contact li').item(i), "icon")
    creatElm('i', document.querySelectorAll('.footer-widget__about-contact li .icon').item(i), li_icon[i])
    creatElm('div', document.querySelectorAll('.footer-widget__about-contact>li').item(i), 'text')
    creatElm('a', document.querySelectorAll('.footer-widget__about-contact .text').item(i), "")
    document.querySelectorAll('.footer-widget__about-contact a').item(i).href = a_footer[i]
    document.querySelectorAll('.footer-widget__about-contact a').item(i).innerHTML = a_FooterTxt[i]
}
creatElm('p',document.querySelectorAll('.footer-widget__about-contact .text').item(2),"")
document.querySelector('.footer-widget__about-contact p').innerHTML="ایران یزد خیابان مطهری"

creatElm('div',document.querySelectorAll('.site-footer__top-inner .col-xl-2').item(1),'footer-widget__column footer-widget__company clearfix')

creatElm('h3',document.querySelector('.footer-widget__company'),'footer-widget__title')
document.querySelector('.footer-widget__title').innerHTML='شرکت'
creatElm('ul',document.querySelector('.footer-widget__company'),'footer-widget__company-list list-unstyled')
const footerList=['درباره ما','وبلاگ','جوایز','همکاری با ما','گروه را ملاقات کن']
for (i=0;i<footerList.length;i++){
    creatElm('li',document.querySelector('.footer-widget__company-list'),'')
    creatElm('a',document.querySelectorAll('.footer-widget__company-list li').item(i),"")
    document.querySelectorAll('.footer-widget__company a').item(i).innerHTML=footerList[i]
    document.querySelectorAll('.footer-widget__company a').item(i).href='#'
}
creatElm('div',document.querySelectorAll('.site-footer__top-inner .col-xl-2').item(0),'footer-widget__column footer-widget__explore')
creatElm('h3',document.querySelector('.footer-widget__explore'),'footer-widget__title')
document.querySelector('.footer-widget__explore h3').innerHTML="بیشتر"
creatElm('ul',document.querySelector('.footer-widget__explore'),'list-unstyled footer-widget__explore-list')
const moreList=["حساب","مجوز","تماس با ما","مشارکت","حریم خصوصی"]
for (i=0;i<moreList.length;i++){
    creatElm('li',document.querySelector('.footer-widget__explore-list'),'')
    creatElm('a',document.querySelectorAll('.footer-widget__explore-list li').item(i),"")
    document.querySelectorAll('.footer-widget__explore-list a').item(i).innerHTML=moreList[i]
    document.querySelectorAll('.footer-widget__explore-list a').item(i).href='#'
}

creatElm('div',document.querySelectorAll('.site-footer__top-inner .col-xl-4').item(1),'footer-widget__column footer-widget__newsletter')
creatElm('h3',document.querySelector('.footer-widget__newsletter'),'footer-widget__title')
document.querySelector('.footer-widget__newsletter h3').innerHTML="خبرنامه"
creatElm('form',document.querySelector('.footer-widget__newsletter'),"footer-widget__newsletter-form mc-form")
document.querySelector('.footer-widget__newsletter-form').setAttribute("data-url","")
creatElm("div",document.querySelector('.footer-widget__newsletter-form'),'footer-widget__newsletter-input-box')
creatElm('input',document.querySelector('.footer-widget__newsletter-input-box'),'')
const input_email=["type","email","placeholder","آدرس ایمیل","name","EMAIL"]
for (i=0;i<input_email.length;i+=2){
    document.querySelector('.footer-widget__newsletter-input-box input').setAttribute(input_email[i],input_email[i+1])
}
creatElm('button',document.querySelector('.footer-widget__newsletter-input-box'),'footer-widget__newsletter-btn')
document.querySelector('.footer-widget__newsletter-btn').setAttribute('type','submit')
document.querySelector('.footer-widget__newsletter-btn').innerHTML= "عضویت شما"
creatElm('div',document.querySelector('.footer-widget__newsletter'),'"mc-form__response text-center')
creatElm('div',document.querySelector('.footer-widget__newsletter'),'footer-widget__newsletter-bottom')
creatElm('div',document.querySelector('.footer-widget__newsletter-bottom'),'footer-widget__newsletter-bottom-icon')
creatElm('i',document.querySelector('.footer-widget__newsletter-bottom-icon'),'fa fa-check')
creatElm('div',document.querySelector('.footer-widget__newsletter-bottom'),'footer-widget__newsletter-bottom-text')
creatElm('p',document.querySelector('.footer-widget__newsletter-bottom-text'),'')
document.querySelector('.footer-widget__newsletter-bottom-text p').innerHTML="من با تمام شرایط و قوانین موافقم"
///////site-footer-bottom///////
creatElm('div',document.querySelector('.site-footer'),'site-footer__bottom')
creatElm('div',document.querySelector('.site-footer__bottom'),'container')
creatElm('div',document.querySelector('.site-footer__bottom .container'),'row')
creatElm('div',document.querySelector('.site-footer__bottom .row'),'col-xl-12')
creatElm('div',document.querySelector('.site-footer__bottom .col-xl-12'),'site-footer__bottom-inner')
creatElm('div',document.querySelector('.site-footer__bottom-inner'),'site-footer__bottom-left')
creatElm('div',document.querySelector('.site-footer__bottom-left'),'footer-widget__social')
const social_footer=["fab fa-twitter","fab fa-facebook","fab fa-pinterest-p","fab fa-instagram"]
for (i=0;i<social_footer.length;i++){
    creatElm('a',document.querySelector('.footer-widget__social'),"")
    creatElm('i',document.querySelectorAll('.footer-widget__social a').item(i),social_footer[i])
}
creatElm('div',document.querySelector('.site-footer__bottom-inner'),'site-footer__bottom-right')
document.querySelector('.site-footer__bottom-right').innerHTML=`<p>تمامی حقوق محفوظ است <a href="#">گروه ستین</a></p>`
creatElm('div',document.querySelector('.site-footer__bottom-inner'),'site-footer__bottom-left-arrow')
document.querySelector('.site-footer__bottom-left-arrow').innerHTML=`<a href="#" data-target="html" class="scroll-to-target scroll-to-top"><span class="icon-right-arrow"></span></a>`
/////////Site Footer One End//////