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



