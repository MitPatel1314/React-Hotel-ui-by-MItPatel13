// import { Route, Routes } from "react-router"
// import Home from "./home"
// import About from "./about"
// import Contect from "./contect"
// import Section from "./section"
// import Section2 from "./section2"
// import Footer from "./footer"
// function App() { 

//   return (
//     <>
//       <Routes>
//          <Route path="/" element={<Home />}></Route>
//          <Route path="/about" element={<About />}></Route>
//          <Route path="/contect" element={<Contect />}></Route>
//          <Route path="/Section" element={<Section />}></Route>
//          <Route path="/Section2" element={<Section2 />}></Route>
//          <Route path="/Footer" element={<Footer />}>                                                />}></Route>
//       </Routes>
//     </>
//   )
// }
// export default App

// App.jsx
import { useState } from 'react';
import './App.css';
import "./index.css"

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* ------------------- NAVBAR ------------------- */}
      <nav className="navbar">
        <div className="logo">
          <h2>Flavour<span>House</span></h2>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* ------------------- HOME / HERO ------------------- */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Flavour House</h1>
          <p>Experience the taste of authentic homemade cuisine</p>
          <a href="#menu" className="btn-primary">View Menu</a>
        </div>
      </section>
  
      {/* ------------------- MENU SECTION ------------------- */}
      <section id="menu" className="menu-section">
        <h2 className="section-title">Our Popular Dishes</h2>
        
        <div className="menu-grid">
          <div className="menu-item">
            <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500')"}}></div>
            <div className="item-info">
              <h3>Margherita Pizza</h3>
              <p className="price">₹320</p>
              <p>Fresh tomato, mozzarella, basil</p>
            </div>
          </div>

          <div className="menu-item">
            <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500')"}}></div>
            <div className="item-info">
              <h3>Chicken Tikka Masala</h3>
              <p className="price">₹380</p>
              <p>Creamy tomato-based curry</p>
            </div>
          </div>

          <div className="menu-item">
            <div className="item-img" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnV0dGVyJTIwY2hpa2VufGVufDB8fDB8fHwww=500')"}}></div>
            <div className="item-info">
              <h3>Butter Chicken</h3>
              <p className="price">₹410</p>
              <p>Tender chicken in rich gravy</p>
            </div>
          </div>

          <div className="menu-item">
           <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500')"}}></div>
           <div className="item-info">
             <h3>Paneer Tikka</h3>
             <p className="price">₹290</p>
             <p>Grilled cottage cheese</p>
           </div>
         </div>

         <div className="menu-item">
           <div className="item-img" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnV0dGVyJTIwY2hpa2VufGVufDB8fDB8fHwww=500')"}}></div>
           <div className="item-info">
             <h3>Butter Chicken</h3>
             <p className="price">₹410</p>
           </div>
         </div>

      <div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500')"}}></div>
  <div className="item-info">
    <h3>Chicken Tikka Masala</h3>
    <p className="price">₹380</p>
    <p>Spicy roasted chicken curry</p>
  </div>
      </div>

      <div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500')"}}></div>
  <div className="item-info">
    <h3>Margherita Pizza</h3>
    <p className="price">₹320</p>
    <p>Fresh tomato & mozzarella</p>
  </div>
      </div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500')"}}></div>
  <div className="item-info">
    <h3>Veg Biryani</h3>
    <p className="price">₹260</p>
    <p>Aromatic basmati rice</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500')"}}></div>
  <div className="item-info">
    <h3>Chicken Biryani</h3>
    <p className="price">₹350</p>
    <p>Slow-cooked spicy rice</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500')"}}></div>
  <div className="item-info">
    <h3>Paneer Butter Masala</h3>
    <p className="price">₹340</p>
    <p>Creamy tomato curry</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3Dw=500')"}}></div>
  <div className="item-info">
    <h3>Masala Dosa</h3>
    <p className="price">₹180</p>
    <p>Crispy dosa with potato filling</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1650142700236-f1889e0193b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXolMjBuYWFufGVufDB8fDB8fHwww=500')"}}></div>
  <div className="item-info">
    <h3>Cheese Garlic Naan</h3>
    <p className="price">₹120</p>
    <p>Soft naan with cheese</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500')"}}></div>
  <div className="item-info">
    <h3>Chole Bhature</h3>
    <p className="price">₹220</p>
    <p>Spicy chickpea curry</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500')"}}></div>
  <div className="item-info">
    <h3>Veg Manchurian</h3>
    <p className="price">₹240</p>
    <p>Indo-Chinese delight</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500')"}}></div>
  <div className="item-info">
    <h3>Hakka Noodles</h3>
    <p className="price">₹230</p>
    <p>Stir-fried noodles</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500')"}}></div>
  <div className="item-info">
    <h3>Chicken Lollipop</h3>
    <p className="price">₹280</p>
    <p>Crispy fried chicken</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1526315179349-24bfb4cb22ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmVnJTIwU3ByaW5nJTIwUm9sbHN8ZW58MHx8MHx8fDA%3Dw=500')"}}></div>
  <div className="item-info">
    <h3>Veg Spring Rolls</h3>
    <p className="price">₹190</p>
    <p>Crispy vegetable rolls</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1760888548893-bc2f7e09e972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoaWNrZW4lMjBTaGF3YXJtYXxlbnwwfHwwfHx8MA%3D%3Dw=500')"}}></div>
  <div className="item-info">
    <h3>Chicken Shawarma</h3>
    <p className="price">₹260</p>
    <p>Middle eastern wrap</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500')"}}></div>
  <div className="item-info">
    <h3>Pasta Alfredo</h3>
    <p className="price">₹310</p>
    <p>Creamy white sauce pasta</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550547660-d9450f859349?w=500')"}}></div>
  <div className="item-info">
    <h3>Veg Burger</h3>
    <p className="price">₹180</p>
    <p>Loaded veggie patty</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500')"}}></div>
  <div className="item-info">
    <h3>French Fries</h3>
    <p className="price">₹140</p>
    <p>Crispy golden fries</p>
  </div>
