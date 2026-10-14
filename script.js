const technology = document.getElementById('technology');
const word = document.getElementById('word');
const translation = document.getElementById('translation');
const arabicTranslation = document.getElementById('arabicTranslation');
const languageSelect = document.getElementById('languageSelect');
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
    "const namen = ['Anna', 'Ali'];"],
    
    ["das Element", "the element", "العنصر", "HTML",
    "Ein Element ist ein Bestandteil eines HTML-Dokuments.",
    "<p>Hallo</p>"],

    ["das Attribut", "the attribute", "الخاصية", "HTML",
    "Ein Attribut liefert zusätzliche Informationen über ein HTML-Element.",
    "<input type='text'>"],

    ["die Überschrift", "the heading", "العنوان", "HTML",
    "Eine Überschrift beschreibt den Inhalt eines Abschnitts.",
    "<h1>Meine Seite</h1>"],

    ["der Absatz", "the paragraph", "الفقرة", "HTML",
    "Ein Absatz enthält einen Textabschnitt.",
    "<p>Das ist ein Absatz.</p>"],

    ["der Link", "the link", "الرابط", "HTML",
    "Ein Link verweist auf eine andere Seite oder Ressource.",
    "<a href='https://example.com'>Öffnen</a>"],

    ["das Formular", "the form", "النموذج", "HTML",
    "Ein Formular ermöglicht die Eingabe und Übermittlung von Daten.",
    "<form><input type='text'></form>"],

    ["das Eingabefeld", "the input field", "حقل الإدخال", "HTML",
    "Ein Eingabefeld ermöglicht die Eingabe von Informationen.",
    "<input type='text'>"],

    ["die Schaltfläche", "the button", "الزر", "HTML",
    "Eine Schaltfläche ermöglicht eine Aktion durch einen Klick.",
    "<button>Klicken</button>"],

    ["das Bild", "the image", "الصورة", "HTML",
    "Ein Bild zeigt eine grafische Darstellung auf einer Webseite.",
    "<img src='bild.jpg' alt='Bild'>"],

    ["die Tabelle", "the table", "الجدول", "HTML",
    "Eine Tabelle stellt Daten in Zeilen und Spalten dar.",
    "<table><tr><td>Text</td></tr></table>"],

    ["die Zeile", "the row", "الصف", "HTML",
    "Eine Zeile enthält zusammengehörige Informationen in einer horizontalen Anordnung.",
    "<tr><td>Name</td></tr>"],

    ["die Spalte", "the column", "العمود", "HTML",
    "Eine Spalte enthält Daten in einer vertikalen Anordnung.",
    "<td>Name</td>"],

    ["der Listenpunkt", "the list item", "عنصر القائمة", "HTML",
    "Ein Listenpunkt ist ein einzelner Eintrag einer Liste.",
    "<li>Eintrag</li>"],

    ["der Container", "the container", "الحاوية", "HTML",
    "Ein Container fasst mehrere Elemente zusammen.",
    "<div class='container'></div>"],

    ["der Abschnitt", "the section", "القسم", "HTML",
    "Ein Abschnitt gruppiert thematisch zusammengehörige Inhalte.",
    "<section><h2>Titel</h2></section>"],

    ["die Navigation", "the navigation", "التنقل", "HTML",
    "Die Navigation enthält Links zur Orientierung auf einer Webseite.",
    "<nav><a href='index.html'>Start</a></nav>"],

    ["die Fußzeile", "the footer", "تذييل الصفحة", "HTML",
    "Die Fußzeile enthält Informationen am Ende einer Webseite.",
    "<footer>Kontakt</footer>"],

    ["der Kopfbereich", "the header", "رأس الصفحة", "HTML",
    "Der Kopfbereich enthält einleitende Informationen einer Webseite.",
    "<header><h1>Titel</h1></header>"],

    ["die Hintergrundfarbe", "the background color", "لون الخلفية", "CSS",
    "Die Hintergrundfarbe bestimmt die Farbe hinter einem Element.",
    "body { background-color: white; }"],

    ["die Textfarbe", "the text color", "لون النص", "CSS",
    "Die Textfarbe bestimmt die Farbe eines Textes.",
    "p { color: blue; }"],

    ["die Höhe", "the height", "الارتفاع", "CSS",
    "Die Höhe bestimmt die vertikale Ausdehnung eines Elements.",
    "div { height: 200px; }"],

    ["der Außenabstand", "the margin", "الهامش الخارجي", "CSS",
    "Der Außenabstand bestimmt den Abstand außerhalb eines Elements.",
    "div { margin: 10px; }"],

    ["der Innenabstand", "the padding", "الهامش الداخلي", "CSS",
    "Der Innenabstand bestimmt den Abstand zwischen Inhalt und Rahmen.",
    "div { padding: 20px; }"],

    ["der Rahmen", "the border", "الإطار", "CSS",
    "Ein Rahmen umgibt ein Element.",
    "div { border: 1px solid black; }"],

    ["die Schriftart", "the font family", "نوع الخط", "CSS",
    "Die Schriftart bestimmt das Aussehen der Buchstaben.",
    "body { font-family: Arial, sans-serif; }"],

    ["die Ausrichtung", "the alignment", "المحاذاة", "CSS",
    "Die Ausrichtung bestimmt die Positionierung von Inhalten.",
    "text-align: center;"],

    ["die Position", "the position", "الموضع", "CSS",
    "Die Position bestimmt, wie ein Element platziert wird.",
    "div { position: relative; }"],

    ["die Anzeigeart", "the display type", "طريقة العرض", "CSS",
    "Die Anzeigeart bestimmt, wie ein Element im Layout dargestellt wird.",
    "div { display: flex; }"],

    ["das Raster", "the grid", "الشبكة", "CSS",
    "Ein Raster ordnet Elemente in Zeilen und Spalten an.",
    "display: grid;"],

    ["die Flexbox", "the flexbox", "تخطيط فليكس", "CSS",
    "Flexbox ermöglicht eine flexible Anordnung von Elementen.",
    "display: flex;"],

    ["der Schatten", "the shadow", "الظل", "CSS",
    "Ein Schatten erzeugt einen visuellen Tiefeneffekt.",
    "box-shadow: 0 4px 8px gray;"],

    ["der Übergang", "the transition", "الانتقال", "CSS",
    "Ein Übergang verändert einen CSS-Wert über eine bestimmte Zeit.",
    "transition: color 0.3s ease;"],

    ["die Animation", "the animation", "الحركة", "CSS",
    "Eine Animation verändert die Darstellung eines Elements über die Zeit.",
    "animation: move 2s infinite;"],

    ["der Umbruch", "the line break", "فاصل السطر", "HTML",
    "Ein Umbruch beginnt den folgenden Inhalt in einer neuen Zeile.",
    "Zeile 1<br>Zeile 2"],

    ["das Zeichen", "the character", "الحرف", "JavaScript",
    "Ein Zeichen ist ein einzelnes Symbol innerhalb eines Textes.",
    "let zeichen = 'A';"],

    ["die Zeichenkette", "the string", "السلسلة النصية", "JavaScript",
    "Eine Zeichenkette ist eine Folge von Zeichen.",
    "let name = 'Anna';"],

    ["die Zahl", "the number", "العدد", "JavaScript",
    "Ein Zahlenwert kann für Berechnungen verwendet werden.",
    "let alter = 25;"],

    ["der Wahrheitswert", "the boolean", "القيمة المنطقية", "JavaScript",
    "Ein Wahrheitswert ist entweder true oder false.",
    "let aktiv = true;"],

    ["der Datentyp", "the data type", "نوع البيانات", "JavaScript",
    "Ein Datentyp bestimmt die Art eines gespeicherten Wertes.",
    "typeof 'Hallo';"],

    ["die Bedingung", "the condition", "الشرط", "JavaScript",
    "Eine Bedingung entscheidet, welcher Code ausgeführt wird.",
    "if (alter >= 18) {}"],

    ["die Verzweigung", "the branch", "التفرع", "JavaScript",
    "Eine Verzweigung ermöglicht unterschiedliche Ausführungswege.",
    "if (x > 0) {} else {}"],

    ["der Vergleich", "the comparison", "المقارنة", "JavaScript",
    "Ein Vergleich prüft die Beziehung zwischen zwei Werten.",
    "5 === 5;"],

    ["der Operator", "the operator", "العامل", "JavaScript",
    "Ein Operator führt eine Berechnung oder einen Vergleich aus.",
    "let summe = 2 + 3;"],

    ["die Zuweisung", "the assignment", "الإسناد", "JavaScript",
    "Eine Zuweisung speichert einen Wert in einer Variablen.",
    "let zahl = 10;"],

    ["der Parameter", "the parameter", "المعامل", "JavaScript",
    "Ein Parameter nimmt einen Wert für eine Funktion entgegen.",
    "function addiere(a, b) {}"],

    ["das Argument", "the argument", "وسيط الاستدعاء", "JavaScript",
    "Ein Argument ist ein konkreter Wert, der einer Funktion übergeben wird.",
    "addiere(3, 4);"],

    ["der Rückgabewert", "the return value", "القيمة المعادة", "JavaScript",
    "Der Rückgabewert ist das Ergebnis, das eine Funktion zurückgibt.",
    "function verdoppeln(x) { return x * 2; }"],

    ["der Aufruf", "the function call", "الاستدعاء", "JavaScript",
    "Ein Aufruf führt eine Funktion aus.",
    "start();"],

    ["der Ausdruck", "the expression", "التعبير", "JavaScript",
    "Ein Ausdruck kombiniert Werte und Operatoren zu einem Ergebnis.",
    "2 + 3"],

    ["die Anweisung", "the statement", "التعليمة", "JavaScript",
    "Eine Anweisung beschreibt eine auszuführende Aktion.",
    "let name = 'Ali';"],

    ["der Kommentar", "the comment", "التعليق البرمجي", "JavaScript",
    "Ein Kommentar erklärt Code und wird nicht als Programmcode ausgeführt.",
    "// Das ist ein Kommentar"],

    ["die Fehlermeldung", "the error message", "رسالة الخطأ", "JavaScript",
    "Eine Fehlermeldung beschreibt ein erkanntes Problem.",
    "console.error('Fehler');"],

    ["die Ausnahme", "the exception", "الاستثناء", "JavaScript",
    "Eine Ausnahme signalisiert einen Fehler während der Programmausführung.",
    "throw new Error('Fehler');"],

    ["die Fehlerbehandlung", "the error handling", "معالجة الأخطاء", "JavaScript",
    "Die Fehlerbehandlung reagiert auf Fehler und Ausnahmen.",
    "try { start(); } catch (error) {}"],

    ["die Zeichenlänge", "the string length", "طول النص", "JavaScript",
    "Die Zeichenlänge gibt die Anzahl der Zeichen eines Textes an.",
    "'Hallo'.length;"],

    ["die Umwandlung", "the conversion", "التحويل", "JavaScript",
    "Eine Umwandlung verändert einen Wert in einen anderen Datentyp.",
    "Number('42');"],

    ["die Rundung", "the rounding", "التقريب", "JavaScript",
    "Die Rundung wandelt eine Zahl in einen gerundeten Wert um.",
    "Math.round(4.6);"],

    ["die Dezimalzahl", "the decimal number", "العدد العشري", "JavaScript",
    "Eine Dezimalzahl enthält einen Nachkommateil.",
    "let preis = 9.99;"],

    ["die Ganzzahl", "the integer", "العدد الصحيح", "JavaScript",
    "Eine Ganzzahl besitzt keinen Nachkommateil.",
    "let anzahl = 5;"],

    ["der Restwert", "the remainder", "باقي القسمة", "JavaScript",
    "Der Restwert ist der verbleibende Wert einer Division.",
    "10 % 3;"],

    ["die Wiederholung", "the repetition", "التكرار", "JavaScript",
    "Eine Wiederholung führt einen Codeabschnitt mehrfach aus.",
    "for (let i = 0; i < 3; i++) {}"],

    ["der Schleifendurchlauf", "the loop iteration", "دورة الحلقة", "JavaScript",
    "Ein Schleifendurchlauf ist eine einzelne Ausführung des Schleifeninhalts.",
    "for (let i = 0; i < 3; i++) { console.log(i); }"],

    ["die Auswahl", "the selection", "الاختيار", "JavaScript",
    "Eine Auswahl bestimmt anhand einer Bedingung einen Wert oder Ablauf.",
    "const ergebnis = aktiv ? 'Ja' : 'Nein';"],

    ["der Ereignislistener", "the event listener", "مستمع الأحداث", "JavaScript",
    "Ein Ereignislistener reagiert auf ein bestimmtes Ereignis.",
    "button.addEventListener('click', start);"],

    ["der Klick", "the click", "النقرة", "JavaScript",
    "Ein Klick ist eine Mausaktion, auf die ein Programm reagieren kann.",
    "button.addEventListener('click', start);"],

    ["der Ereignishandler", "the event handler", "معالج الأحداث", "JavaScript",
    "Ein Ereignishandler enthält den Code, der bei einem Ereignis ausgeführt wird.",
    "function handleClick() { console.log('Klick'); }"],

    ["das Dokument", "the document", "المستند", "JavaScript",
    "Das Dokument repräsentiert die geladene HTML-Seite im DOM.",
    "document.title;"],

    ["das Dokumentobjektmodell", "the Document Object Model", "نموذج كائن المستند", "JavaScript",
    "Das DOM stellt HTML-Elemente als Objekte dar, die JavaScript bearbeiten kann.",
    "document.getElementById('titel');"],

    ["das Textfeld", "the text field", "حقل النص", "HTML",
    "Ein Textfeld ermöglicht die Eingabe eines Textes.",
    "<input type='text' id='name'>"],

    ["die Benutzereingabe", "the user input", "إدخال المستخدم", "JavaScript",
    "Eine Benutzereingabe ist eine Information, die ein Benutzer eingibt.",
    "const name = answerInput.value;"],

    ["die Überprüfung", "the validation", "التحقق", "JavaScript",
    "Eine Überprüfung kontrolliert, ob eine Eingabe gültig ist.",
    "if (answer.trim() === '') {}"],

    ["die Eigenschaft", "the property", "الخاصية", "JavaScript",
    "Eine Eigenschaft beschreibt einen gespeicherten Wert eines Objekts.",
    "person.name;"],

    ["das Objekt", "the object", "الكائن", "JavaScript",
    "Ein Objekt speichert zusammengehörige Daten und Eigenschaften.",
    "const person = { name: 'Ali' };"],

    ["die Methode", "the method", "الطريقة", "JavaScript",
    "Eine Methode ist eine Funktion, die zu einem Objekt gehört.",
    "name.toLowerCase();"],

    ["die Bibliothek", "the library", "المكتبة البرمجية", "Programmierung",
    "Eine Bibliothek stellt wiederverwendbare Funktionen und Werkzeuge bereit.",
    "import { useState } from 'react';"],

    ["das Framework", "the framework", "إطار العمل", "Programmierung",
    "Ein Framework bietet eine Struktur zur Entwicklung von Software.",
    "const app = express();"],

    ["der Quellcode", "the source code", "الشيفرة المصدرية", "Programmierung",
    "Der Quellcode enthält die Anweisungen eines Programms in einer Programmiersprache.",
    "console.log('Hallo Welt');"],

    ["die Programmiersprache", "the programming language", "لغة البرمجة", "Programmierung",
    "Eine Programmiersprache ermöglicht es, Anweisungen für einen Computer zu formulieren.",
    "const sprache = 'JavaScript';"],

    ["die Datenstruktur", "the data structure", "بنية البيانات", "Programmierung",
    "Eine Datenstruktur organisiert Daten für ihre Speicherung und Verarbeitung.",
    "const zahlen = [1, 2, 3];"],

    ["der Algorithmus", "the algorithm", "الخوارزمية", "Programmierung",
    "Ein Algorithmus ist eine eindeutige Folge von Schritten zur Lösung eines Problems.",
    "function max(a, b) { return a > b ? a : b; }"],

    ["die Suche", "the search", "البحث", "Programmierung",
    "Eine Suche findet ein bestimmtes Element in einer Datenmenge.",
    "namen.find(name => name === 'Anna');"],

    ["die Sortierung", "the sorting", "الترتيب", "Programmierung",
    "Eine Sortierung ordnet Elemente nach einem bestimmten Kriterium.",
    "[3, 1, 2].sort();"],

    ["die Bedingungsprüfung", "the condition check", "فحص الشرط", "JavaScript",
    "Eine Bedingungsprüfung stellt fest, ob eine Bedingung erfüllt ist.",
    "if (punkte >= 50) { console.log('Bestanden'); }"],

    ["der logische Operator", "the logical operator", "العامل المنطقي", "JavaScript",
    "Ein logischer Operator verknüpft oder negiert Wahrheitswerte.",
    "if (aktiv && bereit) {}"],

    ["die Gleichheit", "the equality", "المساواة", "JavaScript",
    "Die Gleichheit prüft, ob zwei Werte gleich sind.",
    "5 === 5;"],

    ["die Ungleichheit", "the inequality", "عدم المساواة", "JavaScript",
    "Die Ungleichheit prüft, ob zwei Werte verschieden sind.",
    "5 !== 3;"],

    ["der Datensatz", "the data record", "سجل البيانات", "Datenbanken",
    "Ein Datensatz enthält zusammengehörige Daten zu einem Eintrag.",
    "{ id: 1, name: 'Anna' }"],

    ["die Datenbank", "the database", "قاعدة البيانات", "Datenbanken",
    "Eine Datenbank speichert Daten strukturiert und ermöglicht deren Abfrage.",
    "SELECT * FROM kunden;"],

    ["die Abfrage", "the query", "الاستعلام", "Datenbanken",
    "Eine Abfrage fordert bestimmte Daten aus einer Datenquelle an.",
    "SELECT name FROM kunden;"],

    ["die Netzwerkanfrage", "the network request", "طلب الشبكة", "Web",
    "Eine Netzwerkanfrage fordert Daten von einem Server an.",
    "fetch('/api/daten');"],

    ["die Antwort", "the response", "الاستجابة", "Web",
    "Eine Antwort enthält die Daten, die ein Server auf eine Anfrage zurückgibt.",
    "fetch('/api/daten').then(response => response.json());"],

    ["die Versionskontrolle", "the version control", "التحكم بالإصدارات", "Git",
    "Die Versionskontrolle speichert Änderungen an Dateien und ermöglicht deren Nachverfolgung.",
    "git commit -m 'Erste Version';"],

    ["der Test", "the test", "الاختبار", "Softwareentwicklung",
    "Ein Test überprüft, ob Software das erwartete Verhalten zeigt.",
    "console.assert(2 + 2 === 4);"],
     


