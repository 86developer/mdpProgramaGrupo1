import './App.css'
import bannerImage from '../src/assets/banner.jpeg';

function Header() {
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="banner-content">
                    <h1>¡Ofertas Especiales!</h1>
                    <p>Descubre nuestras increíbles ofertas y ahorra en tus compras.</p>
                    <a href="#" className="btn btn-primary">Ver Ofertas</a>
                </div>
            </div>
        </>
    );
}

export default Header;