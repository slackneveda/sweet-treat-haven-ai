
import { Product } from "@/components/ProductCard";

export const categories = [
  {
    name: "Cakes & Pastries",
    slug: "cakes-pastries",
    description: "Delicious cakes and pastries for special occasions.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    name: "Cookies & Biscuits",
    slug: "cookies-biscuits",
    description: "Freshly baked cookies and biscuits for every taste.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Frozen Desserts",
    slug: "frozen-desserts",
    description: "Cool and refreshing frozen treats for hot days.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
  },
  {
    name: "Puddings & Custards",
    slug: "puddings-custards",
    description: "Smooth and creamy puddings and custards.",
    image: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Small Bites & Sweets",
    slug: "small-bites-sweets",
    description: "Perfect bite-sized treats for any occasion.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80"
  },
  {
    name: "Pies & Tarts",
    slug: "pies-tarts",
    description: "Classic and modern pies and tarts with delicious fillings.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  }
];

export const products: Product[] = [
  // Cakes & Pastries (10+ items)
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    price: 35.00,
    description: "Rich and decadent chocolate cake with layers of smooth truffle filling and ganache frosting.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1689&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    price: 32.00,
    description: "Classic red velvet cake with smooth cream cheese frosting and a hint of cocoa.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1513&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 3,
    name: "Vanilla Berry Cake",
    price: 30.00,
    description: "Light vanilla sponge cake with layers of fresh seasonal berries and whipped cream.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 4,
    name: "Almond Croissant",
    price: 4.50,
    description: "Buttery croissant filled with rich almond cream and topped with sliced almonds.",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 5,
    name: "Éclair",
    price: 5.00,
    description: "Choux pastry filled with vanilla custard and topped with chocolate ganache.",
    image: "https://images.unsplash.com/photo-1648155240627-7c0585521cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 6,
    name: "Fruit Tart",
    price: 6.50,
    description: "Sweet pastry crust filled with vanilla custard and topped with fresh seasonal fruits.",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 101,
    name: "Black Forest Cake",
    price: 34.00,
    description: "Traditional German chocolate cake layered with whipped cream and cherries, topped with chocolate shavings.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 102,
    name: "Opera Cake",
    price: 36.00,
    description: "Elegant French cake with layers of almond sponge cake, coffee buttercream, and chocolate ganache.",
    image: "https://images.unsplash.com/photo-1547047803-fa5982780c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 103,
    name: "Carrot Cake",
    price: 28.00,
    description: "Moist spiced cake with grated carrots, walnuts, and cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 104,
    name: "Tiramisu Cake",
    price: 32.00,
    description: "Italian coffee-flavored cake with layers of mascarpone cheese, cocoa, and coffee-soaked ladyfingers.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Cakes & Pastries"
  },
  {
    id: 105,
    name: "Chocolate Danish",
    price: 4.00,
    description: "Flaky pastry filled with rich chocolate cream and drizzled with chocolate sauce.",
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1429&q=80",
    category: "Cakes & Pastries"
  },

  // Cookies & Biscuits (10+ items)
  {
    id: 7,
    name: "Chocolate Chip Cookies",
    price: 8.50,
    description: "Classic cookies made with butter, brown sugar, and generous chunks of chocolate.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 8,
    name: "Double Chocolate Cookies",
    price: 8.50,
    description: "Rich chocolate cookies with chocolate chips for the ultimate chocolate lover.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 9,
    name: "Macadamia White Chocolate Cookies",
    price: 9.50,
    description: "Buttery cookies with crunchy macadamia nuts and sweet white chocolate chunks.",
    image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 10,
    name: "Shortbread Cookies",
    price: 7.50,
    description: "Traditional Scottish shortbread made with butter, sugar, and flour for a melt-in-your-mouth texture.",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 11,
    name: "Ginger Snaps",
    price: 7.00,
    description: "Crisp, spiced cookies with ginger, cinnamon, and molasses for a perfect snap.",
    image: "https://images.unsplash.com/photo-1481390915718-84930b788814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 12,
    name: "Peanut Butter Cookies",
    price: 8.00,
    description: "Soft and chewy cookies made with creamy peanut butter and a hint of salt.",
    image: "https://images.unsplash.com/photo-1590080876209-846ecbcd6723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 106,
    name: "Oatmeal Raisin Cookies",
    price: 7.50,
    description: "Wholesome cookies made with rolled oats, plump raisins, and a hint of cinnamon.",
    image: "https://images.unsplash.com/photo-1591981131950-1c333dce2f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 107,
    name: "Almond Biscotti",
    price: 9.00,
    description: "Twice-baked Italian cookies with almonds, perfect for dipping in coffee or dessert wine.",
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 108,
    name: "Snickerdoodles",
    price: 7.00,
    description: "Soft cookies rolled in cinnamon sugar with a slightly tangy flavor from cream of tartar.",
    image: "https://images.unsplash.com/photo-1600514085813-21c3c1f5075e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 109,
    name: "Jam Thumbprint Cookies",
    price: 8.00,
    description: "Buttery shortbread cookies with a center of sweet fruit jam.",
    image: "https://images.unsplash.com/photo-1607920592588-ffe75bad111a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Cookies & Biscuits"
  },
  {
    id: 110,
    name: "Lemon Sugar Cookies",
    price: 7.50,
    description: "Light, zesty cookies with a fresh lemon flavor and a sugar-crystal coating.",
    image: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Cookies & Biscuits"
  },

  // Frozen Desserts (10+ items)
  {
    id: 13,
    name: "Vanilla Bean Ice Cream",
    price: 12.00,
    description: "Creamy ice cream made with real vanilla beans and fresh cream for a classic taste.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 14,
    name: "Chocolate Fudge Brownie Ice Cream",
    price: 14.00,
    description: "Rich chocolate ice cream with chunks of fudgy brownies throughout.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 15,
    name: "Strawberry Cheesecake Ice Cream",
    price: 14.00,
    description: "Creamy cheesecake ice cream with strawberry ripple and pieces of graham cracker crust.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 16,
    name: "Mango Sorbet",
    price: 10.00,
    description: "Refreshing dairy-free sorbet made with ripe mangoes for a tropical treat.",
    image: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 17,
    name: "Gelato Variety Pack",
    price: 18.00,
    description: "Italian-style gelato in four flavors: pistachio, hazelnut, chocolate, and stracciatella.",
    image: "https://images.unsplash.com/photo-1566454825481-9c31c1a837a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1022&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 18,
    name: "Raspberry Frozen Yogurt",
    price: 11.00,
    description: "Tangy frozen yogurt with fresh raspberry puree for a healthier frozen treat.",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 111,
    name: "Mint Chocolate Chip Ice Cream",
    price: 13.00,
    description: "Refreshing mint ice cream with chocolate chips throughout.",
    image: "https://images.unsplash.com/photo-1563897539633-7374c276c212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 112,
    name: "Affogato",
    price: 7.00,
    description: "Italian coffee-based dessert with vanilla ice cream topped with a shot of hot espresso.",
    image: "https://images.unsplash.com/photo-1517093157656-b9eccef01cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 113,
    name: "Lemon Sorbet",
    price: 9.00,
    description: "Tart and refreshing dairy-free sorbet made with fresh lemons.",
    image: "https://images.unsplash.com/photo-1581162726692-3236781cdaf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 114,
    name: "Ice Cream Sandwich",
    price: 5.50,
    description: "Vanilla ice cream sandwiched between two chocolate chip cookies.",
    image: "https://images.unsplash.com/photo-1583743089695-4b816a340f0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Frozen Desserts"
  },
  {
    id: 115,
    name: "Coffee Ice Cream",
    price: 12.50,
    description: "Rich and creamy coffee-flavored ice cream made with freshly brewed espresso.",
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1444&q=80",
    category: "Frozen Desserts"
  },

  // Puddings & Custards (10+ items)
  {
    id: 19,
    name: "Bread Pudding",
    price: 18.00,
    description: "Classic bread pudding with raisins, vanilla, and a warm bourbon sauce.",
    image: "https://images.unsplash.com/photo-1600617953089-20d8d2246490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 20,
    name: "Vanilla Bean Panna Cotta",
    price: 9.00,
    description: "Silky smooth Italian custard made with cream, vanilla, and topped with fresh berries.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 21,
    name: "Chocolate Pudding",
    price: 8.00,
    description: "Rich and creamy chocolate pudding topped with whipped cream and chocolate shavings.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 22,
    name: "Crème Brûlée",
    price: 10.00,
    description: "Classic French custard with a caramelized sugar topping that cracks when tapped.",
    image: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 23,
    name: "Rice Pudding",
    price: 7.00,
    description: "Creamy rice pudding with hints of cinnamon and vanilla, served warm or chilled.",
    image: "https://images.unsplash.com/photo-1602023039928-7af5a2f000fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 24,
    name: "Butterscotch Pudding",
    price: 8.00,
    description: "Old-fashioned butterscotch pudding with caramelized brown sugar and a hint of salt.",
    image: "https://images.unsplash.com/photo-1547414876-84671013f45c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 116,
    name: "Vanilla Flan",
    price: 7.50,
    description: "Smooth Spanish custard dessert with a layer of caramel on top.",
    image: "https://images.unsplash.com/photo-1568051243858-533a607809a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 117,
    name: "Tapioca Pudding",
    price: 7.00,
    description: "Classic creamy pudding with tapioca pearls and a hint of vanilla.",
    image: "https://images.unsplash.com/photo-1594340142149-113bb4599859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 118,
    name: "Chocolate Pot de Crème",
    price: 9.00,
    description: "Silky French chocolate custard topped with whipped cream and chocolate curls.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 119,
    name: "Caramel Custard",
    price: 8.00,
    description: "Smooth vanilla custard topped with a layer of rich caramel sauce.",
    image: "https://images.unsplash.com/photo-1551024601-45c5f43d1177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Puddings & Custards"
  },
  {
    id: 120,
    name: "Banana Pudding",
    price: 8.50,
    description: "Creamy vanilla pudding layered with sliced bananas and vanilla wafer cookies.",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Puddings & Custards"
  },

  // Small Bites & Sweets (10+ items)
  {
    id: 25,
    name: "Mini Chocolate Eclairs",
    price: 6.00,
    description: "Bite-sized choux pastry filled with chocolate cream and topped with chocolate ganache.",
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 26,
    name: "Macarons (6 pack)",
    price: 12.00,
    description: "Delicate French almond cookies in assorted flavors with buttercream filling.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 27,
    name: "Chocolate Truffles",
    price: 9.50,
    description: "Handmade chocolate ganache truffles dusted with cocoa powder.",
    image: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 28,
    name: "Mini Fruit Tarts",
    price: 8.00,
    description: "Petite tarts filled with pastry cream and topped with fresh seasonal fruit.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1689&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 29,
    name: "Cake Pops",
    price: 7.50,
    description: "Bite-sized balls of cake dipped in chocolate on a stick.",
    image: "https://images.unsplash.com/photo-1635334049258-9276fda583e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 30,
    name: "Lemon Bars",
    price: 5.00,
    description: "Tangy lemon curd on a buttery shortbread crust dusted with powdered sugar.",
    image: "https://images.unsplash.com/photo-1598026059337-6be8e5957a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 121,
    name: "Mini Cheesecake Bites",
    price: 9.00,
    description: "Creamy bite-sized cheesecakes with graham cracker crust and fruit topping.",
    image: "https://images.unsplash.com/photo-1567171466295-4afa63d89c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 122,
    name: "Chocolate Covered Strawberries",
    price: 10.00,
    description: "Fresh strawberries dipped in premium dark and white chocolate.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 123,
    name: "Chocolate Dipped Pretzels",
    price: 6.50,
    description: "Crunchy pretzels dipped in chocolate and decorated with sprinkles.",
    image: "https://images.unsplash.com/photo-1601625618991-5a1b2899a65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 124,
    name: "Caramel Popcorn",
    price: 5.50,
    description: "Fresh popcorn coated in sweet caramel for a perfect sweet and salty snack.",
    image: "https://images.unsplash.com/photo-1561650983-0312a1091538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1439&q=80",
    category: "Small Bites & Sweets"
  },
  {
    id: 125,
    name: "Petit Fours",
    price: 11.00,
    description: "Small, decorated cakes coated in fondant with elegant designs.",
    image: "https://images.unsplash.com/photo-1558910587-8fea9867895b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Small Bites & Sweets"
  },

  // Pies & Tarts (10+ items)
  {
    id: 31,
    name: "Apple Pie",
    price: 25.00,
    description: "Classic American pie with cinnamon-spiced apples in a flaky, buttery crust.",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 32,
    name: "Key Lime Pie",
    price: 28.00,
    description: "Tangy and sweet pie with a graham cracker crust and whipped cream topping.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 33,
    name: "Chocolate Pecan Pie",
    price: 30.00,
    description: "Rich, gooey pie with chocolate chips and toasted pecans in a flaky crust.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 34,
    name: "Lemon Meringue Pie",
    price: 26.00,
    description: "Tangy lemon curd filling topped with fluffy meringue in a buttery crust.",
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 35,
    name: "Cherry Tart",
    price: 24.00,
    description: "Sweet-tart cherry filling in a crisp, butter crust.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 36,
    name: "Pumpkin Pie",
    price: 22.00,
    description: "Spiced pumpkin custard in a flaky crust, perfect for fall and holidays.",
    image: "https://images.unsplash.com/photo-1509461399763-ae67a981b254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 126,
    name: "Peach Cobbler",
    price: 24.00,
    description: "Fresh peaches baked with a buttery, biscuit-like topping.",
    image: "https://images.unsplash.com/photo-1567098228965-19bbe8052324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 127,
    name: "Blueberry Tart",
    price: 25.00,
    description: "Fresh blueberries in a sweet filling atop a buttery pastry crust.",
    image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 128,
    name: "Coconut Cream Pie",
    price: 27.00,
    description: "Coconut custard filling topped with whipped cream and toasted coconut flakes.",
    image: "https://images.unsplash.com/photo-1625862692743-5aadee41d22d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 129,
    name: "Strawberry Rhubarb Pie",
    price: 26.00,
    description: "Sweet strawberries and tart rhubarb baked in a double crust pie.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
    category: "Pies & Tarts"
  },
  {
    id: 130,
    name: "Chocolate Silk Pie",
    price: 28.00,
    description: "Smooth, rich chocolate filling in a chocolate cookie crust, topped with whipped cream.",
    image: "https://images.unsplash.com/photo-1562188948-93a142e2c1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Pies & Tarts"
  }
];
