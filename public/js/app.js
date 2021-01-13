console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  const location = search.value
  fetch(`http://10.0.0.5:8080/weather?address=${location}`).then((response) => {
    response.json().then( ( { error, forecast, location } = {} ) => {
      if (error) {
        return messageOne.textContent = error
      }
      messageOne.textContent = location
      messageTwo.textContent = forecast
    })
  })
})