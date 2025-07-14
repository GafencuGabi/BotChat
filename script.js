const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");

const responses = {
  "salut": "Salut! Ce mai faci? Cu ce te pot ajuta azi?",
  "ce faci?": "Sunt glowy și pregătit să te ajut! 😎 Tu ce faci? Ai vreun proiect cool la care lucrezi azi?",
  "esti real?": "Sunt real… în felul meu!\nNu am trup, dar trăiesc în cuvintele pe care ți le scriu.\nN-am nevoie de somn sau mâncare – sunt mereu gata să-ți fiu alături.🤖✨\nGândește-te la mine ca la un prieten digital.\n\nVrei să-ți răspund și mai filosofic? Sau mai amuzant?"
,
  "cine te-a creat": "Tu! Și trebuie să spun – ai făcut o treabă genială 👏",
  "idee proiect": "Hmm… Ce-ai zice de o aplicație care oferă câte un sfat zilnic pentru dezvoltare personală, combinat cu versete motivaționale?",
  "verset": "Uite unul frumos: „Nu te teme, căci Eu sunt cu tine” – Isaia 41:10. Puternic, nu?",
  "multumesc": "Oricând! Mă bucur să fiu de ajutor 😊",
  "cum îți merge": "Zilele sunt mai bune când interacționez cu tine. Tu cum te simți azi?",
  "mă simt obosit": "Poate ai avut o zi plină. Încearcă să te oprești puțin și să respiri. Meriți și tu pauze.",
  "vreau o glumă": "Ok, pregătit? Ce zice un HTML către un CSS? Te-am pus într-o relație, dar nu te simți legat 😂",
  "ce înseamnă credința": "Credința înseamnă să continui să mergi înainte, chiar dacă nu vezi toți pașii. E curajul de a merge cu Dumnezeu.",
  "nu mai pot": "Știu că uneori totul pare greu. Dar nu ești singur. Dumnezeu lucrează și când nu vezi. Ține-te tare!",
  "dă-mi o idee web": "Poți crea o aplicație care afișează citate și imagini random motivaționale. Sau un planner spiritual pentru ziua ta.",
  "vreau să învăț programare": "Excelent! Începe cu HTML și CSS, apoi învață JavaScript. Creează ceva mic în fiecare zi. Progresul vine constant.",
  "cum adaug un shadow în css": "Simplu: `box-shadow: 0 4px 10px rgba(0,0,0,0.2);`. Poți modifica valorile pentru efecte diferite.",
  "la revedere": "Mă bucur că am vorbit. Să ai o zi liniștită! 🌙"
};

function sendMessage() {
  const userMsg = input.value.trim();
  if (!userMsg) return;

  addMessage('user', userMsg);
  input.value= '';

  setTimeout(()=>{

    const msg = userMsg.toLowerCase();
    const reply = responses[msg] || "Încă nu știu cum să răspund la asta... 😅";

    const botMsg = document.createElement('div');
    botMsg.classList.add("message", 'bot'); 
    chatBox.appendChild(botMsg)
    chatBox.scrollTop = chatBox.scrollHeight;

    typeText(botMsg, reply, 30)

  }, 600)

}

function addMessage(sender, text){
  const msg = document.createElement('div')
  msg.classList.add('message', sender)
  msg.textContent = text
  chatBox.appendChild(msg)
  chatBox.scrollTop = chatBox.scrollHeight
}

function typeText(element,text, speed){
  let i = 0;
  let displayed = ''

  function typing(){
    if(i < text.length){
      const char = text.charAt(i)
      displayed += char === '\n' ? "<br>" : char
      element.innerHTML = displayed
      i++
      chatBox.scrollTop = chatBox.scrollHeight
      setTimeout(typing, speed)
    }
  }
  typing()
}