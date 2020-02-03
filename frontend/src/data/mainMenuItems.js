export default [
  {
    name: 'Федерация',
    href: '/federation',
    desktopVisible: true,
    childs: [
      {
        name: 'Руководство',
        href: '/management'
      },
      {
        name: 'Приказы',
        href: '/orders'
      },
      {
        name: 'Документы',
        href: '/documents'
      },
    ]
  },
  {
    name: 'Соревнования',
    href: '/competitions',
    desktopVisible: true,
    childs: [
      {
        name: 'Всероссийские',
        href: '/competitions/russia'
      },
      {
        name: 'Чемпионат МО',
        href: '/competitions/championship-mo'
      },
      {
        name: 'Золотая рыбка',
        href: '/competitions/gold-fish'
      },
      {
        name: 'Районнные соревнования',
        href: '/competitions/gold-fish'
      },
    ]
  },
  {
    name: 'Профессионалам',
    href: '/professionals',
    desktopVisible: true,
    childs: [
      {
        name: 'Сборы',
        href: '/professionals/fees'
      },
      {
        name: 'Материалы',
        href: '/professionals/materials'
      },
      {
        name: 'Таблица очков FINA',
        href: '/fina-tables'
      },
    ]
  },
  {
    name: 'Контакты',
    href: '/contacts',
    desktopVisible: false
  },
]