const technology = document.getElementById('technology');
const word = document.getElementById('word');
const translation = document.getElementById('translation');
const arabicTranslation = document.getElementById('arabicTranslation');
const explanation = document.getElementById("explanation");
const example = document.getElementById("example");
const startButton = document.getElementById('startButton');
const answerButton = document.getElementById('answerButton');
const resetButton = document.getElementById('resetButton');
const correctCount = document.getElementById('correctAnswers');
const wrongCount = document.getElementById('wrongAnswers');
const successRate = document.getElementById('successRate');
const answerInput = document.getElementById('answerInput');
const checkButton = document.getElementById('checkButton');

const vokabeln = [

    ["Selektor", "selector", "المحدد العنصر", "CSS",
    "Ein Selektor bestimmt, welches HTML-Element gestaltet wird.",
    "button { color: blue; }"],

    ["Mauszeiger", "cursor", "مؤشر الماوس", "CSS",
    "Der Cursor bestimmt, wie der Mauszeiger angezeigt wird.",
    "button { cursor: pointer; }"],

    ["Überfahren", "hover", "عند تمرير الماوس", "CSS",
    "Hover beschreibt den Zustand eines Elements, wenn die Maus darüber bewegt wird.",
    "button:hover { color: white; }"],

    ["Deckkraft", "opacity", "الشفافية", "CSS",
    "Opacity bestimmt, wie durchsichtig ein Element ist.",
    "div { opacity: 0.5; }"],

    ["Schriftgröße", "font-size", "حجم الخط", "CSS",
    "Font-size bestimmt die Größe des Textes.",
    "p { font-size: 20px; }"],

    ["Schriftstärke", "font-weight", "سمك الخط", "CSS",
    "Font-weight bestimmt, wie dick oder dünn die Schrift dargestellt wird.",
    "h1 { font-weight: bold; }"],

    ["Unterer Außenabstand", "margin-bottom", "الهامش السفلي", "CSS",
    "Margin-bottom bestimmt den äußeren Abstand unter einem Element.",
    "p { margin-bottom: 20px; }"],

    ["rechts-nach-links", "rtl", "من اليمين إلى اليسار", "CSS",
    "RTL bedeutet, dass der Text von rechts nach links geschrieben wird.",
    "direction: rtl;"],

    ["Hintergrundfarbe", "background-color", "لون الخلفية", "CSS",
    "Background-color bestimmt die Farbe des Hintergrunds.",
    "body { background-color: black; }"],

    ["Abrundung", "border-radius", "الحواف الدائرية", "CSS",
    "Border-radius macht die Ecken eines Elements rund.",
    "button { border-radius: 6px; }"],

    ["Hintergrundbild", "background-image", "صورة الخلفية", "CSS",
    "Background-image fügt ein Bild als Hintergrund eines Elements ein.",
    "body { background-image: url('background.jpg'); }"],

    ["Richtung", "direction", "الاتجاه", "CSS",
    "Direction bestimmt die Richtung des Textes.",
    "p { direction: rtl; }"],

    ["anzeigen", "display", "عرض", "CSS",
    "Display bestimmt, wie ein Element angezeigt oder ausgeblendet wird.",
    "p { display: block; }"],

    ["verstecken", "hidden", "إخفاء", "CSS",
    "Hidden bedeutet, dass etwas versteckt oder nicht angezeigt wird.",
    "element.hidden = true;"],

    ["Breite", "width", "العرض", "CSS",
    "Width bestimmt die Breite eines Elements.",
    "div { width: 300px; }"],

    ["Seitenkörper", "body", "جسم الصفحة", "HTML",
    "Body enthält den sichtbaren Inhalt einer HTML-Seite.",
    "<body><h1>Hello</h1></body>"],

    ["zufällig", "random", "عشوائي", "JavaScript",
    "Random erzeugt einen zufälligen Wert.",
    "Math.random();"],

    ["abrunden", "floor", "تقريب للأسفل", "JavaScript",
    "Floor rundet eine Zahl immer auf die nächstkleinere ganze Zahl ab.",
    "Math.floor(4.8);"],

    ["Index", "index", "الفهرس", "JavaScript",
    "Ein Index gibt die Position eines Elements in einem Array an.",
    "vokabeln[0];"],

    ["Laufzeitfehler", "runtime error", "خطأ وقت التشغيل", "JavaScript",
    "Ein Runtime Error tritt auf, während das Programm ausgeführt wird.",
    "console.log(variable);"],

    ["Konsole", "console", "الوحدة", "JavaScript",
    "Die Console zeigt Informationen und Fehlermeldungen des Programms an.",
    "console.log('Hallo');"],

    ["Ereignis", "event", "الحدث", "JavaScript",
    "Ein Event ist eine Aktion, auf die das Programm reagieren kann.",
    "button.addEventListener('click', function() {});"],

    ["Länge", "length", "الطول", "JavaScript",
    "Length gibt die Anzahl der Elemente oder Zeichen zurück.",
    "vokabeln.length;"],

    ["zurückkehren", "to return", "العودة", "JavaScript",
    "Return beendet eine Funktion und gibt einen Wert zurück.",
    "return answer;"],

    ["die Variable", "the variable", "المتغير", "JavaScript",
    "Eine Variable speichert einen Wert, der später verwendet werden kann.",
    "let name = 'Mohamad';"],

    ["der Befehl", "the command", "الأمر", "JavaScript",
    "Ein Befehl weist dem Programm an, was es tun soll.",
    "console.log('Hallo');"],

    ["die Schleife", "the loop", "الحلقة", "JavaScript",
    "Eine Schleife wiederholt einen Codeabschnitt mehrmals.",
    "for (let i = 0; i < 5; i++) {}"],

    ["die Funktion", "the function", "الدالة", "JavaScript",
    "Eine Funktion enthält Code, der eine bestimmte Aufgabe ausführt.",
    "function start() {}"],

    ["das Array", "the array", "المصفوفة", "JavaScript",
    "Ein Array speichert mehrere Werte in einer geordneten Liste.",
    "const zahlen = [1, 2, 3];"],

    ["der Eintrag", "the entry", "الإدخال", "JavaScript",
    "Ein Eintrag ist ein einzelnes Element innerhalb einer Liste oder eines Arrays.",
    "zahlen[0];"],

    ["der Wert", "the value", "القيمة", "JavaScript",
    "Ein Wert ist die Information, die in einer Variable gespeichert wird.",
    "let age = 25;"],

    ["die Liste", "the list", "القائمة", "JavaScript",
    "Eine Liste enthält mehrere Werte oder Elemente in einer bestimmten Reihenfolge.",
    "const namen = ['Anna', 'Ali'];"]

];
let correctAnswers = 0;
let wrongAnswers = 0;
let aktuelleVokabel = 0;
word.textContent = vokabeln[aktuelleVokabel][1];
translation.textContent = vokabeln[aktuelleVokabel][0];
arabicTranslation.textContent = vokabeln[aktuelleVokabel][2];
explanation.textContent = vokabeln[aktuelleVokabel][4];
example.textContent = vokabeln[aktuelleVokabel][5];
if (vokabeln[aktuelleVokabel][3] === "JavaScript") {
    technology.textContent = "JS";
    technology.className = "javascript";
} else if (vokabeln[aktuelleVokabel][3] === "CSS") {
    technology.textContent = "#";
    technology.className = "css";
} else if (vokabeln[aktuelleVokabel][3] === "HTML") {
    technology.textContent = "<>";
    technology.className = "html";
}
translation.style.display = 'none';
arabicTranslation.style.display = 'none';
explanation.style.display = "none";
example.style.display = "none";
answerInput.value = "";

