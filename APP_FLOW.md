# 1 and 1 Food Delivery - Application Flow

## 🎯 Complete User Journey Visualization

---

## 📱 SCREEN-BY-SCREEN FLOW

### 1️⃣ HOME PAGE (`/`)

```
┌─────────────────────────────────────────┐
│  🦅 1 and 1        📍 Bangalore         │
├─────────────────────────────────────────┤
│                                         │
│     Order Food Online                   │
│     Discover the best food & drinks     │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ 🔍 Search for dishes...      [🔍] │ │
│  └───────────────────────────────────┘ │
│                                         │
│  🔥 Popular: Chicken Biryani | Paneer  │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│  │ Biryani │ │  North  │ │ Mughlai │  │
│  │   🍛    │ │ Indian  │ │   🍖    │  │
│  └─────────┘ └─────────┘ └─────────┘  │
│                                         │
│  Top Restaurants                        │
│  ┌──────────────┐ ┌──────────────┐    │
│  │ Biryani Blues│ │Paradise Birya│    │
│  │ ⭐ 4.5 | 25min│ │⭐ 4.7 | 30min│    │
│  │ ₹400 for two │ │₹500 for two  │    │
│  └──────────────┘ └──────────────┘    │
└─────────────────────────────────────────┘
```

**User Actions:**
- Type "Chicken Biryani" in search
- Click on cuisine category
- Click on restaurant card
- Change location

---

### 2️⃣ RESTAURANT LIST (`/restaurants?search=chicken+biryani`)

```
┌─────────────────────────────────────────┐
│  ← 1 and 1  🔍 [Search...]  📍          │
├─────────────────────────────────────────┤
│  Results for "Chicken Biryani"          │
│  10 restaurants found                   │
│                                         │
│  [Filters] Sort: [Rating▼] [Time] [₹]  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [Restaurant Image]              │   │
│  │ Biryani Blues                   │   │
│  │ ⭐ 4.5 (2,500 reviews)          │   │
│  │ Biryani, Mughlai, North Indian │   │
│  │ 🕐 25-30 mins | ₹400 for two   │   │
│  │ 🎉 50% off up to ₹100           │   │
│  │ Available: Chicken Biryani      │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Paradise Biryani                │   │
│  │ ⭐ 4.7 (5,200 reviews)          │   │
│  │ ...                             │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**User Actions:**
- Click on restaurant to view menu
- Apply filters
- Sort results
- Refine search

---

### 3️⃣ RESTAURANT DETAIL (`/restaurant/r1`)

```
┌─────────────────────────────────────────┐
│  ← Biryani Blues              🛒 Cart(0)│
├─────────────────────────────────────────┤
│  [Large Restaurant Banner Image]        │
│  Biryani Blues                          │
│  Biryani, Mughlai, North Indian         │
│  ⭐ 4.5 (2,500) | 🕐 25-30 mins | ₹400  │
│  🎉 50% off up to ₹100                  │
├─────────────────────────────────────────┤
│  Menu                                   │
│                                         │
│  Biryani (3)                            │
│  ┌─────────────────────────────────┐   │
│  │ 🟢 Chicken Biryani      [Image] │   │
│  │ ⭐ Bestseller                    │   │
│  │ Aromatic basmati rice...        │   │
│  │ ⭐ 4.5        ₹280               │   │
│  │              [+ Add to Cart]    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🔴 Mutton Biryani       [Image] │   │
│  │ Succulent mutton pieces...      │   │
│  │ ⭐ 4.6        ₹380               │   │
│  │              [+ Add to Cart]    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Starters (2)                           │
│  ...                                    │
└─────────────────────────────────────────┘
```

**User Actions:**
- Browse menu categories
- Click "Add to Cart"
- Customize items (opens dialog)
- View cart

---

### 3️⃣.1 CUSTOMIZATION DIALOG

```
┌─────────────────────────────────────────┐
│  Customize your order              [×]  │
├─────────────────────────────────────────┤
│  [Image] Chicken Biryani                │
│          ₹280                            │
│                                         │
│  Spice Level [Required]                 │
│  ○ Mild                                 │
│  ● Medium                               │
│  ○ Spicy                                │
│                                         │
│  Add-ons                                │
│  ☐ Extra Raita (+₹30)                  │
│  ☑ Boiled Egg (+₹20)                   │
│  ☐ Extra Gravy (+₹40)                  │
│                                         │
│  [     Add to Cart - ₹300     ]        │
└─────────────────────────────────────────┘
```

**User Actions:**
- Select spice level (required)
- Choose add-ons (optional)
- Click "Add to Cart"

---

### 4️⃣ SHOPPING CART (`/cart`)

```
┌─────────────────────────────────────────┐
│  ← Cart (3 items)        [Clear Cart]   │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐   │
│  │ [Image] 🟢 Chicken Biryani      │   │
│  │         Biryani Blues           │   │
│  │         • Medium spice           │   │
│  │         • Boiled Egg (+₹20)     │   │
│  │         [-] 1 [+]        ₹300   │   │
│  │                          [🗑️]    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [Image] 🔴 Mutton Biryani       │   │
│  │         Biryani Blues           │   │
│  │         [-] 2 [+]        ₹760   │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Bill Summary                    │   │
│  │ Subtotal           ₹1,060.00    │   │
│  │ Delivery Fee          ₹40.00    │   │
│  │ Taxes (5%)            ₹53.00    │   │
│  │ ─────────────────────────────   │   │
│  │ Total              ₹1,153.00    │   │
│  │                                 │   │
│  │ [  Proceed to Checkout  ]      │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**User Actions:**
- Update quantities
- Remove items
- Clear cart
- Proceed to checkout

