export const svgMoon = (
  <svg
    key="moon"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fillOpacity={0}
      d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"
      fill="currentColor"
    >
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="0.6s"
        dur="0.4s"
        values="0;1"
      ></animate>
    </path>
    <path
      fillOpacity={0}
      d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"
      fill="currentColor"
    >
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="1s"
        dur="0.4s"
        values="0;1"
      ></animate>
    </path>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <g>
        <path
          strokeDasharray={2}
          strokeDashoffset={4}
          d="M12 21v1M21 12h1M12 3v-1M3 12h-1"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          ></animate>
        </path>
        <path
          strokeDasharray={2}
          strokeDashoffset={4}
          d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          ></animate>
        </path>
        <set fill="freeze" attributeName="opacity" begin="0.5s" to={0}></set>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity={0}
      >
        <set fill="freeze" attributeName="opacity" begin="0.5s" to={1}></set>
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledTransition0">
      <circle cx={12} cy={12} r={12} fill="#fff"></circle>
      <circle cx={22} cy={2} r={3} fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        ></animate>
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        ></animate>
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        ></animate>
      </circle>
      <circle cx={22} cy={2} r={1}>
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        ></animate>
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        ></animate>
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        ></animate>
      </circle>
    </mask>
    <circle
      cx={12}
      cy={12}
      r={6}
      mask="url(#lineMdSunnyFilledLoopToMoonFilledTransition0)"
      fill="currentColor"
    >
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      ></animate>
      <set fill="freeze" attributeName="opacity" begin="0.5s" to={0}></set>
    </circle>
  </svg>
);
export const svgSun = (
  <svg
    key="sun"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path
        strokeDasharray={2}
        strokeDashoffset={2}
        d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
      >
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.6s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.6s"
          dur="0.2s"
          values="2;0"
        ></animate>
      </path>
      <path
        strokeDasharray={2}
        strokeDashoffset={2}
        d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
      >
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.8s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.8s"
          dur="0.2s"
          values="2;0"
        ></animate>
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      ></animateTransform>
    </g>
    <mask id="lineMdMoonFilledAltToSunnyFilledLoopTransition0">
      <circle cx={12} cy={12} r={12} fill="#fff"></circle>
      <circle cx={18} cy={6} r={12} fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          dur="0.4s"
          values="18;22"
        ></animate>
        <animate
          fill="freeze"
          attributeName="cy"
          dur="0.4s"
          values="6;2"
        ></animate>
        <animate
          fill="freeze"
          attributeName="r"
          dur="0.4s"
          values="12;3"
        ></animate>
      </circle>
      <circle cx={18} cy={6} r={10}>
        <animate
          fill="freeze"
          attributeName="cx"
          dur="0.4s"
          values="18;22"
        ></animate>
        <animate
          fill="freeze"
          attributeName="cy"
          dur="0.4s"
          values="6;2"
        ></animate>
        <animate
          fill="freeze"
          attributeName="r"
          dur="0.4s"
          values="10;1"
        ></animate>
      </circle>
    </mask>
    <circle
      cx={12}
      cy={12}
      r={10}
      mask="url(#lineMdMoonFilledAltToSunnyFilledLoopTransition0)"
      fill="currentColor"
    >
      <animate
        fill="freeze"
        attributeName="r"
        dur="0.4s"
        values="10;6"
      ></animate>
    </circle>
  </svg>
);
export const svgCog = (
  <svg
    key="cog"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <mask id="lineMdCogFilled0">
      <defs>
        <symbol id="lineMdCogFilled1">
          <path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z">
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.5s"
              dur="0.2s"
              values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"
            ></animate>
          </path>
        </symbol>
      </defs>
      <g fill="none" stroke="#fff" strokeWidth={2}>
        <path
          strokeDasharray={36}
          strokeDashoffset={36}
          strokeWidth={5}
          d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="36;0"
          ></animate>
          <set fill="freeze" attributeName="opacity" begin="0.5s" to={0}></set>
        </path>
        <g fill="#fff" stroke="none" opacity={0}>
          <use href="#lineMdCogFilled1"></use>
          <use href="#lineMdCogFilled1" transform="rotate(60 12 12)"></use>
          <use href="#lineMdCogFilled1" transform="rotate(120 12 12)"></use>
          <use href="#lineMdCogFilled1" transform="rotate(180 12 12)"></use>
          <use href="#lineMdCogFilled1" transform="rotate(240 12 12)"></use>
          <use href="#lineMdCogFilled1" transform="rotate(300 12 12)"></use>
          <set fill="freeze" attributeName="opacity" begin="0.5s" to={1}></set>
        </g>
      </g>
      <circle cx={12} cy={12} r={3.5}></circle>
    </mask>
    <rect
      width={24}
      height={24}
      fill="currentColor"
      mask="url(#lineMdCogFilled0)"
    ></rect>
  </svg>
);
