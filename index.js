let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rajesh","to":"Varakumar"}';

let parsed=JSON.parse(greeting);

let fromEl=document.getElementById('from')
fromEl.textContent="From: "+parsed.from

let toEl=document.getElementById('to')
toEl.textContent="To: "+parsed.to

let greetTextElement = document.getElementById("para");
greetTextElement.textContent = parsed.greetText;