---

### 5️⃣ CHECKOUT (`/checkout`)

```
┌─────────────────────────────────────────┐
│  ← Checkout                             │
├─────────────────────────────────────────┤
│  📍 Delivery Address      [+ Add New]   │
│                                         │
│  ● Home [Default]                       │
│    123, MG Road, Bangalore              │
│    Near Metro Station                   │
│    Bangalore, 560001                    │
│                                         │
│  ○ Work                                 │
│    456, Tech Park, Bangalore            │
│    ...                                  │
│                                         │
│  💳 Payment Method                      │
│                                         │
│  ● 💵 Cash on Delivery                  │
│    Pay when you receive                 │
│                                         │
│  ○ 📱 UPI / Wallets                     │
│    PhonePe, Google Pay, Paytm           │
│                                         │
│  ○ 💳 Credit / Debit Card               │
│    Visa, Mastercard, Rupay              │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Order Summary                   │   │
│  │ Items (3)          ₹1,060.00    │   │
│  │ Delivery Fee          ₹40.00    │   │
│  │ Taxes (5%)            ₹53.00    │   │
│  │ ─────────────────────────────   │   │
│  │ Total              ₹1,153.00    │   │
│  │                                 │   │
│  │ [    Place Order    ]           │   │
│  │ Estimated delivery: 30-40 mins  │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**User Actions:**
- Select delivery address
- Add new address
- Choose payment method
- Place order

---

### 5️⃣.1 ADD ADDRESS DIALOG

```
┌─────────────────────────────────────────┐
│  Add Delivery Address              [×]  │
├─────────────────────────────────────────┤
│  Address Type                           │
│  ● Home    ○ Work    ○ Other            │
│                                         │
│  Complete Address *                     │
│  ┌───────────────────────────────────┐ │
│  │ House no., Building, Street       │ │
│  └───────────────────────────────────┘ │
│                                         │
│  Landmark                               │
│  ┌───────────────────────────────────┐ │
│  │ Nearby landmark (optional)        │ │
│  └───────────────────────────────────┘ │
│                                         │
│  City *              Pincode *          │
│  ┌─────────────┐    ┌─────────────┐   │
│  │ Bangalore   │    │ 560001      │   │
│  └─────────────┘    └─────────────┘   │
│                                         │
│  [      Save Address      ]            │
└─────────────────────────────────────────┘
```

**User Actions:**
- Select address type
- Fill in address details
- Save address

---

### 6️⃣ ORDER TRACKING (`/order-tracking/ORD1234567890`)

```
┌─────────────────────────────────────────┐
│  ← Track Order                          │
│     Order #ORD1234567890                │
├─────────────────────────────────────────┤
│           [Animated Icon]               │
│                                         │
│         Out for Delivery                │
│    Delivery partner is on the way       │
│                                         │
│         🕐 Arriving in 15 mins          │
│                                         │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 75%             │
│                                         │
│  ✅ Order Placed                        │
│     Your order has been received        │
│                                         │
│  ✅ Confirmed                           │
│     Restaurant is preparing your food   │
│                                         │
│  ✅ Preparing                           │
│     Your food is being cooked           │
│                                         │
│  🚴 Out for Delivery [In Progress...]  │
│     Delivery partner is on the way      │
│                                         │
│  ⭕ Delivered                           │
│     Enjoy your meal!                    │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Delivery Information            │   │
│  │ Address: 123, MG Road           │   │
│  │ Payment: Cash on Delivery       │   │
│  │ Order Time: 2:30 PM             │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Contact Support] [Back to Home]      │
└─────────────────────────────────────────┘
```

**User Actions:**
- Watch order progress
- Contact support
- Return to home

---

### 6️⃣.1 ORDER DELIVERED

```
┌─────────────────────────────────────────┐
│  ← Track Order                          │
│     Order #ORD1234567890                │
├─────────────────────────────────────────┤
│           [✅ Green Check Icon]         │
│                                         │
│         Order Delivered!                │
│       Hope you enjoyed your meal        │
│                                         │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%            │
│                                         │
│  ✅ Order Placed                        │
│  ✅ Confirmed                           │
│  ✅ Preparing                           │
│  ✅ Out for Delivery                    │
│  ✅ Delivered                           │
│                                         │
│  [      Order Again      ]             │
└─────────────────────────────────────────┘
```

**User Actions:**
- Order again
- Return to home

---

## 🔄 COMPLETE FLOW DIAGRAM

```
┌─────────┐
│  HOME   │
└────┬────┘
     │ Search "Chicken Biryani"
     ↓
