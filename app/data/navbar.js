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
      "link": "/about" 
    },
    {
      "name": "Treatments",
      "subItems": [
        {
          "name": "Dental Treatments",
          "subItems": [
            {
              "name": "Dentures",
              "link": "/dental-treatments",
              "description": "Dentures are removable dental prosthetics designed to replace missing teeth and restore the function and appearance of your smile. At Medikaray Clinic, we provide both partial and complete dentures tailored to your specific needs, ensuring comfort, functionality, and a natural look.",
              "subItems": [
                {
                  "name": "Partial Dentures",
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
              "link": "/dental-treatments",
              "description": "Aesthetic dentistry at Medikaray Clinic focuses on enhancing the appearance of your smile with advanced, personalized dental solutions. Our treatments combine the latest technology and expert care to provide you with a beautiful, natural-looking smile.",
              "subItems": [
                {
                  "name": "Hollywood Smile Veneers",
                  "link": "/dental-treatments/hollywood-smile-veneers",
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
                  "link": "/dental-treatments/dental-crowns",
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
                  "link": "/dental-treatments/digital-smile-design",
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
              "link": "/dental-treatments",
              "description" : "Dental implants offer a long-lasting and natural-looking solution for those with missing teeth. At Medikaray Clinic, we provide a range of implant options tailored to your needs, from single dental implants to full-mouth restorations like All-on-Four and All-on-Six. Our team of expert oral surgeons and modern technology ensure that your experience is seamless, safe, and effective.",
              "subItems": [
                {
                  "name": "Single Dental Implant",
                  "link": "/dental-treatments",
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
              "link": "/dental-treatments",
              "description": "Orthodontics is a dental specialty that focuses on diagnosing, preventing, and treating misaligned teeth and jaws. At Medikaray Clinic, we offer a range of advanced orthodontic treatments to help you achieve a confident, well-aligned smile. Whether you are looking for traditional braces, clear aligners, or more advanced options, our experienced orthodontic specialists are here to provide the best care tailored to your needs.",
              "subItems": [
                {
                  "name": "Traditional Metal Braces",
                  "link": "/dental-treatments/traditional-metal-braces",
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
                  "link": "/dental-treatments/clear-aligners",
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
                  "link": "/dental-treatments/lingual-braces",
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
                  "link": "/dental-treatments/early-orthodontic-treatment",
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
            }
            
          ]
        },
        
        {
          "name": "Hair Transplant",
          "subItems": [
            { "name": "PRP", "link": "/hair-transplant" },
            { "name": "Beard and Mustache Transplant", "link": "/hair-transplant" },
            { "name": "Hair Transplant", "link": "/hair-transplant" }
          ]
        },
        {
          "name": "Plastic Surgery",
          "subItems": [
            { "name": "Gynecomastia", "link": "/botox" },
            { "name": "Breast Lift", "link": "/eyelid" },
            { "name": "Liposuction", "link": "/jawline" },
            { "name": "Breast Augmentation", "link": "/jawline" },
            { "name": "Submentoplasty", "link": "/jawline" },
            { "name": "BBL", "link": "/jawline" },
            { "name": "Gastric Sleeve Surgery", "link": "/jawline" },
            { "name": "Abdominoplasty", "link": "/jawline" }
          ]
        },
        {
          "name": "Face Plastic Surgery",
          "subItems": [
            { "name": "Botox", "link": "/botox" },
            { "name": "Eyelid Lift", "link": "/eyelid" },
            { "name": "Texas Jawline Lift", "link": "/jawline" },
            { "name": "Lip Augmentation", "link": "/jawline" },
            { "name": "Face Lift", "link": "/jawline" },
            { "name": "Rhinoplasty", "link": "/jawline" },
            { "name": "Filler Injection", "link": "/jawline" },
            { "name": "Nefertiti Lift", "link": "/jawline" }
          ]
        }
      ]
    },
    { 
      "name": "Services", 
      "link": "/services" 
    },
    { 
      "name": "Contact Us", 
      "link": "/contact" 
    },
    { 
      "name": "Gallery", 
      "link": "/gallery" 
    }
  ]
  ;
  

