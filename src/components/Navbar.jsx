export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="globe" src={require("../../src/assets/images/globe.png")} alt="" />
            <span className="nav-title">my travel journal.</span>
        </nav>
    )
}