const incidentsCardsData = [
  {
    category: 'Проишествия',
    publicationDate: {
      date: '2023-01-01',
      time: '13:53',
    },
    title:
      'Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли',
    imageName: 'fura-vehala-v-gruppu-unnih-velosipedistov',
    reactions: [
      {
        heart_eyes: 23,
      },
      { rage: 10 },
      { poo: 15 },
      { comment: 5 },
      { bookmark: 7 },
    ],
  },
  {
    category: 'Проишествия',
    publicationDate: {
      date: '2023-01-01',
      time: '13:53',
    },
    title:
      'Семилетняя девочка из Екатеринбурга умерла после купания в Черном море',
    imageName: 'kak-skeitbording-stal-populyarnim',
    reactions: [
      {
        heart_eyes: 23,
      },
      { rage: 10 },
      { poo: 15 },
      { comment: 5 },
      { bookmark: 7 },
    ],
  },
  {
    category: 'Проишествия',
    publicationDate: {
      date: '2023-01-01',
      time: '13:53',
    },
    title: 'Теннис — спорт леди и джентльменов. Как разобраться в нем?',
    imageName: 'semiletyaya-devochka-is-ekatirenburga',
    reactions: [
      {
        heart_eyes: 23,
      },
      { rage: 10 },
      { poo: 15 },
      { comment: 5 },
      { bookmark: 7 },
    ],
  },
  {
    category: 'Проишествия',
    publicationDate: {
      date: '2023-01-02',
      time: '13:53',
    },
    title:
      'Как скейтбординг стал популярным видом спорта и модной субкультурой?',
    imageName: 'tenis-sport-ledi-i-dzhentelmenov',
    reactions: [
      {
        likes: 10,
      },
      { rage: 10 },
      { comment: 5 },
      { bookmark: 7 },
    ],
  },
]

export const sortIncidentsCardsData = incidentsCardsData.sort((a, b) => {
  const aDateTime = new Date(
    `${a.publicationDate.date} ${a.publicationDate.time}`
  )
  const bDateTime = new Date(
    `${b.publicationDate.date} ${b.publicationDate.time}`
  )
  return bDateTime.getTime() - aDateTime.getTime()
})
