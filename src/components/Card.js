import img1 from "../images/image-product-desktop.jpg";
import img2 from "../images/image-product-mobile.jpg";
import icon from "../images/icon-cart.svg"
import "../components/card.css";

export const Card = () => {
    return ( 
        <div className="card">
        <div className="card_image"></div>
        <div className="card_body">
            <p className="card_title">PERFUME</p>
            <h1 className="card_heading">Gabrielle Essence Eau De Parfum</h1>
            <p className="card_text">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
            <p className="card_money">
               <h1 className="money1">$149.99</h1>
               <p className="money2">$169.99</p>
            </p>
            <button className="card_btn"><img src={icon}></img>Add to Cart</button>
        </div>
        </div>
     );
}
 
