let words = [ 
    { "word": "apple", "meaning": "আপেল", "pronunciation": "অ্যাপল" },
    { "word": "ball", "meaning": "বল", "pronunciation": "বল" },
    { "word": "cat", "meaning": "বিড়াল", "pronunciation": "ক্যাট" },
    { "word": "dog", "meaning": "কুকুর", "pronunciation": "ডগ" },
    { "word": "elephant", "meaning": "হাতি", "pronunciation": "এলিফ্যান্ট" },
    { "word": "fish", "meaning": "মাছ", "pronunciation": "ফিশ" },
    { "word": "goat", "meaning": "ছাগল", "pronunciation": "গোট" },
    { "word": "hat", "meaning": "টুপি", "pronunciation": "হ্যাট" },
    { "word": "ice", "meaning": "বরফ", "pronunciation": "আইস" },
    { "word": "jug", "meaning": "জগ", "pronunciation": "জগ" },
    { "word": "kite", "meaning": "ঘুড়ি", "pronunciation": "কাইট" },
    { "word": "lion", "meaning": "সিংহ", "pronunciation": "লায়ন" },
    { "word": "monkey", "meaning": "বানর", "pronunciation": "মাঙ্কি" },
    { "word": "nest", "meaning": "বাসা", "pronunciation": "নেস্ট" },
    { "word": "orange", "meaning": "কমলা", "pronunciation": "অরেঞ্জ" },
    { "word": "parrot", "meaning": "তোতাপাখি", "pronunciation": "প্যারট" },
    { "word": "queen", "meaning": "রাণী", "pronunciation": "কুইন" },
    { "word": "rat", "meaning": "ইঁদুর", "pronunciation": "র্যাট" },
    { "word": "sun", "meaning": "সূর্য", "pronunciation": "সান" },
    { "word": "tiger", "meaning": "বাঘ", "pronunciation": "টাইগার" },
    { "word": "umbrella", "meaning": "ছাতা", "pronunciation": "আমব্রেলা" },
    { "word": "vase", "meaning": "ফুলদানি", "pronunciation": "ভাস" },
    { "word": "watch", "meaning": "ঘড়ি", "pronunciation": "ওয়াচ" },
    { "word": "xylophone", "meaning": "জাইলোফোন", "pronunciation": "জাইলোফোন" },
    { "word": "yak", "meaning": "যাক", "pronunciation": "ইয়াক" },
    { "word": "zebra", "meaning": "জেব্রা", "pronunciation": "জেব্রা" },
    { "word": "I", "meaning": "আমি", "pronunciation": "আই" },
    { "word": "you", "meaning": "তুমি", "pronunciation": "ইউ" },
    { "word": "he", "meaning": "সে (ছেলে)", "pronunciation": "হি" },
    { "word": "she", "meaning": "সে (মেয়ে)", "pronunciation": "শি" },
    { "word": "it", "meaning": "এটি", "pronunciation": "ইট" },
    { "word": "we", "meaning": "আমরা", "pronunciation": "উই" },
    { "word": "they", "meaning": "তারা", "pronunciation": "দে" },
    { "word": "me", "meaning": "আমাকে", "pronunciation": "মি" },
    { "word": "him", "meaning": "তাকে (ছেলে)", "pronunciation": "হিম" },
    { "word": "her", "meaning": "তাকে (মেয়ে)", "pronunciation": "হার" },
    { "word": "us", "meaning": "আমাদের", "pronunciation": "আস" },
    { "word": "them", "meaning": "তাদের", "pronunciation": "দেম" },
    { "word": "happiness", "meaning": "সুখ", "pronunciation": "হ্যাপিনেস" },
    { "word": "love", "meaning": "ভালবাসা", "pronunciation": "লাভ" },
    { "word": "anger", "meaning": "রাগ", "pronunciation": "অ্যাংগার" },
    { "word": "freedom", "meaning": "স্বাধীনতা", "pronunciation": "ফ্রিডম" },
    { "word": "justice", "meaning": "ন্যায়বিচার", "pronunciation": "জাস্টিস" },
    { "word": "beauty", "meaning": "সৌন্দর্য", "pronunciation": "বিউটি" },
    { "word": "fear", "meaning": "ভয়", "pronunciation": "ফিয়ার" },
    { "word": "courage", "meaning": "সাহস", "pronunciation": "কারেজ" },
    { "word": "honesty", "meaning": "সততা", "pronunciation": "অনেস্টি" },
    { "word": "friendship", "meaning": "বন্ধুত্ব", "pronunciation": "ফ্রেন্ডশিপ" },
    { "word": "faith", "meaning": "বিশ্বাস", "pronunciation": "ফেইথ" },
    { "word": "knowledge", "meaning": "জ্ঞান", "pronunciation": "নলেজ" },
    { "word": "pain", "meaning": "ব্যথা", "pronunciation": "পেইন" },
    { "word": "truth", "meaning": "সত্য", "pronunciation": "ট্রুথ" },
    { "word": "kindness", "meaning": "দয়া", "pronunciation": "কাইন্ডনেস" },
    { "word": "patience", "meaning": "ধৈর্য", "pronunciation": "পেশেন্স" },
    { "word": "run", "meaning": "দৌড়ানো", "pronunciation": "রান" },
    { "word": "eat", "meaning": "খাওয়া", "pronunciation": "ইট" },
    { "word": "sleep", "meaning": "ঘুমানো", "pronunciation": "স্লিপ" },
    { "word": "speak", "meaning": "কথা বলা", "pronunciation": "স্পিক" },
    { "word": "write", "meaning": "লেখা", "pronunciation": "রাইট" },
    { "word": "read", "meaning": "পড়া", "pronunciation": "রিড" },
    { "word": "sing", "meaning": "গাওয়া", "pronunciation": "সিং" },
    { "word": "drink", "meaning": "পান করা", "pronunciation": "ড্রিংক" },
    { "word": "dance", "meaning": "নাচা", "pronunciation": "ডান্স" },
    { "word": "listen", "meaning": "শোনা", "pronunciation": "লিসেন" },
    { "word": "think", "meaning": "ভাবা", "pronunciation": "থিঙ্ক" },
    { "word": "see", "meaning": "দেখা", "pronunciation": "সি" },
    { "word": "buy", "meaning": "কেনা", "pronunciation": "বাই" },
    { "word": "teach", "meaning": "শিক্ষা দেওয়া", "pronunciation": "টিচ" },
    { "word": "learn", "meaning": "শেখা", "pronunciation": "লার্ন" },
    { "word": "give", "meaning": "দেওয়া", "pronunciation": "গিভ" },
    { "word": "take", "meaning": "নেওয়া", "pronunciation": "টেক" },
    { "word": "call", "meaning": "ডাকা", "pronunciation": "কল" },
    { "word": "run", "meaning": "দৌড়ানো", "pronunciation": "রান" },
    { "word": "quickly", "meaning": "দ্রুত", "pronunciation": "কুইকলি" },
    { "word": "slowly", "meaning": "ধীরে", "pronunciation": "স্লোলি" },
    { "word": "silently", "meaning": "নিঃশব্দে", "pronunciation": "সাইলেন্টলি" },
    { "word": "happily", "meaning": "খুশিতে", "pronunciation": "হ্যাপিলি" },
    { "word": "angrily", "meaning": "রাগের সাথে", "pronunciation": "অ্যাংগ্রিলি" },
    { "word": "easily", "meaning": "সহজে", "pronunciation": "ইজিলি" },
    { "word": "sadly", "meaning": "দুঃখের সাথে", "pronunciation": "স্যাডলি" },
    { "word": "quietly", "meaning": "শান্তভাবে", "pronunciation": "কুয়ায়েটলি" },
    { "word": "loudly", "meaning": "জোরে", "pronunciation": "লাউডলি" },
    { "word": "badly", "meaning": "খারাপভাবে", "pronunciation": "ব্যাডলি" },
    { "word": "carefully", "meaning": "সাবধানে", "pronunciation": "কেয়ারফুলি" },
    { "word": "beautifully", "meaning": "সুন্দরভাবে", "pronunciation": "বিউটিফুলি" },
    { "word": "calmly", "meaning": "শান্তভাবে", "pronunciation": "কাল্মলি" },
    { "word": "truly", "meaning": "সত্যিই", "pronunciation": "ট্রুলি" },
    { "word": "honestly", "meaning": "সততার সাথে", "pronunciation": "অনেস্টলি" },
    { "word": "beautiful", "meaning": "সুন্দর", "pronunciation": "বিউটিফুল" },
    { "word": "happy", "meaning": "খুশি", "pronunciation": "হ্যাপি" },
    { "word": "sad", "meaning": "দুঃখী", "pronunciation": "স্যাড" },
    { "word": "angry", "meaning": "রাগান্বিত", "pronunciation": "অ্যাংরি" },
    { "word": "brave", "meaning": "সাহসী", "pronunciation": "ব্রেভ" },
    { "word": "smart", "meaning": "স্মার্ট", "pronunciation": "স্মার্ট" },
    { "word": "lazy", "meaning": "অলস", "pronunciation": "লেজি" },
    { "word": "strong", "meaning": "শক্তিশালী", "pronunciation": "স্ট্রং" },
    { "word": "weak", "meaning": "দুর্বল", "pronunciation": "উইক" },
    { "word": "big", "meaning": "বড়", "pronunciation": "বিগ" },
    { "word": "small", "meaning": "ছোট", "pronunciation": "স্মল" },
    { "word": "fast", "meaning": "দ্রুত", "pronunciation": "ফাস্ট" },
    { "word": "slow", "meaning": "ধীর", "pronunciation": "স্লো" },
    { "word": "young", "meaning": "যুবা", "pronunciation": "ইয়াং" },
    { "word": "old", "meaning": "বৃদ্ধ", "pronunciation": "ওল্ড" },
    { "word": "in", "meaning": "ভিতরে", "pronunciation": "ইন" },
    { "word": "on", "meaning": "উপর", "pronunciation": "অন" },
    { "word": "under", "meaning": "নিচে", "pronunciation": "আন্ডার" },
    { "word": "over", "meaning": "উপর দিয়ে", "pronunciation": "ওভার" },
    { "word": "between", "meaning": "মধ্যে", "pronunciation": "বিটুইন" },
    { "word": "behind", "meaning": "পিছনে", "pronunciation": "বিহাইন্ড" },
    { "word": "in front of", "meaning": "সামনে", "pronunciation": "ইন ফ্রন্ট অফ" },
    { "word": "next to", "meaning": "পাশে", "pronunciation": "নেক্সট টু" },
    { "word": "beside", "meaning": "পাশে", "pronunciation": "বিসাইড" },
    { "word": "above", "meaning": "উপরে", "pronunciation": "অ্যাবাভ" },
    { "word": "below", "meaning": "নিচে", "pronunciation": "বিলো" },
    { "word": "around", "meaning": "চারপাশে", "pronunciation": "অ্যারাউন্ড" },
    { "word": "through", "meaning": "মাধ্যমে", "pronunciation": "থ্রু" },
    { "word": "towards", "meaning": "দিকে", "pronunciation": "টুওয়ার্ডস" },
    { "word": "with", "meaning": "সঙ্গে", "pronunciation": "উইথ" },
    { "word": "and", "meaning": "এবং", "pronunciation": "অ্যান্ড" },
    { "word": "but", "meaning": "কিন্তু", "pronunciation": "বাট" },
    { "word": "or", "meaning": "অথবা", "pronunciation": "অর" },
    { "word": "because", "meaning": "কারণ", "pronunciation": "বিকজ" },
    { "word": "so", "meaning": "তাই", "pronunciation": "সো" },
    { "word": "although", "meaning": "যদিও", "pronunciation": "অলদো" },
    { "word": "if", "meaning": "যদি", "pronunciation": "ইফ" },
    { "word": "since", "meaning": "যেহেতু", "pronunciation": "সিন্স" },
    { "word": "while", "meaning": "যখন", "pronunciation": "হোয়াইল" },
    { "word": "until", "meaning": "যতক্ষণ না", "pronunciation": "আনটিল" },
    { "word": "unless", "meaning": "যদি না", "pronunciation": "আনলেস" },
    { "word": "whether", "meaning": "যদি", "pronunciation": "হোয়েদার" },
    { "word": "yet", "meaning": "তবুও", "pronunciation": "ইয়েট" },
    { "word": "either", "meaning": "অথবা", "pronunciation": "আইদার" },
    { "word": "neither", "meaning": "না এই, না ঐ", "pronunciation": "নিদার" },
    { "word": "wow", "meaning": "বাহ", "pronunciation": "ওয়াও" },
    { "word": "ouch", "meaning": "আহ", "pronunciation": "আউচ" },
    { "word": "oops", "meaning": "উফ", "pronunciation": "উপস" },
    { "word": "hey", "meaning": "এই", "pronunciation": "হে" },
    { "word": "oh", "meaning": "ওহ", "pronunciation": "ও" },
    { "word": "ah", "meaning": "আহা", "pronunciation": "আ" },
    { "word": "alas", "meaning": "হায়", "pronunciation": "অ্যালাস" },
    { "word": "hurrah", "meaning": "হুরrah", "pronunciation": "হুরrah" },
    { "word": "bravo", "meaning": "শাবাশ", "pronunciation": "ব্রাভো" },
    { "word": "ugh", "meaning": "ধুর", "pronunciation": "আগ" },
    { "word": "yikes", "meaning": "বিপদ", "pronunciation": "ইয়াইকস" },
    { "word": "shh", "meaning": "চুপ", "pronunciation": "শ্" },
    { "word": "yay", "meaning": "ইয়েহ", "pronunciation": "ইয়েহ" },
    { "word": "hurray", "meaning": "হুরrah", "pronunciation": "হুরrah" },
    { "word": "hmm", "meaning": "হুম", "pronunciation": "হুম" },
    { "word": "head", "meaning": "মাথা", "pronunciation": "হেড" },
    { "word": "eye", "meaning": "চোখ", "pronunciation": "আই" },
    { "word": "ear", "meaning": "কান", "pronunciation": "ইয়ার" },
    { "word": "nose", "meaning": "নাক", "pronunciation": "নোজ" },
    { "word": "mouth", "meaning": "মুখ", "pronunciation": "মাউথ" },
    { "word": "hand", "meaning": "হাত", "pronunciation": "হ্যান্ড" },
    { "word": "leg", "meaning": "পা", "pronunciation": "লেগ" },
    { "word": "foot", "meaning": "পায়ের পাতা", "pronunciation": "ফুট" },
    { "word": "heart", "meaning": "হৃদয়", "pronunciation": "হার্ট" },
    { "word": "brain", "meaning": "মস্তিষ্ক", "pronunciation": "ব্রেইন" },
    { "word": "stomach", "meaning": "পেট", "pronunciation": "স্টমাক" },
    { "word": "arm", "meaning": "বাহু", "pronunciation": "আর্ম" },
    { "word": "finger", "meaning": "আঙুল", "pronunciation": "ফিঙ্গার" },
    { "word": "tooth", "meaning": "দাঁত", "pronunciation": "টুথ" },
    { "word": "skin", "meaning": "ত্বক", "pronunciation": "স্কিন" },
    { "word": "bone", "meaning": "হাড়", "pronunciation": "বোন" },
    { "word": "blood", "meaning": "রক্ত", "pronunciation": "ব্লাড" },
    { "word": "lung", "meaning": "ফুসফুস", "pronunciation": "লাং" },
    { "word": "kidney", "meaning": "বৃক্ক", "pronunciation": "কিডনি" },
    { "word": "liver", "meaning": "যকৃত", "pronunciation": "লিভার" },
    { "word": "kind", "meaning": "দয়ালু", "pronunciation": "কাইন্ড" },
    { "word": "honest", "meaning": "সৎ", "pronunciation": "অনেস্ট" },
    { "word": "brave", "meaning": "সাহসী", "pronunciation": "ব্রেভ" },
    { "word": "patient", "meaning": "ধৈর্যশীল", "pronunciation": "পেশেন্ট" },
    { "word": "humble", "meaning": "নম্র", "pronunciation": "হাম্বল" },
    { "word": "polite", "meaning": "ভদ্র", "pronunciation": "পোলাইট" },
    { "word": "generous", "meaning": "উদার", "pronunciation": "জেনারাস" },
    { "word": "intelligent", "meaning": "বুদ্ধিমান", "pronunciation": "ইন্টেলিজেন্ট" },
    { "word": "loyal", "meaning": "বিশ্বস্ত", "pronunciation": "লয়াল" },
    { "word": "friendly", "meaning": "বন্ধুভাবাপন্ন", "pronunciation": "ফ্রেন্ডলি" },
    { "word": "responsible", "meaning": "দায়িত্বশীল", "pronunciation": "রেস্পন্সিবল" },
    { "word": "forgiving", "meaning": "ক্ষমাশীল", "pronunciation": "ফরগিভিং" },
    { "word": "creative", "meaning": "সৃজনশীল", "pronunciation": "ক্রিয়েটিভ" },
    { "word": "optimistic", "meaning": "আশাবাদী", "pronunciation": "অপটিমিস্টিক" },
    { "word": "hardworking", "meaning": "পরিশ্রমী", "pronunciation": "হার্ডওয়ার্কিং" },
    { "word": "selfless", "meaning": "নিঃস্বার্থ", "pronunciation": "সেল্ফলেস" },
    { "word": "ambitious", "meaning": "উদ্যমী", "pronunciation": "অ্যাম্বিশাস" },
    { "word": "thoughtful", "meaning": "চিন্তাশীল", "pronunciation": "থটফুল" },
    { "word": "cheerful", "meaning": "প্রফুল্ল", "pronunciation": "চিয়ারফুল" },
    { "word": "compassionate", "meaning": "সহানুভূতিশীল", "pronunciation": "কমপ্যাশনেট" },
    { "word": "human", "meaning": "মানব", "pronunciation": "হিউম্যান" },
    { "word": "society", "meaning": "সমাজ", "pronunciation": "সোসাইটি" },
    { "word": "civilization", "meaning": "সভ্যতা", "pronunciation": "সিভিলাইজেশন" },
    { "word": "culture", "meaning": "সংস্কৃতি", "pronunciation": "কালচার" },
    { "word": "community", "meaning": "সম্প্রদায়", "pronunciation": "কমিউনিটি" },
    { "word": "race", "meaning": "জাতি", "pronunciation": "রেস" },
    { "word": "ethnicity", "meaning": "জাতিগত পরিচয়", "pronunciation": "এথনিসিটি" },
    { "word": "humanity", "meaning": "মানবতা", "pronunciation": "হিউম্যানিটি" },
    { "word": "freedom", "meaning": "স্বাধীনতা", "pronunciation": "ফ্রিডম" },
    { "word": "justice", "meaning": "ন্যায়বিচার", "pronunciation": "জাস্টিস" },
    { "word": "equality", "meaning": "সমতা", "pronunciation": "ইক্যুয়ালিটি" },
    { "word": "peace", "meaning": "শান্তি", "pronunciation": "পিস" },
    { "word": "brotherhood", "meaning": "ভ্রাতৃত্ব", "pronunciation": "ব্রাদারহুড" },
    { "word": "charity", "meaning": "দাতব্য", "pronunciation": "চারিটি" },
    { "word": "diversity", "meaning": "বৈচিত্র্য", "pronunciation": "ডাইভারসিটি" },
    { "word": "democracy", "meaning": "গণতন্ত্র", "pronunciation": "ডেমোক্র্যাসি" },
    { "word": "human rights", "meaning": "মানবাধিকার", "pronunciation": "হিউম্যান রাইটস" },
    { "word": "dignity", "meaning": "মর্যাদা", "pronunciation": "ডিগনিটি" },
    { "word": "cooperation", "meaning": "সহযোগিতা", "pronunciation": "কোঅপারেশন" },
    { "word": "compassion", "meaning": "সহানুভূতি", "pronunciation": "কমপ্যাশন" },
    { "word": "father", "meaning": "বাবা", "pronunciation": "ফাদার" },
    { "word": "mother", "meaning": "মা", "pronunciation": "মাদার" },
    { "word": "brother", "meaning": "ভাই", "pronunciation": "ব্রাদার" },
    { "word": "sister", "meaning": "বোন", "pronunciation": "সিস্টার" },
    { "word": "grandfather", "meaning": "দাদু", "pronunciation": "গ্র্যান্ডফাদার" },
    { "word": "grandmother", "meaning": "ঠাকুরমা", "pronunciation": "গ্র্যান্ডমাদার" },
    { "word": "uncle", "meaning": "কাকা / মামা", "pronunciation": "আঙ্কল" },
    { "word": "aunt", "meaning": "কাকিমা / মাসি", "pronunciation": "আন্ট" },
    { "word": "cousin", "meaning": "চাচাতো ভাই / বোন", "pronunciation": "কাজিন" },
    { "word": "nephew", "meaning": "ভাইপো", "pronunciation": "নেফিউ" },
    { "word": "niece", "meaning": "ভাইঝি", "pronunciation": "নিজ" },
    { "word": "husband", "meaning": "স্বামী", "pronunciation": "হাজব্যান্ড" },
    { "word": "wife", "meaning": "স্ত্রী", "pronunciation": "ওয়াইফ" },
    { "word": "son", "meaning": "ছেলে", "pronunciation": "সন" },
    { "word": "daughter", "meaning": "মেয়ে", "pronunciation": "ডটার" },
    { "word": "father-in-law", "meaning": "শ্বশুর", "pronunciation": "ফাদার-ইন-ল" },
    { "word": "mother-in-law", "meaning": "শাশুড়ি", "pronunciation": "মাদার-ইন-ল" },
    { "word": "brother-in-law", "meaning": "ভাই-জামাই", "pronunciation": "ব্রাদার-ইন-ল" },
    { "word": "sister-in-law", "meaning": "বোন-জামাই", "pronunciation": "সিস্টার-ইন-ল" },
    { "word": "grandson", "meaning": "নাতি", "pronunciation": "গ্র্যান্ডসন" },
    { "word": "granddaughter", "meaning": "নাতনি", "pronunciation": "গ্র্যান্ডডটার" },
    { "word": "shirt", "meaning": "শার্ট", "pronunciation": "শার্ট" },
    { "word": "pants", "meaning": "প্যান্ট", "pronunciation": "প্যান্টস" },
    { "word": "dress", "meaning": "পোশাক", "pronunciation": "ড্রেস" },
    { "word": "skirt", "meaning": "স্কার্ট", "pronunciation": "স্কার্ট" },
    { "word": "jacket", "meaning": "জ্যাকেট", "pronunciation": "জ্যাকেট" },
    { "word": "suit", "meaning": "সুট", "pronunciation": "সুট" },
    { "word": "tie", "meaning": "টাই", "pronunciation": "টাই" },
    { "word": "saree", "meaning": "শাড়ি", "pronunciation": "সারি" },
    { "word": "kurta", "meaning": "কুর্তা", "pronunciation": "কুর্তা" },
    { "word": "blouse", "meaning": "ব্লাউজ", "pronunciation": "ব্লাউজ" },
    { "word": "shoes", "meaning": "জুতো", "pronunciation": "শুজ" },
    { "word": "sandals", "meaning": "স্যান্ডেল", "pronunciation": "স্যান্ডালস" },
    { "word": "hat", "meaning": "টুপি", "pronunciation": "হ্যাট" },
    { "word": "scarf", "meaning": "স্কার্ফ", "pronunciation": "স্কার্ফ" },
    { "word": "gloves", "meaning": "দস্তানা", "pronunciation": "গ্লোভস" },
    { "word": "belt", "meaning": "বেল্ট", "pronunciation": "বেল্ট" },
    { "word": "shorts", "meaning": "ছোট প্যান্ট", "pronunciation": "শর্টস" },
    { "word": "jeans", "meaning": "জিন্স", "pronunciation": "জিন্স" },
    { "word": "t-shirt", "meaning": "টি-শার্ট", "pronunciation": "টি-শার্ট" },
    { "word": "socks", "meaning": "মোজা", "pronunciation": "সকস" },
    { "word": "school", "meaning": "স্কুল", "pronunciation": "স্কুল" },
    { "word": "college", "meaning": "কলেজ", "pronunciation": "কলেজ" },
    { "word": "university", "meaning": "বিশ্ববিদ্যালয়", "pronunciation": "ইউনিভার্সিটি" },
    { "word": "teacher", "meaning": "শিক্ষক", "pronunciation": "টিচার" },
    { "word": "student", "meaning": "ছাত্র", "pronunciation": "স্টুডেন্ট" },
    { "word": "classroom", "meaning": "শ্রেণীকক্ষ", "pronunciation": "ক্লাসরুম" },
    { "word": "homework", "meaning": "বাড়ির কাজ", "pronunciation": "হোমওয়ার্ক" },
    { "word": "exam", "meaning": "পরীক্ষা", "pronunciation": "এক্সাম" },
    { "word": "subject", "meaning": "বিষয়", "pronunciation": "সাবজেক্ট" },
    { "word": "book", "meaning": "বই", "pronunciation": "বুক" },
    { "word": "notebook", "meaning": "নোটবই", "pronunciation": "নোটবুক" },
    { "word": "pen", "meaning": "কলম", "pronunciation": "পেন" },
    { "word": "pencil", "meaning": "পেন্সিল", "pronunciation": "পেন্সিল" },
    { "word": "blackboard", "meaning": "কালো বোর্ড", "pronunciation": "ব্ল্যাকবোর্ড" },
    { "word": "library", "meaning": "গ্রন্থাগার", "pronunciation": "লাইব্রেরি" },
    { "word": "scholarship", "meaning": "বৃত্তি", "pronunciation": "স্কলারশিপ" },
    { "word": "lecture", "meaning": "বক্তৃতা", "pronunciation": "লেকচার" },
    { "word": "assignment", "meaning": "নির্ধারিত কাজ", "pronunciation": "অ্যাসাইনমেন্ট" },
    { "word": "degree", "meaning": "ডিগ্রি", "pronunciation": "ডিগ্রি" },
    { "word": "certificate", "meaning": "সনদ", "pronunciation": "সার্টিফিকেট" },
    
    
];




