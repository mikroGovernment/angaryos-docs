var editLinkTextTr = 'Bu dokümanı güncelle';
var editLinkTextEn = 'Edit in GitHub';

var sidebarTr = [
    {
        title: 'Giriş',
        toc: true,
        children: [
            {
                title: 'Hızlı Başlangıç',
                link: '/'
            },
            {
                title: 'Tanıtım',
                link: './docs/giris/tanitim'
            },
            {
                title: 'Kurulum',
                link: '/docs/giris/kurulum'
            }
        ]
    },
    {
        title: 'Tablolar ve Kolonlar',
        children: [
            {
                title: 'Tablolara Giriş',
                link: '/docs/tablolarvekolonlar/tablolaragiris'
            }, 
            {
                title: 'Listeler',
                link: '/docs/tablolarvekolonlar/listeler'
            }, 
            {
                title: 'Formlar',
                link: '/docs/tablolarvekolonlar/formlar'
            }, 
            {
                title: 'Bilgi Kartları',
                link: '/docs/tablolarvekolonlar/bilgikartilari'
            }, 
            {
                title: 'Kolonlara Giriş',
                link: '/docs/tablolarvekolonlar/kolonlaragiris'
            }, 
            {
                title: 'İlişkili Tablolar',
                link: '/docs/tablolarvekolonlar/iliskilitablolar'
            }, 
            {
                title: 'İlişkili Kolonlar',
                link: '/docs/tablolarvekolonlar/iliskilikolonlar'
            }, 
            {
                title: 'Doğrulamalar',
                link: '/docs/tablolarvekolonlar/dogrulamalar'
            }, 
            {
                title: 'Üst Kolonlar',
                link: '/docs/tablolarvekolonlar/ustkolonlar'
            }, 
            {
                title: 'Toplu Bilgi',
                link: '/docs/tablolarvekolonlar/toplubilgi'
            },
            {
                title: 'Kolon Varsayılanı',
                link: '/docs/tablolarvekolonlar/kolonvarsayilani'
            }, 
            {
                title: 'Kolon Bilgisi',
                link: '/docs/tablolarvekolonlar/kolonbilgi'
            },
            {
                title: 'Kolon Dizileri ve Setleri',
                link: '/docs/tablolarvekolonlar/kolondizilerivesetleri'
            }
        ]
    },
    {
        title: 'Yetkiler',
        toc: false,
        children: [
            {
                title: 'Yetki Oluşturma Yardımcısı',
                link: '/docs/yetkiler/yetkiolusturmayardimcisi'
            },
            {
                title: 'Filtreler',
                link: '/docs/yetkiler/filtreler'
            }
        ]
    },
    {
        title: 'Yardımcı Özellikler',
        toc: false,
        children: [
            {
                title: 'Referanslar',
                link: '/docs/yardimciozellikler/referanslar'
            },
            {
                title: 'Tetikleyiciler',
                link: '/docs/yardimciozellikler/tetikleyiciler'
            },
            {
                title: 'Görevler',
                link: '/docs/yardimciozellikler/gorevler'
            },
            {
                title: 'Yardımcı Fonksiyonlar',
                link: '/docs/yardimciozellikler/yardimcifonksiyonlar'
            },
            {
                title: 'Yardımcı Sınıflar',
                link: '/docs/yardimciozellikler/yardimcisiniflar'
            },
            {
                title: 'Ayarlar',
                link: '/docs/yardimciozellikler/ayarlar'
            },
            {
                title: 'Duyurular',
                link: '/docs/yardimciozellikler/duyurular'
            },
            {
                title: 'Tablo Grupları',
                link: '/docs/yardimciozellikler/tablogruplari'
            },
            {
                title: 'Ek Linkler',
                link: '/docs/yardimciozellikler/eklinkler'
            },
            {
                title: 'Serbest İçerik',
                link: '/docs/yardimciozellikler/serbesticerik'
            },
            {
                title: 'Üyelik İstekleri',
                link: '/docs/yardimciozellikler/tetikleyiciler'
            },
            {
                title: 'Ekstralar',
                link: '/docs/yardimciozellikler/ekstralar'
            }
        ]
    },
    {
        title: 'İçe / Dışa Aktarma',
        link: '/docs/icedisaaktarma'
    },
    {
        title: 'Raporlar',
        link: '/docs/icedisaaktarma'
    },
    {
        title: 'Data Entagratör',
        toc: false,
        children: [
            {
                title: 'Data Entagratöre Giriş',
                link: '/docs/dataentegrator/'
            },
            {
                title: 'Excel',
                link: '/docs/dataentegrator/excel'
            },
            {
                title: 'Postgresql',
                link: '/docs/dataentegrator/postgresql'
            },
            {
                title: 'Ldap',
                link: '/docs/dataentegrator/ldap'
            }
        ]
    },
    {
        title: 'E-imza',
        link: '/docs/eimza'
    },
    {
        title: 'Harita',
        toc: false,
        children: [
            {
                title: 'Harita Giriş',
                link: '/docs/harita/haritayagiris'
            },
            {
                title: 'Serbest Harita',
                link: '/docs/harita/serbestharita'
            },
            {
                title: 'Katmanlar',
                link: '/docs/harita/katmanlar'
            },
            {
                title: 'Katman Stili',
                link: '/docs/harita/katmanstili'
            },
            {
                title: 'Coğrafi Veri Üretme',
                link: '/docs/harita/cografiveriuretme'
            }
        ]
    },
    {
        title: 'IOT',
        toc: false,
        children: [
            {
                title: 'Cihaz Auth',
                link: '/docs/iot/cihazauth'
            },
            {
                title: 'Mesai Takip Cihazı',
                link: '/docs/iot/mesaitakipcihazi'
            }
        ]
    },
    {
        title: 'Frontend',
        toc: false,
        children: [
            {
                title: 'Göstergeler',
                link: '/docs/frontend/gostergeler'
            },
            {
                title: 'Kolon Arayüz Tetiklemeleri',
                link: '/docs/frontend/kolonarayuztetiklemeleri'
            },
            {
                title: 'Form Kolon Görünürlükleri',
                link: '/docs/frontend/formkolongorunurlukleri'
            }
        ]
    },
    {
        title: 'Geliştirici (Backend)',
        toc: false,
        children: [
            {
                title: 'Genel',
                link: '/docs/gelistiriciback/genel'
            },
            {
                title: 'Mimari',
                link: '/docs/gelistiriciback/mimari'
            },
            {
                title: 'Router',
                link: '/docs/gelistiriciback/router'
            },
            {
                title: 'Controller',
                link: '/docs/gelistiriciback/controller'
            },
            {
                title: 'Models',
                link: '/docs/gelistiriciback/models'
            },
            {
                title: 'Listeners',
                link: '/docs/gelistiriciback/listeners'
            },
            {
                title: 'Triggers',
                link: '/docs/gelistiriciback/triggers'
            },
            {
                title: 'Kernel',
                link: '/docs/gelistiriciback/kernel'
            },
            {
                title: 'Jobs',
                link: '/docs/gelistiriciback/jobs'
            },
            {
                title: 'Custom Logs',
                link: '/docs/gelistiriciback/customlogs'
            }
        ]
    },
    {
        title: 'Geliştirici (Frontend)',
        toc: false,
        children: [
            {
                title: 'Genel',
                link: '/docs/gelistiricifront/genel'
            },
            {
                title: 'Mimari',
                link: '/docs/gelistiricifront/mimari'
            },
            {
                title: 'Custom List Elements',
                link: '/docs/gelistiricifront/customlistelements'
            },
            {
                title: 'Custom Form Elements',
                link: '/docs/gelistiricifront/customformelements'
            },
            {
                title: 'Custom Dashboard Elements',
                link: '/docs/gelistiricifront/customdashboardelements'
            }
        ]
    },
    {
        title: 'Mobil',
        toc: false,
        children: [
            {
                title: 'Genel',
                link: '/docs/mobil/genel'
            }
        ]
    },
    {
        title: 'Doküman Oluşturma Rehberi',
        toc: false,
        children: [
            {
                title: 'Şalon Sayfa',
                link: '/docs/dokumanolusturmarehberi/sablonsayfa'
            },
            {
                title: 'Kullanılabilecek Nesneler',
                link: '/docs/dokumanolusturmarehberi/kullanilabileceknesneler'
            }
        ]
    },
    {
        title: 'GitHub',
        link: githubLinkBase
    }
];

var sidebarEn = [
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