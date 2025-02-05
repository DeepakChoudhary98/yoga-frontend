import image from "../../public/image.jpg";
import './hero.css';
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const navigate = useNavigate();
    const handleClick = () => {
    
        navigate('/signup');
    }
    const handleClickPayment = () => {
        navigate('/payment');
    }
    const handleClickUpdate = () => {
        navigate('/update');
    }
    return (
      //   <div className="container col-xxl-8 px-4 py-5">
      //     <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      //       <div className="col-10 col-sm-8 col-lg-6">
      //         <img
      //           src={image}
      //           className="d-block mx-lg-auto img-fluid"
      //           alt="Bootstrap Themes"
      //           width="700"
      //           height="500"
      //           loading="lazy"
      //         />
      //       </div>
      //       <div className="col-lg-6">
      //         <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
      //           Reconnect with Your Mind, Body & Soul
      //         </h1>
      //         <p className="lead">
      //           Discover the art of balance, flexibility, and mindfulness with our
      //           expert-led yoga sessions. Whether you're a beginner or a seasoned
      //           practitioner, our classes are designed to help you achieve
      //           holistic well-being. Join us today and start your journey towards
      //           a healthier, stress-free life.
      //         </p>

      //       </div>
      //     </div>
      //   </div>

      <div className="button-container">
        <button type="button" class="btn btn-primary" onClick={handleClick}>
          Register
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={handleClickPayment}
        >
          Payment
        </button>
        <button
          type="button"
          class="btn btn-success"
          onClick={handleClickUpdate}
        >
          Update
        </button>
      </div>
    );
}
export default Hero;