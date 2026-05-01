import AppLogo from '../../img/dc-logo.png'
export default function Header({ menu }) {


    // const menu = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"]
    return (
        <header className='container'>
            <div>
                <img src={AppLogo} alt="" />
            </div>


            <nav>
                {menu.map((item) => (
                    <a href={item.path} key={item.id}>{item.text}</a>
                ))}



            </nav >



        </header >)
}