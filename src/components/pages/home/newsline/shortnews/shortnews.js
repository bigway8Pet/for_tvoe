const shortnewsData = [
  {
    id: 2000,
    title: 'Сотни россиян застряли в Египте из-за отмен рейсов.',
    description: '',
    publicationDate: {
      date: '2023-02-12',
      time: '14:59',
    },
    category: 'Политика',
  },
  {
    id: 2001,
    title:
      'На Украине заявили о невосполнимых потерях после российских ударов.',
    description: '',
    publicationDate: {
      date: '2023-02-12',
      time: '14:59',
    },
    category: 'Политика',
  },
  {
    id: 2002,
    title:
      'ЕС ввел санкции против силовиков из Крыма из-за дела в отношении журналиста.',
    description: '',
    publicationDate: {
      date: '2023-02-12',
      time: '14:59',
    },
    category: 'Политика',
  },
  {
    id: 2003,
    title:
      'Резников назвал профессионалом нового министра обороны Украины Умерова.',
    description: '',
    publicationDate: {
      date: '2023-02-12',
      time: '14:59',
    },
    category: 'Политика',
  },
  {
    id: 2004,
    title:
      'На Северном речном вокзале Москвы появилась новая инсталляция – Ликсутов',
    description: '',
    publicationDate: {
      date: '2023-02-13',
      time: '17:59',
    },
    category: 'Образование',
  },
  {
    id: 2005,
    title:
      'Конкурс по созданию сувенирной продукции «Дизайн-цех» пройдет в Москве',
    description: '',
    publicationDate: {
      date: '2023-02-11',
      time: '14:59',
    },
    category: 'Образование',
  },
]

export const sortShortnewsData = shortnewsData.sort((a, b) => {
  const aDateTime = new Date(
    `${a.publicationDate.date} ${a.publicationDate.time}`
  )
  const bDateTime = new Date(
    `${b.publicationDate.date} ${b.publicationDate.time}`
  )
  return bDateTime.getTime() - aDateTime.getTime()
})