[
    "die Datenbankabfrage",
    "the database query",
    "استعلام قاعدة البيانات",
    "Datenbanken",
    "Eine Datenbankabfrage liest Daten aus einer Datenbank oder verändert sie.",
    "SELECT name FROM users;"
],
[
    "das Datenbankfeld",
    "the database field",
    "حقل قاعدة البيانات",
    "Datenbanken",
    "Ein Datenbankfeld enthält eine bestimmte Art von Information.",
    "name VARCHAR(100)"
],
[
    "der Primärschlüssel",
    "the primary key",
    "المفتاح الأساسي",
    "Datenbanken",
    "Ein Primärschlüssel identifiziert jeden Datensatz einer Tabelle eindeutig.",
    "id INT PRIMARY KEY"
],
[
    "der Fremdschlüssel",
    "the foreign key",
    "المفتاح الخارجي",
    "Datenbanken",
    "Ein Fremdschlüssel verbindet Datensätze aus verschiedenen Tabellen miteinander.",
    "user_id INT REFERENCES users(id)"
],
[
    "die Beziehung",
    "the relationship",
    "العلاقة",
    "Datenbanken",
    "Eine Beziehung beschreibt den Zusammenhang zwischen Daten oder Tabellen.",
    "users.id = orders.user_id"
],
[
    "die Datenbankverbindung",
    "the database connection",
    "اتصال قاعدة البيانات",
    "Datenbanken",
    "Eine Datenbankverbindung ermöglicht einem Programm den Zugriff auf eine Datenbank.",
    "connection.connect();"
],
[
    "die Transaktion",
    "the transaction",
    "المعاملة",
    "Datenbanken",
    "Eine Transaktion fasst mehrere Datenbankoperationen zu einer logischen Einheit zusammen.",
    "BEGIN TRANSACTION;"
],
[
    "das Netzwerk",
    "the network",
    "الشبكة",
    "Netzwerke",
    "Ein Netzwerk verbindet Geräte, damit sie Daten austauschen können.",
    "Computer A <--> Computer B"
],
[
    "der Server",
    "the server",
    "الخادم",
    "Netzwerke",
    "Ein Server stellt anderen Geräten oder Programmen Dienste und Daten bereit.",
    "server.listen(3000);"
],
[
    "der Client",
    "the client",
    "العميل",
    "Netzwerke",
    "Ein Client nutzt einen Dienst, den ein Server bereitstellt.",
    "fetch('/api/users');"
],
[
    "die IP-Adresse",
    "the IP address",
    "عنوان IP",
    "Netzwerke",
    "Eine IP-Adresse identifiziert ein Gerät innerhalb eines IP-Netzwerks.",
    "192.168.1.10"
],
[
    "der Router",
    "the router",
    "الموجّه",
    "Netzwerke",
    "Ein Router leitet Datenpakete zwischen verschiedenen Netzwerken weiter.",
    "LAN <--> Router <--> Internet"
],
[
    "das Protokoll",
    "the protocol",
    "البروتوكول",
    "Netzwerke",
    "Ein Protokoll legt Regeln für die Kommunikation zwischen Geräten oder Programmen fest.",
    "HTTPS"
],
[
    "die Anfrage",
    "the request",
    "الطلب",
    "Netzwerke",
    "Eine Anfrage fordert Daten oder eine Aktion von einem Server an.",
    "fetch('/api/users');"
],
[
    "der Port",
    "the port",
    "المنفذ",
    "Netzwerke",
    "Ein Port ermöglicht es, Netzwerkverbindungen einem bestimmten Dienst zuzuordnen.",
    "localhost:3000"
],
[
    "die Firewall",
    "the firewall",
    "جدار الحماية",
    "Netzwerke",
    "Eine Firewall kontrolliert den Netzwerkverkehr anhand festgelegter Regeln.",
    "allowPort(443);"
],
[
    "das Betriebssystem",
    "the operating system",
    "نظام التشغيل",
    "Betriebssysteme",
    "Ein Betriebssystem verwaltet die Hardware und stellt grundlegende Dienste für Programme bereit.",
    "Windows, Linux, macOS"
],
[
    "der Prozess",
    "the process",
    "العملية",
    "Betriebssysteme",
    "Ein Prozess ist ein laufendes Programm mit eigenen Ressourcen.",
    "process.start();"
],
[
    "der Arbeitsspeicher",
    "the RAM",
    "ذاكرة الوصول العشوائي",
    "Hardware",
    "Der Arbeitsspeicher speichert Daten, die ein Computer gerade benötigt.",
    "RAM: 16 GB"
],
[
    "die Festplatte",
    "the hard drive",
    "القرص الصلب",
    "Hardware",
    "Eine Festplatte speichert Daten dauerhaft.",
    "datei.txt"
],
[
    "die Datei",
    "the file",
    "الملف",
    "Betriebssysteme",
    "Eine Datei speichert Informationen unter einem Namen.",
    "bericht.txt"
],
[
    "der Ordner",
    "the folder",
    "المجلد",
    "Betriebssysteme",
    "Ein Ordner organisiert Dateien und andere Ordner.",
    "Dokumente/"
],
[
    "das Verzeichnis",
    "the directory",
    "الدليل",
    "Betriebssysteme",
    "Ein Verzeichnis ist eine strukturierte Sammlung von Dateien und Unterverzeichnissen.",
    "cd Dokumente"
],
[
    "die Berechtigung",
    "the permission",
    "الصلاحية",
    "Betriebssysteme",
    "Eine Berechtigung legt fest, welche Aktionen ein Benutzer ausführen darf.",
    "chmod 644 datei.txt"
],
[
    "der Benutzer",
    "the user",
    "المستخدم",
    "Betriebssysteme",
    "Ein Benutzer ist ein Konto, mit dem eine Person oder ein Dienst ein System nutzt.",
    "const user = 'Ali';"
],
[
    "das Benutzerkonto",
    "the user account",
    "حساب المستخدم",
    "Betriebssysteme",
    "Ein Benutzerkonto enthält Informationen und Einstellungen für einen Benutzer.",
    "user.login();"
],
[
    "der Compiler",
    "the compiler",
    "المترجم البرمجي",
    "Softwareentwicklung",
    "Ein Compiler übersetzt Quellcode in eine andere Form, beispielsweise Maschinencode.",
    "gcc main.c -o main"
],
[
    "der Interpreter",
    "the interpreter",
    "المفسّر البرمجي",
    "Softwareentwicklung",
    "Ein Interpreter führt Programmcode aus oder verarbeitet ihn schrittweise.",
    "python main.py"
],
[
    "die Entwicklungsumgebung",
    "the development environment",
    "بيئة التطوير",
    "Softwareentwicklung",
    "Eine Entwicklungsumgebung stellt Werkzeuge zum Schreiben und Testen von Software bereit.",
    "Visual Studio Code"
],
[
    "der Debugger",
    "the debugger",
    "أداة تنقيح الأخطاء",
    "Softwareentwicklung",
    "Ein Debugger hilft dabei, Fehler in einem Programm zu untersuchen.",
    "debugger.start();"
],
[
    "der Fehler",
    "the bug",
    "الخطأ البرمجي",
    "Softwareentwicklung",
    "Ein Fehler kann dazu führen, dass sich ein Programm nicht wie erwartet verhält.",
    "console.error('Fehler');"
],
[
    "der Versionsverlauf",
    "the version history",
    "سجل الإصدارات",
    "Softwareentwicklung",
    "Der Versionsverlauf zeigt, wie sich Dateien und Projekte im Laufe der Zeit verändert haben.",
    "git log"
],
[
    "das Repository",
    "the repository",
    "مستودع الشيفرة",
    "Softwareentwicklung",
    "Ein Repository speichert Dateien und häufig auch deren Versionsgeschichte.",
    "git clone <url>"
],
[
    "die Schnittstelle",
    "the interface",
    "الواجهة",
    "Softwareentwicklung",
    "Eine Schnittstelle definiert, wie verschiedene Programme oder Komponenten miteinander kommunizieren.",
    "GET /api/users"
],
[
    "die Abhängigkeit",
    "the dependency",
    "الاعتمادية",
    "Softwareentwicklung",
    "Eine Abhängigkeit ist eine externe Bibliothek oder Komponente, die ein Programm benötigt.",
    "npm install express"
],
[
    "die Installation",
    "the installation",
    "التثبيت",
    "Softwareentwicklung",
    "Bei einer Installation werden Programme oder ihre benötigten Komponenten eingerichtet.",
    "npm install"
],
[
    "die Konfiguration",
    "the configuration",
    "الإعدادات",
    "Softwareentwicklung",
    "Eine Konfiguration legt fest, wie ein Programm oder System arbeiten soll.",
    "const port = 3000;"
],
[
    "die Bereitstellung",
    "the deployment",
    "النشر",
    "Softwareentwicklung",
    "Bei einer Bereitstellung wird Software für die Nutzung auf einem Zielsystem eingerichtet.",
    "npm run build"
],
[
    "die Anforderung",
    "the requirement",
    "المتطلب",
    "Softwareentwicklung",
    "Eine Anforderung beschreibt, welche Funktion oder Eigenschaft eine Software erfüllen soll.",
    "Anforderung: Benutzer können sich anmelden."
],
[
    "die Dokumentation",
    "the documentation",
    "التوثيق",
    "Softwareentwicklung",
    "Eine Dokumentation erklärt die Verwendung, Funktionsweise oder Einrichtung einer Software.",
    "// Diese Funktion addiert zwei Zahlen."
],
[
    "die Sicherheit",
    "the security",
    "الأمان",
    "IT-Sicherheit",
    "IT-Sicherheit schützt Systeme, Programme und Daten vor unbefugtem Zugriff und Angriffen.",
    "if (isAuthorized) { access(); }"
],
[
    "das Passwort",
    "the password",
    "كلمة المرور",
    "IT-Sicherheit",
    "Ein Passwort dient dazu, den Zugriff auf ein Konto oder System zu schützen.",
    "passwordInput.type = 'password';"
],
[
    "die Verschlüsselung",
    "the encryption",
    "التشفير",
    "IT-Sicherheit",
    "Verschlüsselung macht Daten ohne den passenden Schlüssel schwer lesbar.",
    "encrypt(data, key);"
],
[
    "die Authentifizierung",
    "the authentication",
    "المصادقة",
    "IT-Sicherheit",
    "Die Authentifizierung überprüft, wer ein Benutzer oder System ist.",
    "authenticate(username, password);"
],
[
    "die Autorisierung",
    "the authorization",
    "التخويل",
    "IT-Sicherheit",
    "Die Autorisierung legt fest, auf welche Ressourcen ein angemeldeter Benutzer zugreifen darf.",
    "if (user.isAdmin) { allow(); }"
]

];

