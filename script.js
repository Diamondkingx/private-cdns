(function () {
    class CustomMenu extends HTMLDivElement {
        static HTML_Template = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <style>
        :host {
            width: max-content;
            height: max-content;
            padding: 1rem;
            position: absolute;
            inset: 10% 40%;
            /*Temporary*/
            color: white;
            /*Temporary*/
            background: rgb(4, 4, 4);
            border-radius: 1.5rem;
            box-shadow: 0 0 1rem rgb(4, 4, 4);
            transition: scale 0.7s ease-in-out, opacity 0.4s ease-in;
            overflow: hidden;
        }

        :host(.closed) {
            scale: 0.5 !important;
            opacity: 0 !important;
            pointer-events: none;
        }

        section {
            position: relative;
            display: flex;
            align-items: center;
        }

        ::slotted([slot="content-wrapper"]), ::slotted([slot="menu-name"])  {
            background: radial-gradient(transparent, rgb(126, 244, 11, 0.2));
            border-radius: 1rem;
            padding: 1rem;
            box-shadow: 0 0 1rem rgb(126, 244, 11, 0.2);
        }

        ::slotted([slot="content-wrapper"]) {
            box-shadow: 0 0 1rem rgb(126, 244, 11, 0.2);
            margin-top: 1rem;
        }

        ::slotted([slot="menu-name"]) {
            display: block;
            width: max-content;
            height: max-content;
            font-family: 'Josefin Sans', sans-serif;
            font-size: 1.3rem;
            color: rgb(126, 244, 11);
            text-shadow: 0 0 1.5rem rgb(126, 244, 11, 0.2);
            overflow: visible;
        }

        #close {
            width: 2rem;
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            position: absolute;
            left: 100%;
            transform: translateX(-100%);
            color: rgb(126, 244, 11);
            font-family: 'Josefin Sans', sans-serif;
            background: transparent;
            border-radius: 50%;
            appearance: none;
            border: none;
            outline: none;
            cursor: pointer;
        }

        #close i {
            font-family: cursive;
            font-weight: 100;
        }

        #close svg {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        #close :is(.body, .outline, tspan, i) {
            transform-box: border-box;
            transform-origin: center;
            transition: scale 0.2s ease-out, filter 0.1s;
        }

        #close:hover .outline {
            transition-delay: 0s, 0.133s;
        }

        #close:hover .outline {
            scale: 3;
        }

        #close:active :is(.body, .outline, tspan, i) {
            filter: brightness(3);
        }
    </style>
    <section>
        <button id="close">
            <svg width="9.6122293mm" height="9.6122284mm" viewBox="0 0 9.6122293 9.6122284" version="1.1" id="svg1">
                <sodipodi:namedview id="namedview1" pagecolor="#0b0a0a" bordercolor="#000000" borderopacity="0.25" />
                <defs id="defs1">
                    <linearGradient id="linearGradient98">
                        <stop style="stop-color:rgb(126, 244, 11);stop-opacity:0.50196081;" offset="0" />
                        <stop style="stop-color:rgb(126, 244, 11);stop-opacity:1;" offset="0.50209641" />
                        <stop style="stop-color:rgb(126, 244, 11);stop-opacity:0.49803922;" offset="1" />
                    </linearGradient>
                    <linearGradient id="linearGradient84">
                        <stop style="stop-color:rgb(126, 244, 11);stop-opacity:0;" offset="0" />
                        <stop style="stop-color:rgb(126, 244, 11);stop-opacity:1;" offset="0.5" />
                        <stop style="stop-color:rgb(126, 244, 11);stop-opacity:0;" offset="1" />
                    </linearGradient>
                    <linearGradient id="linearGradient75">
                        <stop style="stop-color:rgb(126, 244, 11);stop-opacity:0;" offset="0" />
                        <stop style="stop-color:rgb(126, 244, 11);stop-opacity:1;" offset="1" />
                    </linearGradient>
                    <linearGradient xlink:href="#linearGradient84" id="linearGradient60" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0,-0.60610956,0.64747174,0,9.9789553,50.364306)" x1="20.939892"
                        y1="10.930523" x2="29.3279" y2="10.930523" />
                    <linearGradient xlink:href="#linearGradient98" id="linearGradient67" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0.86573276,0,0,0.86573276,2.077967,23.430682)" x1="20.073009"
                        y1="10.967215" x2="24.430519" y2="16.010769" />
                    <radialGradient xlink:href="#linearGradient75" id="radialGradient82" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0.76926171,0,0,0.76926174,1.9942246,22.753231)" cx="25.133894"
                        cy="16.089689" fx="25.133894" fy="16.089689" r="5.1591668" />
                    <linearGradient xlink:href="#linearGradient84" id="linearGradient85" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0.60610956,0,0,0.64747174,6.094871,23.780606)" x1="20.939892"
                        y1="10.930523" x2="29.3279" y2="10.930523" />
                    <linearGradient xlink:href="#linearGradient84" id="linearGradient89" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0,0.60610956,-0.64747174,0,32.678571,19.896522)" x1="20.939892"
                        y1="10.930523" x2="29.3279" y2="10.930523" />
                    <linearGradient xlink:href="#linearGradient84" id="linearGradient93" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(-0.60610956,0,0,-0.64747174,36.562655,46.480222)" x1="20.939892"
                        y1="10.930523" x2="29.3279" y2="10.930523" />
                    <filter style="color-interpolation-filters:sRGB" id="filter112" x="-0.63619338" y="-0.54965587"
                        width="2.2723868" height="2.0993117">
                        <feFlood result="flood" in="SourceGraphic" flood-opacity="1.000000" flood-color="rgb(74,20,140)"
                            id="feFlood111" />
                        <feGaussianBlur result="blur" in="SourceGraphic" stdDeviation="1.000000"
                            id="feGaussianBlur111" />
                        <feOffset result="offset" in="blur" dx="0.000000" dy="0.000000" id="feOffset111" />
                        <feComposite result="comp1" operator="in" in="offset" in2="flood" id="feComposite111" />
                        <feComposite result="comp2" operator="over" in="SourceGraphic" in2="comp1"
                            id="feComposite112" />
                    </filter>
                </defs>
                <g id="layer1" transform="translate(-16.522648,-30.3243)">
                    <path id="path22"
                        style="opacity:0.299539;fill:url(#radialGradient82);fill-opacity:0.498403;stroke-width:0.265;stroke-linecap:round;stroke-linejoin:round;paint-order:fill markers stroke"
                        d="m 25.297512,35.130413 a 3.9687495,3.9687497 0 0 1 -3.968749,3.96875 3.9687495,3.9687497 0 0 1 -3.968751,-3.96875 3.9687495,3.9687497 0 0 1 3.968751,-3.968749 3.9687495,3.9687497 0 0 1 3.968749,3.968749 z"
                        class="body" />
                    <path id="path56"
                        style="fill:none;stroke:url(#linearGradient60);stroke-width:0.265;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:fill markers stroke"
                        d="m 17.452978,37.592128 a 4.7224731,4.4207893 0 0 1 -0.79783,-2.458788 4.7224731,4.4207893 0 0 1 0.802023,-2.464645"
                        class="outline" />
                    <path id="path84"
                        style="fill:none;stroke:url(#linearGradient85);stroke-width:0.265;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:fill markers stroke"
                        d="m 18.867049,31.254629 a 4.4207893,4.7224731 0 0 1 2.458788,-0.79783 4.4207893,4.7224731 0 0 1 2.464645,0.802023"
                        class="outline" />
                    <path id="path88"
                        style="fill:none;stroke:url(#linearGradient60);stroke-width:0.265;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:fill markers stroke"
                        d="m 25.204548,32.6687 a 4.7224731,4.4207893 0 0 1 0.79783,2.458788 4.7224731,4.4207893 0 0 1 -0.802023,2.464645"
                        class="outline" />
                    <path id="path92"
                        style="fill:none;stroke:url(#linearGradient85);stroke-width:0.265;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:fill markers stroke"
                        d="m 23.790477,39.006199 a 4.4207893,4.7224731 0 0 1 -2.458788,0.79783 4.4207893,4.7224731 0 0 1 -2.464645,-0.802023"
                        class="outline" />
                </g>
            </svg>
            <i class="fa-solid fa-x"></i>
        </button>
        <slot name="menu-name">Undefined Menu</slot>
    </section>
    <slot name="content-wrapper">No Content Available</slot>
