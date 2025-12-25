# 🛍️ ShoppyGlobe Ecommerce Application

A modern, responsive e-commerce web application built with React, featuring product browsing, detailed product pages, shopping cart functionality, and a complete checkout process.

![ShoppyGlobe](https://img.shields.io/badge/ShoppyGlobe-Ecommerce-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7.3.0-yellow?style=flat-square)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🏪 Product Management

- **Product Listing**: Browse products in a responsive grid layout
- **Product Search**: Real-time search functionality to filter products by title
- **Product Details**: Comprehensive product information including:
  - High-quality product images
  - Detailed descriptions
  - Pricing with discount calculations
  - Brand information
  - Stock availability
  - Customer ratings and reviews
  - Product specifications (dimensions, weight, warranty)

### 🛒 Shopping Cart

- **Add to Cart**: One-click addition from product list or detail pages
- **Quantity Management**: Increase/decrease item quantities
- **Cart Persistence**: Items remain in cart across sessions
- **Price Calculations**: Automatic total calculations with discounts
- **Visual Feedback**: Buttons show "Added to Cart" when items are in cart

### 💳 Checkout Process

- **Order Summary**: Complete review of selected items with images and pricing
- **Shipping Information**: Comprehensive form with validation
- **Order Confirmation**: Success feedback and cart clearing
- **Responsive Design**: Optimized for all device sizes

### 🎨 User Interface

- **Modern Design**: Clean, professional interface with consistent styling
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Hover effects, smooth transitions, and visual feedback
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## 🛠️ Technologies Used

### Frontend Framework

- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **React Router 6** - Declarative routing for React applications
- **Redux Toolkit** - State management with simplified Redux logic

### Build Tools & Development

- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **CSS3** - Modern styling with custom properties and responsive design

### External APIs

- **DummyJSON API** - Product data and mock e-commerce functionality

## 🚀 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ritushree12/ShoppyEcommerce.git
   cd ShoppyGlobeEcommerceApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📖 Usage

### Browsing Products

- Use the search bar in the header to filter products by title
- Click on any product card to view detailed information
- Browse through different product categories

### Shopping Experience

1. **Add to Cart**: Click "Add to Cart" on any product
2. **View Cart**: Click the cart icon in the header to see your items
3. **Manage Quantities**: Use the quantity input to adjust item amounts
4. **Checkout**: Click "Go to Checkout" to complete your purchase

### Navigation

- **Home (/)**: Product listing and search
- **Product Details (/product/:id)**: Individual product information
- **Cart (/cart)**: Shopping cart management
- **Checkout (/checkout)**: Order completion

## 🏗️ Project Structure

```
ShoppyGlobeEcommerceApp/
├── public/
│   └── assets/                 # Static assets (images, icons)
├── src/
│   ├── components/             # React components
│   │   ├── Header.jsx         # Navigation and search
│   │   ├── ProductItem.jsx    # Individual product cards
│   │   ├── ProductList.jsx    # Product grid and filtering
│   │   ├── ProductDetail.jsx  # Detailed product view
│   │   ├── Cart.jsx           # Shopping cart page
│   │   ├── CartItem.jsx       # Cart item display
│   │   ├── Checkout.jsx       # Checkout process
│   │   └── NotFound.jsx       # 404 error page
│   ├── hooks/
│   │   └── useProducts.js     # Custom hook for API calls
│   ├── redux/
│   │   ├── cartSlice.js       # Redux state management
│   │   └── store.js           # Redux store configuration
│   ├── router.jsx             # Application routing
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── styles/
│       └── styles.css         # Global styles and themes
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # Project documentation
```

## 🔌 API

This application uses the [DummyJSON API](https://dummyjson.com/) for product data:

### Endpoints Used

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch individual product details

### Data Structure

```json
{
  "id": 1,
  "title": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "discountPercentage": 10.5,
  "rating": 4.5,
  "stock": 50,
  "brand": "Brand Name",
  "category": "Category",
  "thumbnail": "image_url",
  "images": ["image1", "image2"],
  "reviews": [...],
  "dimensions": {...},
  "warrantyInformation": "warranty details"
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and structure
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) for providing mock e-commerce data
- [React](https://reactjs.org/) for the amazing frontend framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for simplified state management
- [Vite](https://vitejs.dev/) for the fast development experience

## 📞 Contact

**Ritushree**

- GitHub: [@Ritushree12](https://github.com/Ritushree12)
- Project Link: [https://github.com/Ritushree12/ShoppyEcommerce](https://github.com/Ritushree12/ShoppyEcommerce)

---

⭐ **Star this repo if you found it helpful!**

_Built with ❤️ using React and modern web technologies_
