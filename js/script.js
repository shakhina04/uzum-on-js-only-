/*
////Самостоятельное задание////
let box = document.createElement('div')
let h1 = document.createElement('h1')
let p = document.createElement('p')
let btn = document.createElement('button')

box.classList.add('box')
h1.classList.add('heading')
p.classList.add('paragraph')
btn.classList.add('btn')

let body = document.body

body.append(box)
box.append(h1)
box.append(p)
box.append(btn)

h1.innerHTML = 'Lorem ipsum dolor sit amet.'
p.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo speriores molestias quisquam, provident earum nam eligendi id consequuntur voluptates quas'
btn.innerHTML = 'Click'
*/

//////////-H.T-//////////
////
let body = document.body

let header = document.createElement('header')
//
let header_top = document.createElement('div')
header_top.classList.add('header_top')

let header_top_left = document.createElement('div')
header_top_left.classList.add('header_top_left') 

let header_top_left_img = document.createElement('img')
header_top_left_img.src = "img/location.png"

let header_top_left_a_city = document.createElement('a')
header_top_left_a_city.href = "#"
header_top_left_a_city.innerHTML =  "Город: Ташкент"
let header_top_left_a_destination = document.createElement('a')
header_top_left_a_destination.href = "#"
header_top_left_a_destination.innerHTML =  "Пункты выдачи"

let header_top_middle = document.createElement('div')
header_top_middle.classList.add('header_top_middle') 
header_top_middle.innerHTML = "Доставим ваш закас бесплатно - всего за 1 день!"



let header_top_right  = document.createElement('div')
header_top_right.classList.add('header_top_right') 


let header_top_right_a_answer = document.createElement('a')
header_top_right_a_answer.href = "#"
header_top_right_a_answer.innerHTML = "Вопрос-ответ"

let header_top_right_my_goods = document.createElement('a')
header_top_right_my_goods.href = "#"
header_top_right_my_goods.innerHTML = "Мои заказы"

let header_top_right_lang = document.createElement('a')
header_top_right_lang.classList.add('lang') 
header_top_right_lang.href = "#"
header_top_right_lang.innerHTML = "Русский"

let header_top_right_lang_img = document.createElement('img')
header_top_right_lang_img.src = "img/russia.png" 
//

//
let header_middle = document.createElement('div')
header_middle.classList.add('header_middle') 


let header_middle_left = document.createElement('div')
header_middle_left.classList.add('header_middle_left') 

