import { useState } from "react";
/* Nav Item component */
export default function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
        <a
        href={props.route || ""}
          alt="link"
          className="site-menu-item nav-link text-uppercase fw-600 text-white"
          onClick={() => setOpen(!open)}
        >
          {props.text}
        </a>
      {open && props.children}
    </li>
  );
}
