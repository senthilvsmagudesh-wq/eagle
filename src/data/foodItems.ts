import { FoodItem } from "@/types";

export const foodItems: FoodItem[] = [
  // Biryani Blues (r1) - Different Chicken Biryani images
  {
    id: "f1",
    restaurantId: "r1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with tender chicken pieces, cooked with exotic spices",
    price: 280,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    rating: 4.5,
    isVeg: false,
    category: "Biryani",
    isBestseller: true,
    customizations: [
      {
        id: "c1",
        name: "Spice Level",
        required: true,
        type: "single",
        options: [
          { id: "o1", name: "Mild", price: 0 },
          { id: "o2", name: "Medium", price: 0 },
          { id: "o3", name: "Spicy", price: 0 }
        ]
      },
      {
        id: "c2",
        name: "Add-ons",
        required: false,
        type: "multiple",
        options: [
          { id: "o4", name: "Extra Raita", price: 30 },
          { id: "o5", name: "Boiled Egg", price: 20 },
          { id: "o6", name: "Extra Gravy", price: 40 }
        ]
      }
    ]
  },
  {
    id: "f2",
    restaurantId: "r1",
    name: "Mutton Biryani",
    description: "Succulent mutton pieces slow-cooked with fragrant basmati rice",
    price: 380,
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&q=80",
    rating: 4.6,
    isVeg: false,
    category: "Biryani",
    isBestseller: true
  },
  {
    id: "f3",
    restaurantId: "r1",
    name: "Chicken Kebab",
    description: "Juicy chicken kebabs marinated in special spices and grilled to perfection",
    price: 220,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
    rating: 4.4,
    isVeg: false,
    category: "Starters"
  },

  // Paradise Biryani (r2) - Unique Chicken Biryani
  {
    id: "f4",
    restaurantId: "r2",
    name: "Chicken Biryani",
    description: "Hyderabadi style dum biryani with tender chicken and aromatic spices",
    price: 320,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
    rating: 4.8,
    isVeg: false,
    category: "Biryani",
    isBestseller: true,
    customizations: [
      {
        id: "c1",
        name: "Spice Level",
        required: true,
        type: "single",
        options: [
          { id: "o1", name: "Mild", price: 0 },
          { id: "o2", name: "Medium", price: 0 },
          { id: "o3", name: "Spicy", price: 0 }
        ]
      }
    ]
  },
  {
    id: "f5",
    restaurantId: "r2",
    name: "Hyderabadi Dum Biryani",
    description: "Authentic Hyderabadi biryani cooked in traditional dum style",
    price: 350,
    image: "https://images.unsplash.com/photo-1633945274309-2c8c2b0e3f3f?w=600&q=80",
    rating: 4.9,
    isVeg: false,
    category: "Biryani",
    isBestseller: true
  },
  {
    id: "f6",
    restaurantId: "r2",
    name: "Chicken 65",
    description: "Spicy deep-fried chicken appetizer with curry leaves",
    price: 180,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80",
    rating: 4.5,
    isVeg: false,
    category: "Starters"
  },

  // Spice Garden (r3) - Another unique Chicken Biryani
  {
    id: "f7",
    restaurantId: "r3",
    name: "Chicken Biryani",
    description: "Classic chicken biryani with perfectly cooked rice and flavorful chicken",
    price: 260,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
    rating: 4.3,
    isVeg: false,
    category: "Biryani",
    customizations: [
      {
        id: "c1",
        name: "Spice Level",
        required: true,
        type: "single",
        options: [
          { id: "o1", name: "Mild", price: 0 },
          { id: "o2", name: "Medium", price: 0 },
          { id: "o3", name: "Spicy", price: 0 }
        ]
      }
    ]
  },
  {
    id: "f8",
    restaurantId: "r3",
    name: "Paneer Biryani",
    description: "Vegetarian biryani with soft paneer cubes and aromatic rice",
    price: 240,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
    rating: 4.2,
    isVeg: true,
    category: "Biryani"
  },
  {
    id: "f9",
    restaurantId: "r3",
    name: "Chicken Fried Rice",
    description: "Indo-Chinese style fried rice with chicken and vegetables",
    price: 200,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    rating: 4.1,
    isVeg: false,
    category: "Rice"
  },

  // Royal Kitchen (r4) - Premium Chicken Biryani
  {
    id: "f10",
    restaurantId: "r4",
    name: "Chicken Biryani",
    description: "Royal style biryani with premium basmati rice and succulent chicken",
    price: 340,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
    rating: 4.7,
    isVeg: false,
    category: "Biryani",
    isBestseller: true,
    customizations: [
      {
        id: "c1",
        name: "Spice Level",
        required: true,
        type: "single",
        options: [
          { id: "o1", name: "Mild", price: 0 },
          { id: "o2", name: "Medium", price: 0 },
          { id: "o3", name: "Spicy", price: 0 }
        ]
      },
      {
        id: "c2",
        name: "Add-ons",
        required: false,
        type: "multiple",
        options: [
          { id: "o4", name: "Raita", price: 30 },
          { id: "o5", name: "Salan", price: 50 }
        ]
      }
    ]
  },
  {
    id: "f11",
    restaurantId: "r4",
    name: "Tandoori Chicken",
    description: "Half chicken marinated in yogurt and spices, cooked in tandoor",
    price: 380,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80",
    rating: 4.8,
    isVeg: false,
    category: "Tandoor",
    isBestseller: true
  },

  // Kolkata Biryani House (r5) - Bengali style
  {
    id: "f12",
    restaurantId: "r5",
    name: "Chicken Biryani",
    description: "Kolkata style biryani with potato and tender chicken pieces",
    price: 270,
    image: "https://images.unsplash.com/photo-1701579231349-d7459f8e5e0e?w=600&q=80",
    rating: 4.4,
    isVeg: false,
    category: "Biryani",
    isBestseller: true
  },
  {
    id: "f13",
    restaurantId: "r5",
    name: "Chicken Kathi Roll",
    description: "Kolkata style roll with spicy chicken filling wrapped in paratha",
    price: 120,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80",
    rating: 4.5,
    isVeg: false,
    category: "Rolls"
  },

  // Lucknowi Dastarkhwan (r6) - Awadhi style
  {
    id: "f14",
    restaurantId: "r6",
    name: "Chicken Biryani",
    description: "Lucknowi dum biryani with aromatic spices and tender chicken",
    price: 380,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    rating: 4.9,
    isVeg: false,
    category: "Biryani",
    isBestseller: true,
    customizations: [
      {
        id: "c1",
        name: "Spice Level",
        required: true,
        type: "single",
        options: [
          { id: "o1", name: "Mild", price: 0 },
          { id: "o2", name: "Medium", price: 0 },
          { id: "o3", name: "Spicy", price: 0 }
        ]
      }
    ]
  },
  {
    id: "f15",
    restaurantId: "r6",
    name: "Galouti Kebab",
    description: "Melt-in-mouth kebabs made with minced meat and aromatic spices",
    price: 280,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
    rating: 4.8,
    isVeg: false,
    category: "Kebabs",
    isBestseller: true
  },

  // Malabar Kitchen (r7) - Kerala style
  {
    id: "f16",
    restaurantId: "r7",
    name: "Chicken Biryani",
    description: "Malabar style biryani with unique Kerala spices and chicken",
    price: 250,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    rating: 4.3,
    isVeg: false,
    category: "Biryani"
  },
  {
    id: "f17",
    restaurantId: "r7",
    name: "Fish Curry",
    description: "Traditional Kerala fish curry with coconut milk",
    price: 280,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",
    rating: 4.6,
    isVeg: false,
    category: "Curry"
  },

  // Bombay Biryani Co. (r8) - Mumbai style
  {
    id: "f18",
    restaurantId: "r8",
    name: "Chicken Biryani",
    description: "Bombay style biryani with a perfect blend of spices and chicken",
    price: 240,
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&q=80",
    rating: 4.4,
    isVeg: false,
    category: "Biryani",
    isBestseller: true
  },
  {
    id: "f19",
    restaurantId: "r8",
    name: "Vada Pav",
    description: "Mumbai's iconic street food - spicy potato fritter in a bun",
    price: 40,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
    rating: 4.2,
    isVeg: true,
    category: "Street Food"
  },

  // Nawab's Kitchen (r9) - Mughlai
  {
    id: "f20",
    restaurantId: "r9",
    name: "Chicken Biryani",
    description: "Nawabi style biryani with rich flavors and tender chicken pieces",
    price: 330,
    image: "https://images.unsplash.com/photo-1701579231349-d7459f8e5e0e?w=600&q=80",
    rating: 4.7,
    isVeg: false,
    category: "Biryani",
    isBestseller: true
  },
  {
    id: "f21",
    restaurantId: "r9",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces",
    price: 320,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    rating: 4.8,
    isVeg: false,
    category: "Curry",
    isBestseller: true
  },

  // Biryani Junction (r10) - Budget friendly
  {
    id: "f22",
    restaurantId: "r10",
    name: "Chicken Biryani",
    description: "Delicious and affordable chicken biryani for everyone",
    price: 180,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
    rating: 4.0,
    isVeg: false,
    category: "Biryani"
  },
  {
    id: "f23",
    restaurantId: "r10",
    name: "Chicken Noodles",
    description: "Indo-Chinese style noodles with chicken and vegetables",
    price: 150,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=80",
    rating: 3.9,
    isVeg: false,
    category: "Noodles"
  },
  // Additional items for variety
  {
    id: "f24",
    restaurantId: "r1",
    name: "Veg Biryani",
    description: "Aromatic vegetable biryani with mixed vegetables and spices",
    price: 220,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
    rating: 4.3,
    isVeg: true,
    category: "Biryani"
  },
  {
    id: "f25",
    restaurantId: "r2",
    name: "Chicken Tikka",
    description: "Grilled chicken pieces marinated in yogurt and spices",
    price: 240,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
    rating: 4.6,
    isVeg: false,
    category: "Starters",
    isBestseller: true
  },
  {
    id: "f26",
    restaurantId: "r3",
    name: "Butter Naan",
    description: "Soft and fluffy Indian bread brushed with butter",
    price: 40,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    rating: 4.4,
    isVeg: true,
    category: "Breads"
  },
  {
    id: "f27",
    restaurantId: "r4",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes with bell peppers and onions",
    price: 220,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    rating: 4.5,
    isVeg: true,
    category: "Starters"
  },
  {
    id: "f28",
    restaurantId: "r5",
    name: "Egg Biryani",
    description: "Flavorful biryani with boiled eggs and aromatic spices",
    price: 200,
    image: "https://images.unsplash.com/photo-1633945274309-2c8c2b0e3f3f?w=600&q=80",
    rating: 4.2,
    isVeg: false,
    category: "Biryani"
  },
  {
    id: "f29",
    restaurantId: "r6",
    name: "Seekh Kebab",
    description: "Minced meat kebabs grilled to perfection",
    price: 260,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
    rating: 4.7,
    isVeg: false,
    category: "Kebabs",
    isBestseller: true
  },
  {
    id: "f30",
    restaurantId: "r7",
    name: "Chicken Curry",
    description: "Traditional Kerala style chicken curry with coconut",
    price: 240,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    rating: 4.5,
    isVeg: false,
    category: "Curry"
  },
  {
    id: "f31",
    restaurantId: "r8",
    name: "Pav Bhaji",
    description: "Spicy vegetable curry served with buttered bread rolls",
    price: 120,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
    rating: 4.3,
    isVeg: true,
    category: "Street Food"
  },
  {
    id: "f32",
    restaurantId: "r9",
    name: "Dal Makhani",
    description: "Creamy black lentils cooked with butter and cream",
    price: 180,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
    rating: 4.6,
    isVeg: true,
    category: "Curry"
  },
  {
    id: "f33",
    restaurantId: "r10",
    name: "Chicken Manchurian",
    description: "Indo-Chinese style chicken in spicy sauce",
    price: 200,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80",
    rating: 4.1,
    isVeg: false,
    category: "Chinese"
  },
  // Butter Chicken across multiple restaurants
  {
    id: "f34",
    restaurantId: "r1",
    name: "Butter Chicken",
    description: "Classic butter chicken with rich creamy tomato gravy",
    price: 300,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
    rating: 4.5,
    isVeg: false,
    category: "Curry",
    isBestseller: true
  },
  {
    id: "f35",
    restaurantId: "r2",
    name: "Butter Chicken",
    description: "Hyderabadi style butter chicken with aromatic spices",
    price: 340,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    rating: 4.7,
    isVeg: false,
    category: "Curry"
  },
  {
    id: "f36",
    restaurantId: "r3",
    name: "Butter Chicken",
    description: "Tender chicken in smooth buttery tomato sauce",
    price: 280,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    rating: 4.3,
    isVeg: false,
    category: "Curry"
  },
  {
    id: "f37",
    restaurantId: "r4",
    name: "Butter Chicken",
    description: "Royal style butter chicken with premium ingredients",
    price: 360,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
    rating: 4.8,
    isVeg: false,
    category: "Curry",
    isBestseller: true
  },
  {
    id: "f38",
    restaurantId: "r6",
    name: "Butter Chicken",
    description: "Lucknowi style butter chicken with dum cooking technique",
    price: 400,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    rating: 4.9,
    isVeg: false,
    category: "Curry"
  },
  {
    id: "f39",
    restaurantId: "r7",
    name: "Butter Chicken",
    description: "Kerala twist on butter chicken with coconut undertones",
    price: 260,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    rating: 4.4,
    isVeg: false,
    category: "Curry"
  },
  {
    id: "f40",
    restaurantId: "r8",
    name: "Butter Chicken",
    description: "Mumbai style butter chicken with a tangy twist",
    price: 270,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
    rating: 4.3,
    isVeg: false,
    category: "Curry"
  },
  {
    id: "f41",
    restaurantId: "r10",
    name: "Butter Chicken",
    description: "Budget-friendly butter chicken, big on taste",
    price: 190,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    rating: 4.0,
    isVeg: false,
    category: "Curry"
  },
  // Tandoori Chicken across restaurants
  {
    id: "f42",
    restaurantId: "r1",
    name: "Tandoori Chicken",
    description: "Smoky tandoori chicken with mint chutney",
    price: 320,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80",
    rating: 4.5,
    isVeg: false,
    category: "Tandoor"
  },
  {
    id: "f43",
    restaurantId: "r2",
    name: "Tandoori Chicken",
    description: "Authentic tandoori chicken marinated overnight",
    price: 360,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
    rating: 4.7,
    isVeg: false,
    category: "Tandoor",
    isBestseller: true
  },
  {
    id: "f44",
    restaurantId: "r5",
    name: "Tandoori Chicken",
    description: "Bengali style tandoori chicken with special marinade",
    price: 290,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80",
    rating: 4.3,
    isVeg: false,
    category: "Tandoor"
  }
];
