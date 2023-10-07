const readAlsoCardsData = [
  {
    category: 'Политика',
    publicationDate: {
      date: '2023-01-01',
      time: '13:53',
    },
    title: 'Синоптик спрогнозировал срок наступления бабьего лета',
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
    category: 'Политика',
    publicationDate: {
      date: '2023-01-01',
      time: '13:53',
    },
    title: 'Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы',
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
    category: 'Политика',
    publicationDate: {
      date: '2023-01-01',
      time: '13:53',
    },
    title: 'Невролог назвала основные способы лечения мигрени',
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
    category: 'Политика',
    publicationDate: {
      date: '2023-01-02',
      time: '13:53',
    },
    title: 'Случайно попавшая новость для проверки сортировки',
    reactions: [
      {
        likes: 10,
      },
      { rage: 10 },
      { comment: 5 },
      { bookmark: 7 },
    ],
  },
  {
    category: 'Политика',
    publicationDate: {
      date: '2023-01-01',
      time: '11:53',
    },
    title:
      'Раскрыты последствия уничтожения беспилотника в небе над Подмосковьем',
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
]

export const sortReadAlsoCardsData = readAlsoCardsData.sort((a, b) => {
  const aDateTime = new Date(
    `${a.publicationDate.date} ${a.publicationDate.time}`
  )
  const bDateTime = new Date(
    `${b.publicationDate.date} ${b.publicationDate.time}`
  )
  return bDateTime.getTime() - aDateTime.getTime()
})
