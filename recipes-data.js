// ============================================================
// THYME & AGAIN — recipe data
// Every recipe the app knows about lives in this one array.
// Swap this file out (or fetch from a real API) to change the menu.
// ============================================================

const RECIPES = [
  {
    id: "pancakes",
    title: "Fluffy Buttermilk Pancakes",
    category: "Breakfast",
    tags: ["Vegetarian", "Quick"],
    icon: "🥞",
    blurb: "Tall, soft stacks with a golden edge and a buttermilk tang.",
    prep: 10,
    cook: 15,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1¾ cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "½ tsp baking soda",
      "½ tsp salt",
      "1¾ cups buttermilk",
      "2 large eggs",
      "3 tbsp melted butter, plus more for the pan",
      "1 tsp vanilla extract"
    ],
    steps: [
      "Whisk the flour, sugar, baking powder, baking soda and salt together in a large bowl.",
      "In a separate bowl, beat the buttermilk, eggs, melted butter and vanilla until smooth.",
      "Pour the wet mix into the dry mix and stir just until combined — a few lumps are fine.",
      "Let the batter rest for 5 minutes while you heat a buttered skillet over medium heat.",
      "Pour ⅓ cup of batter per pancake. Cook 2–3 minutes until bubbles form, then flip.",
      "Cook the second side for 1–2 minutes until golden, then serve warm with syrup."
    ]
  },
  {
    id: "avocado-toast",
    title: "Avocado & Egg Toast",
    category: "Breakfast",
    tags: ["Vegetarian", "Quick"],
    icon: "🥑",
    blurb: "Crushed avocado, a jammy egg, and chili flakes on thick toast.",
    prep: 10,
    cook: 8,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "2 thick slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tsp lemon juice",
      "Pinch of chili flakes",
      "Flaky salt and black pepper",
      "Olive oil, for drizzling"
    ],
    steps: [
      "Bring a small pot of water to a gentle boil and lower the eggs in carefully.",
      "Simmer for 6½ minutes for a jammy yolk, then transfer to cold water and peel.",
      "Toast the bread until deeply golden and crisp at the edges.",
      "Mash the avocado with lemon juice, salt and pepper, then spread it thickly on the toast.",
      "Halve the eggs and place them on top. Finish with chili flakes, more salt, and a drizzle of olive oil."
    ]
  },
  {
    id: "roast-chicken",
    title: "Lemon Garlic Roast Chicken",
    category: "Mains",
    tags: ["Gluten-Free"],
    icon: "🍗",
    blurb: "A whole roasted bird, deeply seasoned, with crisp golden skin.",
    prep: 15,
    cook: 75,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "1 whole chicken (about 1.6kg)",
      "1 lemon, halved",
      "6 garlic cloves",
      "4 tbsp butter, softened",
      "2 tsp dried thyme",
      "1 tsp smoked paprika",
      "Salt and black pepper",
      "1 tbsp olive oil"
    ],
    steps: [
      "Preheat the oven to 220°C (425°F). Pat the chicken fully dry with paper towels.",
      "Mash the butter with thyme, paprika, 2 minced garlic cloves, salt and pepper.",
      "Rub the herb butter all over and under the skin of the chicken.",
      "Stuff the cavity with the lemon halves and remaining garlic cloves.",
      "Drizzle with olive oil, season the skin generously, and tie the legs together.",
      "Roast for 60–75 minutes until the skin is deep golden and juices run clear.",
      "Rest for 10 minutes before carving."
    ]
  },
  {
    id: "shrimp-pasta",
    title: "Garlic Butter Shrimp Pasta",
    category: "Mains",
    tags: ["Quick"],
    icon: "🍝",
    blurb: "Plump shrimp in a glossy garlic-butter sauce, tossed with linguine.",
    prep: 10,
    cook: 15,
    servings: 3,
    difficulty: "Easy",
    ingredients: [
      "300g linguine",
      "400g shrimp, peeled and deveined",
      "4 tbsp butter",
      "5 garlic cloves, minced",
      "½ tsp chili flakes",
      "½ cup dry white wine (or stock)",
      "Juice of 1 lemon",
      "¼ cup chopped parsley",
      "Salt and black pepper"
    ],
    steps: [
      "Cook the linguine in salted water until just shy of al dente. Reserve a cup of pasta water.",
      "Melt half the butter in a large skillet over medium-high heat and sear the shrimp 1–2 minutes per side. Remove and set aside.",
      "Add the rest of the butter to the same pan and gently cook the garlic and chili flakes for 30 seconds.",
      "Pour in the wine and simmer for 2 minutes, scraping up any browned bits.",
      "Add the pasta, shrimp, lemon juice, and a splash of pasta water. Toss until glossy.",
      "Stir in the parsley, season to taste, and serve immediately."
    ]
  },
  {
    id: "chickpea-curry",
    title: "Spicy Chickpea & Spinach Curry",
    category: "Mains",
    tags: ["Vegan", "Spicy", "Gluten-Free"],
    icon: "🍛",
    blurb: "A bold, fragrant curry simmered low and slow in coconut milk.",
    prep: 10,
    cook: 25,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "2 tbsp coconut oil",
      "1 onion, diced",
      "3 garlic cloves, minced",
      "1 tbsp ginger, grated",
      "2 tsp curry powder",
      "1 tsp cumin",
      "½–1 tsp cayenne pepper",
      "2 cans chickpeas, drained",
      "1 can crushed tomatoes",
      "1 can coconut milk",
      "4 cups baby spinach",
      "Salt to taste"
    ],
    steps: [
      "Heat the coconut oil in a large pot and soften the onion for 5 minutes.",
      "Stir in the garlic, ginger, curry powder, cumin and cayenne and cook for 1 minute until fragrant.",
      "Add the chickpeas and crushed tomatoes, and simmer for 10 minutes.",
      "Pour in the coconut milk and simmer for another 10 minutes until slightly thickened.",
      "Fold in the spinach and cook just until wilted. Season with salt and serve over rice."
    ]
  },
  {
    id: "greek-salad",
    title: "Greek Salad with Feta",
    category: "Salads",
    tags: ["Vegetarian", "Gluten-Free", "Quick"],
    icon: "🥗",
    blurb: "Crisp cucumber, ripe tomato, olives and a thick slab of feta.",
    prep: 15,
    cook: 0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "4 tomatoes, cut into wedges",
      "1 cucumber, sliced into half-moons",
      "1 green bell pepper, sliced",
      "½ red onion, thinly sliced",
      "½ cup Kalamata olives",
      "200g block feta",
      "3 tbsp olive oil",
      "1 tbsp red wine vinegar",
      "1 tsp dried oregano",
      "Salt and black pepper"
    ],
    steps: [
      "Combine the tomatoes, cucumber, bell pepper, onion and olives in a large bowl.",
      "Whisk the olive oil, vinegar, oregano, salt and pepper together.",
      "Pour the dressing over the vegetables and toss gently.",
      "Place the whole block of feta on top, drizzle with a little more olive oil and oregano, and serve."
    ]
  },
  {
    id: "corn-black-bean-salad",
    title: "Charred Corn & Black Bean Salad",
    category: "Salads",
    tags: ["Vegan", "Gluten-Free"],
    icon: "🌽",
    blurb: "Smoky charred corn, black beans and lime in a punchy dressing.",
    prep: 15,
    cook: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "3 cups corn kernels (fresh or frozen)",
      "1 can black beans, drained and rinsed",
      "1 red bell pepper, diced",
      "¼ cup red onion, diced",
      "¼ cup cilantro, chopped",
      "Juice of 2 limes",
      "3 tbsp olive oil",
      "1 tsp smoked paprika",
      "Salt to taste"
    ],
    steps: [
      "Char the corn in a dry skillet over high heat, stirring occasionally, for about 6–8 minutes.",
      "Let the corn cool slightly, then toss it in a bowl with the black beans, bell pepper, onion and cilantro.",
      "Whisk the lime juice, olive oil, smoked paprika and salt together.",
      "Pour the dressing over the salad and toss well. Best served at room temperature."
    ]
  },
  {
    id: "tomato-soup",
    title: "Roasted Tomato Basil Soup",
    category: "Soups",
    tags: ["Vegetarian", "Gluten-Free"],
    icon: "🍅",
    blurb: "Sweet roasted tomatoes blended silky-smooth with fresh basil.",
    prep: 10,
    cook: 40,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1.5kg ripe tomatoes, halved",
      "1 onion, quartered",
      "4 garlic cloves",
      "3 tbsp olive oil",
      "2 cups vegetable stock",
      "½ cup fresh basil leaves",
      "¼ cup heavy cream (optional)",
      "Salt and black pepper"
    ],
    steps: [
      "Preheat the oven to 200°C (400°F). Toss the tomatoes, onion and garlic with olive oil, salt and pepper.",
      "Roast on a sheet pan for 35–40 minutes until the edges are caramelized.",
      "Transfer everything to a pot with the vegetable stock and bring to a simmer.",
      "Add the basil and blend the soup until completely smooth, using an immersion blender.",
      "Stir in the cream if using, adjust the seasoning, and serve hot with crusty bread."
    ]
  },
  {
    id: "choc-chip-cookies",
    title: "Classic Chocolate Chip Cookies",
    category: "Desserts",
    tags: ["Vegetarian"],
    icon: "🍪",
    blurb: "Crisp edges, chewy centers, and pools of melted chocolate.",
    prep: 15,
    cook: 12,
    servings: 18,
    difficulty: "Easy",
    ingredients: [
      "2¼ cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "¾ cup brown sugar",
      "¾ cup white sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips"
    ],
    steps: [
      "Preheat the oven to 190°C (375°F) and line two baking sheets with parchment.",
      "Whisk the flour, baking soda and salt together in a bowl.",
      "Cream the butter with both sugars until light and fluffy, about 3 minutes.",
      "Beat in the eggs one at a time, then the vanilla.",
      "Mix in the dry ingredients until just combined, then fold in the chocolate chips.",
      "Scoop tablespoon-sized balls onto the sheets, spaced apart, and bake 10–12 minutes until golden at the edges.",
      "Cool on the sheet for 5 minutes before moving to a wire rack."
    ]
  },
  {
    id: "banana-bread",
    title: "One-Bowl Banana Bread",
    category: "Desserts",
    tags: ["Vegetarian"],
    icon: "🍌",
    blurb: "Dense, moist, and built entirely around very ripe bananas.",
    prep: 10,
    cook: 55,
    servings: 8,
    difficulty: "Easy",
    ingredients: [
      "3 very ripe bananas, mashed",
      "⅓ cup melted butter",
      "¾ cup brown sugar",
      "1 egg, beaten",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "Pinch of salt",
      "1½ cups all-purpose flour"
    ],
    steps: [
      "Preheat the oven to 175°C (350°F) and grease a loaf pan.",
      "Mash the bananas well in a large bowl, then stir in the melted butter.",
      "Mix in the brown sugar, egg and vanilla.",
      "Sprinkle the baking soda and salt over the mixture and stir in.",
      "Fold in the flour gently, just until no dry streaks remain.",
      "Pour into the loaf pan and bake for 50–55 minutes until a skewer comes out clean.",
      "Cool in the pan for 10 minutes, then turn out onto a rack."
    ]
  },
  {
    id: "mango-lassi",
    title: "Mango Lassi",
    category: "Drinks",
    tags: ["Vegetarian", "Gluten-Free", "Quick"],
    icon: "🥭",
    blurb: "A thick, chilled mango-yogurt drink with a hint of cardamom.",
    prep: 5,
    cook: 0,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "1½ cups ripe mango chunks (fresh or frozen)",
      "1 cup plain yogurt",
      "½ cup cold milk",
      "2 tbsp sugar, or to taste",
      "¼ tsp ground cardamom",
      "Ice cubes"
    ],
    steps: [
      "Add the mango, yogurt, milk, sugar and cardamom to a blender.",
      "Blend until completely smooth, about 30–45 seconds.",
      "Taste and adjust sugar if needed.",
      "Pour over ice and serve immediately."
    ]
  },
  {
    id: "smoothie-bowl",
    title: "Berry & Oat Smoothie Bowl",
    category: "Drinks",
    tags: ["Vegan", "Gluten-Free", "Quick"],
    icon: "🍓",
    blurb: "Thick frozen-berry base topped with crunchy, colorful toppings.",
    prep: 10,
    cook: 0,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      "1½ cups frozen mixed berries",
      "1 frozen banana",
      "¼ cup rolled oats",
      "½ cup plant milk",
      "1 tbsp nut butter",
      "Toppings: granola, sliced fruit, chia seeds"
    ],
    steps: [
      "Add the berries, banana, oats, plant milk and nut butter to a blender.",
      "Blend until thick — it should be much thicker than a drinkable smoothie.",
      "If it won't move, add a splash more milk; if it's thin, add more frozen fruit.",
      "Pour into a bowl and arrange the toppings on top in sections.",
      "Eat immediately with a spoon, before it melts."
    ]
  }
];

const CATEGORIES = ["All", "Breakfast", "Mains", "Salads", "Soups", "Desserts", "Drinks"];