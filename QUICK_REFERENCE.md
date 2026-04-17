# 🚀 Quick Reference Card

## Essential Commands

```bash
# Install
npm install

# Dev Server
npm run dev
# → http://localhost:8080

# Build
npm run build
# → Creates dist/ folder

# Preview Build
npm run preview

# Test
npm run test

# Lint
npm run lint
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/pages/Home.tsx` | Landing page with search |
| `src/pages/RestaurantList.tsx` | Search results |
| `src/pages/RestaurantDetail.tsx` | Restaurant menu |
| `src/pages/Cart.tsx` | Shopping cart |
| `src/pages/Checkout.tsx` | Checkout flow |
| `src/pages/OrderTracking.tsx` | Order status |
| `src/context/CartContext.tsx` | Cart state |
| `src/data/restaurants.ts` | 10 restaurants |
| `src/data/foodItems.ts` | 33+ food items |
| `src/types/index.ts` | TypeScript types |

---

## 🎯 Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/restaurants?search=query` | Restaurant List |
| `/restaurant/:id` | Restaurant Detail |
| `/cart` | Cart |
| `/checkout` | Checkout |
| `/order-tracking/:orderId` | Order Tracking |

---

## 📊 Mock Data

### Restaurants: 10
- IDs: r1 to r10
- Price range: ₹280 - ₹700 for two
- Ratings: 4.0 - 4.9 stars

### Food Items: 33+
- IDs: f1 to f33
- Price range: ₹40 - ₹380
- Categories: Biryani, Starters, Curry, Chinese, Street Food, Breads

---

## 🎨 Theme Colors

```css
Primary: #E91E63 (Pink)
Accent: #F43F5E (Rose)
Success: #22C55E (Green)
Background: #FAFAFA (Light Gray)
```

---

## 🔧 Tech Stack

- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.19
- Tailwind CSS 3.4.17
- React Router 6.30.1
- shadcn/ui

---

## 📱 Test Searches

Try these in the search bar:
- "Chicken Biryani" → 10 restaurants
- "Paneer" → Vegetarian options
- "Kebab" → Starters
- "Butter Chicken" → Curries
- "Noodles" → Chinese food

---

## 🎯 Key Features

✅ Search & Filter
✅ Restaurant Listings
✅ Menu with Images
✅ Cart Management
✅ Customizations
✅ Address Management
✅ Payment Options
✅ Order Tracking
✅ Responsive Design
✅ Toast Notifications

---

## 🚀 Deploy to Vercel

```bash
# Method 1: CLI
npm i -g vercel
vercel

# Method 2: Dashboard
# 1. Go to vercel.com
# 2. Import Git repo
# 3. Click Deploy
```

---

## 📚 Documentation

- `README.md` - Overview
- `FEATURES.md` - Detailed features
- `GETTING_STARTED.md` - Quick start
- `PROJECT_SUMMARY.md` - Complete summary
- `APP_FLOW.md` - User flow
- `QUICK_REFERENCE.md` - This file

---

## 🐛 Troubleshooting

**Port in use?**
```bash
# Vite auto-selects another port
# Or specify: npm run dev -- --port 3000
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Images not loading?**
- Check internet connection
- Images load from Unsplash CDN

---

## 💡 Quick Tips

1. Cart persists in localStorage
2. Each restaurant has unique dish images
3. Customizations affect price
4. Order tracking auto-progresses
5. All data is mock (no backend needed)

---

## 🎓 Learning Resources

- React: https://react.dev
- TypeScript: https://typescriptlang.org
- Tailwind: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- React Router: https://reactrouter.com

---

## 📞 Quick Help

**Can't find something?**
- Check `src/` folder structure
- Read component comments
- Check browser console
- Review documentation files

**Want to customize?**
- Colors: `src/index.css`
- Data: `src/data/`
- Components: `src/pages/`
- Routes: `src/App.tsx`

---

## ✅ Pre-Deployment Checklist

- [ ] Run `npm install`
- [ ] Test `npm run dev`
- [ ] Build `npm run build`
- [ ] Check `dist/` folder
- [ ] Test all features
- [ ] Check responsive design
- [ ] Deploy to Vercel

---

## 🎉 You're Ready!

```bash
npm run dev
```

Open: http://localhost:8080

**Happy Coding!** 🚀
