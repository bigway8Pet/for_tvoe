export const Calendar = () => {
  const day = new Date()
  const date =
    day.getDate().toString().length === 1 ? `0${day.getDate()}` : day.getDate()
  const month =
    day.getMonth().toString().length === 1
      ? `0${day.getMonth()}`
      : day.getMonth()
  switch (day.getDay()) {
    case 1:
      return `ПН, ${date}.${month}.${day.getFullYear()}`
    case 2:
      return `ВТ, ${date}.${month}.${day.getFullYear()}`
    case 3:
      return `СР, ${date}.${month}.${day.getFullYear()}`
    case 4:
      return `ЧТ, ${date}.${month}.${day.getFullYear()}`
    case 5:
      return `ПТ, ${date}.${month}.${day.getFullYear()}`
    case 6:
      return `СБ, ${date}.${month}.${day.getFullYear()}`
    case 7:
      return `ВС, ${date}.${month}.${day.getFullYear()}`
  }
}
