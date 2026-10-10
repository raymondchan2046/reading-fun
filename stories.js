// Reading passages for Primary 1.
// To add a new story, copy one block below and change the text.
// Each question has 3 choices; "answer" is the number of the correct choice (0, 1 or 2).

const STORIES = [
  {
    id: "my-cat",
    title: "My Cat",
    picture: "🐱",
    text: [
      "I have a cat.",
      "Her name is Mimi.",
      "Mimi is white and small.",
      "She likes to drink milk.",
      "She sleeps on my bed at night."
    ],
    questions: [
      { q: "What is the cat's name?", choices: ["Momo", "Mimi", "Kiki"], answer: 1 },
      { q: "What colour is Mimi?", choices: ["⚫ black", "🟠 orange", "⚪ white"], answer: 2 },
      { q: "What does Mimi like to drink?", choices: ["🥛 milk", "🧃 juice", "🍵 tea"], answer: 0 }
    ]
  },
  {
    id: "at-school",
    title: "At School",
    picture: "🏫",
    text: [
      "This is Ben.",
      "Ben is in Primary 1.",
      "He goes to school by bus.",
      "He has a red schoolbag.",
      "His favourite subject is English."
    ],
    questions: [
      { q: "How does Ben go to school?", choices: ["🚌 by bus", "🚇 by MTR", "🚶 on foot"], answer: 0 },
      { q: "What colour is Ben's schoolbag?", choices: ["🔵 blue", "🔴 red", "🟢 green"], answer: 1 },
      { q: "What is Ben's favourite subject?", choices: ["Maths", "Chinese", "English"], answer: 2 }
    ]
  },
  {
    id: "lunch-time",
    title: "Lunch Time",
    picture: "🍱",
    text: [
      "It is lunch time.",
      "Amy has rice and fish.",
      "Tom has noodles.",
      "They both have an apple.",
      "They are happy."
    ],
    questions: [
      { q: "What does Tom have?", choices: ["🍚 rice", "🍜 noodles", "🍞 bread"], answer: 1 },
      { q: "What fruit do they have?", choices: ["🍌 a banana", "🍊 an orange", "🍎 an apple"], answer: 2 },
      { q: "How do they feel?", choices: ["😊 happy", "😢 sad", "😠 angry"], answer: 0 }
    ]
  },
  {
    id: "the-park",
    title: "In the Park",
    picture: "🌳",
    text: [
      "It is Sunday.",
      "Lily goes to the park with her dad.",
      "She sees a big tree and three birds.",
      "She plays on the swing.",
      "Dad buys her an ice cream."
    ],
    questions: [
      { q: "Who goes to the park with Lily?", choices: ["👩 her mum", "👨 her dad", "👵 her grandma"], answer: 1 },
      { q: "How many birds does Lily see?", choices: ["2", "3", "4"], answer: 1 },
      { q: "What does Dad buy?", choices: ["🍦 an ice cream", "🎈 a balloon", "🧸 a toy"], answer: 0 }
    ]
  },
  {
    id: "my-family",
    title: "My Family",
    picture: "👨‍👩‍👧‍👦",
    text: [
      "There are four people in my family.",
      "They are my dad, my mum, my brother and me.",
      "My brother is five years old.",
      "We live in Sha Tin.",
      "I love my family."
    ],
    questions: [
      { q: "How many people are in the family?", choices: ["3", "4", "5"], answer: 1 },
      { q: "How old is the brother?", choices: ["5", "6", "7"], answer: 0 },
      { q: "Where do they live?", choices: ["Tsuen Wan", "Mong Kok", "Sha Tin"], answer: 2 }
    ]
  },
  {
    id: "rainy-day",
    title: "A Rainy Day",
    picture: "🌧️",
    text: [
      "Today is a rainy day.",
      "Sam takes his yellow umbrella.",
      "He wears his boots.",
      "He jumps in the water.",
      "Splash! His boots are wet."
    ],
    questions: [
      { q: "What is the weather today?", choices: ["☀️ sunny", "🌧️ rainy", "❄️ snowy"], answer: 1 },
      { q: "What colour is the umbrella?", choices: ["🟡 yellow", "🟣 purple", "🔴 red"], answer: 0 },
      { q: "What is wet?", choices: ["his hat", "his bag", "his boots"], answer: 2 }
    ]
  },
  {
    id: "birthday",
    title: "Happy Birthday",
    picture: "🎂",
    text: [
      "Today is Kitty's birthday.",
      "She is six years old.",
      "Mum makes a big chocolate cake.",
      "Her friends sing a song.",
      "Kitty gets a teddy bear."
    ],
    questions: [
      { q: "How old is Kitty?", choices: ["5", "6", "7"], answer: 1 },
      { q: "What cake does Mum make?", choices: ["🍓 strawberry", "🍫 chocolate", "🍋 lemon"], answer: 1 },
      { q: "What does Kitty get?", choices: ["🧸 a teddy bear", "⚽ a ball", "📚 a book"], answer: 0 }
    ]
  },
  {
    id: "the-zoo",
    title: "At the Zoo",
    picture: "🐘",
    text: [
      "We go to the zoo.",
      "The elephant is big and grey.",
      "The monkey eats a banana.",
      "The panda is black and white.",
      "I like the panda best."
    ],
    questions: [
      { q: "What does the monkey eat?", choices: ["🍌 a banana", "🍎 an apple", "🥕 a carrot"], answer: 0 },
      { q: "What colour is the elephant?", choices: ["🟤 brown", "⚪ white", "🩶 grey"], answer: 2 },
      { q: "Which animal does the writer like best?", choices: ["🐘 elephant", "🐒 monkey", "🐼 panda"], answer: 2 }
    ]
  },
  {
    id: "my-toys",
    title: "My Toys",
    picture: "🧸",
    text: [
      "I have many toys.",
      "I have a blue car and a red ball.",
      "I have a doll with long hair.",
      "My best toy is my robot.",
      "I put my toys in a big box."
    ],
    questions: [
      { q: "What colour is the car?", choices: ["🔴 red", "🔵 blue", "🟡 yellow"], answer: 1 },
      { q: "What is the best toy?", choices: ["🤖 the robot", "🪆 the doll", "⚽ the ball"], answer: 0 },
      { q: "Where are the toys?", choices: ["on the bed", "under the desk", "in a big box"], answer: 2 }
    ]
  },
  {
    id: "the-beach",
    title: "At the Beach",
    picture: "🏖️",
    text: [
      "It is hot and sunny.",
      "Jack and his sister go to the beach.",
      "They make a sandcastle.",
      "Jack finds a pink shell.",
      "They swim in the sea."
    ],
    questions: [
      { q: "What is the weather like?", choices: ["🌧️ rainy", "☁️ cloudy", "☀️ hot and sunny"], answer: 2 },
      { q: "What do they make?", choices: ["🏰 a sandcastle", "🪁 a kite", "🍰 a cake"], answer: 0 },
      { q: "What colour is the shell?", choices: ["⚪ white", "🩷 pink", "🟤 brown"], answer: 1 }
    ]
  },
  {
    id: "chinese-new-year",
    title: "Chinese New Year",
    picture: "🧧",
    text: [
      "It is Chinese New Year.",
      "We visit Grandma and Grandpa.",
      "I say, \"Kung Hei Fat Choy!\"",
      "Grandma gives me a red packet.",
      "We eat rice cake together."
    ],
    questions: [
      { q: "Who do they visit?", choices: ["👫 friends", "👴👵 Grandma and Grandpa", "👩‍🏫 the teacher"], answer: 1 },
      { q: "What does Grandma give?", choices: ["🧧 a red packet", "🎁 a toy", "📖 a book"], answer: 0 },
      { q: "What do they eat?", choices: ["🍕 pizza", "🍔 burgers", "🍘 rice cake"], answer: 2 }
    ]
  },
  {
    id: "supermarket",
    title: "At the Supermarket",
    picture: "🛒",
    text: [
      "Mum and I go to the supermarket.",
      "We buy eggs, bread and milk.",
      "I want some sweets.",
      "Mum says, \"No, buy some grapes.\"",
      "I push the trolley."
    ],
    questions: [
      { q: "Who goes with the child?", choices: ["👩 Mum", "👨 Dad", "👦 a brother"], answer: 0 },
      { q: "What does Mum want to buy instead of sweets?", choices: ["🍌 bananas", "🍇 grapes", "🍉 watermelon"], answer: 1 },
      { q: "What does the child push?", choices: ["a bike", "a door", "🛒 the trolley"], answer: 2 }
    ]
  },
  {
    id: "brush-teeth",
    title: "Clean Teeth",
    picture: "🪥",
    text: [
      "Every morning, I wake up at seven.",
      "I wash my face.",
      "I brush my teeth for two minutes.",
      "My toothbrush is green.",
      "Now my teeth are clean and white."
    ],
    questions: [
      { q: "When does the child wake up?", choices: ["at six", "at seven", "at eight"], answer: 1 },
      { q: "How long does the child brush?", choices: ["one minute", "five minutes", "two minutes"], answer: 2 },
      { q: "What colour is the toothbrush?", choices: ["🟢 green", "🔵 blue", "🟣 purple"], answer: 0 }
    ]
  },
  {
    id: "the-farm",
    title: "On the Farm",
    picture: "🐄",
    text: [
      "Uncle Joe lives on a farm.",
      "He has two cows and five hens.",
      "The cows give milk.",
      "The hens give eggs.",
      "The dog runs after the ducks."
    ],
    questions: [
      { q: "How many cows does Uncle Joe have?", choices: ["2", "5", "3"], answer: 0 },
      { q: "What do the hens give?", choices: ["🥛 milk", "🥚 eggs", "🍯 honey"], answer: 1 },
      { q: "What does the dog run after?", choices: ["🐈 the cat", "🐄 the cows", "🦆 the ducks"], answer: 2 }
    ]
  },
  {
    id: "best-friend",
    title: "My Best Friend",
    picture: "👭",
    text: [
      "My best friend is Mary.",
      "She has short black hair.",
      "She sits next to me in class.",
      "We like to draw pictures.",
      "We play hide-and-seek at recess."
    ],
    questions: [
      { q: "What is the best friend's name?", choices: ["May", "Mary", "Molly"], answer: 1 },
      { q: "What do they like to do?", choices: ["🎨 draw pictures", "🎤 sing songs", "🍳 cook"], answer: 0 },
      { q: "What do they play at recess?", choices: ["football", "chess", "hide-and-seek"], answer: 2 }
    ]
  },
  {
    id: "mid-autumn",
    title: "Mid-Autumn Festival",
    picture: "🏮",
    text: [
      "It is the Mid-Autumn Festival.",
      "The moon is big and round.",
      "I have a rabbit lantern.",
      "We eat mooncakes and fruit.",
      "We look at the moon together."
    ],
    questions: [
      { q: "What is the moon like?", choices: ["small", "big and round", "hidden"], answer: 1 },
      { q: "What lantern does the child have?", choices: ["🐟 a fish", "⭐ a star", "🐰 a rabbit"], answer: 2 },
      { q: "What do they eat?", choices: ["🥮 mooncakes", "🍦 ice cream", "🍝 spaghetti"], answer: 0 }
    ]
  },
  {
    id: "the-library",
    title: "At the Library",
    picture: "📚",
    text: [
      "Our class goes to the library.",
      "We must be quiet.",
      "I find a book about dinosaurs.",
      "Peter reads a book about trains.",
      "We can take the books home."
    ],
    questions: [
      { q: "What must they be in the library?", choices: ["🤫 quiet", "📢 loud", "🏃 fast"], answer: 0 },
      { q: "What is the child's book about?", choices: ["🚂 trains", "🦖 dinosaurs", "🚀 space"], answer: 1 },
      { q: "What is Peter's book about?", choices: ["🐶 dogs", "🦖 dinosaurs", "🚂 trains"], answer: 2 }
    ]
  },
  {
    id: "sports-day",
    title: "Sports Day",
    picture: "🏃",
    text: [
      "Today is Sports Day.",
      "I wear my white T-shirt.",
      "I run very fast.",
      "I come first in the race!",
      "I get a gold medal."
    ],
    questions: [
      { q: "What colour is the T-shirt?", choices: ["⚪ white", "🔴 red", "⚫ black"], answer: 0 },
      { q: "Where does the child come in the race?", choices: ["second", "last", "first"], answer: 2 },
      { q: "What does the child get?", choices: ["🏆 a cup", "🥇 a gold medal", "🎈 a balloon"], answer: 1 }
    ]
  },
  {
    id: "the-mtr",
    title: "On the MTR",
    picture: "🚇",
    text: [
      "Dad and I take the MTR.",
      "We go to Mong Kok.",
      "The train is very full.",
      "A man gives his seat to an old lady.",
      "That is kind!"
    ],
    questions: [
      { q: "Where do they go?", choices: ["Mong Kok", "Central", "Sha Tin"], answer: 0 },
      { q: "What is the train like?", choices: ["empty", "very full", "very slow"], answer: 1 },
      { q: "Who gets the seat?", choices: ["👶 a baby", "👨 Dad", "👵 an old lady"], answer: 2 }
    ]
  },
  {
    id: "bedtime",
    title: "Bedtime",
    picture: "🌙",
    text: [
      "It is eight o'clock.",
      "I take a bath.",
      "I put on my pyjamas.",
      "Mum reads me a story.",
      "I say, \"Good night, Mum!\""
    ],
    questions: [
      { q: "What time is it?", choices: ["seven o'clock", "eight o'clock", "nine o'clock"], answer: 1 },
      { q: "What does the child put on?", choices: ["👕 a school shirt", "🧥 a coat", "pyjamas"], answer: 2 },
      { q: "Who reads a story?", choices: ["👩 Mum", "👨 Dad", "👩‍🏫 the teacher"], answer: 0 }
    ]
  }
];