let header_middle_left_img = document.createElement('img')
header_middle_left_img.src = "data:image/svg+xml,%3csvg width='215' height='32' viewBox='0 0 215 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect width='31.9764' height='31.9764' rx='15.9882' fill='%23FFFF00'/%3e %3cpath d='M3.75192 14.7933C3.27969 12.1152 3.04358 10.7761 3.38441 9.66131C3.68421 8.68069 4.28676 7.82017 5.1057 7.20306C6.0367 6.50149 7.37576 6.26538 10.0539 5.79316L18.144 4.36665C20.8221 3.89442 22.1612 3.65831 23.276 3.99914C24.2566 4.29894 25.1171 4.90149 25.7342 5.72043C26.4358 6.65143 26.6719 7.99049 27.1441 10.6686L28.2537 16.9611C28.7259 19.6393 28.962 20.9783 28.6212 22.0931C28.3214 23.0737 27.7188 23.9343 26.8999 24.5514C25.9689 25.2529 24.6298 25.489 21.9517 25.9613L13.8616 27.3878C11.1835 27.86 9.84441 28.0961 8.72961 27.7553C7.749 27.4555 6.88847 26.8529 6.27136 26.034C5.5698 25.103 5.33368 23.7639 4.86146 21.0858L3.75192 14.7933Z' fill='%237000FF'/%3e %3cpath d='M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z' fill='white'/%3e %3cpath d='M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z' fill='white'/%3e %3cpath d='M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z' fill='white'/%3e %3cpath d='M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z' fill='white'/%3e %3cpath d='M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z' fill='white'/%3e %3cpath d='M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z' fill='white'/%3e %3cpath d='M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z' fill='white'/%3e %3cpath d='M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z' fill='white'/%3e %3cpath d='M136.192 9.43597C133.804 9.43597 132 10.4097 131.101 11.8772C130.195 10.4097 128.22 9.43597 126.161 9.43597C122.114 9.43597 120.049 11.9938 120.049 15.1688V22.7806H123.829V15.7037C123.829 14.1951 124.631 12.851 126.456 12.851C128.288 12.851 129.235 14.1333 129.235 15.6488V22.7806H133.029V15.6488C133.029 14.1265 133.921 12.851 135.739 12.851C137.571 12.851 138.421 14.1951 138.421 15.7037V22.7806H142.202V15.1688C142.195 11.9938 140.246 9.43597 136.192 9.43597Z' fill='%237000FF'/%3e %3cpath d='M159.051 18.1861V9.6897H155.312L155.34 11.7538C154.523 10.54 153.096 9.43597 150.558 9.43597C146.194 9.43597 143.951 12.8236 143.951 16.2249C143.869 19.6673 146.407 23.0892 150.373 23.0892C152.472 23.0892 154.393 22.1566 155.312 20.5177C155.683 21.6011 156.623 22.7875 158.571 22.7875H160.732V19.6125H160.128C159.374 19.6125 159.051 19.3313 159.051 18.1861ZM151.347 19.8113C149.199 19.8113 147.594 18.3301 147.594 16.2523C147.594 14.2019 149.199 12.7481 151.347 12.7481C153.563 12.7481 155.168 14.2019 155.168 16.2523C155.168 18.3301 153.563 19.8113 151.347 19.8113Z' fill='%237000FF'/%3e %3cpath d='M163.14 14.1539V22.7806H166.92V16.9929C166.92 14.7505 168.546 13.3104 170.618 13.3104H173.088V9.41537H171.236C168.951 9.41537 167.284 11.3629 166.92 12.4944V12.0966V9.68282H163.14V14.1539Z' fill='%237000FF'/%3e %3cpath d='M175.325 22.7806H179.105V16.3688L184.978 22.7806H189.437L183.352 16.0534L188.971 9.68967H184.525L179.105 15.8271V5.6369H175.325V22.7806Z' fill='%237000FF'/%3e %3cpath d='M193.862 17.2604C193.862 18.7004 194.61 20.1542 197.025 20.1542C199.241 20.1542 199.563 18.8239 199.563 18.8239H203.714C203.714 18.8239 203.33 23.0892 197.025 23.0892C192.634 23.0892 189.883 20.6342 189.883 16.2523C189.883 11.8635 192.634 9.43597 196.984 9.43597C201.272 9.43597 204.037 11.8635 204.037 16.2523C204.037 16.7323 203.954 17.2672 203.954 17.2672H193.862V17.2604ZM193.91 14.9562H199.996C199.996 13.8865 199.378 12.371 196.977 12.371C194.61 12.371 193.91 13.8933 193.91 14.9562Z' fill='%237000FF'/%3e %3cpath d='M212.661 19.4959C211.364 19.4959 210.897 18.9198 210.897 17.0957V12.4807H214.993V9.44281H210.897V6.83011H208.853L205.21 10.3137V12.4875H207.117V17.5963C207.117 21.2651 208.908 22.808 212.661 22.808H215V19.5027H212.661V19.4959Z' fill='%237000FF'/%3e %3cpath d='M83.6802 16.4854C83.6802 18.5564 82.507 19.5164 80.7644 19.5164C79.0218 19.5164 77.8898 18.577 77.8898 16.4854V9.64166H74.1301V16.6157C74.1301 21.1622 77.9309 22.9383 80.7918 22.9383C83.6527 22.9383 87.4604 21.1554 87.4604 16.6157V9.64166H83.7007L83.6802 16.4854Z' fill='%237000FF'/%3e %3cpath d='M70.9468 12.8167V9.64166H58.728V12.8167H65.966L58.4398 19.5233V22.6983H71.4133V19.5233H63.4344L70.9468 12.8167Z' fill='%237000FF'/%3e %3cpath d='M106.286 9.39484C103.905 9.39484 102.108 10.3617 101.216 11.8361C100.31 10.3617 98.3414 9.39484 96.2969 9.39484C92.2766 9.39484 90.1841 11.9527 90.1841 15.1208V22.6983H93.9437V15.6489C93.9437 14.1334 94.7395 12.803 96.5645 12.803C96.935 12.7824 97.3054 12.8373 97.6553 12.9676C98.0052 13.0979 98.3208 13.3036 98.5815 13.571C98.8422 13.8316 99.048 14.1539 99.1784 14.5037C99.3088 14.8534 99.3636 15.2237 99.3431 15.594V22.6983H103.103V15.594C103.103 14.0785 103.995 12.803 105.799 12.803C107.603 12.803 108.475 14.1334 108.475 15.6489V22.6983H112.234V15.1277C112.234 11.9664 110.293 9.40169 106.252 9.40169L106.286 9.39484Z' fill='%237000FF'/%3e %3cpath d='M52.1966 16.4854C52.1966 18.5564 51.0235 19.5164 49.2946 19.5164C47.5657 19.5164 46.4062 18.577 46.4062 16.4854V9.64166H42.6466V16.6157C42.6466 21.1622 46.4337 22.9383 49.3083 22.9383C52.1829 22.9383 55.9631 21.1554 55.9631 16.6157V9.64166H52.2035L52.1966 16.4854Z' fill='%237000FF'/%3e %3c/svg%3e"