startButton.addEventListener('click', function() {

    aktuelleVokabel = Math.floor(Math.random() * vokabeln.length);

    word.textContent = vokabeln[aktuelleVokabel][1];
    translation.textContent = vokabeln[aktuelleVokabel][0];
    arabicTranslation.textContent = vokabeln[aktuelleVokabel][2];
    explanation.textContent = vokabeln[aktuelleVokabel][4];
    example.textContent = vokabeln[aktuelleVokabel][5];


    if (vokabeln[aktuelleVokabel][3] === "JavaScript") {
        technology.textContent = "JS";
        technology.className = "javascript";
    } else if (vokabeln[aktuelleVokabel][3] === "CSS") {
        technology.textContent = "#";
        technology.className = "css"
    } else if (vokabeln[aktuelleVokabel][3] === "HTML") {
        technology.textContent = "<>";
        technology.className = "html"
    }
    
    translation.style.display = 'none';
    arabicTranslation.style.display = 'none';
    explanation.style.display = 'none';
    example.style.display = 'none';
});

answerButton.addEventListener('click', function() {
    translation.style.display = 'block';
    arabicTranslation.style.display = 'block';
    explanation.style.display = 'block';
    example.style.display = 'block';
});

checkButton.addEventListener("click", function() {
const answer = answerInput.value.trim().toLowerCase();
if (answer === "") {
    alert("Bitte geben Sie eine Antwort ein");
    return;
}
const correctAnswer = vokabeln[aktuelleVokabel][0].trim().toLowerCase();
    if (answer === correctAnswer) {
        correctAnswers++;
        correctCount.textContent = correctAnswers;
        alert("Richtig!");
    } else {
        wrongAnswers++;
        wrongCount.textContent = wrongAnswers;
        alert("Falsch! Richtige Atnwort: " + vokabeln[aktuelleVokabel][0]);
    }
    const totalAnswers = correctAnswers + wrongAnswers;
    const rate = (correctAnswers / totalAnswers) * 100;
    successRate.textContent = Math.round(rate);
    translation.style.display = 'block';
    arabicTranslation.style.display = 'block';
    explanation.style.display = 'block';
    example.style.display = 'block';
    answerInput.value = "";
});
resetButton.addEventListener("click", function() {
    correctAnswers = 0;
    wrongAnswers = 0;

    correctCount.textContent = 0;
    wrongCount.textContent = 0;
    successRate.textContent = 0;
});