const translations = {
    tr: {
        selector: "Seçici",
        cursor: "İmleç",
        hover: "Üzerine gelme",
        opacity: "Opaklık",
        "font-size": "Yazı tipi boyutu",
        "font-weight": "Yazı kalınlığı",
        "margin-bottom": "Alt dış boşluk",
        rtl: "Sağdan sola",
        "background-color": "Arka plan rengi",
        "border-radius": "Köşe yuvarlaklığı",
        "background-image": "Arka plan resmi",
        direction: "Yön",
        display: "Görüntüleme",
        hidden: "Gizli",
        width: "Genişlik",
        body: "Sayfa gövdesi",
        random: "Rastgele",
        floor: "Aşağı yuvarlama",
        index: "İndeks",
        "runtime error": "Çalışma zamanı hatası",
        console: "Konsol",
        event: "Olay",
        length: "Uzunluk",
        "to return": "Geri döndürmek",
        "the variable": "Değişken",
        "the command": "Komut",
        "the loop": "Döngü",
        "the function": "Fonksiyon",
        "the array": "Dizi",
        "the entry": "Kayıt",
        "the value": "Değer",
        "the list": "Liste",
        "the element": "öğe",
"the attribute": "öznitelik",
"the heading": "başlık",
"the paragraph": "paragraf",
"the link": "bağlantı",
"the form": "form",
"the input field": "giriş alanı",
"the button": "düğme",
"the image": "görsel",
"the table": "tablo",
"the row": "satır",
"the column": "sütun",
"the list item": "liste öğesi",
"the container": "kapsayıcı",
"the section": "bölüm",
"the navigation": "gezinme",
"the footer": "alt bilgi",
"the header": "üst bilgi",
"the text color": "metin rengi",
"the height": "yükseklik",
"the margin": "dış boşluk",
"the padding": "iç boşluk",
"the border": "kenarlık",
"the font family": "yazı tipi ailesi",
"the alignment": "hizalama",
"the position": "konum",
"the display type": "görüntüleme türü",
"the grid": "ızgara",
"the flexbox": "esnek kutu düzeni",
"the shadow": "gölge",
"the transition": "geçiş",
"the animation": "animasyon",
"the line break": "satır sonu",
"the character": "karakter",
"the string": "metin dizisi",
"the number": "sayı",
"the boolean": "mantıksal değer",
"the data type": "veri türü",
"the condition": "koşul",
"the branch": "koşul dalı",
"the comparison": "karşılaştırma",
"the operator": "operatör",
"the assignment": "atama",
"the parameter": "parametre",
"the argument": "argüman",
"the return value": "dönüş değeri",
"the function call": "fonksiyon çağrısı",
"the expression": "ifade",
"the statement": "komut",
"the comment": "yorum",
"the error message": "hata mesajı",
"the exception": "istisna",
"the error handling": "hata yönetimi",
"the string length": "metin dizisinin uzunluğu",
"the conversion": "dönüştürme",
"the rounding": "yuvarlama",
"the decimal number": "ondalık sayı",
"the integer": "tam sayı",
"the remainder": "kalan",
"the repetition": "tekrarlama",
"the loop iteration": "döngü yinelemesi",
"the selection": "seçim",
"the event listener": "olay dinleyicisi",
"the click": "tıklama",
"the event handler": "olay işleyicisi",
"the document": "belge",
"the dom": "Belge Nesne Modeli",
"the text field": "metin alanı",
"the user input": "kullanıcı girdisi",
"the validation": "doğrulama",
"the property": "özellik",
"the object": "nesne",
"the method": "metot",
"the library": "kütüphane",
"the framework": "çatı",
"the source code": "kaynak kod",
"the programming language": "programlama dili",
"the data structure": "veri yapısı",
"the algorithm": "algoritma",
"the search": "arama",
"the sorting": "sıralama",
"the condition check": "koşul kontrolü",
"the logical operator": "mantıksal operatör",
"the equality": "eşitlik",
"the inequality": "eşitsizlik",
"the record": "kayıt",
"the database": "veritabanı",
"the query": "sorgu",
"the network request": "ağ isteği",
"the response": "yanıt",
"the version control": "sürüm kontrolü",
"the test": "test",
"the database query": "veritabanı sorgusu",
"the data record": "veri kaydı",
"the database field": "veritabanı alanı",
"the primary key": "birincil anahtar",
"the foreign key": "yabancı anahtar",
"the relationship": "ilişki",
"the database connection": "veritabanı bağlantısı",
"the transaction": "işlem",
"the network": "ağ",
"the server": "sunucu",
"the client": "istemci",
"the ip address": "IP adresi",
"the router": "yönlendirici",
"the protocol": "protokol",
"the request": "istek",
"the port": "bağlantı noktası",
"the firewall": "güvenlik duvarı",
"the operating system": "işletim sistemi",
"the process": "işlem",
"the ram": "RAM",
"the hard drive": "sabit disk",
"the file": "dosya",
"the folder": "klasör",
"the directory": "dizin",
"the permission": "izin",
"the user": "kullanıcı",
"the user account": "kullanıcı hesabı",
"the compiler": "derleyici",
"the interpreter": "yorumlayıcı",
"the development environment": "geliştirme ortamı",
"the debugger": "hata ayıklayıcı",
"the bug": "yazılım hatası",
"the version history": "sürüm geçmişi",
"the repository": "depo",
"the interface": "arayüz",
"the dependency": "bağımlılık",
"the installation": "kurulum",
"the configuration": "yapılandırma",
"the deployment": "dağıtım",
"the requirement": "gereksinim",
"the documentation": "belgelendirme",
"the security": "güvenlik",
"the password": "şifre",
"the encryption": "şifreleme",
"the authentication": "kimlik doğrulama",
"the authorization": "yetkilendirme"
        
    },

    ru: {
        selector: "Селектор",
        cursor: "Курсор",
        hover: "Наведение курсора",
        opacity: "Непрозрачность",
        "font-size": "Размер шрифта",
        "font-weight": "Толщина шрифта",
        "margin-bottom": "Нижний внешний отступ",
        rtl: "Справа налево",
        "background-color": "Цвет фона",
        "border-radius": "Скругление углов",
        "background-image": "Фоновое изображение",
        direction: "Направление",
        display: "Отображение",
        hidden: "Скрытый",
        width: "Ширина",
        body: "Тело страницы",
        random: "Случайный",
        floor: "Округление вниз",
        index: "Индекс",
        "runtime error": "Ошибка времени выполнения",
        console: "Консоль",
        event: "Событие",
        length: "Длина",
        "to return": "Возвращать",
        "the variable": "Переменная",
        "the command": "Команда",
        "the loop": "Цикл",
        "the function": "Функция",
        "the array": "Массив",
        "the entry": "Элемент",
        "the value": "Значение",
        "the list": "Список",
        "the element": "элемент",
"the attribute": "атрибут",
"the heading": "заголовок",
"the paragraph": "абзац",
"the link": "ссылка",
"the form": "форма",
"the input field": "поле ввода",
"the button": "кнопка",
"the image": "изображение",
"the table": "таблица",
"the row": "строка",
"the column": "столбец",
"the list item": "элемент списка",
"the container": "контейнер",
"the section": "раздел",
"the navigation": "навигация",
"the footer": "нижняя часть страницы",
"the header": "верхняя часть страницы",
"the text color": "цвет текста",
"the height": "высота",
"the margin": "внешний отступ",
"the padding": "внутренний отступ",
"the border": "граница",
"the font family": "семейство шрифтов",
"the alignment": "выравнивание",
"the position": "позиция",
"the display type": "тип отображения",
"the grid": "сетка",
"the flexbox": "гибкая блочная раскладка",
"the shadow": "тень",
"the transition": "переход",
"the animation": "анимация",
"the line break": "перенос строки",
"the character": "символ",
"the string": "строка",
"the number": "число",
"the boolean": "логическое значение",
"the data type": "тип данных",
"the condition": "условие",
"the branch": "ветвь",
"the comparison": "сравнение",
"the operator": "оператор",
"the assignment": "присваивание",
"the parameter": "параметр",
"the argument": "аргумент",
"the return value": "возвращаемое значение",
"the function call": "вызов функции",
"the expression": "выражение",
"the statement": "инструкция",
"the comment": "комментарий",
"the error message": "сообщение об ошибке",
"the exception": "исключение",
"the error handling": "обработка ошибок",
"the string length": "длина строки",
"the conversion": "преобразование",
"the rounding": "округление",
"the decimal number": "десятичное число",
"the integer": "целое число",
"the remainder": "остаток",
"the repetition": "повторение",
"the loop iteration": "итерация цикла",
"the selection": "выбор",
"the event listener": "обработчик прослушивания событий",
"the click": "щелчок",
"the event handler": "обработчик события",
"the document": "документ",
"the dom": "объектная модель документа",
"the text field": "текстовое поле",
"the user input": "пользовательский ввод",
"the validation": "проверка корректности",
"the property": "свойство",
"the object": "объект",
"the method": "метод",
"the library": "библиотека",
"the framework": "фреймворк",
"the source code": "исходный код",
"the programming language": "язык программирования",
"the data structure": "структура данных",
"the algorithm": "алгоритм",
"the search": "поиск",
"the sorting": "сортировка",
"the condition check": "проверка условия",
"the logical operator": "логический оператор",
"the equality": "равенство",
"the inequality": "неравенство",
"the record": "запись",
"the database": "база данных",
"the query": "запрос",
"the network request": "сетевой запрос",
"the response": "ответ",
"the version control": "контроль версий",
"the test": "тест",
"the database query": "запрос к базе данных",
"the data record": "запись данных",
"the database field": "поле базы данных",
"the primary key": "первичный ключ",
"the foreign key": "внешний ключ",
"the relationship": "связь",
"the database connection": "подключение к базе данных",
"the transaction": "транзакция",
"the network": "сеть",
"the server": "сервер",
"the client": "клиент",
"the ip address": "IP-адрес",
"the router": "маршрутизатор",
"the protocol": "протокол",
"the request": "запрос",
"the port": "порт",
"the firewall": "межсетевой экран",
"the operating system": "операционная система",
"the process": "процесс",
"the ram": "оперативная память",
"the hard drive": "жёсткий диск",
"the file": "файл",
"the folder": "папка",
"the directory": "каталог",
"the permission": "разрешение",
"the user": "пользователь",
"the user account": "учётная запись пользователя",
"the compiler": "компилятор",
"the interpreter": "интерпретатор",
"the development environment": "среда разработки",
"the debugger": "отладчик",
"the bug": "программная ошибка",
"the version history": "история версий",
"the repository": "репозиторий",
"the interface": "интерфейс",
"the dependency": "зависимость",
"the installation": "установка",
"the configuration": "конфигурация",
"the deployment": "развёртывание",
"the requirement": "требование",
"the documentation": "документация",
"the security": "безопасность",
"the password": "пароль",
"the encryption": "шифрование",
"the authentication": "аутентификация",
"the authorization": "авторизация"
    }
};

let correctAnswers = 0;
let wrongAnswers = 0;
let aktuelleVokabel = 0;
let answerShown = false;
function updateTranslation() {
    const language = languageSelect.value;
    document.body.classList.toggle("german-mode", language === "de");
    const englishWord = vokabeln[aktuelleVokabel][1].trim().toLowerCase();

    if (language === "de") {
    arabicTranslation.textContent = "";
    arabicTranslation.style.display = "block";
    return;
}

    if (language === "ar") {
        arabicTranslation.textContent = vokabeln[aktuelleVokabel][2];
    } else {
        arabicTranslation.textContent =
            translations[language][englishWord] || englishWord;
    }

    arabicTranslation.style.display = answerShown ? "block" : "none";
}

languageSelect.addEventListener("change", updateTranslation);
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

    answerShown = false;

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

     updateTranslation();
});

answerButton.addEventListener('click', function() {
     answerShown = true;
    
    translation.style.display = 'block';
    arabicTranslation.style.display = 'block';
    explanation.style.display = 'block';
    example.style.display = 'block';

    updateTranslation();
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
