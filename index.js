;(function calc() {
  let screen = document.querySelector('.screen')
  let screen2 = document.querySelector('.screen2')
  let buttons = document.querySelectorAll('.btn')
  let deleteBtn = document.querySelector('.btn-delete')
  let clear = document.querySelector('.btn-clear')
  let equal = document.querySelector('.btn-equal')

  buttons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      let values = e.target.dataset.set
      screen.value += values
    })
  })

  equal.addEventListener('click', () => {
    if (screen.value === '' && screen2.value === '') {
      screen.value = ''
      screen2.value = ''
    } else {
      let answer = eval(screen.value)
      screen2.value = answer
    }
  })

  clear.addEventListener('click', (e) => {
    screen.value = ''
    screen2.value = ''
  })

  deleteBtn.addEventListener('click', () => {
    screen.value = screen.value.pop([screen.value.length - 1])
  })
})()
