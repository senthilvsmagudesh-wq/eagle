# Getting Started with 1 and 1 Food Delivery App 🚀

## Quick Start (3 Steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: `http://localhost:8080` (or the port shown in terminal)

---

## 🎮 How to Use the App

### For First-Time Users

1. **Home Page**
   - You'll see a search bar and featured restaurants
   - Try searching for "Chicken Biryani" or "Paneer"
   - Click on any cuisine category
   - Browse featured restaurants

2. **Search Results**
   - See all restaurants that match your search
   - Use filters to sort by rating, delivery time, or price
   - Click on any restaurant card to view their menu

3. **Restaurant Menu**
   - Browse different categories (Biryani, Starters, Curry, etc.)
   - Click "Add to Cart" on any item
   - For items with customizations, select your preferences
   - Watch the cart icon update with item count

4. **Shopping Cart**
   - Review your items
   - Adjust quantities using +/- buttons
   - Remove items if needed
   - See the bill breakdown
   - Click "Proceed to Checkout"

5. **Checkout**
   - Select or add a delivery address
   - Choose payment method (COD, UPI, or Card)
   - Review your order
   - Click "Place Order"

6. **Order Tracking**
   - Watch your order progress through stages
   - See estimated delivery time
   - Order status updates automatically

---

## 🔍 Try These Searches

- "Chicken Biryani" - See 10 different restaurants
- "Paneer" - Find vegetarian options
- "Kebab" - Explore starters
- "Butter Chicken" - Popular curry
- "Noodles" - Chinese food

---

## 📱 Test Responsive Design

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Try different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)

---

## 🎨 Explore Features

### Search & Filter
- Search bar on every page
- Sort by: Relevance, Rating, Delivery Time, Price
- Filter by cuisine type

### Customization
- Try adding "Chicken Biryani" from any restaurant
- Select spice level
- Add extra items (Raita, Egg, etc.)

### Cart Management
- Add multiple items from different restaurants
- Update quantities
- See real-time price updates
- Clear cart option

### Address Management
- Add multiple addresses
- Set default address
- Different address types (Home/Work/Other)

### Order Tracking
- Automatic status progression
- Visual progress bar
- Estimated time countdown

---

## 🏗️ Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

The `dist/` folder will contain your production-ready files.

---

## 🚀 Deploy to Vercel

### Method 1: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Method 2: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Click "Deploy"

---

## 📂 Project Structure Explained

```
src/
├── pages/              # All page components
│   ├── Home.tsx        # Landing page
│   ├── RestaurantList.tsx
│   ├── RestaurantDetail.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   └── OrderTracking.tsx
│
├── components/ui/      # Reusable UI components
│   ├── button.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   └── ... (50+ components)
│
├── context/           # Global state
│   └── CartContext.tsx
│
├── data/              # Mock data
│   ├── restaurants.ts  # 10 restaurants
│   └── foodItems.ts    # 33+ food items
│
├── types/             # TypeScript types
│   └── index.ts
│
├── App.tsx            # Main app with routes
└── main.tsx           # Entry point
```

---

## 🎯 Key Files to Understand

### 1. CartContext.tsx
Manages global cart state:
- Add items to cart
- Update quantities
- Remove items
- Calculate totals
- Persist to localStorage

### 2. restaurants.ts
Contains 10 mock restaurants with:
- Name, image, rating
- Cuisines, delivery time
- Price for two
- Special offers

### 3. foodItems.ts
Contains 33+ food items with:
- Unique images for each dish
- Prices, ratings
- Veg/Non-veg indicators
- Customization options

### 4. App.tsx
Defines all routes:
- `/` - Home
- `/restaurants` - Search results
- `/restaurant/:id` - Menu
- `/cart` - Shopping cart
- `/checkout` - Checkout
- `/order-tracking/:orderId` - Tracking

---

## 🎨 Customization Guide

### Change Theme Colors
Edit `src/index.css`:
```css
:root {
  --primary: 330 81% 60%;  /* Pink color */
  --accent: 340 82% 52%;   /* Rose gold */
}
```

### Add More Restaurants
Edit `src/data/restaurants.ts`:
```typescript
{
  id: "r11",
  name: "Your Restaurant",
  image: "image-url",
  rating: 4.5,
  // ... more fields
}
```

### Add More Food Items
Edit `src/data/foodItems.ts`:
```typescript
{
  id: "f34",
  restaurantId: "r11",
  name: "Your Dish",
  // ... more fields
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Vite will automatically try another port
# Or specify a port:
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Check internet connection
- Unsplash URLs are used for images
- Images load from CDN

---

## 📚 Learn More

### Technologies Used
- **React 18** - [docs](https://react.dev)
- **TypeScript** - [docs](https://www.typescriptlang.org)
- **Vite** - [docs](https://vitejs.dev)
- **Tailwind CSS** - [docs](https://tailwindcss.com)
- **shadcn/ui** - [docs](https://ui.shadcn.com)
- **React Router** - [docs](https://reactrouter.com)

### Key Concepts
- React Hooks (useState, useEffect, useContext)
- Context API for state management
- React Router for navigation
- TypeScript interfaces
- Responsive design with Tailwind
- Component composition

---

## 🎓 Next Steps

1. **Explore the Code**
   - Read through each page component
   - Understand the cart context
   - Check the mock data structure

2. **Customize**
   - Change colors and fonts
   - Add your own restaurants
   - Modify the UI components

3. **Extend**
   - Add user authentication
   - Connect to a real backend
   - Implement payment gateway
   - Add order history

4. **Deploy**
   - Build for production
   - Deploy to Vercel/Netlify
   - Share with friends!

---

## 💡 Tips

- Use browser DevTools to inspect components
- Check console for any errors
- Test on different devices
- Try all user flows
- Experiment with the code

---

## 🎉 You're Ready!

Start the dev server and explore the app. Happy coding! 🚀

```bash
npm run dev
```

Then open: http://localhost:8080

---

**Need Help?** Check FEATURES.md for detailed feature documentation.
