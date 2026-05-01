
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/AppHeader'
import Main from './components/AppMain'
import Footer from './components/AppFooter'


export default function App() {

  const menu = [
    {
      id: 1,
      text: "CHARACTERS",
      path: "/characters"
    },
    {
      id: 2,
      text: "COMICS",
      path: "/comics"
    },
    {
      id: 3,
      text: "MOVIES",
      path: "/movies"
    },
    {
      id: 4,
      text: "TV",
      path: "/tv"
    },
    {
      id: 5,
      text: "GAMES",
      path: "/games"
    },
    {
      id: 6,
      text: "COLLECTIBLES",
      path: "/collectibles"
    },
    {
      id: 7,
      text: "VIDEOS",
      path: "/videos"
    },
    {
      id: 8,
      text: "FANS",
      path: "/fans"
    },
    {
      id: 9,
      text: "NEWS",
      path: "/news"
    },
    {
      id: 10,
      text: "SHOP",
      path: "/shop"
    }

  ]
  return (
    <>
      <Header menu={menu} />
      <Main />
      <Footer />
    </>
  )
}


