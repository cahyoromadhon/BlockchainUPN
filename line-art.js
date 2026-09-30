const lineArt = {
    hero: `
        <svg aria-hidden="true" viewBox="0 0 420 560" fill="none" stroke="currentColor" stroke-width="1"
            stroke-linejoin="round"
            class="hidden sm:block absolute right-0 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 w-[44vw] max-w-[34rem] h-[72vh] text-white opacity-25 pointer-events-none">
            <path d="M420 40H248L196 92v92l78 78v112l-72 72H30"></path>
            <path d="M420 210H338l-54 54v92l-78 78H96"></path>
            <path d="M150 0v72l-54 54v124l86 86v98"></path>
            <path d="M420 500h-74l-64-64v-98l-82-82H72V148"></path>
            <polygon points="196,54 248,84 248,144 196,174 144,144 144,84"></polygon>
            <polygon points="284,234 338,264 338,324 284,354 230,324 230,264"></polygon>
            <polygon points="182,386 234,416 234,476 182,506 130,476 130,416"></polygon>
            <polygon points="72,118 112,141 112,187 72,210 32,187 32,141"></polygon>
            <path d="M196 54v60m-52-30 52 30 52-30M196 114v60"></path>
            <path d="M284 234v60m-54-30 54 30 54-30M284 294v60"></path>
            <path d="M182 386v60m-52-30 52 30 52-30M182 446v60"></path>
        </svg>`,
    about: `
        <svg aria-hidden="true" viewBox="0 0 520 520" fill="none" stroke="currentColor" stroke-width="1"
            class="absolute -right-24 top-1/2 -translate-y-1/2 w-[26rem] max-w-[80vw] text-accent opacity-20 pointer-events-none">
            <circle cx="260" cy="260" r="170"></circle>
            <circle cx="260" cy="260" r="112" stroke-dasharray="4 12"></circle>
            <ellipse cx="260" cy="260" rx="220" ry="82" transform="rotate(-28 260 260)"></ellipse>
            <ellipse cx="260" cy="260" rx="220" ry="82" transform="rotate(48 260 260)"></ellipse>
            <circle cx="260" cy="260" r="8" fill="currentColor" stroke="none"></circle>
            <circle cx="95" cy="162" r="5" fill="#121212"></circle>
            <circle cx="434" cy="356" r="5" fill="#121212"></circle>
            <path d="M95 162 146 192M434 356l-50-28"></path>
        </svg>`,
    program: `
        <svg aria-hidden="true" viewBox="0 0 640 360" fill="none" stroke="currentColor" stroke-width="1"
            class="absolute right-0 top-24 w-[34rem] max-w-[92vw] text-white opacity-10 pointer-events-none">
            <path d="M40 72h120l42 42h112l52-52h150"></path>
            <path d="M96 292h108l58-58h92l48-48h178"></path>
            <path d="M278 114v120M366 62v124M452 186v106"></path>
            <rect x="148" y="52" width="24" height="24" transform="rotate(45 148 52)"></rect>
            <rect x="354" y="102" width="24" height="24" transform="rotate(45 354 102)"></rect>
            <rect x="440" y="268" width="24" height="24" transform="rotate(45 440 268)"></rect>
            <circle cx="202" cy="114" r="4" fill="currentColor"></circle>
            <circle cx="366" cy="186" r="4" fill="currentColor"></circle>
            <circle cx="500" cy="72" r="4" fill="currentColor"></circle>
        </svg>`,
    footer: `
        <svg aria-hidden="true" viewBox="0 0 520 260" fill="none" stroke="currentColor" stroke-width="1"
            class="absolute right-0 bottom-0 w-[32rem] max-w-[90vw] text-accent opacity-15 pointer-events-none">
            <path d="M520 220H390l-62-62H216l-70-70H0"></path>
            <path d="M520 98h-72l-48-48H286l-42 42H92"></path>
            <path d="M390 158v62M216 88v70M286 50v48"></path>
            <circle cx="390" cy="220" r="7"></circle>
            <circle cx="216" cy="158" r="7"></circle>
            <circle cx="286" cy="98" r="7"></circle>
            <circle cx="92" cy="92" r="5" fill="currentColor"></circle>
            <path d="M390 220l-18-18m18 18 18-18M216 158l-18-18m18 18 18-18"></path>
        </svg>`
};

document.querySelectorAll('[data-line-art]').forEach((placeholder) => {
    const art = lineArt[placeholder.dataset.lineArt];

    if (art) {
        placeholder.outerHTML = art;
    }
});
