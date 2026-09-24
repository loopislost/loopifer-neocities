// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) {
    // Inserting your header and footer:
    document.body.insertAdjacentHTML("afterbegin", headerEl);
    document.body.insertAdjacentHTML("beforeend", footerEl);

    // Inserting sidebars:
    const wrapperElement = document.querySelector("main"); // you might have to change this selector to something like .my-wrapper
    if (wrapperElement) {
      wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
      wrapperElement.insertAdjacentHTML("beforeend", sidebarEl2);
    }

    initActiveLinks();
  }

  // add your own javascript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
const headerEl = `
	<header>
	<ul class="topnav" >
      <li><a href="/index">home</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="/site_map">site_map</a></li>
      <li class="dropdown" onclick="listToggle('blogs')"> 
        <div><span class="dropclick">blogs</span>
          <div id="blogs" class="dropdown-content">
          <a href="/bookblog">books</a><br>
          <a href="/personalblog">personal</a>
        </div>
      </div> 
      </li>
      <li class="dropdown" onclick="listToggle('art')">
        <div><span class="dropclick">art</span>
          <div id="art" class="dropdown-content">
          <a href="/gallery">gallery</a><br>
          <a href="/oc lore">OC page</a>
        </div>
      </li>
      <li class="dropdown" onclick="listToggle('other')">
        <div><span class="dropclick">other</span>
          <div id="other" class="dropdown-content">
          <a href="/workshop">testing page</a><br>
          <a href="/ramblings">crazed ramblings</a><br>
        </div>
      </li> 
      <li><a href="/commissions" >commissions</a></li>
      <li><a href="https://loopifer.atabook.org/" target="_blank" rel="noopener noreferrer">guestbook📝</a></li>
    </ul>
	</header>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerEl = `
<img src="/pics/neocities.png" alt="first art"><a href="https://petrapixel.neocities.org/about/blinkies" target="_blank">
<img src="/pics/widgets/queercode.png" alt="you're telling me a queer coded this" title="queer-coded"></a>
<img src="https://ezrakruger.cc/adbank/a?lang=en&size=468x60" width="468" height="60" alt="banner"> 
<iframe src="https://john.citrons.xyz/embed?ref=mondecitronne.com" style="margin-left:auto;display:block;margin-right:auto;margin-bottom:10px;margin-top:21px;max-width:500px;max-height:80px;width:100%;border:none;display:inline;"></iframe>
<script src="/seasoncolors.js"></script><script src="/layout.js"></script>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl1 = ``;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl2 = ``;