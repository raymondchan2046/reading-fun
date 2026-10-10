// Reading passages for Primary 2.
// To add a new story, copy one block below and change the text.
// Each item in "text" is one paragraph. "Read to me" reads one paragraph at a time.
// Each question has 3 choices; "answer" is the number of the correct choice (0, 1 or 2).

const STORIES = [
  {
    id: "my-cat",
    title: "My Cat",
    picture: "🐱",
    text: [
      "I have a pet cat called Mimi. She is three years old. Mimi is small and white, and she has big green eyes and a long, fluffy tail.",
      "Every morning, Mimi waits for me in the kitchen. She likes to drink warm milk from her blue bowl. After breakfast, she sits by the window and watches the birds outside.",
      "Last Saturday, Mimi was missing! We looked under the sofa and behind the curtains, but we could not find her. At last, I found her sleeping inside my schoolbag. I laughed and gave her a big hug.",
      "At night, Mimi sleeps at the end of my bed. She is my best friend."
    ],
    questions: [
      { q: "How old is Mimi?", choices: ["2", "3", "4"], answer: 1 },
      { q: "What colour are Mimi's eyes?", choices: ["🔵 blue", "🟤 brown", "🟢 green"], answer: 2 },
      { q: "What does Mimi do after breakfast?", choices: ["She sleeps on the bed.", "She watches the birds.", "She plays with a ball."], answer: 1 },
      { q: "Where did the child find Mimi last Saturday?", choices: ["under the sofa", "behind the curtains", "in the schoolbag"], answer: 2 },
      { q: "In the story, \"missing\" means…", choices: ["lost and could not be found", "very hungry", "very sleepy"], answer: 0 }
    ]
  },
  {
    id: "at-school",
    title: "At School",
    picture: "🏫",
    text: [
      "Ben is seven years old and he is in Primary 2. Every morning, he gets up at half past six. He puts on his uniform and eats his breakfast quickly.",
      "Ben goes to school by school bus. The bus is yellow, and the driver is a kind man called Mr Lee. Ben always says, \"Good morning, Mr Lee!\"",
      "Ben has a red schoolbag. Inside it, there are four books, a pencil case and a water bottle. His favourite subject is English because his teacher, Miss Chan, tells funny stories. He does not like Maths very much because it is hard for him.",
      "After school, Ben does his homework first. Then he can play with his toy cars."
    ],
    questions: [
      { q: "Which class is Ben in?", choices: ["Primary 1", "Primary 2", "Primary 3"], answer: 1 },
      { q: "How does Ben go to school?", choices: ["🚌 by school bus", "🚇 by MTR", "🚶 on foot"], answer: 0 },
      { q: "Who is Mr Lee?", choices: ["Ben's teacher", "Ben's father", "the bus driver"], answer: 2 },
      { q: "Why does Ben like English?", choices: ["It is easy.", "His teacher tells funny stories.", "He can play games."], answer: 1 },
      { q: "What does Ben do first after school?", choices: ["📝 his homework", "🚗 plays with toy cars", "📺 watches TV"], answer: 0 }
    ]
  },
  {
    id: "lunch-time",
    title: "Lunch Time",
    picture: "🍱",
    text: [
      "The bell rang at twelve o'clock. It was lunch time! Amy and Tom washed their hands and sat down at a long table in the school hall.",
      "Amy opened her lunch box. She had rice, fish and some green vegetables. Tom had noodles with chicken. \"Oh no!\" said Tom. \"I forgot my spoon!\"",
      "Amy had an extra spoon in her bag, so she gave it to Tom. \"Thank you, Amy. You are very kind,\" said Tom.",
      "After they finished their lunch, they both ate an apple. Then they put their rubbish in the bin and went to the playground to play."
    ],
    questions: [
      { q: "What time did the bell ring?", choices: ["eleven o'clock", "twelve o'clock", "one o'clock"], answer: 1 },
      { q: "What did Amy have for lunch?", choices: ["🍜 noodles and chicken", "🍞 bread and eggs", "🍚 rice, fish and vegetables"], answer: 2 },
      { q: "What did Tom forget?", choices: ["🥄 his spoon", "🍱 his lunch box", "🥤 his drink"], answer: 0 },
      { q: "Why did Tom say \"Thank you\"?", choices: ["Amy gave him an apple.", "Amy gave him a spoon.", "Amy helped him wash his hands."], answer: 1 },
      { q: "Where did they go after lunch?", choices: ["the library", "the classroom", "the playground"], answer: 2 }
    ]
  },
  {
    id: "the-park",
    title: "In the Park",
    picture: "🌳",
    text: [
      "It was a sunny Sunday morning. Lily and her dad went to the park near their home. They took a ball and a bottle of water with them.",
      "In the park, Lily saw a tall tree with three little birds in it. The birds were singing happily. Lily also saw an old man doing tai chi and two boys flying a kite.",
      "First, Lily played on the swing. Dad pushed her high into the sky. Next, they kicked the ball on the grass. Lily ran so fast that she fell down, but she did not cry.",
      "Later, Dad bought her a strawberry ice cream. It was cold and sweet. Lily said, \"This is the best Sunday ever!\""
    ],
    questions: [
      { q: "When did Lily go to the park?", choices: ["on Saturday afternoon", "on Sunday morning", "on Monday evening"], answer: 1 },
      { q: "How many birds were in the tree?", choices: ["2", "3", "4"], answer: 1 },
      { q: "What were the two boys doing?", choices: ["⚽ playing football", "doing tai chi", "🪁 flying a kite"], answer: 2 },
      { q: "What did Lily do first?", choices: ["She played on the swing.", "She kicked the ball.", "She ate an ice cream."], answer: 0 },
      { q: "What kind of ice cream did Dad buy?", choices: ["🍫 chocolate", "🍓 strawberry", "🍦 vanilla"], answer: 1 }
    ]
  },
  {
    id: "my-family",
    title: "My Family",
    picture: "👨‍👩‍👧‍👦",
    text: [
      "My name is Kelly. There are five people in my family. They are my dad, my mum, my grandma, my little brother and me. We live in a flat in Sha Tin.",
      "My dad is a bus driver. He is tall and he wears glasses. My mum is a nurse. She works in a big hospital and helps sick people.",
      "My grandma is seventy years old. She cooks delicious soup for us every day. My brother, Leo, is five years old. He is funny, but sometimes he is very noisy!",
      "On Sundays, we often go to the countryside together. We have a picnic and play games. I love my family very much."
    ],
    questions: [
      { q: "How many people are in Kelly's family?", choices: ["4", "5", "6"], answer: 1 },
      { q: "What is Mum's job?", choices: ["👩‍⚕️ a nurse", "👩‍🏫 a teacher", "👩‍🍳 a cook"], answer: 0 },
      { q: "Who wears glasses?", choices: ["Grandma", "Leo", "Dad"], answer: 2 },
      { q: "What does Grandma cook every day?", choices: ["🍲 soup", "🍜 noodles", "🥟 dumplings"], answer: 0 },
      { q: "What does the family often do on Sundays?", choices: ["go shopping", "have a picnic in the countryside", "go to the cinema"], answer: 1 }
    ]
  },
  {
    id: "rainy-day",
    title: "A Rainy Day",
    picture: "🌧️",
    text: [
      "When Sam woke up on Tuesday, he looked out of the window. The sky was dark and grey, and it was raining heavily.",
      "\"Take your umbrella and wear your boots,\" said Mum. So Sam took his yellow umbrella and put on his green rain boots. Then he walked to school with Mum.",
      "On the way, Sam saw a big puddle. He wanted to jump in it. Splash! The muddy water went all over his trousers. Mum was not happy. \"Oh, Sam! Look at your trousers!\" she said.",
      "At school, Sam had to wear his PE shorts all day. Next time, he will walk around the puddles!"
    ],
    questions: [
      { q: "What was the weather like on Tuesday?", choices: ["☀️ sunny", "🌧️ rainy", "💨 windy"], answer: 1 },
      { q: "What colour were Sam's boots?", choices: ["🟡 yellow", "🟢 green", "🔴 red"], answer: 1 },
      { q: "What did Sam jump in?", choices: ["a puddle", "a swimming pool", "the sea"], answer: 0 },
      { q: "How did Mum feel when she saw the trousers?", choices: ["happy", "excited", "not happy"], answer: 2 },
      { q: "What did Sam wear at school all day?", choices: ["his uniform", "his PE shorts", "his pyjamas"], answer: 1 }
    ]
  },
  {
    id: "birthday",
    title: "Happy Birthday",
    picture: "🎂",
    text: [
      "Today is Kitty's seventh birthday. She woke up early because she was so excited. Mum and Dad said, \"Happy birthday, Kitty!\" and gave her a big hug.",
      "In the afternoon, Mum made a chocolate cake with seven candles on it. Kitty's friends came to her home for a party. They played games and sang songs.",
      "Then Kitty closed her eyes and made a wish. She blew out all the candles in one breath! Everyone clapped their hands.",
      "Her friends gave her lots of presents. May gave her a teddy bear, and Jason gave her a storybook about space. Kitty said, \"Thank you, everyone. This is a wonderful birthday!\""
    ],
    questions: [
      { q: "How old is Kitty today?", choices: ["6", "7", "8"], answer: 1 },
      { q: "Why did Kitty wake up early?", choices: ["She was excited.", "She was hungry.", "She had to go to school."], answer: 0 },
      { q: "How many candles were on the cake?", choices: ["5", "6", "7"], answer: 2 },
      { q: "What did Kitty do before she blew out the candles?", choices: ["She sang a song.", "She made a wish.", "She opened her presents."], answer: 1 },
      { q: "What did Jason give Kitty?", choices: ["🧸 a teddy bear", "🎨 some crayons", "📖 a storybook"], answer: 2 }
    ]
  },
  {
    id: "the-zoo",
    title: "At the Zoo",
    picture: "🐘",
    text: [
      "Last Saturday, our class went to the zoo. We went there by coach. Our teacher, Mr Wong, said, \"Stay together and do not feed the animals.\"",
      "First, we saw the elephants. They were big and grey, and they had long trunks. One elephant sprayed water on its back to keep cool.",
      "Next, we visited the monkeys. They were very naughty! A little monkey climbed up a tree and ate a banana. Then it threw the banana skin at a boy!",
      "Last, we saw the pandas. They were black and white, and they were eating bamboo slowly. The pandas were my favourite animals because they looked so cute and lazy."
    ],
    questions: [
      { q: "How did the class go to the zoo?", choices: ["🚌 by coach", "🚇 by MTR", "🚗 by car"], answer: 0 },
      { q: "What did Mr Wong say?", choices: ["Run fast.", "Do not feed the animals.", "Take many photos."], answer: 1 },
      { q: "Why did the elephant spray water on its back?", choices: ["to keep cool", "to play with the children", "to clean the zoo"], answer: 0 },
      { q: "What did the monkey throw?", choices: ["a stone", "a stick", "🍌 the banana skin"], answer: 2 },
      { q: "Why were the pandas the writer's favourite?", choices: ["They were big and strong.", "They looked cute and lazy.", "They could climb fast."], answer: 1 }
    ]
  },
  {
    id: "my-toys",
    title: "My Toys",
    picture: "🧸",
    text: [
      "I have many toys in my bedroom. I have a blue car, a red ball and a doll with long yellow hair. My uncle gave me a puzzle with one hundred pieces last year.",
      "But my best toy is my robot. It is silver and it can walk and talk. When I press the button on its back, it says, \"Hello, my friend!\" I named it Bobo.",
      "One day, Bobo stopped walking. I felt very sad. Dad looked at it and said, \"Don't worry. It just needs new batteries.\" He put in new batteries and Bobo walked again!",
      "Every night, I put all my toys in a big box under my bed. Mum says a tidy room is a happy room."
    ],
    questions: [
      { q: "What colour is the doll's hair?", choices: ["⚫ black", "🟡 yellow", "🟤 brown"], answer: 1 },
      { q: "Who gave the child the puzzle?", choices: ["Dad", "Mum", "the uncle"], answer: 2 },
      { q: "What is the robot's name?", choices: ["Bobo", "Lulu", "Toto"], answer: 0 },
      { q: "Why did Bobo stop walking?", choices: ["It was broken.", "It needed new batteries.", "It was tired."], answer: 1 },
      { q: "Where is the toy box?", choices: ["on the desk", "in the kitchen", "under the bed"], answer: 2 }
    ]
  },
  {
    id: "the-beach",
    title: "At the Beach",
    picture: "🏖️",
    text: [
      "It was a hot and sunny day in July. Jack and his sister, Emma, went to the beach with their parents. They brought towels, buckets and lots of sun cream.",
      "First, Jack and Emma built a big sandcastle. Emma used a bucket to make the towers, and Jack dug a river around it. Suddenly, a big wave came and broke the sandcastle! They laughed and started again.",
      "Then they walked along the beach and looked for shells. Jack found a beautiful pink shell. He put it in his pocket for his grandma.",
      "In the afternoon, they swam in the sea. The water was cool and clear. They were tired but happy when they went home."
    ],
    questions: [
      { q: "When did they go to the beach?", choices: ["in January", "in July", "in October"], answer: 1 },
      { q: "Who made the towers of the sandcastle?", choices: ["Emma", "Jack", "Dad"], answer: 0 },
      { q: "What broke the sandcastle?", choices: ["a dog", "the wind", "🌊 a big wave"], answer: 2 },
      { q: "Who was the pink shell for?", choices: ["Emma", "his grandma", "his teacher"], answer: 1 },
      { q: "How did they feel when they went home?", choices: ["tired but happy", "angry", "bored"], answer: 0 }
    ]
  },
  {
    id: "chinese-new-year",
    title: "Chinese New Year",
    picture: "🧧",
    text: [
      "Chinese New Year is my favourite festival. Before the holiday, we cleaned our home and put red decorations on the door. Mum said red is a lucky colour.",
      "On the first day of the new year, I wore my new clothes. We visited Grandma and Grandpa in Tai Po. I said, \"Kung Hei Fat Choy!\" and Grandma gave me a red packet.",
      "Then all my cousins came. We ate rice cake, sweets and other yummy food. In the evening, we watched the fireworks on TV. They were very colourful.",
      "I put all my red packets in my money box. I want to save the money to buy a new bicycle."
    ],
    questions: [
      { q: "What did the family do before the holiday?", choices: ["They cleaned their home.", "They went on a trip.", "They bought a bicycle."], answer: 0 },
      { q: "Where do Grandma and Grandpa live?", choices: ["Sha Tin", "Tai Po", "Mong Kok"], answer: 1 },
      { q: "Why did they put up red decorations?", choices: ["Red is Mum's favourite colour.", "Red is cheap.", "Red is a lucky colour."], answer: 2 },
      { q: "What did they watch in the evening?", choices: ["🦁 a lion dance", "🎆 fireworks on TV", "🎬 a film at the cinema"], answer: 1 },
      { q: "What does the child want to buy with the money?", choices: ["🚲 a new bicycle", "🧸 a new toy", "📱 a phone"], answer: 0 }
    ]
  },
  {
    id: "supermarket",
    title: "At the Supermarket",
    picture: "🛒",
    text: [
      "On Saturday afternoon, Mum and I went to the supermarket. Mum had a shopping list. It said: eggs, bread, milk and apples.",
      "I pushed the trolley and Mum put the food in it. When we walked past the sweets, I said, \"Mum, can I have some sweets, please?\" Mum shook her head. \"Too many sweets are bad for your teeth,\" she said.",
      "At the fruit corner, we could not find any apples. So we bought some oranges instead. Mum said oranges are good for our bodies.",
      "At the counter, we paid one hundred and twenty dollars. I helped Mum carry the bags home. She said, \"You are a good helper!\""
    ],
    questions: [
      { q: "When did they go to the supermarket?", choices: ["on Saturday afternoon", "on Sunday morning", "on Friday evening"], answer: 0 },
      { q: "Why did Mum say no to the sweets?", choices: ["They were too expensive.", "They are bad for your teeth.", "The shop had no sweets."], answer: 1 },
      { q: "What fruit did they buy instead of apples?", choices: ["🍌 bananas", "🍉 watermelon", "🍊 oranges"], answer: 2 },
      { q: "How much did they pay?", choices: ["$100", "$120", "$210"], answer: 1 },
      { q: "How did the child help Mum at the end?", choices: ["by carrying the bags", "by cooking dinner", "by cleaning the house"], answer: 0 }
    ]
  },
  {
    id: "brush-teeth",
    title: "Clean Teeth",
    picture: "🪥",
    text: [
      "Every morning, Joey wakes up at seven o'clock. He goes to the bathroom and washes his face with warm water.",
      "Then he brushes his teeth. His toothbrush is green and it has a small dinosaur on it. He brushes his top teeth and his bottom teeth for two minutes. He sings a song, so he knows when the two minutes are over.",
      "Last month, Joey had a toothache. It hurt so much that he could not eat. Mum took him to see the dentist. The dentist said, \"You must brush your teeth twice a day and eat fewer sweets.\"",
      "Now Joey brushes his teeth every morning and every night. His teeth are clean and white, and he has a big smile."
    ],
    questions: [
      { q: "What time does Joey wake up?", choices: ["at six o'clock", "at seven o'clock", "at eight o'clock"], answer: 1 },
      { q: "What is on Joey's toothbrush?", choices: ["🦖 a dinosaur", "🚗 a car", "⭐ a star"], answer: 0 },
      { q: "Why does Joey sing a song?", choices: ["He is happy.", "His mum asks him to.", "He knows when two minutes are over."], answer: 2 },
      { q: "Who did Joey see when he had a toothache?", choices: ["a teacher", "the dentist", "a police officer"], answer: 1 },
      { q: "How many times a day should you brush your teeth?", choices: ["twice", "once", "three times"], answer: 0 }
    ]
  },
  {
    id: "the-farm",
    title: "On the Farm",
    picture: "🐄",
    text: [
      "In the summer holiday, Ella visited Uncle Joe. He lives on a farm in the New Territories. The air there was fresh and there were green fields everywhere.",
      "Uncle Joe has two cows, five hens, four ducks and a brown dog called Lucky. Every morning, Ella helped him feed the animals. The cows gave milk and the hens laid eggs.",
      "One morning, Lucky ran after the ducks. The ducks quacked loudly and ran into the pond. Uncle Joe shouted, \"Lucky, stop that!\" Ella laughed and laughed.",
      "On the last day, Uncle Joe gave Ella a basket of fresh eggs to take home. \"Come back next summer,\" he said."
    ],
    questions: [
      { q: "When did Ella visit Uncle Joe?", choices: ["at Christmas", "in the summer holiday", "at Easter"], answer: 1 },
      { q: "How many hens does Uncle Joe have?", choices: ["2", "4", "5"], answer: 2 },
      { q: "What is the dog's name?", choices: ["Lucky", "Lily", "Lemon"], answer: 0 },
      { q: "Where did the ducks run?", choices: ["into the house", "into the pond", "into the field"], answer: 1 },
      { q: "What did Uncle Joe give Ella?", choices: ["🥛 a bottle of milk", "🍎 a bag of apples", "🥚 a basket of eggs"], answer: 2 }
    ]
  },
  {
    id: "best-friend",
    title: "My Best Friend",
    picture: "👭",
    text: [
      "My best friend is Mary. She has short black hair and a round face. She is in Primary 2, just like me, and she sits next to me in class.",
      "Mary and I both like drawing. At home, we draw pictures of animals and princesses. Mary is very good at drawing cats. I like to draw rainbows.",
      "One day, I forgot my colour pencils. I was worried because we had an art lesson. Mary shared her colour pencils with me. I felt very happy.",
      "At recess, we play hide-and-seek in the playground. Mary always finds the best places to hide. A good friend is someone who shares and cares."
    ],
    questions: [
      { q: "What does Mary look like?", choices: ["She has long brown hair.", "She has short black hair and a round face.", "She wears glasses."], answer: 1 },
      { q: "What is Mary good at drawing?", choices: ["🐱 cats", "🌈 rainbows", "👸 princesses"], answer: 0 },
      { q: "Why was the writer worried?", choices: ["The writer was late.", "The writer lost a bag.", "The writer forgot the colour pencils."], answer: 2 },
      { q: "What do they play at recess?", choices: ["football", "hide-and-seek", "skipping rope"], answer: 1 },
      { q: "The writer says a good friend is someone who…", choices: ["shares and cares", "always wins", "has many toys"], answer: 0 }
    ]
  },
  {
    id: "mid-autumn",
    title: "Mid-Autumn Festival",
    picture: "🏮",
    text: [
      "The Mid-Autumn Festival is on the fifteenth day of the eighth month of the Chinese calendar. On that night, the moon is big, round and very bright.",
      "This year, Dad bought me a rabbit lantern. It was white with red eyes. My sister had a lantern shaped like a star. We lit the lanterns and walked to the park after dinner.",
      "In the park, there were many people with colourful lanterns. We sat on the grass and ate mooncakes, pomelo and grapes. My favourite is the mooncake with egg yolk inside.",
      "Grandma told us a story about Chang'e, a lady who lives on the moon. I looked up at the moon and tried to find her."
    ],
    questions: [
      { q: "What is the moon like on that night?", choices: ["small and dark", "big, round and very bright", "hidden behind clouds"], answer: 1 },
      { q: "What lantern did the child get?", choices: ["🐟 a fish", "⭐ a star", "🐰 a rabbit"], answer: 2 },
      { q: "Where did they go after dinner?", choices: ["the park", "the beach", "Grandma's flat"], answer: 0 },
      { q: "Which mooncake does the child like best?", choices: ["one with chocolate", "one with egg yolk", "one with ice cream"], answer: 1 },
      { q: "Who is Chang'e?", choices: ["the child's sister", "the child's teacher", "a lady in a story who lives on the moon"], answer: 2 }
    ]
  },
  {
    id: "the-library",
    title: "At the Library",
    picture: "📚",
    text: [
      "Every Thursday, our class goes to the school library. The library is on the third floor. It has many shelves full of books, and there are soft cushions on the floor.",
      "Mrs Lam is our librarian. She always says, \"Please be quiet. Other people are reading.\" We must also wash our hands before we touch the books.",
      "Today, I found a book about dinosaurs. It had big pictures of a T. rex. My friend Peter chose a book about trains, because he wants to be a train driver one day.",
      "We can borrow two books each week. We must return them the next Thursday. I cannot wait to read my dinosaur book at home tonight!"
    ],
    questions: [
      { q: "When does the class go to the library?", choices: ["every Monday", "every Thursday", "every Friday"], answer: 1 },
      { q: "What must they do before they touch the books?", choices: ["wash their hands", "take off their shoes", "sing a song"], answer: 0 },
      { q: "Why did Peter choose a book about trains?", choices: ["He likes the pictures.", "His teacher told him to.", "He wants to be a train driver."], answer: 2 },
      { q: "How many books can they borrow each week?", choices: ["1", "2", "3"], answer: 1 },
      { q: "Who is Mrs Lam?", choices: ["the librarian", "the head teacher", "Peter's mum"], answer: 0 }
    ]
  },
  {
    id: "sports-day",
    title: "Sports Day",
    picture: "🏃",
    text: [
      "Today was Sports Day. All the students went to the sports ground. I wore my white T-shirt and my blue shorts. My parents came to cheer for me.",
      "My race was the sixty-metre race. Before the race, my legs were shaking because I was nervous. My friend Ken said, \"Don't worry. Just try your best!\"",
      "Bang! The race started. I ran as fast as I could. Ken was in front of me at first, but near the end, I ran past him. I came first and Ken came second!",
      "I got a gold medal and Ken got a silver medal. We gave each other a high five. My parents were very proud of me."
    ],
    questions: [
      { q: "Who came to cheer for the writer?", choices: ["the grandparents", "the parents", "the cousins"], answer: 1 },
      { q: "How long was the race?", choices: ["60 metres", "100 metres", "400 metres"], answer: 0 },
      { q: "Why were the writer's legs shaking?", choices: ["It was cold.", "The writer was hurt.", "The writer was nervous."], answer: 2 },
      { q: "Who came second?", choices: ["Ken", "the writer", "Tom"], answer: 0 },
      { q: "What medal did Ken get?", choices: ["🥇 gold", "🥈 silver", "🥉 bronze"], answer: 1 }
    ]
  },
  {
    id: "the-mtr",
    title: "On the MTR",
    picture: "🚇",
    text: [
      "On Saturday, Dad and I took the MTR to Mong Kok. We wanted to buy a new pair of running shoes for me. We tapped our Octopus cards at the gate and walked to the platform.",
      "We stood behind the yellow line and waited. When the train came, we let the people get off first. Then we got on.",
      "The train was very full, so we had to stand. Dad told me to hold the handle tightly. At the next station, an old lady with a walking stick got on. A young man stood up and said, \"Please sit here.\" The old lady smiled and thanked him.",
      "Dad said, \"That man was very kind. We should always help others.\" I nodded. I want to be kind like him too."
    ],
    questions: [
      { q: "Why did they go to Mong Kok?", choices: ["to see a film", "to buy running shoes", "to visit Grandma"], answer: 1 },
      { q: "Where must you stand on the platform?", choices: ["on the yellow line", "in front of the yellow line", "behind the yellow line"], answer: 2 },
      { q: "Why did they have to stand?", choices: ["The train was very full.", "They liked standing.", "The seats were wet."], answer: 0 },
      { q: "Who got the seat?", choices: ["👶 a baby", "👨 Dad", "👵 an old lady"], answer: 2 },
      { q: "What did Dad say we should always do?", choices: ["run fast", "help others", "be quiet"], answer: 1 }
    ]
  },
  {
    id: "bedtime",
    title: "Bedtime",
    picture: "🌙",
    text: [
      "It is eight o'clock in the evening. I have finished my homework, so now it is time to get ready for bed.",
      "First, I take a warm bath. Then I brush my teeth and put on my pyjamas. My pyjamas are blue with little yellow stars on them.",
      "Next, I pack my schoolbag for tomorrow. I put in my books, my pencil case and my homework. Mum always says, \"Don't forget your homework!\"",
      "Then I get into bed. Mum sits next to me and reads me a story about a brave little mouse. I try to keep my eyes open, but they feel very heavy. Soon I say, \"Good night, Mum,\" and I fall asleep."
    ],
    questions: [
      { q: "What time is it?", choices: ["seven o'clock", "eight o'clock", "nine o'clock"], answer: 1 },
      { q: "What is on the child's pyjamas?", choices: ["⭐ yellow stars", "🌙 white moons", "🐻 brown bears"], answer: 0 },
      { q: "What does the child do after putting on pyjamas?", choices: ["takes a bath", "eats dinner", "packs the schoolbag"], answer: 2 },
      { q: "What is tonight's story about?", choices: ["a naughty cat", "a brave little mouse", "a big dragon"], answer: 1 },
      { q: "\"My eyes feel very heavy\" means the child is…", choices: ["sleepy", "sad", "hurt"], answer: 0 }
    ]
  }
];
