import React, { useState } from "react";
import Reveal from "../Reveal";
import "./index.css";

const menuItems = [
  {
    id: 1,
    name: "Classic Espresso",
    category: "Hot Coffee",
    price: 180,
    description: "Rich and intense espresso with a deep roasted finish.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    badge: "CLASSIC",
    popular: true,
  },

  {
    id: 2,
    name: "Cappuccino",
    category: "Hot Coffee",
    price: 220,
    description: "Perfectly balanced espresso, steamed milk and silky foam.",
    image:
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7",
    badge: "POPULAR",
    popular: true,
  },

  {
    id: 3,
    name: "Café Latte",
    category: "Hot Coffee",
    price: 230,
    description: "Smooth espresso blended with creamy steamed milk.",
    image:
      "https://images.unsplash.com/photo-1561882468-9110e03e0f78",
    badge: "",
    popular: false,
  },

  {
    id: 4,
    name: "Flat White",
    category: "Hot Coffee",
    price: 240,
    description: "Velvety microfoam combined with a double espresso.",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213",
    badge: "SIGNATURE",
    popular: true,
  },

  {
    id: 5,
    name: "Mocha",
    category: "Hot Coffee",
    price: 250,
    description: "Espresso, premium chocolate and steamed milk.",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e",
    badge: "",
    popular: false,
  },

  {
    id: 6,
    name: "Caramel Macchiato",
    category: "Hot Coffee",
    price: 260,
    description: "Espresso layered with steamed milk and caramel drizzle.",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2",
    badge: "FAVOURITE",
    popular: true,
  },

  {
    id: 7,
    name: "Hazelnut Latte",
    category: "Hot Coffee",
    price: 260,
    description: "Creamy latte infused with roasted hazelnut flavour.",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    badge: "",
    popular: false,
  },

  {
    id: 8,
    name: "Irish Cream Latte",
    category: "Hot Coffee",
    price: 280,
    description: "Rich espresso with creamy Irish-inspired flavour.",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    badge: "PREMIUM",
    popular: true,
  },

  {
    id: 9,
    name: "Classic Cold Coffee",
    category: "Cold Coffee",
    price: 220,
    description: "Chilled coffee blended until smooth and refreshing.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    badge: "CLASSIC",
    popular: false,
  },

  {
    id: 10,
    name: "Signature Cold Brew",
    category: "Cold Coffee",
    price: 240,
    description: "Slow-brewed for 16 hours for a smooth and bold taste.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    badge: "SIGNATURE",
    popular: true,
  },

  {
    id: 11,
    name: "Iced Americano",
    category: "Cold Coffee",
    price: 210,
    description: "Bold espresso poured over ice and chilled water.",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
    badge: "",
    popular: false,
  },

  {
    id: 12,
    name: "Iced Caramel Latte",
    category: "Cold Coffee",
    price: 260,
    description: "Cold espresso latte finished with caramel sweetness.",
    image:
      "https://images.unsplash.com/photo-1462917882517-e150004895fa",
    badge: "POPULAR",
    popular: true,
  },

  {
    id: 13,
    name: "Iced Mocha",
    category: "Cold Coffee",
    price: 270,
    description: "Chocolate, espresso and chilled milk over ice.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    badge: "",
    popular: false,
  },

  {
    id: 14,
    name: "Vanilla Cream Cold Brew",
    category: "Cold Coffee",
    price: 290,
    description: "Smooth cold brew topped with vanilla cream.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    badge: "NEW",
    popular: true,
  },

  {
    id: 15,
    name: "Masala Chai",
    category: "Tea",
    price: 120,
    description: "Traditional Indian tea brewed with aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9",
    badge: "INDIAN FAVOURITE",
    popular: true,
  },

  {
    id: 16,
    name: "Classic Green Tea",
    category: "Tea",
    price: 140,
    description: "Light and refreshing green tea with delicate flavour.",
    image:
      "https://images.unsplash.com/photo-1556881286-fc6915169721",
    badge: "",
    popular: false,
  },

  {
    id: 17,
    name: "Earl Grey",
    category: "Tea",
    price: 160,
    description: "Elegant black tea infused with bergamot aroma.",
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2",
    badge: "",
    popular: false,
  },

  {
    id: 18,
    name: "Chamomile Tea",
    category: "Tea",
    price: 170,
    description: "Gentle floral tea perfect for a calm evening.",
    image:
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12",
    badge: "RELAX",
    popular: false,
  },

  {
    id: 19,
    name: "Honey Lemon Tea",
    category: "Tea",
    price: 160,
    description: "Refreshing tea with natural honey and fresh lemon.",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    badge: "",
    popular: false,
  },

  {
    id: 20,
    name: "Fresh Lemonade",
    category: "Refreshers",
    price: 150,
    description: "Freshly squeezed lemon with a refreshing citrus finish.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
    badge: "FRESH",
    popular: true,
  },

  {
    id: 21,
    name: "Mint Mojito",
    category: "Refreshers",
    price: 180,
    description: "Fresh mint, lime and sparkling refreshment.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    badge: "",
    popular: false,
  },

  {
    id: 22,
    name: "Berry Fizz",
    category: "Refreshers",
    price: 210,
    description: "Mixed berries with sparkling soda and fresh lime.",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    badge: "NEW",
    popular: true,
  },

  {
    id: 23,
    name: "Peach Iced Tea",
    category: "Refreshers",
    price: 190,
    description: "Cold brewed tea infused with sweet peach flavour.",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    badge: "",
    popular: false,
  },

  {
    id: 24,
    name: "Classic Cheesecake",
    category: "Desserts",
    price: 280,
    description: "Creamy cheesecake with a buttery biscuit base.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    badge: "POPULAR",
    popular: true,
  },

  {
    id: 25,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 190,
    description: "Warm, fudgy chocolate brownie with rich cocoa flavour.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    badge: "BESTSELLER",
    popular: true,
  },

  {
    id: 26,
    name: "Tiramisu",
    category: "Desserts",
    price: 290,
    description: "Classic Italian dessert layered with coffee and mascarpone.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    badge: "SIGNATURE",
    popular: true,
  },

  {
    id: 27,
    name: "Blueberry Muffin",
    category: "Desserts",
    price: 170,
    description: "Soft baked muffin filled with fresh blueberry flavour.",
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
    badge: "",
    popular: false,
  },

  {
    id: 28,
    name: "Chocolate Croissant",
    category: "Desserts",
    price: 220,
    description: "Buttery flaky pastry filled with premium chocolate.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    badge: "FRESH",
    popular: true,
  },

  {
    id: 29,
    name: "Cinnamon Roll",
    category: "Desserts",
    price: 200,
    description: "Soft cinnamon pastry finished with sweet glaze.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
    badge: "",
    popular: false,
  },

  {
    id: 30,
    name: "Veg Sandwich",
    category: "Snacks",
    price: 190,
    description: "Fresh vegetables, cheese and house sauce on toasted bread.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    badge: "FRESH",
    popular: false,
  },

  {
    id: 31,
    name: "Grilled Cheese Sandwich",
    category: "Snacks",
    price: 220,
    description: "Golden toasted bread filled with melted premium cheese.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    badge: "POPULAR",
    popular: true,
  },

  {
    id: 32,
    name: "French Fries",
    category: "Snacks",
    price: 160,
    description: "Crispy golden fries served with our signature dip.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    badge: "",
    popular: false,
  },

  {
    id: 33,
    name: "Loaded Nachos",
    category: "Snacks",
    price: 240,
    description: "Crispy nachos topped with cheese, vegetables and salsa.",
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d",
    badge: "POPULAR",
    popular: true,
  },

  {
    id: 34,
    name: "Garlic Bread",
    category: "Snacks",
    price: 180,
    description: "Toasted bread with garlic butter and herbs.",
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c",
    badge: "",
    popular: false,
  },
];

