import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div>
      <header>
        <div> <a href="https://preview.colorlib.com/theme/hepta/index.html"  className="logo" >Hepta</a></div>
        <nav className="navigation-nav">
           <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </nav> 
      </header>


      <section className="main-content">
        <h1>Travel & Tours</h1>
        <p>A free template by <a href="https://preview.colorlib.com/theme/hepta/#" className="link">Colorlib</a>. Download and share!</p>
        <a href="#" className="btn">VISIT COLORLIB</a>
      </section>


      <section className="welcome-section">
        <div className="grid-container">
      
         <div className="grid-item image">
            <img src="https://preview.colorlib.com/theme/hepta/images/img_1_long.jpg.webp" alt="Welcome Image"/>
          </div>
      
         <div className="grid-item content">
            <h2>Welcome To Our Website</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            <br/><br/>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <a href="https://vimeo.com/channels/staffpicks/93951774" className="video-btn">
              <i className="fa fa-play-circle"></i> WATCH THIS VIDEO
            </a>
          </div>
        </div>
      </section>


      <section className="card-section">
        <h2>Experience Once In Your Life Time</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br/> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the<br/> Semantics, a large language ocean.</p>
        <div className="card-grid">
      
          <div className="card">
            <img src="/img/001-breakfast.svg" alt="Good Foods" />
            <h3>Good Foods</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
      
          <div className="card">
            <img src="img/002-planet-earth.svg" alt="Travel Anywhere"/>
            <h3>Travel Anywhere</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
      
         <div className="card">
            <img src="img/003-airplane.svg" alt="Airplane"/>
            <h3>Airplane</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
      
          <div className="card">
            <img src="img/004-beach.svg" alt="Beach Resort"/>
           <h3>Beach Resort</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
      
          <div className="card">
            <img src="img/005-mountains.svg" alt="Mountain Climbing"/>
            <h3>Mountain Climbing</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
      
          <div className="card">
            <img src="img/006-hot-air-balloon.svg" alt="Hot Air Balloon"/>
           <h3>Hot Air Balloon</h3>
           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
         </div>
       </div>
     </section>


     <section className="slider-section">
       <div className="slider-content">
         <h1>International Tour Management.</h1>
         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br/> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br/>Semantics, a large language ocean.</p>
       </div>
       <div className="slider-container">
         <div className="slider">
           <img src="img/slider-1.jpg.webp" alt="Destination 1"/>
           <img src="img/slider-2.jpg.webp" alt="Destination 2"/>
           <img src="img/slider-3.jpg.webp" alt="Destination 3"/>
           <img src="img/slider-4.jpg.webp" alt="Destination 4"/>
           <img src="img/slider-5.jpg.webp" alt="Destination 5"/>
           <img src="img/slider-6.jpg.webp" alt="Destination 6"/>
         </div>
       </div>
     </section>


     <section className="blog-section">
       <h1>Recent Blog Post</h1>
       <p className="blog-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br/>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br/>Semantics, a large language ocean.</p>

       <div className="blog-card-container">
         <div className="blog-card">
           <img src="img/img_1.jpg.webp" alt="Blog Image 1"/>
           <p>February 26, 2018</p>
           <h3>45 Best Places To Unwind</h3>
           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
         </div>
      
         <div className="blog-card">
           <img src="img/img_2.jpg.webp" alt="Blog Image 2"/>
           <p>February 26, 2018</p>
           <h3>45 Best Places To Unwind</h3>
           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
         </div>
      
         <div className="blog-card">
           <img src="img/img_3.jpg.webp" alt="Blog Image 3"/>
           <p>February 26, 2018</p>
           <h3>45 Best Places To Unwind</h3>
           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
         </div>
        </div>
     </section>


     <section className="happy-customers-section">
       <h1>Happy Customers</h1>

       <div className="customer-grid">
         <div className="customer-card">
           <img src="img/person_1.jpg.webp" alt="Customer 1" className="customer-img"/>
           <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
           <h4>— Clare Gupta</h4>
         </div>
      
         <div className="customer-card">
           <img src="img//person_2.jpg.webp" alt="Customer 2" className="customer-img"/>
           <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"</p>
           <h4>— Rogie Slater</h4>
         </div>
      
         <div className="customer-card">
           <img src="img/person_3.jpg.webp" alt="Customer 3" className="customer-img"/>
           <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
           <h4>— John Doe</h4>
         </div>
       </div>
     </section>


     <section className="picture-rating-section">
       <h1>Top Destination</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo<br/> odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores<br/> quis, blanditiis laboriosam alias. Sed.</p>

       <div className="picture-rating-grid">
         <div className="destination">
           <img src="img/img_1.jpg.webp" alt="Destination 1"/>
           <div className="picture-info">
              <h3>Food & Wines</h3>
              <div className="rating">
                  ⭐⭐⭐⭐☆ <a href="" className="reviews">3, 239 reviews</a>
              </div>
          </div>
        </div>
      
        <div className="destination">
          <img src="img/img_2.jpg.webp" alt="Destination 2"/>
          <div className="picture-info">
              <h3>Resort & Spa</h3>
              <div className="rating">
                  ⭐⭐⭐⭐☆ <a href="" className="reviews">4,921 reviews</a>
              </div>
          </div>
        </div>
      
        <div className="destination">
          <img src="img/img_3.jpg.webp" alt="Destination 3"/>
          <div className="picture-info">
              <h3>Hotel Rooms</h3>
              <div className="rating">
                  ⭐⭐⭐⭐☆ <a href="" className="reviews">2, 112 reviews</a>
              </div>
          </div>
        </div>
      
        <div className="destination">
          <img src="img/img_5.jpg.webp" alt="Destination 4"/>
          <div className="picture-info">
              <h3>Mountain Climbing</h3>
              <div className="rating">
                  ⭐⭐⭐⭐⭐ <a href="" className="reviews">6, 421 reviews</a>
              </div>
          </div>
        </div>
      </div>
     </section>


     <footer className="footer-section">
       <div className="footer-grid">
         <div className="footer-column">
            <h3>Quick Links</h3>
              <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Blog</a></li>
               <li><a href="#">Contact</a></li>
             </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <strong>Address:</strong>
            <p>98 West 21th Street, Suite 721 New York NY 10016</p>
            <strong>Address:</strong>
            <p>98 West 21th Street, Suite 721 New York NY 10016</p>
            <strong>Address:</strong>
            <p>98 West 21th Street, Suite 721 New York NY 10016</p>
         </div>
         <div className="footer-column">
           <h3>Subscribe</h3>
           <p>Sign up for our newsletter</p>
           <form className="subscribe-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit"><i className="fa fa-paper-plane"></i></button>
           </form>
         </div>
       </div>
       <hr/>
       <div className="footer-bottom">
        <p>Copyright © 2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
        <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
       </div>
      </div>
     </footer>

  
    </div>
  );
}

export default App;
