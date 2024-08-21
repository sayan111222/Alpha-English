let words = [
  // Personal Pronouns
  { "word": "I", "meaning": "আমি", "pronunciation": "আমি" },
  { "word": "you", "meaning": "তুমি", "pronunciation": "তুমি" },
  { "word": "he", "meaning": "সে (ছেলে)", "pronunciation": "সে" },
  { "word": "she", "meaning": "সে (মেয়ে)", "pronunciation": "সে" },
  { "word": "it", "meaning": "এটি", "pronunciation": "ইট" },
  { "word": "we", "meaning": "আমরা", "pronunciation": "আমরা" },
  { "word": "they", "meaning": "তারা", "pronunciation": "দে" },

  // Object Pronouns
  { "word": "me", "meaning": "আমাকে", "pronunciation": "মি" },
  { "word": "him", "meaning": "তাকে (ছেলে)", "pronunciation": "হিম" },
  { "word": "her", "meaning": "তাকে (মেয়ে)", "pronunciation": "হার" },
  { "word": "us", "meaning": "আমাদের", "pronunciation": "আস" },
  { "word": "them", "meaning": "তাদের", "pronunciation": "দেম" },

  // Possessive Pronouns
  { "word": "my", "meaning": "আমার", "pronunciation": "মাই" },
  { "word": "your", "meaning": "তোমার", "pronunciation": "ইউর" },
  { "word": "his", "meaning": "তার (ছেলে)", "pronunciation": "হিজ" },
  { "word": "her", "meaning": "তার (মেয়ে)", "pronunciation": "হার" },
  { "word": "its", "meaning": "এর", "pronunciation": "ইটস" },
  { "word": "our", "meaning": "আমাদের", "pronunciation": "আওয়ার" },
  { "word": "their", "meaning": "তাদের", "pronunciation": "দেয়ার" },

  // Reflexive Pronouns
  { "word": "myself", "meaning": "নিজে", "pronunciation": "মাইসেল্ফ" },
  { "word": "yourself", "meaning": "নিজেকে", "pronunciation": "ইউরসেল্ফ" },
  { "word": "himself", "meaning": "নিজে (ছেলে)", "pronunciation": "হিমসেল্ফ" },
  { "word": "herself", "meaning": "নিজে (মেয়ে)", "pronunciation": "হারসেল্ফ" },
  { "word": "itself", "meaning": "নিজেই", "pronunciation": "ইটসেল্ফ" },
  { "word": "ourselves", "meaning": "নিজেদের", "pronunciation": "আওয়ারসেল্ভস" },
  { "word": "themselves", "meaning": "নিজেদের", "pronunciation": "দেমসেল্ভস" },

  // Demonstrative Pronouns
  { "word": "this", "meaning": "এটা", "pronunciation": "দিস" },
  { "word": "that", "meaning": "ওটা", "pronunciation": "দ্যাট" },
  { "word": "these", "meaning": "এগুলি", "pronunciation": "দিজ" },
  { "word": "those", "meaning": "ওগুলি", "pronunciation": "দোজ" },

  // Indefinite Pronouns
  { "word": "someone", "meaning": "কেউ একজন", "pronunciation": "সামওয়ান" },
  { "word": "something", "meaning": "কিছু", "pronunciation": "সামথিং" },
  { "word": "anyone", "meaning": "যে কেউ", "pronunciation": "এনিওয়ান" },
  { "word": "anything", "meaning": "কিছুই", "pronunciation": "এনিথিং" },
  { "word": "everyone", "meaning": "সবাই", "pronunciation": "এভ্রিওয়ান" },
  { "word": "everything", "meaning": "সবকিছু", "pronunciation": "এভ্রিথিং" },
  { "word": "nobody", "meaning": "কেউ না", "pronunciation": "নোবডি" },
  { "word": "nothing", "meaning": "কিছুই না", "pronunciation": "নাথিং" },

  // Possessive Pronouns (Stand-Alone)
  { "word": "mine", "meaning": "আমারটা", "pronunciation": "মাইন" },
  { "word": "yours", "meaning": "তোমারটা", "pronunciation": "ইউর্স" },
  { "word": "his", "meaning": "তার (ছেলের)", "pronunciation": "হিজ" },
  { "word": "hers", "meaning": "তার (মেয়ের)", "pronunciation": "হারস" },
  { "word": "ours", "meaning": "আমাদেরটা", "pronunciation": "আওয়ার্স" },
  { "word": "theirs", "meaning": "তাদেরটা", "pronunciation": "দেয়ারস" },

  // Reciprocal Pronouns
  { "word": "each other", "meaning": "এক অন্যকে", "pronunciation": "ইচ আদার" },
  { "word": "one another", "meaning": "একে অপরকে", "pronunciation": "ওয়ান অ্যানাদার" },

  // Relative Pronouns
  { "word": "who", "meaning": "কে", "pronunciation": "হু" },
  { "word": "whom", "meaning": "যাকে", "pronunciation": "হুম" },
  { "word": "whose", "meaning": "কার", "pronunciation": "হুজ" },
  { "word": "which", "meaning": "যেটি", "pronunciation": "হুইচ" },
  { "word": "that", "meaning": "যে", "pronunciation": "দ্যাট" },

  // Interrogative Pronouns
  { "word": "who", "meaning": "কে", "pronunciation": "হু" },
  { "word": "whom", "meaning": "কাকে", "pronunciation": "হুম" },
  { "word": "whose", "meaning": "কার", "pronunciation": "হুজ" },
  { "word": "which", "meaning": "কোনটা", "pronunciation": "হুইচ" },
  { "word": "what", "meaning": "কি", "pronunciation": "হোয়াট" },

  // Distributive Pronouns
  { "word": "each", "meaning": "প্রতিটি", "pronunciation": "ইচ" },
  { "word": "either", "meaning": "উভয়", "pronunciation": "আইদার" },
  { "word": "neither", "meaning": "কোনোটাই না", "pronunciation": "নাইদার" },

  // Quantitative Pronouns
  { "word": "all", "meaning": "সব", "pronunciation": "অল" },
  { "word": "few", "meaning": "কিছু", "pronunciation": "ফিউ" },
  { "word": "many", "meaning": "অনেক", "pronunciation": "ম্যানি" },
  { "word": "some", "meaning": "কিছু", "pronunciation": "সাম" },
  { "word": "most", "meaning": "অধিকাংশ", "pronunciation": "মোস্ট" }
  // Add more words here
];
const abstractNouns = [
  { "word": "love", "meaning": "ভালবাসা", "pronunciation": "লাভ" },
  { "word": "happiness", "meaning": "সুখ", "pronunciation": "হ্যাপিনেস" },
  { "word": "anger", "meaning": "রাগ", "pronunciation": "অ্যাংগার" },
  { "word": "fear", "meaning": "ভয়", "pronunciation": "ফিয়ার" },
  { "word": "freedom", "meaning": "স্বাধীনতা", "pronunciation": "ফ্রিডম" },
  { "word": "justice", "meaning": "ন্যায়বিচার", "pronunciation": "জাস্টিস" },
  { "word": "truth", "meaning": "সত্য", "pronunciation": "ট্রুথ" },
  { "word": "peace", "meaning": "শান্তি", "pronunciation": "পিস" },
  { "word": "courage", "meaning": "সাহস", "pronunciation": "কারেজ" },
  { "word": "friendship", "meaning": "বন্ধুত্ব", "pronunciation": "ফ্রেন্ডশিপ" },
  { "word": "honesty", "meaning": "সততা", "pronunciation": "অন্যেস্টি" },
  { "word": "kindness", "meaning": "দয়া", "pronunciation": "কাইন্ডনেস" },
  { "word": "sadness", "meaning": "দুঃখ", "pronunciation": "স্যাডনেস" },
  { "word": "hope", "meaning": "আশা", "pronunciation": "হোপ" },
  { "word": "wisdom", "meaning": "জ্ঞান", "pronunciation": "উইজডম" },
  { "word": "patience", "meaning": "ধৈর্য", "pronunciation": "পেশেন্স" },
  { "word": "strength", "meaning": "শক্তি", "pronunciation": "স্ট্রেংথ" },
  { "word": "beauty", "meaning": "সৌন্দর্য", "pronunciation": "বিউটি" },
  { "word": "knowledge", "meaning": "জ্ঞান", "pronunciation": "নলেজ" },
  { "word": "faith", "meaning": "বিশ্বাস", "pronunciation": "ফেইথ" },
  { "word": "charity", "meaning": "দান", "pronunciation": "চ্যারিটি" },
  { "word": "honor", "meaning": "সম্মান", "pronunciation": "অনার" },
  { "word": "grief", "meaning": "শোক", "pronunciation": "গ্রীফ" },
  { "word": "success", "meaning": "সফলতা", "pronunciation": "সাকসেস" },
  { "word": "failure", "meaning": "ব্যর্থতা", "pronunciation": "ফেলিউর" },
  { "word": "pride", "meaning": "গর্ব", "pronunciation": "প্রাইড" },
  { "word": "loyalty", "meaning": "বিশ্বস্ততা", "pronunciation": "লয়ালটি" },
  { "word": "honor", "meaning": "সম্মান", "pronunciation": "অনার" },
  { "word": "dream", "meaning": "স্বপ্ন", "pronunciation": "ড্রিম" },
  { "word": "comfort", "meaning": "সান্ত্বনা", "pronunciation": "কমফর্ট" },
  { "word": "trust", "meaning": "বিশ্বাস", "pronunciation": "ট্রাস্ট" },
  { "word": "greed", "meaning": "লোভ", "pronunciation": "গ্রিড" },
  { "word": "love", "meaning": "ভালবাসা", "pronunciation": "লাভ" },
  { "word": "jealousy", "meaning": "ঈর্ষা", "pronunciation": "জেলাসি" },
  { "word": "compassion", "meaning": "সহানুভূতি", "pronunciation": "কম্প্যাশন" },
  { "word": "despair", "meaning": "নিরাশা", "pronunciation": "ডেসপেয়ার" },
  { "word": "humility", "meaning": "নম্রতা", "pronunciation": "হিউমিলিটি" }
];
const Words = words.concat(abstractNouns);

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
