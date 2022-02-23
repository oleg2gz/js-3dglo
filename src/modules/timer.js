const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')

  let interval

  const convert2digit = (num) => {
    const str = String(num)
    return str.length < 2 ? `0${str}` : str
  }

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let hours = Math.floor(timeRemaining / 60 / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return {
      hours,
      minutes,
      seconds,
      timeRemaining,
    }
  }

  const updateClock = () => {
    const { hours, minutes, seconds, timeRemaining } = getTimeRemaining()

    if (timeRemaining <= 0) {
      clearInterval(interval)
      timerHours.textContent = '00'
      timerMinutes.textContent = '00'
      timerSeconds.textContent = '00'
      return
    }

    timerHours.textContent = convert2digit(hours)
    timerMinutes.textContent = convert2digit(minutes)
    timerSeconds.textContent = convert2digit(seconds)
  }

  updateClock()
  interval = setInterval(updateClock, 1000)
}

export default timer
