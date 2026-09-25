export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  benefits: string[];
  highlight: string;
  suitableFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: 'Google' | 'Justdial' | 'Verified Member';
  category: 'CrossFit' | 'Personal Training' | 'Facilities' | 'Transformation' | 'Atmosphere';
}

export interface FacilityZone {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  specs: string[];
  description: string;
}

export const GYM_DETAILS = {
  name: 'REVIVE FITNESS',
  headline: 'Train Strong. Live Stronger.',
  rating: 4.9,
  reviewCount: 192,
  address: '1st Floor, REVIVE FITNESS, 51 Jairam Tukaram Tandel Marg, near Grand Central Mall, Seawoods West, Sector 40, Navi Mumbai 400706',
  shortAddress: '1st Floor, 51 Jairam Tukaram Tandel Marg, Seawoods West, Sector 40, Navi Mumbai',
  landmark: '2 minutes walk from Seawoods Grand Central Mall & Railway Station',
  phone: '083699 44765',
  phoneRaw: '+918369944765',
  phoneDisplay: '083699 44765',
  whatsappRaw: '918369944765',
  whatsappMessage: 'Hi Revive Fitness, I want to book a visit / enquire about membership.',
  whatsappUrl: 'https://wa.me/918369944765?text=Hi%20Revive%20Fitness%2C%20I%20would%20like%20to%20enquire%20about%20membership%20and%20book%20a%20visit.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=REVIVE+FITNESS+51+Jairam+Tukaram+Tandel+Marg+Seawoods+West+Sector+40+Navi+Mumbai+400706',
  timings: {
    weekdays: '6:00 AM – 10:30 PM',
    weekdaysDisplay: 'Mon – Sat: 6:00 AM – 10:30 PM',
    sunday: '7:00 AM – 1:00 PM',
    sundayDisplay: 'Sunday: 7:00 AM – 1:00 PM',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'crossfit',
    name: 'CrossFit',
    shortDesc: 'High-intensity functional conditioning combining metabolic conditioning, gymnastics, and barbell power.',
    fullDesc: 'Revive Fitness features a dedicated CrossFit and functional fitness arena in Seawoods. Our coached sessions focus on real athletic movements—sled pushes, kettlebell complexes, battle ropes, pull-up rigs, and box jumps engineered to build cardiovascular capacity, raw strength, and stamina.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Dedicated functional turf lane & pull-up rigs',
      'Kettlebells, medicine balls & battle ropes',
      'Scalable workouts for all fitness levels',
      'Coach-supervised form & interval programming',
    ],
    benefits: ['Explosive functional power', 'High calorie expenditure', 'Cardiovascular endurance'],
    highlight: 'Dedicated Turf & Rig Area',
    suitableFor: 'Athletes & fitness enthusiasts craving high-energy, dynamic training',
  },
  {
    id: 'weight-training',
    name: 'Weight Training',
    shortDesc: 'Comprehensive progressive resistance training with Olympic barbells, heavy dumbbells, and premium machines.',
    fullDesc: 'Built for serious lifters and beginners alike, our strength deck houses heavy dumbbell racks, Olympic benches, squat cages, deadlift platforms, and precision selectorized resistance machines. Train hypertrophy, absolute strength, or muscle toning in a clean, spacious environment.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Full rack of calibrated dumbbells & Olympic plates',
      'Squat racks, power cages & Olympic benches',
      'Targeted plate-loaded and cable crossover stations',
      'Spacious floor spacing—no waiting or overcrowding',
    ],
    benefits: ['Lean muscle hypertrophy', 'Metabolic rate enhancement', 'Bone density & joint resilience'],
    highlight: 'Calibrated Olympic Equipment',
    suitableFor: 'Anyone looking to build muscle, sculpt physique, or increase absolute strength',
  },
  {
    id: 'cycling',
    name: 'Cycling (Indoor Spin)',
    shortDesc: 'High-cadence rhythm rides and cardiovascular endurance training on precision performance bikes.',
    fullDesc: 'Elevate your cardiovascular stamina with our high-energy indoor cycling program. Experience rhythm-driven rides, hill climbs, sprints, and interval training designed to torch calories while staying gentle on knees and joints in an air-conditioned studio.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Adjustable commercial spin bikes with toe-cages',
      'High-cadence sprint and hill climb regimes',
      'Low-impact, joint-safe cardio training',
      'Pulsing sound system & energizing atmosphere',
    ],
    benefits: ['High-efficiency cardio fitness', 'Lower body muscular endurance', 'Joint-friendly fat burning'],
    highlight: 'Performance Studio Bikes',
    suitableFor: 'Cardio seekers, weight management goals, and endurance athletes',
  },
  {
    id: 'personal-training',
    name: 'Personal Training',
    shortDesc: '1-on-1 dedicated coaching tailored to your body type, goals, schedule, and biomechanics.',
    fullDesc: 'Work side-by-side with experienced Revive Fitness trainers who develop a customized roadmap for your body. From posture correction and foundational movement to periodized strength blocks and body fat reduction, you get direct accountability every rep of the way.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Comprehensive baseline fitness & mobility assessment',
      '1-on-1 form correction and safe progressive overload',
      'Goal tracking with milestone body metrics',
      'Motivation and disciplined accountability',
    ],
    benefits: ['Faster, injury-free results', 'Custom tailored workouts', 'Direct technique mastery'],
    highlight: 'Dedicated Certified Coaches',
    suitableFor: 'Beginners needing guidance, busy professionals, and those with specific body goals',
  },
  {
    id: 'nutrition-consulting',
    name: 'Nutrition Consulting',
    shortDesc: 'Realistic, sustainable diet guidance and macronutrient planning customized for Indian lifestyles.',
    fullDesc: 'Fitness is only as effective as your nutritional fuel. Our nutrition consulting breaks through restrictive fad diets to deliver realistic, culturally compatible meal guidelines with optimal protein intake, macro balancing, hydration habits, and pre/post workout nutrition.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Personalized macronutrient & calorie target calculation',
      'Practical Indian diet meal planning & vegetarian options',
      'Pre-workout energy & post-workout recovery strategies',
      'Continuous body composition evaluation',
    ],
    benefits: ['Sustainable fat loss & muscle retention', 'Consistent daily energy', 'Zero crash starvation'],
    highlight: 'Lifestyle & Macro Tailoring',
    suitableFor: 'Members wanting total body transformations and sustainable healthy habits',
  },
];

