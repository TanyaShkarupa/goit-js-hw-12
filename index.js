import{a as p,S as u,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="57885931-70be65b5a26a36e09f32ff59f",m="https://pixabay.com/api/",y=o=>p.get(m,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data),c=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
              loading="lazy"
            />

            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                <span>${t.likes}</span>
              </p>

              <p class="info-item">
                <b>Views</b>
                <span>${t.views}</span>
              </p>

              <p class="info-item">
                <b>Comments</b>
                <span>${t.comments}</span>
              </p>

              <p class="info-item">
                <b>Downloads</b>
                <span>${t.downloads}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",s),g.refresh()}function b(){c.innerHTML=""}function L(){f.classList.remove("is-hidden")}function w(){f.classList.add("is-hidden")}const i=document.querySelector(".form");i.addEventListener("submit",o=>{o.preventDefault();const s=i.elements["search-text"].value.trim();if(!s){a.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L(),y(s).then(t=>{if(t.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{w()}),i.reset()});
//# sourceMappingURL=index.js.map
