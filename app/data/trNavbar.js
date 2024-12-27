export const trMenuItems = [
    { 
      "name": "Ana Sayfa", 
      "link": "/" 
    },
    { 
      "name": "Hakkımızda", 
      "link": "/about" 
    },
    {
      "name": "Tedaviler",
      "subItems": [
        {
          "name": "Diş Tedavileri",
          "subItems": [
            {
              "name": "Diş Protezleri",
              "img": "dentures.png",
              "link": "/dental-treatments",
              "description": "Diş protezleri, eksik dişlerin yerine geçerek gülüşünüzün fonksiyonunu ve görünümünü geri kazandırmak için tasarlanmış çıkarılabilir diş protezleridir. Medikaray Kliniği'nde, özel ihtiyaçlarınıza göre hem parsiyel hem de tam protezler sunuyoruz ve konfor, işlevsellik ve doğal bir görünüm sağlıyoruz.",
              "subItems": [
                {
                  "name": "Parsiyel Protezler",
                  "img": "partial dentures.png",
                  "link": "/dental-treatments",
                  "description": "Parsiyel protezler, birkaç eksik dişi yerine koyarken çevredeki doğal dişleri korumak için kullanılır. Metal veya akrilik bir çerçeveden ve ona bağlı yapay dişlerden oluşur, destek ve stabilite sağlar.",
                  "overview": "Parsiyel protezler, birkaç eksik dişi yerine koyarken çevredeki doğal dişleri korumak için kullanılır. Metal veya akrilik bir çerçeveden ve ona bağlı yapay dişlerden oluşur, destek ve stabilite sağlar.",
                  "benefits": [
                    "Çiğneme ve konuşma işlevlerini daha doğal bir şekilde geri kazandırır",
                    "Kalan doğal dişlerin kaymasını önler",
                    "Konforlu ve güvenli bir uyum için özelleştirilebilir"
                  ],
                  "suitableFor": "Birkaç eksik dişi olan ancak sağlıklı dişleri bulunan hastalar için idealdir. Parsiyel protezler, dental implantlara hazır olmayanlar için de iyi bir çözümdür.",
                  "preparationAndAftercare": "İlk adımlar, ölçümler, ısırma değerlendirmeleri ve mükemmel uyum sağlamak için bir deneme aşamasını içerir. Bakım, protezin düzenli temizlenmesini, protezi yerinden çıkarabilecek belirli yiyeceklerden kaçınılmasını ve düzenli diş kontrollerini içerir.",
                  "expectedResultsAndTimeline": "Parsiyel protezler, gülüş ve işlevde anında iyileşme sağlar, nihai ayarlamalar birkaç haftalık kullanım sonrası yapılır.",
                  "cost": "Parsiyel protezlerin maliyeti, kullanılan malzeme türüne (ör. akrilik, metal) ve tasarımın karmaşıklığına bağlı olarak değişir. Konsültasyon sırasında detaylı bir tahmin sağlanır.",
                  "whyChooseMedikaray": "Parsiyel protezlerimiz, konfor ve dayanıklılık için tasarlanmıştır. Yüksek kaliteli malzemeler ve hassas işçilikle optimal uyum sağlanır."
                },
                {
                  "name": "Tam Protezler",
                  "img": "dentures.png",
                  "link": "/dental-treatments",
                  "description": "Tam protezler, üst veya alt çenedeki tüm dişlerin değiştirilmesi gerektiğinde kullanılır. Diş etlerinin üzerine oturan bir tabana bağlı tam bir protez diş setinden oluşur, doğal bir görünüm ve geliştirilmiş işlevsellik sağlar.",
                  "overview": "Tam protezler, üst veya alt çenedeki tüm dişlerin değiştirilmesi gerektiğinde kullanılır. Diş etlerinin üzerine oturan bir tabana bağlı tam bir protez diş setinden oluşur, doğal bir görünüm ve geliştirilmiş işlevsellik sağlar.",
                  "benefits": [
                    "Yeme ve konuşma işlevlerini tamamen geri kazandırır",
                    "Yanak ve dudakları destekleyerek yüz görünümünü iyileştirir",
                    "Doğal ve rahat bir uyum için özel olarak yapılır"
                  ],
                  "suitableFor": "Tam protezler, üst veya alt çenedeki tüm doğal dişlerini kaybetmiş ve gülüşlerini ve diş fonksiyonlarını geri kazandıracak cerrahi olmayan bir çözüm arayan bireyler için idealdir.",
                  "preparationAndAftercare": "Süreç, ölçülerin alınması, doğru hizalamayı sağlamak için bir deneme protezi takılması ve nihai setin oluşturulmasını içerir. Uygun bakım, protezlerin düzenli olarak temizlenmesini ve gerektiğinde diş hekimine ziyaretleri içerir.",
                  "expectedResultsAndTimeline": "Hastalar, çiğneme, konuşma ve gülüş yeteneğinde gelişme bekleyebilirler. Ağız yeni protezlere uyum sağladıkça tam adaptasyon birkaç hafta sürebilir.",
                  "cost": "Tam protezlerin maliyeti, kullanılan malzemeler ve özelleştirme seviyesine bağlı olarak değişir. İlk değerlendirme sonrasında bireysel bir teklif sunulur.",
                  "whyChooseMedikaray": "Diş protezlerimiz, konfor, işlevsellik ve estetik arasında mükemmel bir denge sağlar. Ekibimiz, en iyi uyum için hassas ölçümler ve dikkatli ayarlamalar yapar."
                }
              ]
            },
            {
                "name": "Estetik Diş Hekimliği",
                "img": "aesthetic dentistery.png",
                "link": "/dental-treatments",
                "description": "Medikaray Kliniği'nde estetik diş hekimliği, gülüşünüzün görünümünü gelişmiş ve kişiselleştirilmiş diş çözümleriyle iyileştirmeye odaklanır. Tedavilerimiz, en son teknolojiyi ve uzman bakımı bir araya getirerek size güzel ve doğal bir gülüş sunar.",
                "subItems": [
                  {
                    "name": "Hollywood Gülüşü Veneerleri",
                    "img": "veneers.png",
                    "link": "/dental-treatments",
                    "description": "Dişlerinizin ön yüzeyine yerleştirilen, yüksek kaliteli diş malzemesinden yapılmış ultra ince kaplamalar.",
                    "image": "/hollywood-smile-veneers.jpg",
                    "benefits": [
                      "Gülüş estetiğinde anında iyileşme",
                      "Minimal invaziv yöntem, hızlı iyileşme",
                      "Doğal görünüme sahip olacak şekilde kişiselleştirilebilir"
                    ],
                    "suitableFor": "Mükemmel bir gülüşe sahip olmak isteyenler için idealdir. Küçük diş kusurları olanlar veya dramatik bir gülüş dönüşümü arayanlar için mükemmeldir.",
                    "preparationAndAftercare": {
                      "preparation": "Dişlerin hafif şekillendirilmesini ve veneerlerin oluşturulması için ölçülerin alınmasını içerebilir.",
                      "aftercare": "Leke yapıcı maddelerden kaçının ve iyi ağız hijyeni uygulayın."
                    },
                    "expectedResults": {
                      "timeline": "Türkiye'de bir ziyaret",
                      "duration": "Veneerler, uygun bakım ile 10-15 yıl dayanabilir."
                    },
                    "cost": "Fiyatlar kullanılan malzeme ve kapsanan diş sayısına göre değişir. Konsültasyondan sonra özelleştirilmiş fiyat teklifi sunulur."
                  },
                  {
                    "name": "Diş Kronları",
                    "img": "dental crowns (1).png",
                    "link": "/dental-treatments",
                    "description": "Hasarlı veya zayıflamış dişlerin şeklini, boyutunu ve gücünü eski haline getirirken estetik iyileştirme sağlayan özel yapım kaplamalar.",
                    "image": "/dental-crowns.jpg",
                    "benefits": [
                      "Dişin tam fonksiyonunu ve görünümünü geri kazandırır",
                      "Dişleri daha fazla hasardan korur",
                      "Dayanıklı ve uzun ömürlüdür"
                    ],
                    "suitableFor": "Kırık, çatlamış veya ciddi çürümüş dişleri olan hastalar veya kanal tedavisinden sonra destek gerektirenler için önerilir.",
                    "preparationAndAftercare": {
                      "preparation": "Kronun uyacağı şekilde dişin boyutunun küçültülmesi ve ölçü alınmasını içerir.",
                      "aftercare": "Sert yiyeceklerden kaçının ve kronun güvenli kalması için düzenli diş kontrolleri yapın."
                    },
                    "expectedResults": {
                      "timeline": "Anında restorasyon",
                      "duration": "Kronlar, kullanılan malzeme ve bakıma bağlı olarak 15-20 yıl dayanabilir."
                    },
                    "cost": "Fiyat, seçilen malzemeye (örneğin, porselen, metal, zirkonya) göre değişir. Online konsültasyon sırasında ayrıntılı fiyatlandırma sağlanır."
                  },
                  {
                    "name": "Dijital Gülüş Tasarımı (DSD)",
                    "img": "digital smile design.png",
                    "link": "/dental-treatments",
                    "description": "Tedavi başlamadan önce prosedürleri planlamak ve görselleştirmek için dijital teknolojiyi kullanan yenilikçi bir yaklaşım.",
                    "image": "/digital-smile-design.jpg",
                    "benefits": [
                      "Beklenen sonuçların hassas, dijital görselleştirilmesi",
                      "Yüz şekliniz ve tercihlerinizle uyumlu kişiselleştirilmiş tedavi planlaması",
                      "Hem hastalar hem de diş hekimleri için tahmin hatalarını minimize eder"
                    ],
                    "suitableFor": "Tedavi hakkında kapsamlı bilgi almak isteyen ve kapsamlı diş estetiği düşünen kişiler için idealdir.",
                    "preparationAndAftercare": {
                      "preparation": "Yüksek çözünürlüklü dijital taramalar ve fotoğraflarla başlar. Hasta önizlemesi ve olası düzenlemelerle bir tedavi planı tasarlanır.",
                      "aftercare": "Sonuçtan memnuniyet sağlamak için takip konsültasyonları yapılır."
                    },
                    "expectedResults": {
                      "timeline": "İlgili prosedürlerin karmaşıklığına bağlıdır.",
                      "description": "Son tedavi, planlanan dijital tasarıma uyacak şekilde tamamlanır ve kendinden emin bir gülüş dönüşümü sağlar."
                    },
                    "cost": "Tedavi planının karmaşıklığına ve ek prosedürlere bağlı olarak değişir. Net fiyatlandırma için kişisel konsültasyonlar sunulur."
                  }
                ]
            },
            {
                "name": "Diş İmplantları",
                "img": "dental implants.png",
                "link": "/dental-treatments",
                "description": "Diş implantları, eksik dişler için uzun ömürlü ve doğal görünümlü bir çözüm sunar. Medikaray Kliniği'nde, tek diş implantlarından All-on-Four ve All-on-Six gibi tam ağız restorasyonlarına kadar ihtiyaçlarınıza göre özelleştirilmiş çeşitli implant seçenekleri sunuyoruz. Uzman ağız cerrahlarımız ve modern teknolojimiz sayesinde deneyiminiz sorunsuz, güvenli ve etkili olur.",
                "subItems": [
                  {
                    "name": "Tek Diş İmplantı",
                    "link": "/dental-treatments",
                    "img": "single dental implant.png",
                    "description": "Bir eksik dişi değiştirmek için çene kemiğine bir titanyum vida yerleştirilir ve üzerine doğal bir görünüm ve his için bir kron eklenir. Çene kemiği yoğunluğunu korur ve çevredeki dişlerin kaymasını önler.",
                    "overview": "Tek diş implantı, bir eksik dişi değiştirmek için kullanılır. Çene kemiğine yapay bir kök gibi davranan bir titanyum vida yerleştirilir ve üzerine doğal bir görünüm ve his sağlamak için bir kron takılır.",
                    "benefits": [
                      "Çene kemiği yoğunluğunu korur",
                      "Çevredeki dişlerin kaymasını önler",
                      "Doğal dişlerin görünümüne uygun bir görünüm sağlar"
                    ],
                    "suitableFor": "Sağlıklı çevre dişlere ve yeterli çene kemiği yoğunluğuna sahip olan bireyler için idealdir.",
                    "preparationAndAftercare": {
                      "preparation": "Süreç bir danışma, implantın yerleştirilmesi ve kron takılmadan önce birkaç aylık bir iyileşme dönemi içerir.",
                      "aftercare": "Hijyen talimatlarına uyun ve iyileşme dönemi boyunca sert gıdalardan kaçının."
                    },
                    "expectedResults": {
                      "timeline": "Hastalar, doğal ve kusursuz bir görünüm bekleyebilir.",
                      "duration": "Tüm süreç, iyileşme süresine bağlı olarak 3-6 ay sürebilir."
                    },
                    "cost": "Maliyet, implant malzemesi türü ve kemik greftleri gibi hazırlık prosedürlerine ihtiyaç olup olmadığı gibi faktörlere bağlı olarak değişir. İlk danışma sırasında bireysel bir teklif sunulur.",
                    "whyChoose": "İmplantlarımız yüksek kaliteli malzemelerden yapılır ve uzmanlarımız uzun vadeli dayanıklılık ve konfor sağlamak için hassas bir yerleştirme yapar."
                  },
                  {
                    "name": "All-on-Four Diş İmplantları",
                    "img": "all on 4.png",
                    "link": "/dental-treatments",
                    "description": "Dört stratejik implantla desteklenen tam kemer restorasyonu. Bu yöntem, önemli diş kaybı yaşayan hastalar için artırılmış stabilite ve güvenli bir diş seti sağlar.",
                    "overview": "All-on-Four implantlar, dört stratejik implantın sabit bir diş setini desteklediği tam kemer çözümüdür. Bu yöntem, önemli diş kaybı olan hastalar için idealdir ve anında güvenli bir sonuç sağlar.",
                    "benefits": [
                      "Tek bir prosedürde hızlı gülüş dönüşümü",
                      "Geleneksel protezlere kıyasla artırılmış stabilite",
                      "Tekli implantlara kıyasla daha az kemik kaybı"
                    ],
                    "suitableFor": "Ciddi diş kaybı yaşayan hastalar veya her diş için bireysel implanta ihtiyaç duymadan üst veya alt diş kemerini değiştirmek isteyenler için en iyisidir.",
                    "preparationAndAftercare": {
                      "preparation": "Süreç, çene kemiği sağlığını değerlendiren kapsamlı bir incelemeyle başlar. İmplantlar yerleştirilir ve iyileşme süresi boyunca geçici bir diş seti takılır.",
                      "aftercare": "Kalıcı dişler, iyileşme döneminden sonra takılır."
                    },
                    "expectedResults": {
                      "timeline": "Hastalar, işlevsel ve estetik bir diş setiyle bir günde ayrılır.",
                      "duration": "İmplantların tam iyileşmesi ve entegre olması genellikle birkaç ay sürer."
                    },
                    "cost": "All-on-Four tedavilerinin maliyeti, kullanılan malzeme türüne ve prosedürün karmaşıklığına bağlı olarak değişebilir. Konsültasyondan sonra kişiye özel tahminler sunuyoruz.",
                    "whyChoose": "İleri tekniklere ve hasta konforuna öncelik vererek mükemmel sonuçlar sağlıyoruz. Ekiplerimiz, implantların sabit ve doğal görünümlü bir gülüş elde edilmesi için hassas bir şekilde yerleştirilmesini sağlar."
                  },
                  {
                    "name": "All-on-Six Diş İmplantları",
                    "img": "all on 6.png",
                    "link": "/dental-treatments",
                    "description": "Altı implant, çiğneme fonksiyonunu artıran ve daha fazla stabilite sağlayan tam bir üst veya alt diş setini destekler. Yeterli çene kemiği yoğunluğuna sahip bireyler için uygundur.",
                    "overview": "All-on-Six tedavisi, altı implantın çene kemiğine yerleştirilmesini ve tam bir üst veya alt diş setini desteklemesini içerir. Bu yaklaşım, All-on-Four'a kıyasla artırılmış stabilite sağlar ve daha fazla kemik yoğunluğuna sahip hastalar için uygundur.",
                    "benefits": [
                      "Diş kemeri için daha fazla stabilite sağlar",
                      "Çene kemiğini daha verimli korur",
                      "Geliştirilmiş çiğneme fonksiyonu ve estetik"
                    ],
                    "suitableFor": "All-on-Four'a göre daha güçlü ve uzun ömürlü bir çözüm arayan, yeterli çene kemiği yoğunluğuna sahip bireyler için mükemmeldir.",
                    "preparationAndAftercare": {
                      "preparation": "All-on-Four'a benzer şekilde, süreç implantların yerleştirilmesini ve bir iyileşme dönemini içerir. Hastalar, iyileşmeden sonra güvence altına alınan nihai diş setine kadar geçici protezler alır.",
                      "aftercare": "Uygun iyileşme ve entegrasyonu sağlamak için takip randevuları gerekli olacaktır."
                    },
                    "expectedResults": {
                      "timeline": "Hastalar anında iyileşmiş işlevsellik ve görünümden yararlanır.",
                      "duration": "Tam iyileşme, implantların çene kemiğiyle tamamen bütünleşmesini sağlamak için birkaç ay sürebilir."
                    },
                    "cost": "All-on-Six tedavilerinin maliyeti, ek implantlar ve kullanılan malzemeler nedeniyle All-on-Four'a göre daha yüksek olabilir. Ayrıntılı bir değerlendirme sonrasında fiyatlandırma yapılır.",
                    "whyChoose": "Tedaviyi optimize etmek ve konforu sağlamak için en son implant teknolojisini kullanıyoruz. Deneyimli uzmanlarımız, mümkün olan en stabil ve doğal sonuçları elde etmeye çalışır."
                  },
                  {
                    "name": "Anında İmplantlar",
                    "img": "immediate implants.png",
                    "link": "/dental-treatments",
                    "description": "Diş çekiminden hemen sonra yerleştirilen implantlar, normal fonksiyona daha hızlı dönüş sağlar ve ikinci bir ameliyat gereksinimini ortadan kaldırır. İyileşme sırasında geçici protezler sağlanır.",
                    "overview": "Anında implantlar, bir diş çekiminden hemen sonra yerleştirilir ve hastaların işlemden hemen sonra yeni bir diş veya geçici bir protez almasını sağlar.",
                    "benefits": [
                      "İkinci bir ameliyat gereksinimini ortadan kaldırır",
                      "Genel tedavi süresini kısaltır",
                      "Normal fonksiyona daha hızlı dönüş sağlar"
                    ],
                    "suitableFor": "Sağlıklı diş etlerine ve diş çekiminden hemen sonra bir implantı desteklemek için yeterli kemik yoğunluğuna sahip olan hastalar için idealdir.",
                    "preparationAndAftercare": {
                      "preparation": "Hemen yerleştirmenin uygun olup olmadığını belirlemek için kapsamlı bir değerlendirme gereklidir. İmplant, çekim sırasında yerleştirilir ve ardından geçici bir kron veya köprü uygulanır.",
                      "aftercare": "Optimal iyileşme için operasyon sonrası talimatları dikkatlice takip etmek gerekir."
                    },
                    "expectedResults": {
                      "timeline": "Hastalar, işlevsel ve geçici bir dişle ayrılabilir.",
                      "duration": "Tam entegrasyon birkaç ay sürebilir ve iyileşmeden sonra kalıcı bir kron yerleştirilir."
                    },
                    "cost": "Maliyet, vakanın karmaşıklığı ve kullanılan implant türü gibi faktörlere bağlıdır. Kişiselleştirilmiş bir danışma sırasında detaylı bir tahmin sağlanır.",
                    "whyChoose": "İleri planlama ve cerrahi hassasiyet kullanarak hem fonksiyonel hem de estetik anında implantlar sunuyoruz. Mükemmelliğe olan bağlılığımız, sorunsuz bir hasta deneyimi sağlar."
                  }
                ]
            }, 
            {
                "name": "Ortodonti",
                "img": "orthodontics.png",
                "link": "/dental-treatments",
                "description": "Ortodonti, dişlerin ve çenelerin hizalanmamış durumlarını teşhis, önleme ve tedavi etmeye odaklanan bir diş hekimliği dalıdır. Medikaray Kliniği olarak, kendinden emin ve düzgün bir gülüşe ulaşmanıza yardımcı olacak bir dizi ileri düzey ortodontik tedavi sunuyoruz. Geleneksel diş tellerinden şeffaf plaklara ve daha gelişmiş seçeneklere kadar, deneyimli ortodonti uzmanlarımız ihtiyaçlarınıza özel en iyi bakımı sunmak için burada.",
                "subItems": [
                  {
                    "name": "Geleneksel Metal Diş Telleri",
                    "img": "traditional metal braces.png",
                    "link": "/dental-treatments",
                    "description": "Geleneksel metal diş telleri, hizalanmamış dişleri, ısırma sorunlarını ve çene problemlerini düzeltmek için güvenilir ve zamanla test edilmiş bir yöntemdir. Metal braketler, teller ve elastiklerden oluşur ve dişleri zamanla istenen pozisyonlara hareket ettirir.",
                    "benefits": [
                      "Her türlü ortodontik sorun için etkili",
                      "Diş hareketi üzerinde hassas kontrol sağlar",
                      "Diğer seçeneklere kıyasla dayanıklı ve uygun maliyetli"
                    ],
                    "suitableFor": "Özellikle ciddi hizalama sorunları olan her yaş grubu için uygundur ve kapsamlı tedavi gerektirir.",
                    "preparationAndAftercare": {
                      "preparation": "İlk danışmanlıklar röntgen, dijital taramalar ve bir tedavi planını içerir.",
                      "aftercare": "Düzenli takip randevuları, ağız hijyeninin korunması ve sert ya da yapışkan yiyeceklerden kaçınılmasını içerir."
                    },
                    "expectedResults": {
                      "timeline": "Tedavi süresi, vakanın ciddiyetine bağlı olarak genellikle 18-36 ay arasında sürer.",
                      "description": "Tedavi sonunda düzgün hizalanmış bir gülüş ve iyileştirilmiş dental fonksiyon elde edilir."
                    },
                    "cost": "Geleneksel metal diş tellerinin maliyeti, tedavinin uzunluğuna ve vakanın karmaşıklığına bağlı olarak değişir. İlk değerlendirmeden sonra bireysel bir tahmin sunulur."
                  },
                  {
                    "name": "Şeffaf Plaklar",
                    "img": "invisalign -clear liners-.png",
                    "link": "/dental-treatments",
                    "description": "Şeffaf plaklar, Invisalign gibi, geleneksel diş tellerine modern bir alternatiftir. Çıkartılabilir, şeffaf tepsiler dişleri kademeli olarak istenen pozisyona taşır. Plaklar, dişlerinize özel olarak üretilir ve neredeyse görünmezdir, bu da onları gizli bir tedavi seçeneği arayanlar için popüler bir tercih haline getirir.",
                    "benefits": [
                      "Neredeyse görünmez, daha estetik bir seçenek sunar",
                      "Yemek, içmek ve ağız hijyeni için çıkarılabilir",
                      "Tel ve braketlerin neden olduğu tahrişi önleyen rahat bir yapı"
                    ],
                    "suitableFor": "Hafif ila orta düzey hizalama sorunları olan ve daha gizli ve esnek bir tedavi tercih eden bireyler için idealdir.",
                    "preparationAndAftercare": {
                      "preparation": "Süreç, özel bir tedavi planı oluşturmak için dijital izlenimler ve 3D tarama ile başlar.",
                      "aftercare": "Plaklar, ortodontistin önerdiği şekilde günde 20-22 saat takılmalı ve her 1-2 haftada bir değiştirilmelidir."
                    },
                    "expectedResults": {
                      "timeline": "Şeffaf plak tedavisi, vakanın karmaşıklığına bağlı olarak genellikle 12-18 ay sürer.",
                      "description": "Hastalar, dişlerin kademeli ve rahat bir şekilde hizalanmasını bekleyebilir."
                    },
                    "cost": "Maliyet, gerekli plak sayısına ve tedavi süresine bağlı olarak değişir. Danışmanlık sırasında ayrıntılı bir fiyatlandırma sağlanır."
                  },
                  {
                    "name": "Lingual Braketler",
                    "img": "lingual breaces.png",
                    "link": "/dental-treatments",
                    "description": "Lingual braketler, geleneksel metal diş tellerine benzerdir ancak dişlerin arkasına (lingual tarafına) yerleştirilir ve dışarıdan tamamen görünmez hale gelir. Bu seçenek, diş hizalamasını düzeltmek için gizli bir yol sunar.",
                    "benefits": [
                      "Başkalarına görünmez, daha estetik bir görünüm sağlar",
                      "Geniş bir yelpazedeki ortodontik sorunları düzeltmek için etkili",
                      "Her hastanın benzersiz diş yapısına özel olarak tasarlanır"
                    ],
                    "suitableFor": "Görünür braket ve teller olmadan diş teli faydalarını isteyen yetişkinler ve gençler için idealdir.",
                    "preparationAndAftercare": {
                      "preparation": "Süreç, özel izlenimler ve bir tedavi planını içerir.",
                      "aftercare": "Hastalar, dişlerinin arkasındaki tellerin hissine uyum sağlamak zorundadır. Düzenli takipler ilerlemeyi izlemek için önemlidir."
                    },
                    "expectedResults": {
                      "timeline": "Tedavi süresi geleneksel diş tellerine benzer, genellikle 18-36 ay arasında değişir.",
                      "description": "Sonuç, düzgün hizalanmış, güzel bir gülüştür."
                    },
                    "cost": "Lingual braketler, gerektirdiği özelleştirme nedeniyle genellikle geleneksel metal diş tellerinden daha pahalıdır. Fiyatlandırma, ilk danışma sırasında paylaşılır."
                  },
                  {
                    "name": "Erken Ortodontik Tedavi (Önleyici Ortodonti)",
                    "img": "orthodontics.png",
                    "link": "/dental-treatments",
                    "description": "Erken ortodontik tedavi veya önleyici ortodonti, çocuklar ve ergenlik öncesi dönemdeki bireyler için tasarlanmıştır. Bu tür tedavi, çenenin büyümesini yönlendirmeye ve ileride ciddi hizalama sorunlarını önlemeye yardımcı olur.",
                    "benefits": [
                      "Gelecekte daha ciddi ortodontik sorunları önler",
                      "Daha invaziv tedavilere duyulan ihtiyacı azaltır",
                      "Çenenin ve dişlerin büyümesini yönlendirir"
                    ],
                    "suitableFor": "Çene ve dişlerin hala gelişmekte olduğu 7-10 yaş arası çocuklar için önerilir.",
                    "preparationAndAftercare": {
                      "preparation": "İlk danışma, kapsamlı bir inceleme ve değerlendirmeyi içerir.",
                      "aftercare": "Gelişimi izlemek ve gerekli ayarlamaları yapmak için takip ziyaretleri yapılır."
                    },
                    "expectedResults": {
                      "timeline": "Erken tedavi, ihtiyaçlara bağlı olarak 12-24 ay sürebilir.",
                      "description": "Uzun vadeli sonuçlar genellikle daha iyi bir hizalama ve daha az komplikasyon içerir."
                    },
                    "cost": "Maliyet, tedavinin türüne ve kapsamına bağlı olarak değişir. Danışmanlık sonrasında kişiselleştirilmiş bir fiyat teklifi sunulur."
                  }
                ]
            }
          ]
        },
        {
            "name": "Plastik Cerrahi",
            "img": "psurg.webp",
            "description": "Medikaray Kliniği, vücut hatlarınızı iyileştirmek ve özgüveninizi artırmak için ihtiyaçlarınıza göre özel olarak tasarlanmış, son teknoloji plastik cerrahi prosedürlerinde uzmanlaşmıştır.",
            "subItems": [
              {
                "name": "Tüp Mide Ameliyatı",
                "link": "/plstic-surgery",
                "img": "tup mide ameliyati.png",
                "description": "Önemli kilo kaybını desteklemek için mide boyutunu küçülten bir bariatrik prosedür.",
                "benefits": [
                  "Uzun vadeli kilo kaybını teşvik eder.",
                  "Obeziteyle ilişkili sağlık sorunlarını iyileştirir.",
                  "Genel yaşam kalitesini artırır."
                ],
                "type": "Cerrahi",
                "duration": "2-4 hafta iyileşme süresi.",
                "results": "Hastalar genellikle bir yıl içinde fazla kilolarının %50-70'ini kaybeder."
              },
              {
                "name": "Submentoplasti",
                "link": "/plastic-surgery",
                "img": "submentoplasti.png",
                "description": "Çene altındaki fazla yağı ortadan kaldıran ve cildi sıkılaştıran bir prosedür.",
                "benefits": [
                  "Çene hattını şekillendirir ve belirginleştirir.",
                  "Çift çene görünümünü azaltır.",
                  "Uzun süreli sonuçlar sunar."
                ],
                "type": "Cerrahi",
                "duration": "1-2 hafta iyileşme süresi.",
                "results": "Şişlik azaldıktan sonra sonuçlar kalıcıdır."
              },
              {
                "name": "Liposuction",
                "link": "/plastic-surgery",
                "img": "liposuction.png",
                "description": "Lokalize yağ birikintilerini gidermek ve belirli vücut bölgelerini şekillendirmek için bir prosedür.",
                "benefits": [
                  "Hedeflenen bölgelerdeki inatçı yağları azaltır.",
                  "Vücut oranlarını ve hatlarını iyileştirir.",
                  "Kişiselleştirilebilir sonuçlar sunar."
                ],
                "type": "Cerrahi",
                "duration": "1-3 hafta iyileşme süresi.",
                "results": "Sağlıklı bir yaşam tarzıyla uzun süreli sonuçlar."
              },
              {
                "name": "Jinekomasti Ameliyatı",
                "link": "/plastic-surgery",
                "img": "gogus diklestirme.png",
                "description": "Erkeklerde daha maskülen bir göğüs hattı için fazla meme dokusunu azaltan bir ameliyat.",
                "benefits": [
                  "Göğüsleri düzleştirir ve sıkılaştırır.",
                  "Özgüveni artırır.",
                  "Kalıcı sonuçlar sunar."
                ],
                "type": "Cerrahi",
                "duration": "2-4 hafta iyileşme süresi.",
                "results": "Stabil kilo ve yaşam tarzıyla kalıcı sonuçlar."
              },
              {
                "name": "Göğüs Büyütme",
                "link": "/plastic-surgery",
                "img": "gogus buyutme.png",
                "description": "İmplant veya yağ transferi kullanarak göğüs boyutunu ve şeklini iyileştiren bir prosedür.",
                "benefits": [
                  "Göğüs hacmini ve simetrisini artırır.",
                  "Özgüven ve vücut imajını güçlendirir.",
                  "Doğal veya dramatik sonuçlar için özelleştirilebilir."
                ],
                "type": "Cerrahi",
                "duration": "1-2 hafta iyileşme süresi.",
                "results": "İmplantların periyodik bakımı ile uzun süreli sonuçlar."
              },
              {
                "name": "Brezilya Popo Estetiği (BBL)",
                "link": "/plastic-surgery",
                "img": "bbl (1).png",
                "description": "Kalçaların boyutunu ve şeklini iyileştirmek için yağ transferi kullanan bir prosedür.",
                "benefits": [
                  "Doğal görünümlü sonuçlar sunar.",
                  "Birden fazla alanı şekillendirerek vücut hatlarını iyileştirir.",
                  "İmplant kullanımı gerektirmez."
                ],
                "type": "Cerrahi",
                "duration": "2-4 hafta iyileşme süresi.",
                "results": "Şişlik azaldıktan sonra görülür ve uygun bakım ile yıllarca kalıcıdır."
              },
              {
                "name": "Göğüs Dikleştirme (Mastopeksi)",
                "link": "/plastic-surgery",
                "img": "goz kapagi diklestirme.png",
                "description": "Göğüsleri dikleştiren ve yeniden şekillendiren, genç bir görünüm kazandıran bir prosedür.",
                "benefits": [
                  "Göğüs sıkılığını ve pozisyonunu artırır.",
                  "Simetriyi ve konturu iyileştirir.",
                  "Özgüven ve rahatlık sağlar."
                ],
                "type": "Cerrahi",
                "duration": "2-3 hafta iyileşme süresi.",
                "results": "Stabil kilo ile uzun süreli sonuçlar."
              },
              {
                "name": "Karın Germe (Abdominoplasti)",
                "link": "/plastic-surgery",
                "img": "karin germe.png",
                "description": "Kasları sıkılaştırırken karındaki fazla cildi ve yağı gideren bir prosedür.",
                "benefits": [
                  "Karın bölgesini düzleştirir ve şekillendirir.",
                  "Çatlakları ve gevşek cildi giderir.",
                  "Vücut hatlarını ve duruşu iyileştirir."
                ],
                "type": "Cerrahi",
                "duration": "4-6 hafta iyileşme süresi.",
                "results": "Doğru diyet ve egzersizle kalıcı sonuçlar."
              }
            ]
        },
        {
            "name": "Saç Ekimi",
            "img": "hair transplant.png",
            "description": "Saç restorasyon prosedürlerimiz, hem erkekler hem de kadınlar için doğal ve kalıcı sonuçlar sunmak amacıyla gelişmiş teknikler ve teknoloji kullanılarak tasarlanmıştır.",
            "subItems": [
                {
                    "name": "PRP",
                    "link": "/hair-transplant",
                    "img": "prp treatment.png",
                    "description": "Saç köklerini uyarmak ve saç yoğunluğunu artırmak için trombosit açısından zengin plazma kullanılarak yapılan cerrahi olmayan bir tedavi.",
                    "benefits": [
                        "Saç ekiminden sonra iyileşmeyi hızlandırır.",
                        "Saç incelmesini tedavi eder ve saç dökülmesinin ilerlemesini yavaşlatır."
                    ],
                    "type": "Cerrahi Olmayan",
                    "duration": "Seans başına 30–60 dakika",
                    "sessions": "4–6 hafta arayla 3–6 seans",
                    "downtime": "İyileşme süresi gerektirmez; hastalar günlük aktivitelerine hemen dönebilir.",
                    "results": "3–6 ay içinde artan saç kalınlığı ve azalan dökülme."
                },
                {
                    "name": "Sakal ve Bıyık Ekimi",
                    "link": "/hair-transplant",
                    "img": "beard transplant.png",
                    "description": "Doğal görünümlü bir sakal veya bıyık oluşturmak veya iyileştirmek için uygulanan bir prosedür.",
                    "techniques": [
                        "Foliküller genellikle kafa derisinin arkasından (donör alan) alınır.",
                        "Saç çizgisi ve yoğunluk, bireysel yüz oranlarına uygun şekilde tasarlanır.",
                        "Kişiselleştirme: Sakal ve bıyığınızın doğal büyüme desenlerine uygun olarak özelleştirilir."
                    ],
                    "mildSwelling": "Hafif şişlik veya kızarıklık 5–7 gün içinde geçer.",
                    "shockLoss": "Ekilen saçlar başlangıçta dökülür (şok dökülme) ancak 3 ay içinde yeniden büyümeye başlar.",
                    "results": "9–12 ay içinde kalıcı ve doğal görünümlü yüz kılları."
                },
                {
                    "name": "Saç Ekimi",
                    "link": "/hair-transplant",
                    "img": "1 hair transplant (1).png",
                    "description": "Doğal sonuçlar sağlamak için gelişmiş ekim teknikleri kullanılarak yapılan saç dökülmesine kalıcı bir çözüm.",
                    "techniques": [
                        "FUE (Foliküler Ünite Ekstraksiyonu): Bireysel foliküller alınır ve seyrek alanlara ekilir. Bu teknik, izleri en aza indirir ve doğal bir görünüm sağlar.",
                        "DHI (Doğrudan Saç Ekimi): Daha hassas bir yöntem olup, foliküller alıcı alanlarda kesi yapılmadan doğrudan ekilir.",
                        "Safir FUE: Daha ince kesiler için safir bıçaklar kullanır, daha hızlı iyileşme ve daha yoğun ekim sağlar."
                    ],
                    "duration": "Gerekli greft sayısına bağlı olarak 6–8 saat.",
                    "anesthesia": "Lokal anestezi ile ağrısız bir deneyim sunar.",
                    "aftercare": [
                        "İlk 10 gün boyunca doğrudan güneş ışığından ve yorucu aktivitelerden kaçının.",
                        "Greftleri korumak için saç yıkama teknikleri açıklanır."
                    ],
                    "results": "Yeni saçlar 3 ay içinde büyümeye başlar, tam sonuçlar 12–18 ay sonra görünür."
                }
            ]
        },
        {
            "name": "Yüz Estetik Cerrahisi",
            "img": "yuz estetik cerrahisi.png",
            "subItems": [
              {
                "name": "Botoks",
                "link": "/face-surgery",
                "img": "botoks.png",
                "description": "Botoks enjeksiyonları, yüz kaslarını geçici olarak gevşeterek ince çizgileri ve kırışıklıkları azaltmak için kullanılan cerrahi olmayan bir kozmetik işlemdir.",
                "benefits": [
                  "Kaz ayakları, alın çizgileri ve kaş arası çizgilerini azaltır.",
                  "Yeni kırışıklık oluşumunu önler.",
                  "Yüz gençleştirme için hızlı ve minimal invaziv bir çözüm sunar."
                ],
                "suitableFor": "Yüz ifadelerinin neden olduğu dinamik kırışıklıkları cerrahiye gerek kalmadan pürüzsüzleştirmek isteyen bireyler için idealdir.",
                "preparationAndAftercare": {
                  "preparation": "Özel bir hazırlık gerekmez. Kan inceltici ilaçlardan kaçınılmalıdır.",
                  "aftercare": "4–6 saat boyunca uzanmaktan veya yorucu aktivitelerden kaçının."
                },
                "expectedResults": {
                  "timeline": "3–7 gün",
                  "duration": "3–6 ay"
                },
                "cost": "Seans başına $300–$600"
              },
              {
                "name": "Göz Kapağı Kaldırma",
                "link": "/face-surgery",
                "img": "goz kapagi kaldirma.png",
                "description": "Göz kapağı kaldırma, üst veya alt göz kapaklarındaki fazla deri, yağ ve kasları çıkararak gözlerin görünümünü iyileştirir.",
                "benefits": [
                  "Sarkan göz kapaklarını ve şişkinliği azaltır.",
                  "Görüşü engelleyen cildi kaldırarak iyileştirir.",
                  "Daha genç ve dinlenmiş bir görünüm sağlar."
                ],
                "suitableFor": "Sarkık göz kapakları veya göz altı torbaları olan bireyler için idealdir.",
                "preparationAndAftercare": {
                  "preparation": "Ameliyat öncesinde sigaradan ve bazı ilaçlardan kaçınılmalıdır.",
                  "aftercare": "Bölge temiz tutulmalı ve reçeteli merhemler kullanılmalıdır."
                },
                "expectedResults": {
                  "timeline": "Haftalar içinde görülebilir",
                  "duration": "Uzun ömürlü"
                },
                "cost": "$3,000–$6,000"
              },
              {
                "name": "Teksas Çene Hattı Dolgusu",
                "link": "/face-surgery",
                "img": "teksas cene dolgusu.png",
                "description": "Teksas çene dolgusu, çene hattını belirginleştirerek daha konturlu ve yapılı bir görünüm sağlar.",
                "benefits": [
                  "Çene hattı tanımını iyileştirir.",
                  "Yüz oranlarını dengeler.",
                  "Cerrahiye gerek kalmadan çene hattı ameliyatına alternatif sunar."
                ],
                "suitableFor": "Cerrahiye gerek kalmadan daha keskin ve belirgin bir çene hattı isteyen bireyler için mükemmeldir.",
                "preparationAndAftercare": {
                  "preparation": "Tedavi öncesinde alkol ve kan incelticilerden kaçının.",
                  "aftercare": "Şişliği azaltmak için buz torbaları uygulayın."
                },
                "expectedResults": {
                  "timeline": "Anında",
                  "duration": "12–18 ay"
                },
                "cost": "$1,500–$3,000"
              },
              {
                "name": "Dudak Dolgusu",
                "link": "/face-surgery",
                "img": "dudak dolgusu.png",
                "description": "Dudak dolgusu, dudakların hacmini, şeklini ve simetrisini artırmak için dermal dolgu maddeleri veya yağ enjeksiyonu kullanır.",
                "benefits": [
                  "Daha dolgun, belirgin dudaklar sağlar.",
                  "Yüz uyumu ve simetrisini artırır.",
                  "Hafif veya dramatik sonuçlar için özelleştirilebilir bir yaklaşım sunar."
                ],
                "suitableFor": "Dudaklarına hacim eklemek veya asimetrisini düzeltmek isteyenler için idealdir.",
                "preparationAndAftercare": {
                  "preparation": "Kan inceltici ilaçlardan ve alkolden kaçının.",
                  "aftercare": "Dudakları nemli tutun ve 24 saat boyunca ağır makyaj yapmaktan kaçının."
                },
                "expectedResults": {
                  "timeline": "Anında",
                  "duration": "6–12 ay"
                },
                "cost": "$400–$800"
              },
              {
                "name": "Yüz Germe",
                "link": "/face-surgery",
                "img": "yuz germe.png",
                "description": "Yüz germe, fazla deriyi çıkaran ve yüz dokularını sıkılaştıran bir cerrahi işlemdir ve yaşlanma belirtilerini azaltır.",
                "benefits": [
                  "Genç ve dinlenmiş bir görünümü geri kazandırır.",
                  "Sarkan cildi ve derin kırışıklıkları ortadan kaldırır.",
                  "Yüz hatlarını iyileştirir."
                ],
                "suitableFor": "Orta ila şiddetli yaşlanma belirtileri olan ve uzun süreli bir çözüm arayan bireyler için önerilir.",
                "preparationAndAftercare": {
                  "preparation": "Ameliyat öncesinde sigarayı bırakın ve belirli ilaçlardan kaçının.",
                  "aftercare": "Bandaj bakımı dahil olmak üzere iyileşme talimatlarına uyun."
                },
                "expectedResults": {
                  "timeline": "Şişlik geçtikten sonra",
                  "duration": "10+ yıl"
                },
                "cost": "$10,000–$15,000"
              },
              {
                "name": "Burun Estetiği",
                "link": "/face-surgery",
                "img": "burun estetigi.png",
                "description": "Rinoplasti, burnu yeniden şekillendirerek estetik veya fonksiyonel iyileştirmeler sağlar.",
                "benefits": [
                  "Burnun şeklini yeniden düzenleyerek yüz uyumunu artırır.",
                  "Yapısal sorunlardan kaynaklanan nefes alma sorunlarını düzeltir.",
                  "Boyut, şekil ve simetri gibi estetik endişeleri ele alır."
                ],
                "suitableFor": "Burnunda kozmetik veya fonksiyonel iyileştirmeler yapmak isteyen bireyler için uygundur.",
                "preparationAndAftercare": {
                  "preparation": "Kan inceltici ilaçlardan kaçının ve iyileşme süresi planlayın.",
                  "aftercare": "Tavsiye edilen süre boyunca burun ateli kullanın ve yorucu aktivitelerden kaçının."
                },
                "expectedResults": {
                  "timeline": "Tam sonuçlar 6–12 ay içinde",
                  "duration": "Kalıcı"
                },
                "cost": "$7,000–$10,000"
              },
              {
                "name": "Dolgu Enjeksiyonu",
                "link": "/face-surgery",
                "img": "dolgu enjeksiyonu.png",
                "description": "Dolgu enjeksiyonları, hyaluronik asit veya diğer dermal dolgu maddeleri kullanarak yüz hacmini artırır, kırışıklıkları giderir ve yüz hatlarını şekillendirir.",
                "benefits": [
                  "Yanaklar, dudaklar ve göz altı gibi alanlarda hacmi geri kazandırır.",
                  "İnce çizgileri ve kırışıklıkları düzeltir.",
                  "Yüz gençleştirme için cerrahi olmayan bir çözüm sunar."
                ],
                "suitableFor": "Yüz hacmi ve dokusunda hızlı, minimal invaziv iyileştirmeler isteyen bireyler için idealdir.",
                "preparationAndAftercare": {
                  "preparation": "Alkol ve kan inceltici ilaçlardan kaçının.",
                  "aftercare": "Gerekirse tedavi edilen alanları nazikçe masaj yapın."
                },
                "expectedResults": {
                  "timeline": "Anında",
                  "duration": "6–18 ay"
                },
                "cost": "$500–$2,000"
              },
              {
                "name": "Nefertiti Lift",
                "link": "/face-surgery",
                "img": "nefertiti lift.png",
                "description": "Nefertiti Lift, Botox kullanarak boyun ve çene hattını sıkılaştıran ve konturlayan, daha genç bir görünüm elde etmeyi sağlayan cerrahi olmayan bir tedavidir.",
                "benefits": [
                  "Çene hattını kaldırır ve belirginleştirir.",
                  "Boyun bölgesindeki sarkmayı azaltır.",
                  "Genel yüz estetiğini iyileştirir."
                ],
                "suitableFor": "Hafif sarkması olan ve boyun ve çene hattını gençleştirmek isteyen bireyler için idealdir.",
                "preparationAndAftercare": {
                  "preparation": "Kas gevşeticilerin güvenliği için doktorunuza danışın.",
                  "aftercare": "24 saat boyunca boyun masajından kaçının."
                },
                "results": {
                  "timeline": "Bir hafta içinde",
                  "duration": "3–6 ay"
                },
                "cost": "$300–$800"
              }
            ]
        }          
          
      ]
    },
    { 
      "name": "Hizmetler", 
      "link": "/#vip" 
    },
    { 
      "name": "Bize Ulaşın", 
      "link": "/#contact" 
    },
    { 
      "name": "Galeri", 
      "link": "/gallerie" 
    }
];
  

