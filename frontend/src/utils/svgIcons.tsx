export const svgLogo = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.604471"
      y="0.348756"
      width="11.1146"
      height="15.8956"
      transform="matrix(0.962404 -0.271621 0.246537 0.969133 -0.063256 5.46554)"
      fill="white"
      stroke="black"
    />
    <rect
      width="6.73033"
      height="11.2638"
      transform="matrix(0.962404 -0.271621 0.246537 0.969133 3.2851 7.28833)"
      fill="black"
    />
    <rect
      x="0.174744"
      y="0.701695"
      width="11.2444"
      height="15.7285"
      transform="matrix(0.844989 0.534783 -0.495501 0.868607 14.0284 1.99881)"
      fill="white"
      stroke="black"
    />
    <rect
      width="6.80243"
      height="11.1523"
      transform="matrix(0.844989 0.534783 -0.495501 0.868607 14.5714 5.87689)"
      fill="black"
    />
    <path
      d="M12.8029 15.3545L11.1289 15.1624L12.0129 13.3147L12.2602 13.4011L11.6734 14.6313L13.1069 14.7961L12.8029 15.3545ZM14.1851 15.7031L13.8621 15.8153L12.5525 10.9662L12.8831 10.8493L14.1851 15.7031ZM15.1118 14.0504L14.8684 13.9617L15.459 12.7291L14.02 12.573L14.3218 12.0106L15.9958 12.2027L15.1118 14.0504Z"
      fill="white"
    />
  </svg>
);
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
export const svgPlay = (
  <svg
    key="play"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillOpacity={0}
      stroke="currentColor"
      strokeDasharray={40}
      strokeDashoffset={40}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 6l10 6l-10 6Z"
    >
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="0.5s"
        dur="0.5s"
        values="0;1"
      ></animate>
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.5s"
        values="40;0"
      ></animate>
    </path>
  </svg>
);
export const svgReset = (
  <svg
    key="reset"
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
        strokeDasharray={32}
        strokeDashoffset={32}
        d="M12 6c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6v-2.5"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.4s"
          values="32;0"
        ></animate>
      </path>
      <path strokeDasharray={6} strokeDashoffset={6} d="M6 9l-3 3M6 9l3 3">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.4s"
          dur="0.2s"
          values="6;0"
        ></animate>
      </path>
    </g>
  </svg>
);
export const svgClose = (
  <svg
    key="close"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray={16}
      strokeDashoffset={16}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M7 7l10 10">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.4s"
          values="16;0"
        ></animate>
      </path>
      <path d="M17 7l-10 10">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.4s"
          dur="0.4s"
          values="16;0"
        ></animate>
      </path>
    </g>
  </svg>
);
export const svgImg = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8.013c-5.385 0-9.75 1.785-9.75 3.987s4.365 3.987 9.75 3.987s9.75-1.785 9.75-3.987S17.385 8.013 12 8.013"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.423 10.006c-2.692-4.704-6.407-7.625-8.298-6.524c-1.89 1.101-1.24 5.807 1.452 10.512c2.692 4.704 6.408 7.625 8.298 6.524s1.24-5.807-1.452-10.512"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.423 13.994c2.693-4.705 3.343-9.41 1.452-10.512c-1.89-1.1-5.606 1.82-8.298 6.524s-3.342 9.41-1.452 10.512c1.89 1.1 5.606-1.82 8.298-6.524"
      ></path>
      <circle cx={12} cy={12} r={1.5} fill="currentColor"></circle>
    </g>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.701 4.57h3.161c.384 0 .739.202.936.531L12 8.791l2.203-3.69a1.09 1.09 0 0 1 .935-.531h3.16m-12.597 0h-1.86a1.09 1.09 0 0 0-.935 1.648l8.158 13.671a1.09 1.09 0 0 0 1.872 0l8.158-13.671a1.09 1.09 0 0 0-.935-1.648h-1.86M5.7 4.57L12 15.124L18.299 4.57"
    ></path>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g fill="none" stroke="currentColor" strokeLinejoin="round">
      <path
        strokeWidth={1.5}
        d="M10.102 7.78a4 4 0 0 0-1.185-.161c-1.918 0-4.167 1.695-4.167 5.359c0 3.36 2.358 7.21 3.801 7.822c.328.14.731.227 1.084.193c.707-.07 1.348-.421 2.023-.622c.228-.038.5-.074.719-.075c.24-.002.51.06.774.12c.715.164 1.505.65 2.255.577c.267-.026.633-.187.746-.239l.07-.03c.85-.343 1.988-1.826 2.759-3.703c.162-.396-.052-.833-.404-1.077c-.999-.694-1.663-1.934-1.663-3.195c0-.969.313-1.854.907-2.523l.02-.023a8 8 0 0 1 .45-.5c.255-.248.326-.645.082-.904c-.808-.854-1.832-1.277-2.764-1.277a3.6 3.6 0 0 0-1.106.156c-.138.033-.778.192-1.222.355c-.257.071-.635.167-.81.21a.7.7 0 0 1-.192.023c-.735-.024-1.47-.303-2.177-.487Z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M13.86 5.178c-.733.878-1.975 1.047-1.975 1.047s-.05-1.256.684-2.135s1.976-1.046 1.976-1.046s.05 1.256-.684 2.134Z"
      ></path>
    </g>
  </svg>,
  <svg
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
      strokeWidth={1.5}
    >
      <path d="m20.754 4.792l-2.84 14.31a1.5 1.5 0 0 1-1.099 1.161l-4.069 1.045a3 3 0 0 1-1.492 0l-4.07-1.045a1.5 1.5 0 0 1-1.097-1.16L3.246 4.792A1.5 1.5 0 0 1 4.717 3h14.566a1.5 1.5 0 0 1 1.471 1.792"></path>
      <path d="M17 6.881H7.732a.6.6 0 0 0-.589.718l.859 4.292h7.996l-.891 4.458a1 1 0 0 1-.64.744l-2.126.77a1 1 0 0 1-.681 0l-2.127-.77a1 1 0 0 1-.64-.744l-.224-1.119"></path>
    </g>
  </svg>,
  <svg
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
      strokeWidth={1.5}
    >
      <path d="M9.75 8.5v7.964c0 .866-.456 1.626-1.142 2.052c-.745.463-1.672.13-2.432-.308l-1.43-.826a2.07 2.07 0 0 1-1.034-1.792V8.41c0-.74.394-1.423 1.035-1.792l6.218-3.59a2.07 2.07 0 0 1 2.07 0l6.218 3.59a2.07 2.07 0 0 1 1.035 1.792v7.18a2.07 2.07 0 0 1-1.035 1.792l-6.218 3.59a2.07 2.07 0 0 1-2.07 0l-.989-.57"></path>
      <path d="M17.29 8.5h-2.75a1.75 1.75 0 0 0-1.75 1.75v0c0 .966.784 1.75 1.75 1.75h1c.966 0 1.75.784 1.75 1.75v0a1.75 1.75 0 0 1-1.75 1.75h-2.75"></path>
    </g>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g fill="none">
      <rect
        width={1.48}
        height={1.48}
        x={12.671}
        y={5.713}
        fill="currentColor"
        rx={0.74}
      ></rect>
      <rect
        width={1.48}
        height={1.48}
        x={10.381}
        y={5.713}
        fill="currentColor"
        rx={0.74}
      ></rect>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.603 20.846a1.916 1.916 0 0 0 3.253.436l1.852-2.308a.69.69 0 0 0-.193-1.03l-1.538-.888m-3.374 3.79a5.9 5.9 0 0 1-2.337.476a5.9 5.9 0 0 1-2.453-.526m4.79.05a1.92 1.92 0 0 1-.028-1.457l.89-2.29m-5.652 3.697a1.916 1.916 0 0 1-2.474 1.074L4.58 20.795a.69.69 0 0 1-.347-.989l1.661-2.878a.69.69 0 0 1 .542-.343m3.377 4.21a1.92 1.92 0 0 0-.58-2.207l-.02-.017m-2.777-1.986a6 6 0 0 1-.125-1.218a5.92 5.92 0 0 1 1.16-3.531c.809-1.098 1.588-2.313 1.588-3.677V6.206a3.206 3.206 0 1 1 6.413 0V8.16c0 1.364.78 2.58 1.589 3.676a5.93 5.93 0 0 1 1.16 3.532c0 .586-.085 1.153-.244 1.688m-11.541-.47a.7.7 0 0 1 .488.15l2.288 1.836m8.766-1.516l-1.341-.774a.69.69 0 0 0-.989.348l-.182.47m0 0c-.106-2.161-1.498-4.939-3.2-4.939c-1.771 0-3.207 3.007-3.207 5.197c0 .423.054.831.153 1.214"
      ></path>
      <path
        fill="currentColor"
        d="M11.08 8.272a.6.6 0 0 0-.46.984l1.185 1.423a.6.6 0 0 0 .922 0l1.185-1.423a.6.6 0 0 0-.461-.984z"
      ></path>
    </g>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.5H7.5m4.5 9h4.5m0 0h1.521c.807 0 1.634-.188 2.13-.824c.531-.679 1.099-1.835 1.099-3.676c0-1.84-.568-2.997-1.098-3.676c-.497-.636-1.324-.824-2.13-.824H16.5m0 9v1.521c0 .807-.188 1.634-.824 2.13c-.679.531-1.835 1.099-3.676 1.099c-1.84 0-2.997-.568-3.676-1.098c-.636-.497-.824-1.324-.824-2.13V16.5m0-9H5.978c-.807 0-1.633.188-2.13.824c-.53.679-1.098 1.835-1.098 3.676c0 1.84.568 2.997 1.098 3.676c.497.636 1.323.824 2.13.824H7.5m0-9V5.978c0-.807.188-1.633.824-2.13c.679-.53 1.835-1.098 3.676-1.098c1.84 0 2.997.568 3.676 1.098c.636.497.824 1.323.824 2.13V7.5m-9 9V14a2 2 0 0 1 2-2h5a2 2 0 0 0 2-2V7.5"
      ></path>
      <path
        fill="currentColor"
        d="M15 18.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-6-13a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0"
      ></path>
    </g>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M7.467.133a1.75 1.75 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682c-.983 1.499-2.585 2.813-5.032 3.855a1.7 1.7 0 0 1-1.33 0c-2.447-1.042-4.049-2.356-5.032-3.855S1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86c.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 0 0 .154 0c2.245-.956 3.582-2.103 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 0 0-.174-.238zM8 3.25a.75.75 0 0 1 .696.471l2.5 6.25a.75.75 0 0 1-1.392.557l-.312-.778H6.508l-.312.778a.75.75 0 0 1-1.392-.557l2.5-6.25A.75.75 0 0 1 8 3.25m-.892 5h1.784L8 6.02z"
    ></path>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v19m6-10.773c0 3.273-1.812 4.77-6 9.273c-4.188-4.503-6-6-6-9.273C6 6.773 9.071 4.3 12 2c2.929 2.3 6 4.773 6 9.227"
    ></path>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M23.56 14.723a.5.5 0 0 0-.057-.12q-.21-.395-1.007-.231c-1.654.34-2.294.13-2.526-.02c1.342-2.048 2.445-4.522 3.041-6.83c.272-1.05.798-3.523.122-4.73a1.6 1.6 0 0 0-.15-.236C21.693.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a10 10 0 0 0-.516-.082a8 8 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19C.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744q.69 2.26 1.433 3.582q.83 1.493 1.714 1.79c.448.148 1.133.143 1.858-.729a56 56 0 0 1 1.945-2.206c.435.235.906.362 1.39.377v.004a11 11 0 0 0-.247.305c-.339.43-.41.52-1.5.745c-.31.064-1.134.233-1.146.811a.6.6 0 0 0 .091.327c.227.423.922.61 1.015.633c1.335.333 2.505.092 3.372-.679c-.017 2.231.077 4.418.345 5.088c.221.553.762 1.904 2.47 1.904q.375.001.829-.094c1.782-.382 2.556-1.17 2.855-2.906c.15-.87.402-2.875.539-4.101c.017-.07.036-.12.057-.136c0 0 .07-.048.427.03l.044.007l.254.022l.015.001c.847.039 1.911-.142 2.531-.43c.644-.3 1.806-1.033 1.595-1.67M2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571c-.109-2.172.417-3.683 1.562-4.493c1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36c.034.586.1 1.68-.074 2.918c-.16 1.15.194 2.276.973 3.089q.12.126.252.237c-.347.371-1.1 1.193-1.903 2.158c-.568.682-.96.551-1.088.508c-.392-.13-.813-.587-1.239-1.322c-.48-.839-.963-2.032-1.415-3.512m6.007 5.088a1.6 1.6 0 0 1-.432-.178c.089-.039.237-.09.483-.14c1.284-.265 1.482-.451 1.915-1a8 8 0 0 1 .367-.443a.4.4 0 0 0 .074-.13c.17-.151.272-.11.436-.042c.156.065.308.26.37.475c.03.102.062.295-.045.445c-.904 1.266-2.222 1.25-3.168 1.013m2.094-3.988l-.052.14c-.133.357-.257.689-.334 1.004c-.667-.002-1.317-.288-1.81-.803c-.628-.655-.913-1.566-.783-2.5c.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772c.446.102.718.406.83.928c.585 2.704.078 3.83-.33 4.736a9 9 0 0 0-.23.546m7.364 4.572q-.024.266-.062.596l-.146.438a.4.4 0 0 0-.018.108c-.006.475-.054.649-.115.87a4.8 4.8 0 0 0-.18 1.057c-.11 1.414-.878 2.227-2.417 2.556c-1.515.325-1.784-.496-2.02-1.221a7 7 0 0 0-.078-.227c-.215-.586-.19-1.412-.157-2.555c.016-.561-.025-1.901-.33-2.646q.006-.44.019-.892a.4.4 0 0 0-.016-.113a2 2 0 0 0-.044-.208c-.122-.428-.42-.786-.78-.935c-.142-.059-.403-.167-.717-.087c.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5c.426-.948 1.01-2.246.376-5.178c-.237-1.098-1.03-1.634-2.232-1.51c-.72.075-1.38.366-1.709.532a6 6 0 0 0-.196.104c.092-1.106.439-3.174 1.736-4.482a4 4 0 0 1 .303-.276a.35.35 0 0 0 .145-.064c.752-.57 1.695-.85 2.802-.833q.616.01 1.174.081c1.94.355 3.244 1.447 4.036 2.383c.814.962 1.255 1.931 1.431 2.454c-1.323-.134-2.223.127-2.68.78c-.992 1.418.544 4.172 1.282 5.496c.135.242.252.452.289.54c.24.583.551.972.778 1.256c.07.087.138.171.189.245c-.4.116-1.12.383-1.055 1.717a35 35 0 0 1-.084.815c-.046.208-.07.46-.1.766m.89-1.621c-.04-.832.27-.919.597-1.01l.135-.041a1 1 0 0 0 .134.103c.57.376 1.583.421 3.007.134c-.202.177-.519.4-.953.601c-.41.19-1.096.333-1.747.364c-.72.034-1.086-.08-1.173-.151m.57-9.271a7 7 0 0 1-.105 1.001c-.055.358-.112.728-.127 1.177c-.014.436.04.89.093 1.33c.107.887.216 1.8-.207 2.701a4 4 0 0 1-.188-.385a8 8 0 0 0-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744c.38-.543 1.342-.566 2.179-.463m.228 7.013l-.085-.107l-.035-.044c.726-1.2.584-2.387.457-3.439c-.052-.432-.1-.84-.088-1.222c.013-.407.066-.755.118-1.092c.064-.415.13-.844.111-1.35a.6.6 0 0 0 .012-.19c-.046-.486-.6-1.938-1.73-3.253a7.8 7.8 0 0 0-2.688-2.04A9.3 9.3 0 0 1 17.62.746c2.052.046 3.675.814 4.824 2.283a1 1 0 0 1 .067.1c.723 1.356-.276 6.275-2.987 10.54m-8.816-6.116c-.025.18-.31.423-.621.423l-.081-.006a.8.8 0 0 1-.506-.315c-.046-.06-.12-.178-.106-.285a.22.22 0 0 1 .093-.149c.118-.089.352-.122.61-.086c.316.044.642.193.61.418m7.93-.411c.011.08-.049.2-.153.31a.72.72 0 0 1-.408.223l-.075.005c-.293 0-.541-.234-.56-.371c-.024-.177.264-.31.56-.352c.298-.042.612.009.636.185"
    ></path>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.972 3.483c.163.196.247.46.413.987L19.025 16a15.5 15.5 0 0 0-4.352-1.42l-2.37-7.723a.31.31 0 0 0-.296-.213a.31.31 0 0 0-.295.214L9.37 14.576A15.5 15.5 0 0 0 5 15.998l3.657-11.53c.168-.527.251-.79.415-.986c.144-.172.331-.306.544-.388C9.858 3 10.143 3 10.715 3h2.612c.572 0 .858 0 1.1.094c.213.082.4.217.545.39M9 18c0 1.5 2 3 3 4c1-1 3-3 3-4q-3 1.5-6 0"
    ></path>
  </svg>,
];
