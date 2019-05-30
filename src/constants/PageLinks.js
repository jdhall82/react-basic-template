// ADD LINKS HERE

/*
id: unique id
page: page to navigate to
icon: icon to use
displayName: display name of link
*/

//////////   ADD PAGES HERE   //////////////
//                                        //
import Home from "../pages/Home";
//                                        //
import About from "../pages/About";
//                                        //
import Contact from "../pages/Contact";
//                                        //
////////////////////////////////////////////

const PageLinks = [
  {
    id: "1",
    page: "/home",
    icon: "home",
    displayName: "Home",
    component: Home
  },
  {
    id: "2",
    page: "/about",
    icon: "info",
    displayName: "About",
    component: About
  },
  {
    id: "3",
    page: "/contact",
    icon: "content",
    displayName: "Contact",
    component: Contact
  }
];

export default PageLinks;
