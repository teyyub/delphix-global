export const navStructure = [
    { key: 'home', type: 'link' },
    { key: 'about', type: 'link' },

    {
        key: 'products',
        type: 'dropdown',
        children: [
            { key: 'batteries' },
            { key: 'lubricants' },
            { key: 'filters' },
            { key: 'tires' }
        ]
    },

    {
        key: 'brands',
        type: 'dropdown',
        children: [
            { key: 'panosonic' },
            { key: 'phillips' } ,
            { key: 'delphix' },
            { key: 'denzo' },
            { key: 'platin' },
            { key: 'westol' }
        ]
    },
    { key: 'oem', type: 'link' },
    { key: 'manufacturing', type: 'link' },
    { key: 'news', type: 'link' },
    { key: 'contact', type: 'link' }
]