function StartTest() {
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('practice-section').style.display = 'none';
    generateQuestion();
}

function generateQuestion() {
    let word = words[Math.floor(Math.random() * words.length)];
    document.getElementById('question').innerText = `What is the meaning of "${word.word}"?`;
    let correctOption = Math.floor(Math.random() * 4);
    let options = document.getElementsByClassName('option');
    
    for (let i = 0; i < 4; i++) {
        if (i === correctOption) {
            options[i].innerText = `${word.meaning} (${word.pronunciation})`;
            options[i].onclick = () => showFeedback(true);
        } else {
            let incorrectWord;
            do {
                incorrectWord = words[Math.floor(Math.random() * words.length)];
            } while (incorrectWord.meaning === word.meaning);
            options[i].innerText = `${incorrectWord.meaning} (${incorrectWord.pronunciation})`;
            options[i].onclick = () => showFeedback(false);
        }
    }
}

function showFeedback(isCorrect) {
    let feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Wrong! Try again.";
        feedback.style.color = "red";
    }
    setTimeout(generateQuestion, 2000);
}

function startPractice() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('practice-section').style.display = 'block';
    nextWord();
}

function nextWord() {
    let word = words[Math.floor(Math.random() * words.length)];
    document.getElementById('practice-word').innerText = word.word;
    document.getElementById('practice-meaning').innerText = `Meaning: ${word.meaning}`;
    document.getElementById('practice-pronunciation').innerText = `Pronunciation: ${word.pronunciation}`;
}