`
        static observedAttributes = ["controller"]
        constructor() {
            super();
            this.closed = false
            this.shadow = this.attachShadow({ mode: "open" })
            this.shadow.innerHTML = CustomMenu.HTML_Template
            this.closeButton = this.shadow.querySelector("button")
            this.closeButton.onclick = () => this.close(true)
        }
        get controller() {
            return this.getAttribute("controller")
        }
        set controller(value) {
            this.setAttribute("controller", value)
        }
        get controllerElement() {
            return document.querySelector(this.controller)
        }
        connectedCallback() {
            window.addEventListener("click", event => this.close(false, event))
        }
        disconnectedCallback() {
            window.removeEventListener("click", this.close)
        }
        open() {
            this.classList.remove("closed")
            return this.closed = false
        }
        close(forceClose, event) {
            if (!forceClose && this.contains(event.target)) return;
            this.classList.add("closed")
            return this.closed = true
        }
        toggle() {
            if (this.closed = !this.closed) return this.close(true)
            return this.open()
        }
        attributeChangedCallback(name, oldVal, newVal) {
            if (name === "controller") {
                this.controllerElement.addEventListener("click", (event) => {
                    event.stopImmediatePropagation()
                    this.toggle()
                })
            }
        }
    }

    const css = document.createTextNode(`
input[type=checkbox] {
    appearance: none;
    -webkit-appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    scale: 0.85;
    position: relative;
    margin: 0;
    background: rgb(126, 244, 11, 0.1);
    border: 1px solid rgb(126, 244, 11, 0.2);
    outline: none;
    border-radius: 0.3rem;
    box-shadow: 0 0 1rem rgb(126, 244, 11, 0.1);
    transition: border 0.2s ease-out;
    cursor: pointer;
}

input[type=checkbox]::before {
    content: " ";
    display: block;
    width: 75%;
    aspect-ratio: 1;
    position: relative;
    scale: 0;
    opacity: 0;
    background: rgb(126, 244, 11, 0.75);
    border-radius: 0.2rem;
    box-shadow: 0 0 1rem rgb(126, 244, 11, 0.75);
    transition: scale 0.2s ease-in-out, opacity 0.2s ease-out;
}

input[type=checkbox]:checked {
    border: 1px solid rgb(126, 244, 11, 0.1);
}

input[type=checkbox]:checked:before {
    scale: 1;
    opacity: 1;
}

label {
    font-family: 'Josefin Sans', sans-serif;
    color: rgb(126, 244, 11);
    text-shadow: 0 0 1.5rem rgb(126, 244, 11);
    display: inline;
}`),
        style = document.createElement("style");
    style.append(css)
    document.head.append(style)
    customElements.define("custom-menu", CustomMenu, { extends: "div" })
})()

