# Shree Eagle - Food Delivery Service 🦅

A modern, production-ready food ordering platform built with React, TypeScript, and Tailwind CSS. Part of the Shree Eagle ecosystem providing daily essentials at fair prices.

## ✨ Features

- 🔍 **Smart Search** - Search for dishes across all restaurants
- 🏪 **Restaurant Listings** - Browse 10+ restaurants with filters and sorting
- 📋 **Detailed Menus** - View complete menus with images, prices, and ratings
- 🛒 **Shopping Cart** - Add items with customizations (spice level, add-ons)
- 📍 **Address Management** - Save multiple delivery addresses
- 💳 **Payment Options** - COD, UPI, Cards (UI only)
- 📦 **Order Tracking** - Real-time order status with progress tracking
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Beautiful UI** - Modern design with smooth animations

## 🦅 About Shree Eagle

Shree Eagle is your trusted platform for daily essentials at fair prices. Our food delivery service is part of our commitment to connecting you with quality products and services in your area.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **Context API** - State management
- **Local Storage** - Cart persistence

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.tsx              # Landing page with search
│   ├── RestaurantList.tsx    # Search results
│   ├── RestaurantDetail.tsx  # Restaurant menu
│   ├── Cart.tsx              # Shopping cart
│   ├── Checkout.tsx          # Address & payment
│   └── OrderTracking.tsx     # Order status
├── components/
│   └── ui/                   # shadcn components
├── context/
│   └── CartContext.tsx       # Cart state management
├── data/
│   ├── restaurants.ts        # Mock restaurant data
│   └── foodItems.ts          # Mock food items
└── types/
    └── index.ts              # TypeScript types
```

## 🎯 Key Features Explained

### Search & Discovery
- Search by dish name (e.g., "Chicken Biryani")
- Filter by cuisine type
- Sort by rating, delivery time, or price
- Each restaurant shows matching dishes

### Restaurant Details
- High-quality food images (unique for each restaurant)
- Veg/Non-veg indicators
- Star ratings and reviews
- Delivery time and cost estimates
- Special offers and discounts

### Cart & Customization
- Add items with customizations
- Spice level selection (Mild/Medium/Spicy)
- Add-ons (Extra Raita, Boiled Egg, etc.)
- Quantity adjustment
- Real-time price calculation

### Checkout Flow
1. Select/Add delivery address
2. Choose payment method
3. Review order summary
4. Place order

### Order Tracking
- Real-time status updates
- Progress visualization
- Estimated delivery time
- Order details

## 🎨 Design Highlights

- **Pink Theme** - Modern, appetizing color scheme
- **Card-based Layout** - Clean and organized
- **Smooth Animations** - Delightful user experience
- **High-quality Images** - Unique images for each dish
- **Intuitive Navigation** - Easy to understand flow

## 📦 Mock Data

The app includes:
- 10 restaurants with unique identities
- 23+ food items with different images
- Multiple cuisines (Biryani, North Indian, Mughlai, Chinese, etc.)
- Realistic pricing (₹180 - ₹380)
- Star ratings and review counts

## 🚀 Deployment

This app is ready to deploy to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

```bash
# Build for production
npm run build

# The dist/ folder is ready to deploy
```

## 🔧 Customization

### Add More Restaurants
Edit `src/data/restaurants.ts` and `src/data/foodItems.ts`

### Change Theme Colors
Edit `src/index.css` - modify CSS variables

### Add New Features
The codebase is modular and easy to extend

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use this project for your own food delivery application!

---

Built with ❤️ by Shree Eagle - Your daily essentials at fair prices
