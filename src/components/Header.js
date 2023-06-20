import Nav from "./Nav"

function Header(props) {
    return <header className="App-header">
        <h1>Sebastian Ponce</h1>
        <Nav {...props}/>
    </header>
}

export default Header;