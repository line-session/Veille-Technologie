import logo  from '../assets/WaveRider.png'

export default function Header() {
    return (
        <header>
            <div class="logo-WaveRider">
                <a href='/resto'>
                <img src={ logo }/>
                </a>
            </div>
            <nav class="links">
                <ul>
                    <li><a href="/resto">Accueil</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">À propos</a></li>
                </ul>
            </nav>
        </header>
    )
}
