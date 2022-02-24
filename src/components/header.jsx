import Navigation from "./navigation";
import NavItem from "./navItem";
/* Header component */
export default function Header() {
  return (
    <>
      <header>
        <Navigation>
          <NavItem text={"About Me"} route={"#about"} />
          <NavItem text={"Resume"} route={"#resume"} />
          <NavItem text={"Portfolio"} route={"#portfolio"} />
          <NavItem text={"Contact"} route={"#contact"} />
        </Navigation>
      </header>
    </>
  );
}
