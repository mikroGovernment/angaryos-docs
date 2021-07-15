var editLinkTextTr = 'GitHub da guncelle';
var editLinkTextEn = 'Edit in GitHub';

var sidebarTr = [
    {
        title: 'Baslik',
        children: [
            {
                title: 'Ana Sayfa',
                link: '/'
            },
            {
                title: 'Yeni',
                link: '/docs/yeni'
            }
        ]
    },

    {
        title: 'GitHub',
        link: githubLinkBase
    }
];

var sidebarEn = [
    // A sidebar item, with child links
    {
        title: 'Title',
        children: [
            {
                title: 'Home Page',
                link: '/en/'
            },
            {
                title: 'New',
                link: '/en/yeni'
            }
        ]
    },

    {
        title: gitHubText, 
        link: githubLinkBase
    }
];

var languageSelect = {
    '/': {
        language: 'Turkce'
    },
    '/en/': {
        language: 'English',
        editLinkText: editLinkTextEn,
        sidebar: sidebarEn
    }
};