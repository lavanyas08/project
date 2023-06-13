import { useNavigate } from 'react-router-dom';
import './producthome.css';

const ProductHome = () =>{
    const navigate = useNavigate();
    return(
        <div className="h">
            <p>Buy Trending laptops here!!</p>
            <div className="cont">
                <div className="continfo" onClick={()=>{
                    navigate("/product1");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/416/416/l0jwbrk0/computer/e/k/r/240-g8-laptop-hp-original-imagcbgcgnqwenzx.jpeg?q=70"></img>
                    <h3>HP</h3>
                </div>
                <div className="continfo" onClick={()=>{
                    navigate("/product2");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/computer/b/e/h/-original-imagjyc69gh3a8wu.jpeg?q=70"></img>
                    <h3>ACER</h3>
                </div>
                <div className="continfo" onClick={()=>{
                    navigate("/product3");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/312/312/krdtlzk0/computer/l/k/r/na-laptop-dell-original-imag57f9psmfjcxs.jpeg?q=70"></img>
                    <h3>DELL</h3>
                </div>
                <div className="continfo" onClick={()=>{
                    navigate("/product4");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/computer/n/i/u/-original-imagpa5fbvqzk2xn.jpeg?q=70"></img>
                    <h3>LENOVO</h3>
                </div>
                <div className="continfo" onClick={()=>{
                    navigate("/product5");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70"></img>
                    <h3>ASUS</h3>
                </div>
                <div className="continfo" onClick={()=>{
                    navigate("/product6");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/312/312/ksez24w0/computer/h/8/9/rmnb1001-thin-and-light-laptop-realme-original-imag5zhgcstmjbxg.jpeg?q=70"></img>
                    <h3>REALME</h3>
                </div>
                <div className="continfo" onClick={()=>{
                    navigate("/product7");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/computer/c/y/k/galaxy-book3-thin-and-light-laptop-samsung-original-imagnb2chzcxhwxk.jpeg?q=70"></img>
                    <h3>SAMSUNG</h3>
                </div>
                <div className="continfo" onClick={()=>{
                    navigate("/product8");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/9/5/o/-original-imagp8xzapemzquv.jpeg?q=70"></img>
                    <h3>HP-PAVILION</h3>
                </div>
                <div className="continfo" onClick={()=>{
                    navigate("/product9");
                }}>
                    <img src="https://rukminim1.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70"></img>
                    <h3>APPLE</h3>
                </div>
            </div>
        </div>
    )
}
export default ProductHome;