(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let c;const l=e=>e<10?`0${e}`:e,r=()=>{const{hours:e,minutes:r,seconds:i,timeRemaining:s}=(()=>{let e=(new Date("28 february 2022").getTime()-(new Date).getTime())/1e3;return{hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60),timeRemaining:e}})();if(s<=0)return clearInterval(c),t.textContent="00",n.textContent="00",void(o.textContent="00");t.textContent=l(e),n.textContent=l(r),o.textContent=l(i)};r(),c=setInterval(r,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),n=e.querySelector(".popup-close"),o=document.querySelectorAll(".popup-btn");let c,l,r=0;const i=()=>{r+=.05,c=requestAnimationFrame(i),r<1?(e.style.opacity=r,t.style.opacity=r):(e.style.opacity=1,t.style.opacity=1,cancelAnimationFrame(c))},s=()=>{r-=.05,l=requestAnimationFrame(s),r>0?(e.style.opacity=r,t.style.opacity=r):(e.style.display="none",t.style.opacity=0,cancelAnimationFrame(l))};o.forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth>=768?(e.style.display="block",i()):e.style.display="block"}))})),n.addEventListener("click",(()=>{window.innerWidth>=768?s():e.style.display="none"}))})(),(()=>{const e=document.querySelectorAll("menu>ul>li>a"),t=document.querySelector("main>a"),n=e=>{e.preventDefault();const t=e.target.closest("a");document.querySelector(t.getAttribute("href")).scrollIntoView({block:"start",behavior:"smooth"})};e.forEach((e=>{e.addEventListener("click",n)})),t.addEventListener("click",n)})()})();