export const FACILITIES_DATA: FacilityZone[] = [
  {
    id: 'heavy-strength',
    title: 'Strength & Free Weights Deck',
    subtitle: 'Calibrated barbells, dumbbells, and racks',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    specs: [
      'Extensive heavy dumbbell range from light to heavy sets',
      'Olympic barbells, bumper plates & hex bars',
      'Multi-angle adjustable benches & incline/decline stations',
      'Sturdy power cages & safety spotter bars',
    ],
    description: 'A spacious, heavy-duty weight floor designed with shock-absorbing rubber flooring to handle serious deadlifts, squats, and press training without clutter.',
  },
  {
    id: 'crossfit-turf',
    title: 'CrossFit & Functional Arena',
    subtitle: 'Agility turf, rig stations & conditioning kit',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop',
    specs: [
      'High-traction sprint turf lane',
      'Multi-grip pull-up rigs & monkey bar setup',
      'Battle ropes, slam balls & cast iron kettlebells',
      'Plyometric jump boxes & agility ladders',
    ],
    description: 'An open, dynamic space where you can move freely, push sleds, slam balls, and execute high-octane conditioning rounds without gym floor congestion.',
  },
  {
    id: 'machines-cables',
    title: 'Selectorized & Cable Fleet',
    subtitle: 'Smooth resistance machines for isolated muscular activation',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
    specs: [
      'Dual-stack cable crossover with multiple attachments',
      'Lat pulldown, seated cable rows & chest press',
      'Plate-loaded leg press, hack squat & calf machines',
      'Ergonomic biomechanical paths for joint safety',
    ],
    description: 'Modern cable and pin-selected machines engineered for targeted muscle isolation, injury rehab, and smooth resistance curves across the entire range of motion.',
  },
  {
    id: 'cardio-cycling',
    title: 'Cardio & Indoor Spin Hub',
    subtitle: 'Endurance gear to build heart capacity and burn calories',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop',
    specs: [
      'Commercial spin bikes with flywheels & resistance dials',
      'High-spec motor treadmills with incline controls',
      'Cross-trainers & elliptical machines',
      'Surround sound & energetic training lighting',
    ],
    description: 'Dedicated cardio and cycling setups positioned for optimal ventilation and air conditioning, giving you the stamina boost you need.',
  },
  {
    id: 'amenities-hygiene',
    title: 'Pristine Hygiene & Locker Amenities',
    subtitle: 'Spotless changing rooms, air conditioning & secure storage',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    specs: [
      'Biometric access control for hassle-free entry',
      'Spacious secure member lockers',
      'Continuous central air conditioning & air filtration',
      'Regular sanitized equipment cycles throughout the day',
    ],
    description: 'We take cleanliness seriously. Enjoy fresh, cool air, clean changing facilities, and a sanitized gym floor that makes every workout comfortable.',
  },
];