┌─────────────────┐
│ RESTAURANT LIST │
└────┬────────────┘
     │ Click Restaurant
     ↓
┌──────────────────┐
│ RESTAURANT MENU  │
└────┬─────────────┘
     │ Add Items
     ↓
┌──────────────────┐
│ CUSTOMIZATION    │◄─── Optional
│    DIALOG        │
└────┬─────────────┘
     │ Confirm
     ↓
┌──────────────────┐
│   CART           │
└────┬─────────────┘
     │ Checkout
     ↓
┌──────────────────┐
│   CHECKOUT       │
└────┬─────────────┘
     │ Place Order
     ↓
┌──────────────────┐
│ ORDER TRACKING   │
└────┬─────────────┘
     │ Auto-progress
     ↓
┌──────────────────┐
│   DELIVERED!     │
└──────────────────┘
```

---

## 🎯 KEY INTERACTIONS

### Search Flow
```
Home → Type "Chicken Biryani" → Enter
  ↓
Restaurant List (10 results)
  ↓
Each card shows: "Available: Chicken Biryani"
```

### Add to Cart Flow
```
Restaurant Menu → Click "Add to Cart"
  ↓
Has Customizations? → Yes → Customization Dialog
                    → No  → Direct to Cart
  ↓
Cart Updated → Toast Notification
```

### Checkout Flow
```
Cart → Proceed to Checkout
  ↓
Select Address (or Add New)
  ↓
Choose Payment Method
  ↓
Review Order Summary
  ↓
Place Order → Redirect to Tracking
```

### Order Tracking Flow
```
Order Placed (0%)
  ↓ 8 seconds
Confirmed (25%)
  ↓ 8 seconds
Preparing (50%)
  ↓ 8 seconds
Out for Delivery (75%)
  ↓ 8 seconds
Delivered (100%)
```

---

## 📱 RESPONSIVE BEHAVIOR

### Mobile (< 640px)
- Single column layout
- Collapsible menu
- Touch-friendly buttons
- Stacked cards

### Tablet (640px - 1024px)
- 2-column grid
- Sidebar navigation
- Optimized spacing

### Desktop (> 1024px)
- 3-4 column grid
- Fixed sidebar
- Hover effects
- Larger images

---

## 🎨 VISUAL ELEMENTS

### Colors
- Primary: Pink (#E91E63)
- Success: Green (#22C55E)
- Warning: Yellow (#EAB308)
- Danger: Red (#EF4444)

### Icons
- 🔍 Search
- 📍 Location
- ⭐ Rating
- 🕐 Time
- 💰 Price
- 🛒 Cart
- 🟢 Veg
- 🔴 Non-veg
- ✅ Success
- 🚴 Delivery

### Animations
- Fade in on scroll
- Hover lift effect
- Progress bar animation
- Toast notifications
- Loading states

---

## 🎯 USER EXPERIENCE HIGHLIGHTS

### Intuitive Navigation
- Clear breadcrumbs
- Back buttons on all pages
- Persistent cart icon
- Easy-to-find actions

### Visual Feedback
- Toast notifications for actions
- Loading states
- Empty states
- Error messages
- Success confirmations

### Smart Features
- Search suggestions
- Filter persistence
- Cart persistence
- Address management
- Real-time calculations

---

## 🚀 PERFORMANCE

### Fast Loading
- Optimized images
- Code splitting
- Lazy loading
- Minimal bundle size

### Smooth Interactions
- Instant feedback
- No page reloads
- Smooth transitions
- Responsive UI

---

**This flow ensures a seamless, intuitive experience from search to delivery!** 🎉
