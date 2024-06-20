import Styles from "./Hero.module.css";
let Hero = () => {
  return (
    <main className={Styles.herocontainermain}>
      <div className={Styles.herocontainer}>
        <div className={Styles.herocontant}>
          <h1>Your Feet Deserve The Best</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className={Styles.btn2}>
            <button className="btn btn-danger">Shop Now</button>
            <button className="btn btn-danger">Category</button>
          </div>
          <div className={Styles.available}>
            <p>Available Now</p>
          </div>
        </div>
        <div className={Styles.img}>
          <img src="/images/shoe_image.png" alt="shoe"></img>
        </div>
      </div>
    </main>
  );
};

export default Hero;
