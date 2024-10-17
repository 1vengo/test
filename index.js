(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const l="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-visit'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-width='3.5556'%20stroke-miterlimit='4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M3.111%2028.889l25.778-25.778M28.889%203.111h-24M28.889%203.111v24'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",p="/test/assets/rectangle-5-KXSyIy5O.jpg",h="/test/assets/rectangle-6-BITc403L.jpg",u="/test/assets/rectangle-7-eknjt_20.jpg",d="/test/assets/rectangle-8-F10_StZF.jpg",m="/test/assets/rectangle-9-BYjOlly2.jpg",j="/test/assets/rectangle-10-C7X4Z0iv.jpg",b="/test/assets/rectangle-11-DCZ143EW.jpg",v="/test/assets/rectangle-12-D0VEquOU.jpg",f="/test/assets/first-screen-1-BDeN4ZW0.jpg",y="/test/assets/rectangle-4-DlZ9nugr.jpg",a=[{img:p,title:"English excellence webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:h,title:"wallet webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:u,title:"green harvest online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:d,title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:m,title:"power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:j,title:"energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:b,title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:v,title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:f,title:"mimino website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:y,title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"}];let r=0;const w=3;function g(){const n=document.getElementById("project-list");for(let s=0;s<w;s++){if(r>=a.length){document.getElementById("load-more").style.display="none";break}const i=a[r],o=document.createElement("li");o.classList.add("project-item"),o.innerHTML=`
      <img src="${i.img}" alt="${i.title}" class="img">
      <div class="item-text">
        <p class="text">${i.technologies}</p>
        <h3 class="label">${i.title}</h3>
        <a href="${i.github}" class="visit" target="_blank">Visit<svg class="visit-icon" width="15" height="15">
        <use href="/img/my-projects/${l}#icon-visit">
        </svg></a>
      </div>
    `,n.appendChild(o),r++}}g();document.getElementById("load-more").addEventListener("click",g);
//# sourceMappingURL=index.js.map
