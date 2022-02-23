'use strict'

const title = document.querySelector('h1')
const spanWeekday = document.getElementById('weekday')
const spanCurrentTime = document.getElementById('current-time')
const spanNewYearDays = document.getElementById('new-year')

// Склонение числительных
const titles = ['день', 'дня', 'дней']
const decOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2]

  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}

const countNewYear = () => {
  const msOneDay = 1000 * 60 * 60 * 24
  const msNow = new Date().getTime()
  const msNewYear = new Date(2023, 0, 1).getTime()

  return Math.round((msNewYear - msNow) / msOneDay) > 0
    ? Math.round((msNewYear - msNow) / msOneDay)
    : 0
}

const collectData = () => {
  const date = new Date()
  const hour = date.getHours()
  const digitClock = date.toLocaleString('en-En', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  const weekday = date.toLocaleString('ru-Ru', { weekday: 'long' })
  const daysToNewYear = countNewYear()

  return { digitClock, hour, weekday, daysToNewYear }
}

const showMessages = () => {
  const { digitClock, hour, weekday, daysToNewYear } = collectData()

  switch (true) {
    case hour >= 4 && hour < 11:
      title.textContent = 'Доброе утро!'
      break

    case hour >= 11 && hour < 18:
      title.textContent = 'Добрый день!'
      break

    case hour >= 18 && hour < 23:
      title.textContent = 'Добрый вечер!'
      break

    case hour >= 23:
    case hour >= 0 && hour < 4:
      title.textContent = 'Доброй ночи!'
  }

  spanWeekday.textContent = weekday[0].toUpperCase() + weekday.slice(1)
  spanCurrentTime.textContent = digitClock
  spanNewYearDays.textContent = `${daysToNewYear} ${decOfNum(
    daysToNewYear,
    titles
  )}`
}

showMessages()

setInterval(showMessages, 1000)
