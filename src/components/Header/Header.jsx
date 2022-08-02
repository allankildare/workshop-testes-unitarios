import './Header.css'

export function Header() {
    return (
        <header className="header" data-testid="headerComponent">
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com/allankildare" target="_blank" rel="noopener noreferrer">Github do Dev</a>
                    </li>
                    <li>
                        <a href="https://allankildare.github.io" target="_blank" rel="noopener noreferrer">Website</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}