const categoryOptions = [
  "Hot Coffee",
  "Cold Coffee",
  "Tea",
  "Refreshers",
  "Desserts",
  "Snacks",
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Hot Coffee");

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="menu-page">
      <Reveal as="section" className="menu-hero" direction="up" delay={0.05}>
        <div className="menu-hero-content">
          <p className="menu-label">OUR MENU</p>

          <h1>
            Crafted for
            <br />
            <span>every craving.</span>
          </h1>

          <p>
            From perfectly brewed coffee to freshly baked treats,
            discover something delicious for every moment.
          </p>
        </div>
      </Reveal>

      <section className="menu-container">
        <div className="category-wrapper">
          {categoryOptions.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? "category-btn active" : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-header single-category-header">
          <div>
            <p>OUR SELECTION</p>

            <h2>{activeCategory}</h2>
          </div>

          <span>{filteredItems.length} items</span>
        </div>

        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <Reveal as="article" className="menu-card" key={item.id} direction="up" delay={index * 0.05}>
              <div className="menu-image-wrapper">
                <img src={item.image} alt={item.name} />

                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </div>

              <div className="menu-card-body">
                <div className="menu-card-title">
                  <h3>{item.name}</h3>

                  <strong>₹{item.price}</strong>
                </div>

                <p>{item.description}</p>

                <span className="menu-category">{item.category}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="menu-experience" direction="left" delay={0.08}>
        <div className="menu-experience-image">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
            alt="Coffee shop"
          />
        </div>

        <div className="menu-experience-content">
          <p>THE PERFECT PAIRING</p>

          <h2>
            Coffee tastes
            <br />
            better with
            <span> good food.</span>
          </h2>

          <p className="experience-description">
            Pair your favourite coffee with one of our freshly prepared desserts or
            delicious café snacks.
          </p>

          <div className="pairing-list">
            <Reveal as="div" direction="up" delay={0.08}>
              <span>☕</span>
              <div>
                <strong>Latte + Croissant</strong>
                <p>A perfect morning combination.</p>
              </div>
            </Reveal>

            <Reveal as="div" direction="up" delay={0.14}>
              <span>🍫</span>
              <div>
                <strong>Cold Brew + Brownie</strong>
                <p>Bold coffee meets rich chocolate.</p>
              </div>
            </Reveal>

            <Reveal as="div" direction="up" delay={0.2}>
              <span>🍰</span>
              <div>
                <strong>Cappuccino + Cheesecake</strong>
                <p>A luxurious afternoon treat.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="menu-cta" direction="up" delay={0.1}>
        <p>MADE FRESH. SERVED WITH LOVE.</p>

        <h2>
          Your table is
          <br />
          <span>waiting for you.</span>
        </h2>

        <p>Come in, relax and enjoy something made just for you.</p>

        <a
          href="https://maps.app.goo.gl/ML56nynavyKNGykA9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Café 📍
        </a>
      </Reveal>
    </main>
  );
};

export default Menu;