export const REAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Prathamesh Kulkarni',
    rating: 5,
    timeAgo: 'Local Seawoods Member',
    category: 'CrossFit',
    source: 'Google',
    comment:
      'Best gym in Seawoods! The CrossFit setup and functional turf are top-notch. Unlike other crowded gyms near Grand Central Mall, Revive Fitness has ample floor space and modern equipment. The trainers actually guide you on proper posture instead of just watching from afar.',
  },
  {
    id: 'rev-2',
    author: 'Neha Deshmukh',
    rating: 5,
    timeAgo: 'Member for 8+ months',
    category: 'Personal Training',
    source: 'Google',
    comment:
      'Took personal training here and the results have been incredible. The trainers are polite, deeply knowledgeable, and genuinely invested in your progress. Cleanliness is maintained at all times, and the environment is very comfortable for women.',
  },
  {
    id: 'rev-3',
    author: 'Aditya Patil',
    rating: 5,
    timeAgo: 'Regular Lifter',
    category: 'Facilities',
    source: 'Justdial',
    comment:
      'Spacious gym with top quality weight training machines and dumbbells. What I love most is the opening time—they open at 6:00 AM sharp which is perfect before catching the train at Seawoods station. 100% recommended!',
  },
  {
    id: 'rev-4',
    author: 'Siddhesh Shinde',
    rating: 5,
    timeAgo: 'Seawoods West Resident',
    category: 'Transformation',
    source: 'Google',
    comment:
      'Started with zero workout background. With their nutrition advice and weight training plan, I dropped 11 kg in 4 months. The vibe is super energetic and motivating. No loud unnecessary hype, just pure serious fitness.',
  },
  {
    id: 'rev-5',
    author: 'Pooja Iyer',
    rating: 5,
    timeAgo: 'Verified Member',
    category: 'Atmosphere',
    source: 'Google',
    comment:
      'Cleanest gym in Sector 40! AC always works properly, music is motivating, and equipment is well-maintained. The location right next to Grand Central Mall is super convenient with easy parking nearby.',
  },
  {
    id: 'rev-6',
    author: 'Rahul Verma',
    rating: 5,
    timeAgo: 'CrossFit & Spin enthusiast',
    category: 'CrossFit',
    source: 'Justdial',
    comment:
      'Great cycling and CrossFit sessions. The trainers keep pushing your limits in a safe, constructive way. Biometric entry makes it seamless. Best 4.9 rating well earned by the team.',
  },
];

export const WHY_CHOOSE_US = [
  {
    iconName: 'MapPin',
    title: 'Prime Seawoods West Location',
    description: 'Situated on 51 Jairam Tukaram Tandel Marg, literally 2 minutes walking distance from Grand Central Mall and Seawoods Darave Station. Ideal for daily commuters.',
  },
  {
    iconName: 'Dumbbell',
    title: 'Comprehensive 5-in-1 Training',
    description: 'CrossFit, Weight Training, Cycling, 1-on-1 Personal Coaching, and Nutrition Consulting under one unified roof. No need to commute between multiple fitness centers.',
  },
  {
    iconName: 'Users',
    title: 'Knowledgeable, Hands-On Coaches',
    description: 'Our certified fitness coaches prioritize biomechanical safety, form correction, and gradual progressive overload for every member, from day one onwards.',
  },
  {
    iconName: 'Sparkles',
    title: 'Impeccable Cleanliness & AC',
    description: 'Clean gym floor, sanitized equipment, high-powered air conditioning, and fresh air ventilation so you can push your limits without suffocating.',
  },
  {
    iconName: 'Clock',
    title: 'Extended Working Hours',
    description: 'Open Monday to Saturday from 6:00 AM to 10:30 PM, plus Sunday morning hours. Flexible training schedules that fit seamlessly into busy work lives.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Verified 4.9★ Community Trust',
    description: 'Backed by 192+ authentic member reviews across Google and Justdial with a 4.9 star rating. A welcoming, supportive, and non-intimidating culture.',
  },
];

export const FAQS = [
  {
    question: 'Where is Revive Fitness located in Seawoods?',
    answer: 'We are on the 1st Floor, 51 Jairam Tukaram Tandel Marg, near Grand Central Mall in Seawoods West, Sector 40, Navi Mumbai (Pin: 400706). It is just a 2-minute walk from Seawoods Darave railway station and Grand Central Mall.',
  },
  {
    question: 'What are the gym operating hours?',
    answer: 'We are open Monday through Saturday from 6:00 AM to 10:30 PM. On Sundays, we are open in the morning from 7:00 AM to 1:00 PM for weekend conditioning and recovery workouts.',
  },
  {
    question: 'Can beginners join CrossFit and Weight Training classes?',
    answer: 'Absolutely. Every CrossFit routine and resistance workout is fully scalable. Our certified trainers teach foundational movements, barbell mechanics, and correct form before adding any intensity or heavy load.',
  },
  {
    question: 'Do you offer Personal Training and Nutrition guidance?',
    answer: 'Yes! Personal Training includes a dedicated coach who creates a tailored program for your body composition, along with custom Nutrition Consulting that fits everyday Indian meals with sustainable macro tracking.',
  },
  {
    question: 'How can I schedule a gym visit or trial?',
    answer: 'You can tap the "Book a Visit" button on this website, call us directly at 083699 44765, or send a quick WhatsApp message. Our team will show you around the facility and answer your questions.',
  },
  {
    question: 'Is parking available near the gym?',
    answer: 'Yes, convenient bike and street parking is available along Jairam Tukaram Tandel Marg, and ample parking is also available right across at Grand Central Mall.',
  },
];
