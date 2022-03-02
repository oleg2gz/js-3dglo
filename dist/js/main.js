(()=>{"use strict";const e=(e,t)=>(t>e.length-1&&(t=0),t<0&&(t=e.length-1),t),t=(e,t,o="")=>{const a=document.querySelectorAll(e),n=/\D/g,r=/[^а-яА-Я\s-]/gi,l=/[^\w@\-.!~*']/gi,c=/[^\d\(\)-]/g,s=/(^|\s|\-)[а-яА-Я]/g,i=/\s{2,}/g,d=/\-{2,}/g,u=/^[\s\-]{0,}/g,m=/[\s\-]{0,}$/g,p=e=>{e.target.value&&(e.target.value=e.target.value.replace(i," ").replace(d,"-").replace(u,"").replace(m,""),"text"===e.target.type&&(e.target.value=e.target.value.toLowerCase().replace(s,(e=>e.toUpperCase()))),console.log(e.target.placeholder),console.log(e.target.value))};"select"===t&&a[0].addEventListener("change",(e=>{const t=e.target;console.log(t.options[t.selectedIndex].textContent),console.log(t.value)})),"input"===t&&a.forEach((e=>{e.addEventListener("input",(e=>{"numbers"===o?(e.target.value=e.target.value.replace(n,""),console.log(e.target.placeholder),console.log(e.target.value)):"text"===o?e.target.value=e.target.value.replace(r,""):"email"===o?e.target.value=e.target.value.replace(l,""):"tel"===o&&(e.target.value=e.target.value.replace(c,""))})),"numbers"!==o&&e.addEventListener("blur",p)}))};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds");let n;const r=e=>e<10?`0${e}`:e,l=()=>{const{hours:e,minutes:l,seconds:c,timeRemaining:s}=(()=>{let e=(new Date("8 march 2022").getTime()-(new Date).getTime())/1e3;return{hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60),timeRemaining:e}})();if(s<=0)return clearInterval(n),t.textContent="00",o.textContent="00",void(a.textContent="00");t.textContent=r(e),o.textContent=r(l),a.textContent=r(c)};l(),n=setInterval(l,1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.closest(".menu, .close-btn, ul>li>a")||e.classList.contains("active-menu")&&!t.target.closest(".active-menu"))&&(t.preventDefault(),e.classList.toggle("active-menu"))}))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn");let a,n,r=0;const l=()=>{r+=.05,a=requestAnimationFrame(l),r<1?(e.style.opacity=r,t.style.opacity=r):(e.style.opacity=1,t.style.opacity=1,cancelAnimationFrame(a))},c=()=>{r-=.05,n=requestAnimationFrame(c),r>0?(e.style.opacity=r,t.style.opacity=r):(e.style.display="none",t.style.opacity=0,cancelAnimationFrame(n))};o.forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth>=768?(e.style.display="block",l()):e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(window.innerWidth>=768?c():e.style.display="none")}))})(),document.addEventListener("click",(e=>{if(e.target.closest('menu>ul>li>a, main>a[href="#service-block"]')){e.preventDefault();const t=e.target.closest("a");document.querySelector(t.getAttribute("href")).scrollIntoView({block:"start",behavior:"smooth"})}})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(!e.target.closest(".service-header-tab"))return;const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(a.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}))})(),(t=>{let{slider:o,slide:a,dotContainer:n,dot:r,arrowLeft:l,arrowRight:c,dotActive:s="not-provided",slideActive:i="not-provided",sliderBtn:d="portfolio-btn"}=t;const u=document.querySelector(`.${o}`),m=document.querySelectorAll(`.${a}`),p=document.querySelector(`.${n}`);let g,v,y=0;const h=(e,t,o)=>{e[t].classList.remove(o)},f=(e,t,o)=>{e[t].classList.add(o)},L=()=>{h(m,y,i),h(v,y,s),y++,y=e(m,y),f(m,y,i),f(v,y,s)},E=(e=1500)=>{g=setInterval(L,e)};var b,q;u&&m[0]&&n?(u.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(`.${r}, .${d}`)&&(h(m,y,i),h(v,y,s),t.target.closest(l)?y--:t.target.matches(c)?y++:t.target.classList.contains(r)&&v.forEach(((e,o)=>{t.target===e&&(y=o)})),y=e(m,y),f(m,y,i),f(v,y,s))})),u.addEventListener("mouseenter",(e=>{e.target.matches(`.${r}, .${d}`)&&clearInterval(g)}),!0),u.addEventListener("mouseleave",(e=>{e.target.matches(`.${r}, .${d}`)&&E(2e3)}),!0),b=r,q=s,m.forEach(((e,t)=>{const o=document.createElement("li");0===t&&o.classList.add(q),o.classList.add(b),p.append(o)})),v=document.querySelectorAll(`.${b}`),E(2e3)):document.querySelectorAll(`.${d}`).forEach((e=>{e.addEventListener("click",(e=>e.preventDefault()))}))})({slider:"portfolio-content",slide:"portfolio-item",sliderBtn:"portfolio-btn",dotContainer:"portfolio-dots",dot:"dot",slideActive:"portfolio-item-active",dotActive:"dot-active",arrowLeft:"#arrow-left",arrowRight:"#arrow-right"}),t("select.calc-item","select"),t("input.calc-item","input","numbers"),t("input[name=user_message]","input","text"),t("input[name=user_name]","input","text"),t("input[type=email]","input","email"),t("input[type=tel]","input","tel")})();