function viewProgress() {
    alert("Progress tracking is not implemented yet.");
}





function generateQuestion() {
    let word = words[Math.floor(Math.random() * words.length)];
    // Display the question with the word and its pronunciation
    document.getElementById('question').innerText = `What is the Bengali meaning of "${word.word} (${word.pronunciation})"?`;

    // Select the correct option index
    let correctOption = Math.floor(Math.random() * 4);
    let options = document.getElementsByClassName('option');
    
    for (let i = 0; i < 4; i++) {
        if (i === correctOption) {
            options[i].innerText = word.meaning;
            options[i].onclick = () => showFeedback(true);
        } else {
            let incorrectWord;
            do {
                incorrectWord = words[Math.floor(Math.random() * words.length)];
            } while (incorrectWord.meaning === word.meaning);
            options[i].innerText = incorrectWord.meaning;
            options[i].onclick = () => showFeedback(false);
        }
    }
}


let totalQuestions = 0;
let correctAnswers = 0;
function showFeedback(isCorrect) {
    totalQuestions++; // Increment total questions answered
    let feedback = document.getElementById('feedback');
    if (isCorrect) {
        correctAnswers++; // Increment correct answers if correct
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Wrong! Try again.";
        feedback.style.color = "red";
    }
    setTimeout(generateQuestion, 2000);
}
function viewProgress() {
    let progressMessage = `You have answered ${totalQuestions} questions and got ${correctAnswers} correct.`;
    alert(progressMessage);
}


function showFeedback(isCorrect) {
    totalQuestions++; // Increment total questions answered
    let feedback = document.getElementById('feedback');
    if (isCorrect) {
        correctAnswers++; // Increment correct answers if correct
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Wrong! The correct answer is: ${document.querySelector('.option').innerText}`;
        feedback.style.color = "red";
    }
    setTimeout(generateQuestion, 2000);
}



let totalLikes = 0;

document.getElementById('like-button').addEventListener('click', function() {
    totalLikes++;
    document.getElementById('total-likes').innerText = totalLikes;
});

let currentWordIndex = 0;

function displayWord(index) {
    const word = words[index];
    document.getElementById('practice-word').innerText = word.word;
    document.getElementById('practice-meaning').innerText = `Meaning: ${word.meaning}`;
    document.getElementById('practice-pronunciation').innerText = `Pronunciation: ${word.pronunciation}`;
}

function nextWord() {
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
        displayWord(currentWordIndex);
    } else {
        alert("This is the last word.");
    }
}

function previousWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        displayWord(currentWordIndex);
    } else {
        alert("You're already at the first word.");
    }
}

// Initial display of the first word
displayWord(currentWordIndex);





