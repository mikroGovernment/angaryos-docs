var editLinkTextTr = 'Bu dokümanı güncelle';
var editLinkTextEn = 'Edit in GitHub';

var sidebarTr = [
    {
        title: 'Giriş',
        toc: false,
        children: [
            {
                title: 'Hızlı Başlangıç',
                link: '/angaryos-docs/baslangic',
                openInNewTab: false
            },
            {
                title: 'Tanıtım',
                link: '/angaryos-docs/docs/giris/tanitim',
                openInNewTab: false
            },
            {
                title: 'Kurulum',
                link: '/angaryos-docs/docs/giris/kurulum'//varsayılan şifreleri burada ver
            }
        ]
    },
    {
        title: 'Tablolar ve Kolonlar',
        children: [
            {
                title: 'Tablolara Giriş',
                link: '/angaryos-docs/docs/tablolarvekolonlar/tablolaragiris'
            }, 
            {
                title: 'Listeler',
                link: '/angaryos-docs/docs/tablolarvekolonlar/listeler'//TODO dom işlemleri, hızlı düzenle, canlı veri hepsini burada anlat
            }, 
            {
                title: 'Formlar',
                link: '/angaryos-docs/docs/tablolarvekolonlar/formlar'//gui trigger kısaca burada girilebilir
            }, 
            {
                title: 'Bilgi Kartları',
                link: '/angaryos-docs/docs/tablolarvekolonlar/bilgikartilari'
            }, 
            {
                title: 'Kolonlara Giriş',
                link: '/angaryos-docs/docs/tablolarvekolonlar/kolonlaragiris'//tüm kolon tipleri. select ler içinde source: display: şekilnde arama, başka yer yoksa kolon eklerken girdiğimiz tüm fieldleri açıkla. autocomplaete gibi gui triggerları da. gui trigger bişeyni içine de alınabilr. kolon arayüz tetiklemeler başlık olarak var ama o geliiştirici kısmında var olanlar nederede açıklanacak bi incele
            }, 
            {
                title: 'İlişkili Tablolar',
                link: '/angaryos-docs/docs/tablolarvekolonlar/iliskilitablolar'
            }, 
            {
                title: 'İlişkili Kolonlar',
                link: '/angaryos-docs/docs/tablolarvekolonlar/iliskilikolonlar'
            }, 
            {
                title: 'Doğrulamalar',
                link: '/angaryos-docs/docs/tablolarvekolonlar/dogrulamalar'
            }, 
            {
                title: 'Üst Kolonlar',
                link: '/angaryos-docs/docs/tablolarvekolonlar/ustkolonlar'
            }, 
            {
                title: 'Toplu Bilgi',
                link: '/angaryos-docs/docs/tablolarvekolonlar/toplubilgi'
            },
            {
                title: 'Kolon Varsayılanı',
                link: '/angaryos-docs/docs/tablolarvekolonlar/kolonvarsayilani'
            }, 
            {
                title: 'Kolon Bilgisi',
                link: '/angaryos-docs/docs/tablolarvekolonlar/kolonbilgi'
            },
            {
                title: 'Kolon Dizileri ve Setleri',
                link: '/angaryos-docs/docs/tablolarvekolonlar/kolondizilerivesetleri'
            }
        ]
    },
    {
        title: 'Yetkiler',
        toc: false,
        children: [
            {
                title: 'Yetki Oluşturma Yardımcısı',
                link: '/angaryos-docs/docs/yetkiler/yetkiolusturmayardimcisi'
            },
            {
                title: 'Filtreler',
                link: '/angaryos-docs/docs/yetkiler/filtreler'
            }
        ]
    },
    {
        title: 'Yardımcı Özellikler',
        toc: false,
        children: [
            {
                title: 'Referanslar',
                link: '/angaryos-docs/docs/yardimciozellikler/referanslar'
            },
            {
                title: 'Tetikleyiciler',
                link: '/angaryos-docs/docs/yardimciozellikler/tetikleyiciler'
            },
            {
                title: 'Görevler',
                link: '/angaryos-docs/docs/yardimciozellikler/gorevler'
            },
            {
                title: 'Yardımcı Fonksiyonlar',
                link: '/angaryos-docs/docs/yardimciozellikler/yardimcifonksiyonlar'
            },
            {
                title: 'Yardımcı Sınıflar',
                link: '/angaryos-docs/docs/yardimciozellikler/yardimcisiniflar'
            },
            {
                title: 'Ayarlar',
                link: '/angaryos-docs/docs/yardimciozellikler/ayarlar'
            },
            {
                title: 'Duyurular',
                link: '/angaryos-docs/docs/yardimciozellikler/duyurular'
            },
            {
                title: 'Tablo Grupları',
                link: '/angaryos-docs/docs/yardimciozellikler/tablogruplari'
            },
            {
                title: 'Ek Linkler',
                link: '/angaryos-docs/docs/yardimciozellikler/eklinkler'
            },
            {
                title: 'Serbest İçerik',
                link: '/angaryos-docs/docs/yardimciozellikler/serbesticerik'
            },
            {
                title: 'Üyelik İstekleri',
                link: '/angaryos-docs/docs/yardimciozellikler/tetikleyiciler'
            },
            {
                title: 'Arama',
                link: '/angaryos-docs/docs/yardimciozellikler/arama'//genel string arama, haritada string arma, coğrafi arama
            },
            {
                title: 'Ekstralar',
                link: '/angaryos-docs/docs/yardimciozellikler/ekstralar'
            },
            {
                title: 'Güvenlik',//bunu biraz yukarı alabiliriz//sql enj// xss filter
                link: '/angaryos-docs/docs/yardimciozellikler/guvenlik'
            }
        ]
    },    
    {
        title: 'Çoklu Dil',
        toc: false,
        children: [
            {
                title: 'Backend',
                link: '/angaryos-docs/docs/language/backend'//lib, helper, config/language
            },
            {
                title: 'Frontend',
                link: '/angaryos-docs/docs/language/frontend'//languagehelper
            }
        ]
    },
    {
        title: 'İçe / Dışa Aktarma',
        link: '/angaryos-docs/docs/icedisaaktarma'
    },
    {
        title: 'Raporlar',
        link: '/angaryos-docs/docs/raporlar',
        /*
        italic' => true,
							
							
            $style['A1'] = 
        [
            'color' => '#0000ff',
            'background-color' => '#cCffff',
            'merge-cell' => 'I1',
            'font-size' => 12,
            'font-family' => 'Times New Roman',
            'height' => 24,
            'bold' => true,
            'horizontal' => 'HORIZONTAL_CENTER',
            'vertical' =>  'VERTICAL_CENTER',
            'border' => 
            [
                'area' => 'A1:I10',
                'type' => 'allBorders',
                'color' => '#000000',
                'size' => 'MEDIUM'
            ]
        ];
        
        
        $baslikSitili = 
        [
            'bold' => true,
            'font-family' => 'Times New Roman',
            'font-size' => 10,
            'horizontal' => 'HORIZONTAL_CENTER',
            'vertical' =>  'VERTICAL_CENTER',
            'height' => 26,
            'wrap-text' => true
        ];

        'border' => 
            [
                'type' => 'outline',
                'color' => '#000000',
                'size' => 'MEDIUM'
            ]
            
            
            left: ->getLeft()
            right: ->getRight()
            top: ->getTop()
            bottom: ->getBottom()
            diagonal: ->getDiagonal()
            
            
            //https://stackoverflow.com/questions/46959282/styling-cell-borders-with-phpspreadsheet-php
            
            
            Border::BORDER_DASHDOT
            Border::BORDER_DASHDOTDOT
            Border::BORDER_DASHED
            Border::BORDER_DOTTED
            Border::BORDER_DOUBLE
            Border::BORDER_HAIR
            Border::BORDER_MEDIUM
            Border::BORDER_MEDIUMDASHDOT
            Border::BORDER_MEDIUMDASHDOTDOT
            Border::BORDER_MEDIUMDASHED
            Border::BORDER_NONE
            Border::BORDER_SLANTDASHDOT
            Border::BORDER_THICK
            Border::BORDER_THIN




            Alignment::HORIZONTAL_GENERAL or 'general'
            Alignment::HORIZONTAL_LEFT or 'left'
            Alignment::HORIZONTAL_RIGHT or 'right'
            Alignment::HORIZONTAL_CENTER or 'center'
            Alignment::HORIZONTAL_CENTER_CONTINUOUS or 'centerContinuous'
            Alignment::HORIZONTAL_JUSTIFY or 'justify'
            Alignment::HORIZONTAL_FILL or 'fill'
            Alignment::HORIZONTAL_DISTRIBUTED or 'distributed' (Excel2007 only)
            for vertical alignment:
            Alignment::VERTICAL_BOTTOM or 'bottom'
            Alignment::VERTICAL_TOP or 'top'
            Alignment::VERTICAL_CENTER or 'center'
            Alignment::VERTICAL_JUSTIFY or 'justify'
            Alignment::VERTICAL_DISTRIBUTED or 'distributed' (Excel2007 only)
        */
    },
    {
        title: 'Data Entagratör',
        toc: false,
        children: [
            {
                title: 'Data Entagratöre Giriş',
                link: '/angaryos-docs/docs/dataentegrator/'
            },
            {
                title: 'Excel',
                link: '/angaryos-docs/docs/dataentegrator/excel'
            },
            {
                title: 'Postgresql',
                link: '/angaryos-docs/docs/dataentegrator/postgresql'
            },
            {
                title: 'Ldap',
                link: '/angaryos-docs/docs/dataentegrator/ldap'
            }
        ]
    },
    {
        title: 'E-imza',
        link: '/angaryos-docs/docs/eimza'
    },
    {
        title: 'Harita',
        toc: false,
        children: [
            {
                title: 'Harita Giriş',
                link: '/angaryos-docs/docs/harita/haritayagiris'
            },
            {
                title: 'Serbest Harita',
                link: '/angaryos-docs/docs/harita/serbestharita'
            },
            {
                title: 'Katmanlar',
                link: '/angaryos-docs/docs/harita/katmanlar'//lejant ve sağ tık ile lejant kapatma  // ek katmanlar da koy onun içinde tablo kolunu da var açıkla
            },
            {
                title: 'Katman Stili',
                link: '/angaryos-docs/docs/harita/katmanstili'//örnek sld ve js koy
            },
            {
                title: 'Coğrafi Veri Üretme',
                link: '/angaryos-docs/docs/harita/cografiveriuretme'
            }
        ]
    },
    {
        title: 'IOT',
        toc: false,
        children: [
            {
                title: 'Cihaz Auth',
                link: '/angaryos-docs/docs/iot/cihazauth'
            },
            {
                title: 'Mesai Takip Cihazı',
                link: '/angaryos-docs/docs/iot/mesaitakipcihazi'
            }
        ]
    },

    //Bu frontend tamamen kaldırılabilir. geliştirici içine göstergeler ve geliştirme koyulabilir
    {
        title: 'Frontend',
        toc: false,
        children: [
            {
                title: 'Göstergeler',
                link: '/angaryos-docs/docs/frontend/gostergeler'
            },
            /*{
                title: 'Kolon Arayüz Tetiklemeleri',
                link: '/angaryos-docs/docs/frontend/kolonarayuztetiklemeleri' //taşındı ama o geliştirici. var olanlar burada açıklaabilir belki?
            },
            {
                title: 'Form Kolon Görünürlük Kuralları', //aynı şekilde bu da tukarıdaki gibi.
                link: '/angaryos-docs/docs/frontend/formkolongorunurlukleri'
            }*/
        ]
    },
    {
        title: 'Geliştirici (Backend)',
        toc: false,
        children: [
            {
                title: 'Genel',
                link: '/angaryos-docs/docs/gelistiriciback/genel'
            },
            {
                title: 'Mimari',
                link: '/angaryos-docs/docs/gelistiriciback/mimari'
            },
            {
                title: 'Router',
                link: '/angaryos-docs/docs/gelistiriciback/router'
            },
            {
                title: 'Debugging',
                link: '/angaryos-docs/docs/gelistiriciback/debugging'//dd_live, pipe içinden stop column classification //tüm variables buraya koy
            },
            {
                title: 'Controller',
                link: '/angaryos-docs/docs/gelistiriciback/controller'
            },
            {
                title: 'Models',
                link: '/angaryos-docs/docs/gelistiriciback/models'
            },
            {
                title: 'Listeners',
                link: '/angaryos-docs/docs/gelistiriciback/listeners'
            },
            {
                title: 'Triggers',
                link: '/angaryos-docs/docs/gelistiriciback/triggers'
            },
            {
                title: 'Kernel',
                link: '/angaryos-docs/docs/gelistiriciback/kernel'
            },
            {
                title: 'Jobs',
                link: '/angaryos-docs/docs/gelistiriciback/jobs'
            },
            {
                title: 'Custom Logs',
                link: '/angaryos-docs/docs/gelistiriciback/customlogs'
            }
            //buraya genel helper fonksiyonları yada direk fonksiyon lardan bazıları açıklanabilir
            //get_base_record()
        ]
    },
    {
        title: 'Geliştirici (Frontend)',
        toc: false,
        children: [ //TODO Sıralama değişebilir
            {
                title: 'Genel',
                link: '/angaryos-docs/docs/gelistiricifront/genel'
            },
            {
                title: 'Mimari',
                link: '/angaryos-docs/docs/gelistiricifront/mimari'
            },
            {
                title: 'Custom List Elements',
                link: '/angaryos-docs/docs/gelistiricifront/customlistelements'
            },
            {
                title: 'Custom Form Elements',
                link: '/angaryos-docs/docs/gelistiricifront/customformelements'
            },
            {
                title: 'Custom Dashboard Elements',
                link: '/angaryos-docs/docs/gelistiricifront/customdashboardelements'
            },
            {
                title: 'Column Visibility Rules',
                link: '/angaryos-docs/docs/gelistiricifront/columnvisibilityrules'
            },
            {
                title: 'Kolon Arayüz Tetiklemeleri',
                link: '/angaryos-docs/docs/frontend/kolonarayuztetiklemeleri' 
            },
        ]
    },
    {
        title: 'Mobil',
        toc: false,
        children: [
            {
                title: 'Genel',
                link: '/angaryos-docs/docs/mobil/genel'
            }
        ]
    },
    {
        title: 'Doküman Oluşturma Rehberi',
        toc: false,
        children: [
            {
                title: 'Şalon Sayfa',
                link: '/angaryos-docs/docs/dokumanolusturmarehberi/sablonsayfa'
            },
            {
                title: 'Kullanılabilecek Nesneler',
                link: '/angaryos-docs/docs/dokumanolusturmarehberi/kullanilabileceknesneler'
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