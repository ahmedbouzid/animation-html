let starts = document.getElementById('starts')
let moon = document.getElementById('moon')
let mountains1 = document.getElementById('mountains1')
let mountains2 = document.getElementById('mountains2')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let ahmed = document.querySelector('.ahmed')

window.onscroll = function() {
let value = scrollY ;
starts.style.left = value + 'px' ;
moon.style.top = value * 2 + 'px' ;
mountains1.style.top = value + 'px' ;
mountains2.style.top = value + 'px' ;
river.style.top = value +'px' ;
boat.style.top = value +'px' ;
boat.style.left = value * 2 +'px' ;
ahmed.style.fontSize = value +'px' ;
if (scrollY >= 67 ) {
    ahmed.style.fontSize = 67 +'px' ;
    ahmed.style.position = 'fixed' ;
    if (scrollY >= 478) {
        ahmed.style.display = 'none'
    } else {
        ahmed.style.display = 'block'
    }
    if (scrollY >=127) {
        document.querySelector('.main').style.background ='linear-gradient(#376281 , #10001f)'
    } else {
        document.querySelector('.main').style.background ='linear-gradient(rgb(158, 41, 158) , rgb(0, 0, 0))'

    }
}

}