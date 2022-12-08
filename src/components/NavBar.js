
import "../components/NavBar.css"

export default function NavBar() {




  return(

<nav className="navbar">

<ul>

  <li>
    <a href="#hero" class="dot active" data-scroll="hero">
      <span>home</span>
    </a>
  </li>

  <li>
    <a href="#presentation" class="dot" data-scroll="presentation">
      <span>about</span>
    </a>
  </li>

  <li>
    <a href="#timeline" class="dot" data-scroll="timeline">
      <span>timeline</span>
    </a>
  </li>

  <li>
    <a href="#initiatives" class="dot" data-scroll="initiatives">
      <span>Initiatives</span>
    </a>
  </li>

  <li>
    <a href="#instagram" class="dot" data-scroll="instagram">
      <span>Instagram</span>
    </a>
  </li>

</ul>

</nav>

  )
}