</div>

<div className="menu-item">
  <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500')"}}></div>
  <div className="item-info">
    <h3>Chocolate Brownie</h3>
    <p className="price">₹200</p>
    <p>Rich chocolate dessert</p>
  </div>
</div>


          <div className="menu-item">
            <div className="item-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500')"}}></div>
            <div className="item-info">
              <h3>Paneer Tikka</h3>
              <p className="price">₹290</p>
              <p>Grilled cottage cheese</p>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------- ABOUT ------------------- */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="section-title">About Us</h2>
          <p>
            Flavour House was founded in 2018 with a simple mission — to bring 
            authentic, home-style Indian and Italian flavors to your table using 
            only the freshest ingredients and traditional cooking techniques.
          </p>
          <p>
            Our passionate chefs work with love and care to create dishes that 
            make you feel right at home — every single time.
          </p>
        </div>
      </section>

      {/* ------------------- SERVICES ------------------- */}
      <section id="services" className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Dine-In</h3>
            <p>Cozy ambiance with family & friends</p>
          </div>
          <div className="service-card">
            <h3>Takeaway</h3>
            <p>Quick pickup from restaurant</p>
          </div>
          <div className="service-card">
            <h3>Home Delivery</h3>
            <p>Fast & fresh delivery to your door</p>
          </div>
          <div className="service-card">
            <h3>Catering</h3>
            <p>Birthdays • Weddings • Corporate</p>
          </div>
        </div>
      </section>

      {/* ------------------- CONTACT ------------------- */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <p>📍 123 Flavor Street, Ahmedabad, Gujarat</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@flavourhouse.com</p>
            <p>🕒 12:00 PM – 11:00 PM (Everyday)</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* ------------------- FOOTER ------------------- */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Flavour<span>House</span></h3>
            <p>Taste the love in every bite</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Flavour House. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;