document.getElementById('timeline').addEventListener('click', timeline)
document.getElementById('analytical').addEventListener('click', analytical)
document.getElementById('difference').addEventListener('click', difference)
let answer
// The let answer, allows answer to be determined. The three event listers above the "let" statment allows teh Javascript to locate the information needed to gather from the HTML document.//

function timeline () {
  answer = confirm('Timeline')
  if (answer) {
    window.location = 'https://assignment-3.trenthodgins.repl.co'
  }
}

function analytical () {
  answer = confirm('Analytical Engine')
  if (answer) {
    window.location = 'https://assignment-3.trenthodgins.repl.co/index2.html'
  }
}

function difference () {
  answer = confirm('Difference Engine')
  if (answer) {
    window.location = 'https://assignment-3.trenthodgins.repl.co/index3.html'
  }
}

// These three fuctions are similar, they do the same thing, the only difference is the name, button, and link. They make it that when a button is clicked you get taken to a different page on the website.//
