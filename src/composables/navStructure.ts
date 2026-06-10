export const navStructure = [
    {
        key: 'home',
        type: 'link',
        route: '/'
    },
    {
        key: 'about',
        type: 'link',
        route: '/about'
    },

    {
        key: 'products',
        type: 'dropdown',
        children: [
            {
                key: 'batteries',
                route: '/categories/batteries',
            },
            {
                key: 'lubricants',
                route: '/categories/lubricants',
            },
            {
                key: 'filters',
                route: '/categories/filters',
            },
            {
                key: 'tires',
                route: '/categories/tires',

            }
        ]
    },

    {
        key: 'brands',
        type: 'dropdown',
        children: [
            {
                key:  'panasonic',
                route: '/brands/panasonic',
            },
            {
                key: 'philips',
                route: '/brands/phillips',

            } ,
            {
                key: 'delphix',
                route: '/brands/delphix',
            },
            {
                key: 'denzo',
                route: '/brands/denzo',
            },
            {
                key: 'platin',
                route: '/brands/platin',
            },
            {
                key: 'westol',
                route: '/brands/westol',
            }
        ]
    },
    {
        key: 'oem',
        type: 'link',
        route: '/oem'
    },
    { key: 'manufacturing', type: 'link', route: '/manufacturing'  },
    { key: 'news', type: 'link' , route: '/news'  },
    { key: 'certificates', type: 'link' , route: '/certificates'  },
    {
        key: 'contact',
        type: 'link' ,
        route: '/contact'
    }
]