let header_middle_middle = document.createElement('div')
header_middle_middle.classList.add('header_middle_middle') 

let header_middle_middle_p = document.createElement('p')
header_middle_middle_p.innerHTML = "Каталог"

let header_middle_middle_input = document.createElement('input')
header_middle_middle_input.type = "text"
header_middle_middle_input.placeholder = "Искать товары и категории"

let header_middle_middle_img = document.createElement('img')
header_middle_middle_img.src = "img/lupa.png"


let header_middle_right = document.createElement('div')
header_middle_right.classList.add('header_middle_right') 

let header_middle_right_a_one = document.createElement('a')
header_middle_right_a_one.href = "#"
header_middle_right_a_one.innerHTML = "Войти"

let header_middle_right_a_one_img = document.createElement('img')
header_middle_right_a_one_img.classList.add('anonym_icon') 
header_middle_right_a_one_img.src = "img/anonym.png"

let header_middle_right_a_two = document.createElement('a')
header_middle_right_a_two.href = "#"
header_middle_right_a_two.innerHTML = "Избранное"


let header_middle_right_a_two_img = document.createElement('img')
header_middle_right_a_two_img.classList.add('heart_icon') 
header_middle_right_a_two_img.src = "img/heart.png"

let header_middle_right_a_three = document.createElement('a')
header_middle_right_a_three.href = "#"
header_middle_right_a_three.innerHTML = "Корзина"


let header_middle_right_a_three_img = document.createElement('img')
header_middle_right_a_three_img.classList.add('bag_icon') 
header_middle_right_a_three_img.src = "img/bag.png"

//

let header_bottom = document.createElement('div')
header_bottom.classList.add('header_bottom') 

let header_bottom_a1 = document.createElement('a')
header_bottom_a1.href = "#"
header_bottom_a1.innerHTML = "Халяльная рассрочка"

let header_bottom_a2 = document.createElement('a')
header_bottom_a2.href = "#"
header_bottom_a2.innerHTML = "Электроника"


let header_bottom_a3 = document.createElement('a')
header_bottom_a3.href = "#"
header_bottom_a3.innerHTML = "Бытовая техника"


let header_bottom_a4 = document.createElement('a')
header_bottom_a4.href = "#"
header_bottom_a4.innerHTML = "Одежда"


let header_bottom_a5 = document.createElement('a')
header_bottom_a5.href = "#"
header_bottom_a5.innerHTML = "Обувь"


