import { useState } from "react";
/* Navigation component */
export default function Navigation(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-primary fixed-top d-flex flex-wrap py-2 mb-4 shadow">

<span className="text-start flex-grow-1 ms-2 ms-md-3">
        <a id="logo" className="py-0 text-white"
          href="/#"
        >
          Ivi Barros
        </a>
      </span>

      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="navbar-toggler d-md-none bg-yellow px-3 me-2"
      >
        <svg
          width="20"
          height="20"
          fill="white"
          className="h-8 w-8"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
        </svg>
      </button>
      <div className={"site-menu d-flex " + (navbarOpen ? 'show' : '')}>
        <ul className="nav align-items-center py-2 px-0 d-flex">
          {props.children}
        </ul>
      </div>
    </nav>
  );
}
