export const navStructure = [
    { key: 'home', type: 'link' },
    { key: 'about', type: 'link' },

    {
        key: 'products',
        type: 'dropdown',
        children: [
            { key: 'cosmetics' },
            { key: 'hairCare' },
            { key: 'skinCare' },
            { key: 'supplements' }
        ]
    },

    { key: 'brands', type: 'link' },
    { key: 'oem', type: 'link' },
    { key: 'manufacturing', type: 'link' },
    { key: 'news', type: 'link' },
    { key: 'contact', type: 'link' }
]