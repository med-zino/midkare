export const languages = [
  { code: "EN", name: "English", flag: "/flags/uk.svg" },
  { code: "AR", name: "Arabic", flag: "/flags/sa.svg" },
  { code: "FR", name: "French", flag: "/flags/fr.svg" },
  { code: "RU", name: "Russian", flag: "/flags/ru.svg" },
  { code: "TR", name: "Turkish", flag: "/flags/tr.svg" },
];

export  const menuItems = [
  { 
    "name": "Home", 
    "link": "/" 
  },
  { 
    "name": "About Us", 
    "link": "#about" 
  },
  {
    "name": "Treatments",
    "subItems": [
      {
        "name": "Dental Treatments",
        "subItems": [
          {
            "name": "Dentures",
            "img": "dentures.png",
            "link": "/dental-treatments",
            "description": "Dentures are removable dental prosthetics designed to replace missing teeth and restore the function and appearance of your smile. At Medikaray Clinic, we provide both partial and complete dentures tailored to your specific needs, ensuring comfort, functionality, and a natural look.",
            "subItems": [
              {
                "name": "Partial Dentures",
                "img": "partial dentures.png",
                "link": "/dental-treatments",
                "description": "Partial dentures are used to replace a few missing teeth while still preserving the surrounding natural teeth. They consist of a metal or acrylic framework with artificial teeth attached, providing support and stability.",
                "overview": "Partial dentures are used to replace a few missing teeth while still preserving the surrounding natural teeth. They consist of a metal or acrylic framework with artificial teeth attached, providing support and stability.",
                "benefits": [
                  "Restores functionality, allowing you to chew and speak more naturally",
                  "Prevents remaining natural teeth from shifting",
                  "Customizable for a comfortable, secure fit"
                ],
                "suitableFor": "Ideal for patients who have several missing teeth but still have healthy teeth remaining. Partial dentures are also a good solution for those not ready for dental implants.",
                "preparationAndAftercare": "Initial steps include impressions, bite assessments, and a try-in phase to ensure a perfect fit. Aftercare involves regular cleaning, avoiding certain foods that could dislodge the denture, and periodic dental checkups.",
                "expectedResultsAndTimeline": "Partial dentures provide immediate improvement in the smile and function, with final adjustments made after a few weeks of use.",
                "cost": "The cost of partial dentures varies depending on the type of material used (e.g., acrylic, metal) and the complexity of the design. A detailed estimate is provided during consultation.",
                "whyChooseMedikaray": "Our partial dentures are designed for comfort and durability, using high-quality materials and precise crafting to ensure an optimal fit."
              },
              {
                "name": "Complete Dentures",
                "img": "dentures.png",
                "link": "/dental-treatments",
                "description": "Complete dentures are used when all the teeth in either the upper or lower jaw need to be replaced. They consist of a full set of prosthetic teeth attached to a base that fits over the gums, providing a natural look and improved functionality.",
                "overview": "Complete dentures are used when all the teeth in either the upper or lower jaw need to be replaced. They consist of a full set of prosthetic teeth attached to a base that fits over the gums, providing a natural look and improved functionality.",
                "benefits": [
                  "Restores full function for eating and speaking",
                  "Improves facial appearance by supporting the cheeks and lips",
                  "Custom-made for a natural and comfortable fit"
                ],
                "suitableFor": "Complete dentures are ideal for individuals who have lost all their natural teeth in either the upper or lower jaw and are looking for a non-surgical solution to restore their smile and dental function.",
                "preparationAndAftercare": "The process includes taking impressions, fitting a trial denture to ensure proper alignment, and creating the final set. Proper care involves cleaning the dentures regularly and visiting the dentist for adjustments as needed.",
                "expectedResultsAndTimeline": "Patients can expect an enhanced ability to chew, speak, and smile. Full adaptation may take a few weeks as the mouth adjusts to the new dentures.",
                "cost": "The cost of complete dentures varies based on the materials and the level of customization. An individualized quote is provided after an initial assessment.",
                "whyChooseMedikaray": "We create dentures that provide a perfect balance of comfort, functionality, and aesthetics. Our team ensures precise measurements and careful adjustments for the best possible fit."
              }
            ]
          },
          
          {
            "name": "Aesthetic Dentistry",
            "img": "aesthetic dentistery.png",
            "link": "/dental-treatments",
            "description": "Aesthetic dentistry at Medikaray Clinic focuses on enhancing the appearance of your smile with advanced, personalized dental solutions. Our treatments combine the latest technology and expert care to provide you with a beautiful, natural-looking smile.",
            "subItems": [
              {
                "name": "Hollywood Smile Veneers",
                "img": "veneers.png",
                "link": "/dental-treatments",
                "description": "Ultra-thin shells made from high-quality dental material placed over the front of your teeth to improve their appearance.",
                "image": "/hollywood-smile-veneers.jpg",
                "benefits": [
                  "Immediate enhancement of smile aesthetics",
                  "Minimally invasive with a quick recovery",
                  "Customizable for the most natural look"
                ],
                "suitableFor": "Ideal for those who wish to achieve a flawless smile. Perfect for individuals with minor dental imperfections or those seeking a dramatic smile transformation.",
                "preparationAndAftercare": {
                  "preparation": "May involve light shaping of the teeth and taking impressions to create the veneers.",
                  "aftercare": "Avoid staining substances and practice good oral hygiene"
                },
                "expectedResults": {
                  "timeline": "One visit to Turkey",
                  "duration": "Veneers can last 10-15 years with proper care"
                },
                "cost": "Prices vary depending on the material used and the number of teeth involved. Customized quotes provided after consultations."
              },
              {
                "name": "Dental Crowns",
                "img": "dental crowns (1).png",
                "link": "/dental-treatments",
                "description": "Custom-made caps placed over damaged or weakened teeth to restore their shape, size, and strength while providing aesthetic improvement.",
                "image": "/dental-crowns.jpg",
                "benefits": [
                  "Restores full function and appearance of the tooth",
                  "Protects teeth from further damage",
                  "Durable and long-lasting"
                ],
                "suitableFor": "Recommended for patients with cracked, broken, or heavily decayed teeth or those needing support after root canal therapy.",
                "preparationAndAftercare": {
                  "preparation": "Involves reducing the tooth's size to fit the crown and taking impressions.",
                  "aftercare": "Avoid hard foods and maintain regular dental checkups to ensure the crown remains secure"
                },
                "expectedResults": {
                  "timeline": "Immediate restoration",
                  "duration": "Crowns can last up to 15-20 years, depending on material and care"
                },
                "cost": "Varies based on the material chosen (e.g., porcelain, metal, zirconia). Detailed pricing provided during online consultation."
              },
              {
                "name": "Digital Smile Design (DSD)",
                "img": "digital smile design.png",

                "link": "/dental-treatments",
                "description": "An innovative approach using digital technology to plan and visualize dental procedures before treatment begins.",
                "image": "/digital-smile-design.jpg",
                "benefits": [
                  "Precise, digital visualization of expected outcomes",
                  "Custom treatment planning tailored to your face shape and preferences",
                  "Minimizes guesswork for both patients and dentists"
                ],
                "suitableFor": "Ideal for individuals who want a thorough understanding of their treatment and for those considering comprehensive dental enhancements.",
                "preparationAndAftercare": {
                  "preparation": "Starts with high-resolution digital scans and photos. A treatment plan is designed with patient preview and potential adjustments.",
                  "aftercare": "Follow-up consultations to ensure satisfaction with the final result"
                },
                "expectedResults": {
                  "timeline": "Depends on the complexity of procedures involved",
                  "description": "Ensures that the final treatment matches the planned digital design, leading to a confident smile transformation"
                },
                "cost": "Varies depending on the complexity of the treatment plan and additional procedures. Personalized consultations offered for clear pricing."
              }
            ]
          },
          {
            "name": "Dental Implants",
            "img": "dental implants.png",
            "link": "/dental-treatments",
            "description" : "Dental implants offer a long-lasting and natural-looking solution for those with missing teeth. At Medikaray Clinic, we provide a range of implant options tailored to your needs, from single dental implants to full-mouth restorations like All-on-Four and All-on-Six. Our team of expert oral surgeons and modern technology ensure that your experience is seamless, safe, and effective.",
            "subItems": [
              {
                "name": "Single Dental Implant",
                "link": "/dental-treatments",
                "img": "single dental implant.png",
                "description": "A titanium post is placed into the jawbone to replace one missing tooth, topped with a crown for a natural look and feel. It preserves jawbone density and prevents surrounding teeth from shifting.",
                "overview": "A single dental implant is used to replace one missing tooth. It involves placing a titanium post into the jawbone, which acts as an artificial root, and then attaching a crown on top for a natural look and feel.",
                "benefits": [
                  "Preserves jawbone density",
                  "Prevents surrounding teeth from shifting",
                  "Matches the appearance of natural teeth"
                ],
                "suitableFor": "Ideal for individuals missing one tooth with healthy surrounding teeth and sufficient jawbone density.",
                "preparationAndAftercare": {
                  "preparation": "The process involves a consultation, placement of the implant, and a healing period of several months before the crown is attached.",
                  "aftercare": "Follow hygiene instructions and avoid hard foods during the healing period."
                },
                "expectedResults": {
                  "timeline": "Patients can expect a seamless, natural appearance.",
                  "duration": "The entire process can take 3-6 months, depending on healing time."
                },
                "cost": "The cost varies based on factors like the type of implant material and the need for any preparatory procedures (e.g., bone grafts). We provide an individualized quote during the initial consultation.",
                "whyChoose": "Our implants are made from high-quality materials, and our skilled specialists ensure precise placement for long-term durability and comfort."
              },
              {
                "name": "All-on-Four Dental Implants",
                "img": "all on 4.png",
                "link": "/dental-treatments",
                "description": "A full-arch restoration supported by four strategically placed implants. This method provides enhanced stability and an immediate, secure set of teeth for patients with significant tooth loss.",
                "overview": "All-on-Four implants are a full-arch solution where four strategically placed implants support a fixed set of teeth. This method is ideal for patients with significant tooth loss and provides an immediate, secure result.",
                "benefits": [
                  "Quick transformation of your smile in just one procedure",
                  "Enhanced stability compared to traditional dentures",
                  "Less bone loss compared to single implants"
                ],
                "suitableFor": "Best for patients with severe tooth loss or those who want to replace an entire upper or lower arch of teeth without needing individual implants for each tooth.",
                "preparationAndAftercare": {
                  "preparation": "The procedure begins with a comprehensive assessment to ensure good jawbone health. The implants are placed, followed by the attachment of a temporary set of teeth while the implants heal.",
                  "aftercare": "Final permanent teeth are placed after the healing period."
                },
                "expectedResults": {
                  "timeline": "Patients leave with a functional and aesthetic set of teeth within a day.",
                  "duration": "Full recovery and integration of the implants typically take a few months."
                },
                "cost": "All-on-Four treatments can vary in cost depending on the type of material used and the complexity of the procedure. We offer tailored estimates after consultation.",
                "whyChoose": "We prioritize advanced techniques and patient comfort to provide exceptional results. Our team ensures the implants are precisely placed for a stable and natural-looking smile."
              },
              {
                "name": "All-on-Six Dental Implants",
                "img": "all on 6.png",

                "link": "/dental-treatments",
                "description": "Six implants support a complete set of upper or lower teeth, offering added stability and improved chewing functionality. Suitable for individuals with sufficient jawbone density.",
                "overview": "The All-on-Six treatment involves placing six implants in the jawbone to support a complete set of upper or lower teeth. This approach offers added stability compared to All-on-Four, making it suitable for patients with more bone density.",
                "benefits": [
                  "Provides greater stability for the dental arch",
                  "More efficient in preserving jawbone",
                  "Improved chewing function and aesthetics"
                ],
                "suitableFor": "Perfect for individuals with sufficient jawbone density who seek a stronger, longer-lasting solution than All-on-Four.",
                "preparationAndAftercare": {
                  "preparation": "Similar to All-on-Four, the process includes placement of the implants and a healing period. Patients receive temporary prosthetics until the final set of teeth is secured after healing.",
                  "aftercare": "Follow-up appointments will be necessary to ensure proper healing and integration."
                },
                "expectedResults": {
                  "timeline": "Patients enjoy immediate improved functionality and appearance.",
                  "duration": "Full recovery takes a few months to ensure the implants fully integrate with the jawbone."
                },
                "cost": "Costs for All-on-Six can be higher than All-on-Four due to the additional implants and materials involved. Pricing is provided after an in-depth assessment.",
                "whyChoose": "We use the latest implant technology to optimize the treatment and ensure comfort. Our experienced specialists strive to achieve the most stable and natural results possible."
              },
              {
                "name": "Immediate Implants",
                "img": "immediate implants.png",
                "link": "/dental-treatments",
                "description": "Implants placed immediately after tooth extraction, allowing for a faster return to normal function and eliminating the need for a second surgery. Temporary prosthetics are provided during healing.",
                "overview": "Immediate implants are placed right after a tooth extraction, allowing patients to receive a new tooth or a temporary prosthetic immediately after the procedure.",
                "benefits": [
                  "Eliminates the need for a second surgery",
                  "Reduces overall treatment time",
                  "Offers a faster return to normal function"
                ],
                "suitableFor": "Ideal for patients who have healthy gums and enough bone density to support an implant immediately after tooth removal.",
                "preparationAndAftercare": {
                  "preparation": "A thorough evaluation is necessary to determine if immediate placement is suitable. The implant is placed at the time of extraction, followed by a temporary crown or bridge.",
                  "aftercare": "Patients need to follow post-op instructions carefully for optimal healing."
                },
                "expectedResults": {
                  "timeline": "Patients can expect to leave with a functional, temporary tooth.",
                  "duration": "Full integration may take a few months, with a permanent crown placed after healing."
                },
                "cost": "Costs depend on factors like the complexity of the case and type of implant used. A personalized consultation will provide a detailed estimate.",
                "whyChoose": "We utilize advanced planning and surgical precision to offer immediate implants that are both functional and aesthetic. Our commitment to excellence ensures a seamless patient experience."
              }
            ]
          },
          
          {
            "name": "Orthodontics",
            "img": "orthodontics.png",
            "link": "/dental-treatments",
            "description": "Orthodontics is a dental specialty that focuses on diagnosing, preventing, and treating misaligned teeth and jaws. At Medikaray Clinic, we offer a range of advanced orthodontic treatments to help you achieve a confident, well-aligned smile. Whether you are looking for traditional braces, clear aligners, or more advanced options, our experienced orthodontic specialists are here to provide the best care tailored to your needs.",
            "subItems": [
              {
                "name": "Traditional Metal Braces",
                "img": "traditional metal braces.png",
                "link": "/dental-treatments",
                "description": "Traditional metal braces are a reliable and time-tested method for correcting misaligned teeth, bite issues, and jaw problems. They consist of metal brackets, wires, and elastics that work together to move teeth into their desired positions over time.",
                "benefits": [
                  "Effective for all types of orthodontic issues",
                  "Provides precise control over tooth movement",
                  "Durable and affordable compared to other options"
                ],
                "suitableFor": "Ideal for patients of all ages, especially those with severe alignment issues that require comprehensive treatment.",
                "preparationAndAftercare": {
                  "preparation": "Initial consultations include X-rays, digital scans, and a treatment plan.",
                  "aftercare": "Involves regular follow-up appointments for adjustments, maintaining oral hygiene, and avoiding hard or sticky foods."
                },
                "expectedResults": {
                  "timeline": "Treatment typically lasts between 18-36 months, depending on the severity of the case.",
                  "description": "Patients will achieve a well-aligned smile and improved dental function by the end of the treatment."
                },
                "cost": "The cost of traditional metal braces varies depending on the length of treatment and complexity of the case. We provide an individualized estimate after an initial assessment."
              },
              {
                "name": "Clear Aligners",
                "img": "invisalign -clear liners-.png",

                "link": "/dental-treatments",
                "description": "Clear aligners, such as Invisalign, are a modern alternative to traditional braces. They are removable, transparent trays that gradually shift teeth into the desired position. Aligners are custom-made to fit your teeth and are nearly invisible, making them a popular choice for those who want a discreet treatment option.",
                "benefits": [
                  "Nearly invisible, offering a more aesthetic option",
                  "Removable for eating, drinking, and oral hygiene",
                  "Comfortable with no wires or brackets to irritate the gums"
                ],
                "suitableFor": "Ideal for individuals with mild to moderate alignment issues who prefer a more discreet and flexible treatment.",
                "preparationAndAftercare": {
                  "preparation": "The process begins with digital impressions and a 3D scan to create a custom treatment plan.",
                  "aftercare": "Aligners must be worn for 20-22 hours a day and switched out every 1-2 weeks as prescribed by the orthodontist."
                },
                "expectedResults": {
                  "timeline": "Clear aligner treatment typically takes between 12-18 months, depending on the complexity of the case.",
                  "description": "Patients can expect a gradual and comfortable alignment of their teeth."
                },
                "cost": "The cost varies based on the number of aligners required and the length of treatment. Detailed pricing is provided during a consultation."
              },
              {
                "name": "Lingual Braces",
                "img": "lingual breaces.png",
                "link": "/dental-treatments",
                "description": "Lingual braces are similar to traditional metal braces but are placed on the back (lingual side) of the teeth, making them completely invisible from the outside. This option provides a discreet way to correct dental alignment.",
                "benefits": [
                  "Invisible to others, providing a more aesthetic appearance",
                  "Effective for correcting a wide range of orthodontic issues",
                  "Custom-designed for each patient’s unique dental structure"
                ],
                "suitableFor": "Ideal for adults and teenagers who want the benefits of braces without visible brackets and wires.",
                "preparationAndAftercare": {
                  "preparation": "The process involves custom impressions and a treatment plan.",
                  "aftercare": "Patients must adjust to the feeling of braces on the back of their teeth, with a slight period of adaptation. Regular follow-ups are essential to monitor progress."
                },
                "expectedResults": {
                  "timeline": "Treatment duration is similar to traditional braces, typically ranging from 18-36 months.",
                  "description": "The final result is a well-aligned, beautiful smile."
                },
                "cost": "Lingual braces are typically more expensive than traditional metal braces due to the customization required. Pricing is shared during an initial consultation."
              },
              {
                "name": "Early Orthodontic Treatment (Interceptive Orthodontics)",
                "img": "orthodontics.png",
                "link": "/dental-treatments",
                "description": "Early orthodontic treatment, or interceptive orthodontics, is designed for children and pre-adolescents. This type of treatment helps guide the growth of the jaw and prevent severe alignment issues later in life.",
                "benefits": [
                  "Prevents more severe orthodontic problems in the future",
                  "Reduces the need for more invasive treatments later",
                  "Guides the growth of jaw and teeth"
                ],
                "suitableFor": "Recommended for children around age 7-10, when the jaw and teeth are still developing.",
                "preparationAndAftercare": {
                  "preparation": "An initial consultation includes a comprehensive examination and assessment.",
                  "aftercare": "Follow-up visits help monitor development and make adjustments as necessary."
                },
                "expectedResults": {
                  "timeline": "Early treatments may last 12-24 months, depending on the needs.",
                  "description": "Long-term results typically include better alignment and fewer complications later."
                },
                "cost": "Cost varies based on the type and extent of treatment. A personalized quote is provided after a consultation."
              }
            ]
          },

          {
            "name": "Orthodontie",
            "img": "orthodontics.png",
            "link": "/dental-treatments",
            "description": "L'orthodontie est une spécialité dentaire qui se concentre sur le diagnostic, la prévention et le traitement des dents et mâchoires mal alignées. À la clinique Medikaray, nous proposons une gamme de traitements orthodontiques avancés pour vous aider à obtenir un sourire confiant et bien aligné. Que vous recherchiez des appareils traditionnels, des aligneurs transparents ou des options plus avancées, nos spécialistes orthodontiques expérimentés sont là pour vous fournir les meilleurs soins adaptés à vos besoins.",
            "subItems": [
              {
                "name": "Appareils Métalliques Traditionnels",
                "img": "traditional metal braces.png",
                "link": "/dental-treatments",
                "description": "Les appareils métalliques traditionnels sont une méthode fiable et éprouvée pour corriger les dents mal alignées, les problèmes de morsure et les problèmes de mâchoire. Ils se composent de supports métalliques, de fils et d'élastiques qui travaillent ensemble pour déplacer les dents dans leur position souhaitée au fil du temps.",
                "benefits": [
                  "Efficace pour tous les types de problèmes orthodontiques",
                  "Offre un contrôle précis du mouvement des dents",
                  "Durable et abordable par rapport à d'autres options"
                ],
                "suitableFor": "Idéal pour les patients de tous âges, en particulier ceux ayant des problèmes d'alignement graves nécessitant un traitement complet.",
                "preparationAndAftercare": {
                  "preparation": "Les consultations initiales incluent des radiographies, des scans numériques et un plan de traitement.",
                  "aftercare": "Comprend des suivis réguliers pour des ajustements, le maintien de l'hygiène buccale et l'évitement des aliments durs ou collants."
                },
                "expectedResults": {
                  "timeline": "Le traitement dure généralement entre 18 et 36 mois, en fonction de la gravité du cas.",
                  "description": "Les patients obtiendront un sourire bien aligné et une fonction dentaire améliorée à la fin du traitement."
                },
                "cost": "Le coût des appareils métalliques traditionnels varie en fonction de la durée du traitement et de la complexité du cas. Nous fournissons une estimation personnalisée après une évaluation initiale."
              },
              {
                "name": "Aligneurs Transparants",
                "img": "invisalign -clear liners-.png",
                "link": "/dental-treatments",
                "description": "Les aligneurs transparents, tels qu'Invisalign, sont une alternative moderne aux appareils traditionnels. Ce sont des gouttières transparentes et amovibles qui déplacent progressivement les dents vers la position souhaitée. Les aligneurs sont fabriqués sur mesure pour s'adapter à vos dents et sont presque invisibles, ce qui en fait un choix populaire pour ceux qui souhaitent une option de traitement discrète.",
                "benefits": [
                  "Presque invisibles, offrant une option esthétique",
                  "Amovibles pour manger, boire et maintenir l'hygiène buccale",
                  "Confortables, sans fils ni supports pour irriter les gencives"
                ],
                "suitableFor": "Idéal pour les personnes ayant des problèmes d'alignement légers à modérés qui préfèrent un traitement plus discret et flexible.",
                "preparationAndAftercare": {
                  "preparation": "Le processus commence par des impressions numériques et un scan 3D pour créer un plan de traitement personnalisé.",
                  "aftercare": "Les aligneurs doivent être portés 20 à 22 heures par jour et remplacés toutes les 1 à 2 semaines selon les prescriptions de l'orthodontiste."
                },
                "expectedResults": {
                  "timeline": "Le traitement par aligneurs transparents prend généralement entre 12 et 18 mois, selon la complexité du cas.",
                  "description": "Les patients peuvent s'attendre à un alignement progressif et confortable de leurs dents."
                },
                "cost": "Le coût varie en fonction du nombre d'aligneurs nécessaires et de la durée du traitement. Une tarification détaillée est fournie lors de la consultation."
              },
              {
                "name": "Appareils Lingaux",
                "img": "lingual breaces.png",
                "link": "/dental-treatments",
                "description": "Les appareils lingaux sont similaires aux appareils métalliques traditionnels, mais ils sont placés à l'arrière (côté lingual) des dents, les rendant complètement invisibles de l'extérieur. Cette option offre un moyen discret de corriger l'alignement dentaire.",
                "benefits": [
                  "Invisibles pour les autres, offrant un aspect plus esthétique",
                  "Efficace pour corriger une large gamme de problèmes orthodontiques",
                  "Conçus sur mesure pour la structure dentaire unique de chaque patient"
                ],
                "suitableFor": "Idéal pour les adultes et les adolescents qui souhaitent bénéficier des appareils sans supports ni fils visibles.",
                "preparationAndAftercare": {
                  "preparation": "Le processus comprend des impressions personnalisées et un plan de traitement.",
                  "aftercare": "Les patients doivent s'adapter à la sensation des appareils à l'arrière de leurs dents, avec une légère période d'adaptation. Des suivis réguliers sont essentiels pour suivre les progrès."
                },
                "expectedResults": {
                  "timeline": "La durée du traitement est similaire à celle des appareils traditionnels, généralement entre 18 et 36 mois.",
                  "description": "Le résultat final est un sourire bien aligné et magnifique."
                },
                "cost": "Les appareils lingaux sont généralement plus chers que les appareils métalliques traditionnels en raison de la personnalisation requise. Les prix sont partagés lors de la consultation initiale."
              },
              {
                "name": "Traitement Orthodontique Précoce (Orthodontie Interceptive)",
                "img": "orthodontics.png",
                "link": "/dental-treatments",
                "description": "Le traitement orthodontique précoce, ou orthodontie interceptive, est conçu pour les enfants et pré-adolescents. Ce type de traitement aide à guider la croissance de la mâchoire et à prévenir des problèmes d'alignement graves plus tard dans la vie.",
                "benefits": [
                  "Prévient des problèmes orthodontiques plus graves à l'avenir",
                  "Réduit le besoin de traitements plus invasifs plus tard",
                  "Guide la croissance de la mâchoire et des dents"
                ],
                "suitableFor": "Recommandé pour les enfants autour de 7 à 10 ans, lorsque la mâchoire et les dents sont encore en développement.",
                "preparationAndAftercare": {
                  "preparation": "Une consultation initiale comprend un examen complet et une évaluation.",
                  "aftercare": "Les visites de suivi permettent de surveiller le développement et d'apporter des ajustements si nécessaire."
                },
                "expectedResults": {
                  "timeline": "Les traitements précoces peuvent durer entre 12 et 24 mois, selon les besoins.",
                  "description": "Les résultats à long terme comprennent généralement un meilleur alignement et moins de complications à l'avenir."
                },
                "cost": "Le coût varie en fonction du type et de l'étendue du traitement. Un devis personnalisé est fourni après la consultation."
              }
            ]
          }          
          
        ]
      },      
      {
        "name": "Plastic Surgery",
        "img": "psurg.webp",
        "description": "Medikaray Clinic specializes in advanced plastic surgery procedures designed to enhance your body contours and improve your confidence, using cutting-edge techniques tailored to your needs.",
        "subItems": [
          {
            "name": "Gastric Sleeve Surgery",
            "link": "/plastic-surgery",
            "img": "gastric sleeve surgery.png",
            "description": "A bariatric procedure that reduces stomach size to aid in significant weight loss.",
            "benefits": [
              "Promotes long-term weight loss.",
              "Improves obesity-related health issues.",
              "Enhances overall quality of life."
            ],
            "type": "Surgical",
            "duration": "2–4 weeks recovery time.",
            "results": "Patients typically lose 50–70% of excess weight within a year."
          },
          {
            "name": "Submentoplasty",
            "link": "/plastic-surgery",
            "img": "submentoplasty.png",
            "description": "A procedure to eliminate excess fat and tighten skin under the chin.",
            "benefits": [
              "Defines and sculpts the jawline.",
              "Reduces the appearance of a double chin.",
              "Offers long-lasting results."
            ],
            "type": "Surgical",
            "duration": "1–2 weeks recovery time.",
            "results": "Results are permanent after swelling subsides."
          },
          {
            "name": "Liposuction",
            "link": "/plastic-surgery",
            "img": "liposuction.png",
            "description": "A procedure to remove localized fat deposits and reshape specific body areas.",
            "benefits": [
              "Reduces stubborn fat in targeted areas.",
              "Improves body proportions and contours.",
              "Offers customizable results."
            ],
            "type": "Surgical",
            "duration": "1–3 weeks recovery time.",
            "results": "Results are long-lasting with a healthy lifestyle."
          },
          {
            "name": "Gynecomastia Surgery",
            "link": "/plastic-surgery",
            "img": "breast lift.png",
            "description": "A surgery to reduce excess breast tissue in men for a more masculine chest contour.",
            "benefits": [
              "Flattens and firms the chest.",
              "Improves self-confidence.",
              "Offers permanent results."
            ],
            "type": "Surgical",
            "duration": "2–4 weeks recovery time.",
            "results": "Permanent results with stable weight and lifestyle."
          },
          {
            "name": "Breast Augmentation",
            "link": "/plastic-surgery",
            "img": "breast augmentation.png",
            "description": "A procedure to enhance breast size and shape using implants or fat transfer.",
            "benefits": [
              "Increases breast volume and symmetry.",
              "Boosts confidence and body image.",
              "Customizable for natural or dramatic results."
            ],
            "type": "Surgical",
            "duration": "1–2 weeks recovery time.",
            "results": "Long-lasting results, with implants requiring periodic maintenance."
          },
          {
            "name": "Brazilian Butt Lift (BBL)",
            "link": "/plastic-surgery",
            "img": "bbl (1).png",
            "description": "A procedure that uses fat transfer to enhance the size and shape of the buttocks.",
            "benefits": [
              "Provides natural-looking results.",
              "Improves body contours by sculpting multiple areas.",
              "Avoids the use of implants."
            ],
            "type": "Surgical",
            "duration": "2–4 weeks recovery time.",
            "results": "Visible after swelling subsides, lasting for years with proper care."
          },
          {
            "name": "Breast Lift (Mastopexy)",
            "link": "/plastic-surgery",
            "img": "eyelid lift.png",
            "description": "A procedure to lift and reshape sagging breasts for a youthful appearance.",
            "benefits": [
              "Enhances breast firmness and position.",
              "Improves symmetry and contour.",
              "Restores confidence and comfort."
            ],
            "type": "Surgical",
            "duration": "2–3 weeks recovery time.",
            "results": "Long-lasting with stable weight."
          },
          {
            "name": "Abdominoplasty (Tummy Tuck)",
            "link": "/plastic-surgery",
            "img": "abdominoplasty.png",
            "description": "A procedure to remove excess skin and fat from the abdomen while tightening muscles.",
            "benefits": [
              "Flattens and tones the abdominal area.",
              "Removes stretch marks and loose skin.",
              "Enhances body contour and posture."
            ],
            "type": "Surgical",
            "duration": "4–6 weeks recovery time.",
            "results": "Permanent results with proper diet and exercise."
          }
        ]
      },        
      {
        "name": "Hair Transplant",
        "img": "hair transplant.png",
        "description": "Our hair restoration procedures are designed to provide natural and lasting results, using advanced techniques and technology for both men and women.",
        "subItems": [
          {
            "name": "PRP",
            "link": "/hair-transplant",
            "img": "prp treatment.png",
            "description": "A non-surgical treatment to stimulate hair follicles and improve hair density using platelet-rich plasma.",
            "benefits": [
              "Enhances healing after a hair transplant",
              "Treats thinning hair and slows hair loss progression"
            ],
            "type": "Non-surgical",
            "duration": "30–60 minutes per session",
            "sessions": "3–6 sessions spaced 4–6 weeks apart",
            "downtime": "No downtime; patients can resume daily activities immediately.",
            "results": "Improved hair thickness and reduced shedding over 3–6 months."
          },
          {
            "name": "Beard and Mustache Transplant",
            "link": "/hair-transplant",
            "img": "beard transplant.png",
            "description": "A procedure to restore or enhance facial hair for a natural-looking beard or mustache.",
            "techniques": [
              "Follicles are typically taken from the back of the scalp (donor area).",
              "Hairline and density are designed to suit individual facial proportions for a natural look.",
              "Customization: Tailored to match the natural growth patterns of your beard and mustache."
            ],
            "mildSwelling": "Mild swelling or redness subsides within 5–7 days.",
            "shockLoss": "Transplanted hairs fall out initially (shock loss) but start regrowing within 3 months.",
            "results": "Permanent and natural-looking facial hair within 9–12 months."
          },
          {
            "name": "Hair Transplant",
            "link": "/hair-transplant",
            "img": "1 hair transplant (1).png",
            "description": "A permanent solution for hair loss using advanced transplant techniques to ensure natural results.",
            "techniques": [
              "FUE (Follicular Unit Extraction): Individual follicles are extracted and transplanted to balding areas. This technique minimizes scarring and ensures a natural look.",
              "DHI (Direct Hair Implantation): A more precise method where follicles are implanted directly without creating recipient area incisions beforehand.",
              "Sapphire FUE: Uses sapphire blades for finer incisions, promoting faster healing and denser transplantation."
            ],
            "duration": "6–8 hours, depending on the number of grafts needed.",
            "anesthesia": "Local Anesthesia ensures a painless experience.",
            "aftercare": [
              "Avoid direct sunlight and strenuous activities for the first 10 days.",
              "Hair washing techniques are explained to protect grafts."
            ],
            "results": "New hair starts growing within 3 months, with full results visible after 12–18 months."
          }
        ]
      },
      {
        "name": "Face Plastic Surgery",
        "img": "face plastic surgery.png",
        "subItems": [
          {
            "name": "Botox",
            "link": "/face-surgery",
            "img": "botox.png",
            "description": "Botox injections are a non-surgical cosmetic procedure used to reduce fine lines and wrinkles by temporarily relaxing the facial muscles.",
            "benefits": [
              "Reduces the appearance of crow's feet, forehead lines, and frown lines.",
              "Prevents the formation of new wrinkles.",
              "Provides a quick and minimally invasive solution for facial rejuvenation."
            ],
            "suitableFor": "Ideal for individuals looking to smooth dynamic wrinkles caused by facial expressions without undergoing surgery.",
            "preparationAndAftercare": {
              "preparation": "No special preparation needed. Avoid blood-thinning medications.",
              "aftercare": "Avoid lying down or strenuous activity for 4–6 hours."
            },
            "expectedResults": {
              "timeline": "3–7 days",
              "duration": "3–6 months"
            },
            "cost": "$300–$600 per session"
          },
          {
            "name": "Eyelid Lift",
            "link": "/face-surgery",
            "img": "eyelid lift.png",
            "description": "An eyelid lift enhances the appearance of the eyes by removing excess skin, fat, and muscle from the upper or lower eyelids.",
            "benefits": [
              "Reduces drooping eyelids and puffiness.",
              "Improves vision by lifting obstructive skin.",
              "Provides a more youthful, refreshed look."
            ],
            "suitableFor": "Ideal for individuals with sagging eyelids or under-eye bags.",
            "preparationAndAftercare": {
              "preparation": "Avoid smoking and certain medications pre-surgery.",
              "aftercare": "Keep the area clean and use prescribed ointments."
            },
            "expectedResults": {
              "timeline": "Visible within weeks",
              "duration": "Long-lasting"
            },
            "cost": "$3,000–$6,000"
          },
          {
            "name": "Texas Jawline Lift",
            "link": "/face-surgery",
            "img": "texas jawline filler.png",
            "description": "The Texas jaw filler enhances the jawline, providing a more contoured and structured appearance.",
            "benefits": [
              "Improves jawline definition.",
              "Balances facial proportions.",
              "Offers a non-surgical alternative to jawline surgery."
            ],
            "suitableFor": "Perfect for individuals desiring a sharper, more defined jawline without invasive surgery.",
            "preparationAndAftercare": {
              "preparation": "Avoid alcohol and blood thinners before treatment.",
              "aftercare": "Apply ice packs to reduce swelling."
            },
            "expectedResults": {
              "timeline": "Immediate",
              "duration": "12–18 months"
            },
            "cost": "$1,500–$3,000"
          },
          {
            "name": "Lip Augmentation",
            "link": "/face-surgery",
            "img": "lip filler.png",
            "description": "Lip augmentation enhances the volume, shape, and symmetry of the lips using dermal fillers or fat grafting.",
            "benefits": [
              "Provides fuller, more defined lips.",
              "Enhances facial harmony and symmetry.",
              "Offers a customizable approach for subtle or dramatic results."
            ],
            "suitableFor": "Best for those seeking to add volume or correct asymmetry in their lips.",
            "preparationAndAftercare": {
              "preparation": "Avoid blood-thinning medications and alcohol.",
              "aftercare": "Keep lips hydrated and avoid heavy makeup for 24 hours."
            },
            "expectedResults": {
              "timeline": "Immediate",
              "duration": "6–12 months"
            },
            "cost": "$400–$800"
          },
          {
            "name": "Face Lift",
            "link": "/face-surgery",
            "img": "face lift.png",
            "description": "A face lift is a surgical procedure that removes excess skin and tightens facial tissues to reduce signs of aging.",
            "benefits": [
              "Restores a youthful, refreshed appearance.",
              "Eliminates sagging skin and deep wrinkles.",
              "Improves facial contours."
            ],
            "suitableFor": "Recommended for individuals with moderate to severe signs of aging who seek a long-lasting solution.",
            "preparationAndAftercare": {
              "preparation": "Stop smoking and avoid certain medications before surgery.",
              "aftercare": "Follow recovery instructions, including bandage care."
            },
            "expectedResults": {
              "timeline": "After swelling subsides",
              "duration": "10+ years"
            },
            "cost": "$10,000–$15,000"
          },
          {
            "name": "Rhinoplasty",
            "link": "/face-surgery",
            "img": "rhinoplasty.png",
            "description": "Rhinoplasty, or a nose job, reshapes the nose to improve aesthetics or functionality.",
            "benefits": [
              "Enhances facial harmony by reshaping the nose.",
              "Corrects breathing issues caused by structural problems.",
              "Addresses aesthetic concerns like size, shape, and symmetry."
            ],
            "suitableFor": "Suitable for individuals seeking cosmetic or functional improvements to their nose.",
            "preparationAndAftercare": {
              "preparation": "Avoid blood-thinning medications and plan for recovery time.",
              "aftercare": "Use a nasal splint as advised and avoid strenuous activities."
            },
            "expectedResults": {
              "timeline": "Full results in 6–12 months",
              "duration": "Permanent"
            },
            "cost": "$7,000–$10,000"
          },
          {
            "name": "Filler Injection",
            "link": "/face-surgery",
            "img": "filler injection.png",
            "description": "Filler injections enhance facial volume, smooth wrinkles, and contour features using hyaluronic acid or other dermal fillers.",
            "benefits": [
              "Restores volume in areas like cheeks, lips, and under-eyes.",
              "Smooths fine lines and wrinkles.",
              "Provides a non-surgical solution for facial rejuvenation."
            ],
            "suitableFor": "Ideal for individuals seeking quick, minimally invasive improvements in facial volume and texture.",
            "preparationAndAftercare": {
              "preparation": "Avoid alcohol and blood thinners.",
              "aftercare": "Massage treated areas gently if instructed."
            },
            "expectedResults": {
              "timeline": "Immediate",
              "duration": "6–18 months"
            },
            "cost": "$500–$2,000"
          },
          {
            "name": "Nefertiti Lift",
            "link": "/face-surgery",
            "img": "nefertiti lift.png",
            "description": "The Nefertiti Lift is a non-surgical treatment that uses Botox to tighten and contour the neck and jawline, achieving a more youthful appearance.",
            "benefits": [
              "Lifts and defines the jawline.",
              "Reduces sagging in the neck area.",
              "Enhances overall facial aesthetics."
            ],
            "suitableFor": "Ideal for individuals with mild sagging and a desire to rejuvenate their neck and jawline.",
            "preparationAndAftercare": {
              "preparation": "Consult with your doctor for muscle relaxant safety.",
              "aftercare": "Avoid massaging the neck for 24 hours."
            },
            "results": {
              "timeline": "Within a week",
              "duration": "3–6 months"
            },
            "cost": "$300–$800"
          }
        ]
      }
      
    ]
  },
  { 
    "name": "Services", 
    "link": "/#vip" 
  },
  { 
    "name": "Contact Us", 
    "link": "/#contact" 
  },
  { 
    "name": "Gallery", 
    "link": "/gallerie" 
  }
]
;


