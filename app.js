let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let orix = document.querySelector('.orix');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)     
            
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade')

                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 5 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    orix.style.fontSize = value + 'px';
    if(scrollY >= 90){
        orix.style.fontSize = 90 + 'px';
        orix.style.position = 'fixed';
        if(scrollY >= 498){
            orix.style.display = 'none';
        }else{
            orix.style.display = 'block';

        }
        if(scrollY >= 102){
            document.querySelector('.main').style.backgroud = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.backgroud = 'linear-gradient(#200016,#10001f)'
    

       
        }

        
    }


}