let header_bottom_a6 = document.createElement('a')
header_bottom_a6.href = "#"
header_bottom_a6.innerHTML = "Аксессуары"

let header_bottom_a7 = document.createElement('a')
header_bottom_a7.href = "#"
header_bottom_a7.innerHTML = "Красота"

let header_bottom_a8 = document.createElement('a')
header_bottom_a8.href = "#"
header_bottom_a8.innerHTML = "Здоровье"

let header_bottom_a9 = document.createElement('a')
header_bottom_a9.href = "#"
header_bottom_a9.innerHTML = "Товары для дома"

let header_bottom_a10 = document.createElement('a')
header_bottom_a10.href = "#"
header_bottom_a10.innerHTML = "Строительство и ремонт"

let header_bottom_a11 = document.createElement('a')
header_bottom_a11.href = "#"
header_bottom_a11.innerHTML = "Еще"

let header_bottom_a11_img = document.createElement('img')
header_bottom_a11_img.src = "img/arrow_down_icon.png"
//
////

let good_box = document.createElement('div')
good_box.classList.add('good_box') 

let good_box_img = document.createElement('img')
good_box_img.src = "img/makaron.jpg"

let good_box_h2 = document.createElement('h2')
good_box_h2.innerHTML = "Макаронные изделия Melek, 6 видов, 400 г"

let good_box_h3 = document.createElement('h3')
good_box_h3.innerHTML = "4.9 (73 оценки)"
let good_box_h3_img = document.createElement('img')
good_box_h3_img.src = "img/star.png" 

let good_box_h4 = document.createElement('h4')
good_box_h4.innerHTML = "600 сум/мес"

let good_box_h5 = document.createElement('h5')
good_box_h5.innerHTML = "7000 сум"

let good_box_h6 = document.createElement('h6')
good_box_h6.innerHTML = "5000 сум"




body.append(header)

header.append(header_top)

header_top.append(header_top_left)
header_top_left.append(header_top_left_img)
header_top_left.append(header_top_left_a_city)
header_top_left.append(header_top_left_a_destination)

header_top.append(header_top_middle)

header_top.append(header_top_right)
header_top_right.append
(header_top_right_a_answer)

header_top_right.append
(header_top_right_my_goods)

header_top_right.append(header_top_right_my_goods)

header_top_right.append(header_top_right_lang)
header_top_right_lang.append(header_top_right_lang_img)
//

header.append(header_middle)

header_middle.append(header_middle_left)

header_middle_left.append(header_middle_left_img)

header_middle.append(header_middle_middle)
header_middle_middle.append(header_middle_middle_p)
header_middle_middle.append(header_middle_middle_input)
header_middle_middle.append(header_middle_middle_img)

header_middle.append(header_middle_right)

header_middle_right.append(header_middle_right_a_one)
header_middle_right_a_one.append(header_middle_right_a_one_img)
header_middle_right.append(header_middle_right_a_two)
header_middle_right_a_two.append(header_middle_right_a_two_img)
header_middle_right.append(header_middle_right_a_three)
header_middle_right_a_three.append(header_middle_right_a_three_img)
//

header.append(header_bottom)

header_bottom.append(header_bottom_a1)
header_bottom.append(header_bottom_a2)
header_bottom.append(header_bottom_a3)
header_bottom.append(header_bottom_a4)
header_bottom.append(header_bottom_a5)
header_bottom.append(header_bottom_a6)
header_bottom.append(header_bottom_a7)
header_bottom.append(header_bottom_a8)
header_bottom.append(header_bottom_a9)
header_bottom.append(header_bottom_a10)
header_bottom.append(header_bottom_a11)
header_bottom_a11.append(header_bottom_a11_img)
//

body.append(good_box)

good_box.append(good_box_img)
good_box.append(good_box_h2)
good_box.append(good_box_h3)
good_box_h3.append(good_box_h3_img)
good_box.append(good_box_h4)
good_box.append(good_box_h5)
good_box.append(good_box_h6)























































