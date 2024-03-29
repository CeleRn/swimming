export default [{
        name: 'Главная',
        href: '/',
    },
    {
        name: 'Федерация',
        // linkName: 'О федерации',
        href: '/federation',
        desktopVisible: true,
        childs: [{
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
        // linkName: 'Все соревнования',
        href: '/competitions',
        desktopVisible: true,
        // childs: [
        //   {
        //     name: 'Всероссийские',
        //     href: '/competitions/russia'
        //   },
        //   {
        //     name: 'Чемпионат МО',
        //     href: '/competitions/championship-mo'
        //   },
        //   {
        //     name: 'Золотая рыбка',
        //     href: '/competitions/gold-fish'
        //   },
        //   {
        //     name: 'Районные соревнования',
        //     href: '/competitions/gold-fish'
        //   },
        // ]
    },
    {
        name: 'Профессионалам',
        href: '/professionals',
        desktopVisible: true,
        childs: [
          {
            name: 'Сборы',
            href: '/professionals/places'
          },
          {
            name: 'Материалы',
            href: '/professionals/materials'
          }
        ]
    },
    {
        name: 'Контакты',
        href: '/contacts',
        desktopVisible: false
    },
]