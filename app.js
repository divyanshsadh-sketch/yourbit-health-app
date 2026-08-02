/**
 * YOURBIT - All-in-One Health & Wellness Application
 * Clinical & Wellness Theme with Password Protection (Passcode: divyansh)
 */

// Embedded Age-wise Disease Matrix Data from Sheet13
const DISEASES_BY_AGE = {
  infancy: {
    name: "Infancy (0 - 1 Year)",
    focus: "Neonatal immunity, metabolic stabilization, and digestive protection",
    diseases: [
      { ayurvedic: "Balatipata", modern: "Neonatal Sepsis & Birth Complications", dosha: "Kapha-Vata prakopa in Rakta", basic: "CBC, CRP, Glucose, Pulse Oximetry", advanced: "Blood & CSF Cultures, Procalcitonin, ABG, Cranial Ultrasound", symptoms: "Lethargy, hypothermia/fever, poor suckling, grunting, jaundice", form: "Pediatric drops, Suvarna Rasayana" },
      { ayurvedic: "Pratishyaya & Kasa", modern: "Acute Respiratory Infections & RSV", dosha: "Kapha in Prana vaha srotas", basic: "Viral Swab, Pulse Oximetry, CBC", advanced: "Multiplex PCR Panel, Chest X-ray, Capillary Blood Gas", symptoms: "Tachypnea, nasal flaring, chest retractions, wheezing, cough", form: "Alcohol-free herbal linctus, honey drops" },
      { ayurvedic: "Karshya & Shosh", modern: "Severe Malnutrition & Wasting", dosha: "Rasakshya due to weak Agni", basic: "MUAC, WHO Z-score, Hemoglobin", advanced: "Serum Electrolytes, Albumin, Prealbumin, Zinc & Vit A", symptoms: "MUAC < 11.5 cm, muscle wasting, pitting edema, sparse hair", form: "Balarishta, Swarna Prashana" },
      { ayurvedic: "Sahaja Hridroga", modern: "Congenital Heart Defects", dosha: "Garbhaja Beeja Dushti", basic: "4-Limb Pulse Oximetry Screening, Chest X-ray, ECG", advanced: "Echocardiography, Cardiac MRI, Cardiac Catheterization", symptoms: "Cyanosis, nursing fatigue, excessive sweating, heart murmur", form: "Classical Medicated Ghritas" },
      { ayurvedic: "Kshiralsaka", modern: "Milk-Induced Indigestion & Diarrhea", dosha: "Pitta-Kapha in Anna vaha srotas", basic: "Stool pH, Reducing Substances, Occult Blood", advanced: "Milk-Specific IgE, Skin Prick Test, Hydrogen Breath Test", symptoms: "Explosive watery stools, colic/gas, eczema, mucus in stool", form: "Deepana-Pachana Syrups, Gripe Water" }
    ]
  },
  toddlers: {
    name: "Toddlers (1 - 5 Years)",
    focus: "Weaning transition, parasite control, and infection defense",
    diseases: [
      { ayurvedic: "Parigarbhika & Phakka", modern: "Childhood Stunting & Wasting", dosha: "Mamsa-Meda deficiency", basic: "WHO Growth Chart, CBC, Urine/Stool Routine", advanced: "Thyroid Profile (TSH/T4), Celiac Serology (tTG-IgA), IGF-1", symptoms: "Height/Weight Z-score < -2 SD, delayed motor milestones", form: "Protein-herbal Granules" },
      { ayurvedic: "Krimiroga", modern: "Soil-Transmitted Helminths (Worms)", dosha: "Purisha vaha srotas infestation", basic: "Stool Routine & Microscopy, Tape Test", advanced: "Stool Concentration, Eosinophil Count, Stool PCR Panel", symptoms: "Perianal nocturnal itching, abdominal pain, bloating", form: "Vidangarishta, Anthelmintic Syrups" },
      { ayurvedic: "Romantika & Masurika", modern: "Measles, Mumps & Viral Exanthems", dosha: "Rakta-Pitta vitiation", basic: "Physical Exam, CBC, CRP", advanced: "Serum Viral Serology (IgM/IgG), RT-PCR", symptoms: "Maculopapular rash, high fever, Koplik spots, swollen parotid", form: "External Lepam, Internal Kwath" },
      { ayurvedic: "Agantuja Visha", modern: "Accidental Ingestions, Poisoning & Burns", dosha: "Vishakta environmental exposure", basic: "ABG, CMP, Toxicology Screen, ECG", advanced: "Upper Endoscopy, Chest/Abdominal X-ray, Contrast CT", symptoms: "Sudden altered mental state, drooling, mucosal burns, stridor", form: "Emergency Jatyadi Taila" }
    ]
  },
  children: {
    name: "Children (5 - 10 Years)",
    focus: "Cognitive support, vision health, and respiratory care",
    diseases: [
      { ayurvedic: "Krimi Danta", modern: "Dental Caries & Periodontal Issues", dosha: "Asthi erosion via Kapha-Pitta", basic: "Visual-Tactile Probe Exam, Gingival Score", advanced: "Bitewing/Periapical Radiographs, OPG, Light Fluorescence", symptoms: "Toothache, sensitivity to hot/cold, dark pits, bleeding gums", form: "Herbal Toothpaste, Mouthwashes" },
      { ayurvedic: "Drishtigata Timira", modern: "Pediatric Myopia & Digital Eye Strain", dosha: "Alokaka Pitta depletion", basic: "Visual Acuity (Snellen), Subjective Refraction", advanced: "Cycloplegic Refraction, Optical Biometry, Corneal Topography", symptoms: "Squinting, sitting close to screens, eye rubbing, headaches", form: "Triphala Ghrita, Eye Drops" },
      { ayurvedic: "Tamaka Shwasa", modern: "Pediatric Asthma & Allergic Bronchitis", dosha: "Prana vaha srotas Kapha block", basic: "Peak Flow (PEFR), Inhaled Bronchodilator Trial", advanced: "Pre/Post Spirometry, FeNO, Skin Prick Allergy Panel", symptoms: "Recurrent wheezing, night/exercise cough, shortness of breath", form: "Sitopaladi Syrups, Herbal Cough Drops" },
      { ayurvedic: "Buddhi Mandya", modern: "ADHD & Learning Difficulties", dosha: "Medhya depletion (Majja lag)", basic: "Conners 3 / Vanderbilt Forms, Vision Screening", advanced: "Neuropsychological Eval, CPT, WISC-V", symptoms: "Inattention, hyperactivity, impulsivity, academic lag", form: "Brahmi & Shankhpushpi Syrups" },
      { ayurvedic: "Sthaulya", modern: "Childhood Obesity & Overweight", dosha: "Meda over-accumulation", basic: "BMI-for-Age Percentile, BP, Fasting Glucose", advanced: "OGTT, Fasting Insulin, Liver Enzymes, DXA Composition", symptoms: "BMI >= 95th percentile, acanthosis nigricans, exertion dyspnea", form: "Herbal Malt Drinks, Gummies" }
    ]
  },
  adolescents: {
    name: "Adolescents (10 - 20 Years)",
    focus: "Pubertal hormone balancing, acne management, and mental stress",
    diseases: [
      { ayurvedic: "Yuvana Pidika", modern: "Acne Vulgaris & Dermatological Eruptions", dosha: "Rakta-Pitta impurity in Twak", basic: "Clinical Visual Assessment, GAGS Grading", advanced: "Testosterone, DHEAS, LH/FSH Ratio, Lesion Culture", symptoms: "Comedones, inflammatory papules, nodulocystic lesions", form: "Herbal Face Wash, Manjisthadi Purifiers" },
      { ayurvedic: "Artava Kshaya", modern: "PCOS & Menstrual Irregularities", dosha: "Artava srotas Vata-Kapha block", basic: "Serum Testosterone, LH & FSH, Lipid Panel", advanced: "Pelvic Ultrasound (Follicle count), AMH, 17-OHP", symptoms: "Oligomenorrhea, hirsutism, cystic acne, weight gain", form: "Ashokarishta, Herbal Tablets" },
      { ayurvedic: "Rasagata Sthaulya", modern: "Early Adolescent Insulin Resistance", dosha: "Meda-Mamsa stagnation", basic: "Fasting Blood Glucose, HbA1c, Lipid Profile", advanced: "Fasting Insulin, HOMA-IR, 2-Hour OGTT", symptoms: "Acanthosis nigricans, abdominal adiposity, post-meal fatigue", form: "Standardized Metabolic Extracts" },
      { ayurvedic: "Vishada & Manasika Shrama", modern: "Exam Anxiety & Depression", dosha: "Manovaha srotas Rajas-Tamas spike", basic: "PHQ-9 & GAD-7 Forms, TSH, Vit D & B12", advanced: "Neuropsychiatric Eval, Polysomnography (Sleep Study)", symptoms: "Panic attacks, low mood, sleep loss, tension headaches", form: "Ashwagandha-Brahmi Capsules" },
      { ayurvedic: "Dhumra Pana Aasakti", modern: "Vaping & Nicotine Habituation", dosha: "Prana vaha tissue irritation", basic: "Pulse Oximetry, Fagerström Score, Lung Auscultation", advanced: "Urine Cotinine Level, High-Res Chest CT, Spirometry", symptoms: "Persistent dry cough, throat irritation, nicotine cravings", form: "Yashtimadhu De-addiction Sprays" }
    ]
  },
  young_adults: {
    name: "Young Adults (20 - 30 Years)",
    focus: "Metabolic protection, spinal health (tech neck), and liver detox",
    diseases: [
      { ayurvedic: "Avarodha Prameha", modern: "Early-Onset Prediabetes", dosha: "Kleda in Meda & Mutra", basic: "Fasting Glucose (100–125 mg/dL), HbA1c (5.7–6.4%)", advanced: "75g 2-Hr OGTT, Fasting Serum Insulin, hs-CRP", symptoms: "Post-meal fatigue, slow cut healing, increased thirst", form: "Vijaysar & Gymnema Capsules" },
      { ayurvedic: "Raktagata Vata", modern: "Hyperhomocysteinemia & Vascular Stress", dosha: "Vata vitiation in Rakta", basic: "Plasma Homocysteine, Lipid Profile, CBC", advanced: "MTHFR Gene Mutation Test, Vit B12 & MMA", symptoms: "Unexplained fatigue, premature venous thrombosis, chest tightness", form: "Arjuna & Guggulu Tablets" },
      { ayurvedic: "Greeva Stambha", modern: "Cervical Spondylosis & Carpal Tunnel (Tech Neck)", dosha: "Localized Vata in Asthi-Sandhi", basic: "Phalen's/Tinel's/Spurling's Tests, Cervical X-ray", advanced: "NCS & EMG, Cervical Spine MRI, Nerve Ultrasound", symptoms: "Neck stiffness, radiating arm pain, thumb/index numbness", form: "Mahanarayan Taila, Pain Patches" },
      { ayurvedic: "Oja Kshaya", modern: "Vitamin Deficiencies & Chronic Fatigue", dosha: "Ojas depletion (Dhatu under-nutrition)", basic: "CBC, Vit D (25-OH), Vit B12, Serum Ferritin", advanced: "MMA, RBC Folate, Holotranscobalamin", symptoms: "Brain fog, exhaustion, tingling paresthesias, hair thinning", form: "Shilajit Resin, Multi-Rasayana" },
      { ayurvedic: "Yakrit Vriddhi", modern: "Early Non-Alcoholic Fatty Liver (NAFLD)", dosha: "Rakta-Meda overload in Yakrit", basic: "LFT (ALT/AST), Abdominal Ultrasound, Lipid Panel", advanced: "FibroScan (CAP/Stiffness), FIB-4 Score, MRE", symptoms: "Upper right quadrant ache, persistent fatigue", form: "Kutki & Kalmegh Liver Syrups" }
    ]
  },
  established_adults: {
    name: "Adults (30 - 40 Years)",
    focus: "Chronic disease onset prevention (Hypertension, Diabetes, NASH)",
    diseases: [
      { ayurvedic: "Rakta Chapa Vriddhi", modern: "Essential Hypertension", dosha: "Vyan Vata & Rakta pressure elevation", basic: "BP (>=130/80 mmHg), Urinalysis, Serum Creatinine", advanced: "24-Hr ABPM, Echocardiogram (LVH), Renal Doppler", symptoms: "Morning occipital headaches, lightheadedness, blurred vision", form: "Sarpagandha & Arjuna Tablets" },
      { ayurvedic: "Sthoulya-Janya Prameha", modern: "Type 2 Diabetes Mellitus", dosha: "Meda & Majja corruption", basic: "Fasting Glucose (>=126), Random (>=200), HbA1c (>=6.5%)", advanced: "uACR Ratio, Anti-GAD Antibodies, CGM Sync", symptoms: "Polyuria, polydipsia, polyphagia, sudden weight loss", form: "Multi-herb Anti-diabetic Tablets" },
      { ayurvedic: "Yakritodara / NASH", modern: "NASH & Liver Fibrosis", dosha: "Yakrit tissue inflammation & fat", basic: "Elevated ALT/AST, Abdominal Ultrasound, Platelet Count", advanced: "FibroScan (CAP & E-score), MR Elastography, FibroTest", symptoms: "Progressive fatigue, right upper quadrant ache, hepatomegaly", form: "Silymarin Hepatoprotectives" },
      { ayurvedic: "Galaganda", modern: "Hypothyroidism & Thyroid Imbalances", dosha: "Kapha-Meda block in Gala srotas", basic: "Serum TSH, Free T4", advanced: "Anti-TPO Antibodies, Anti-Tg, Thyroid Ultrasound", symptoms: "Weight gain, cold intolerance, constipation, dry skin", form: "Kanchanar Guggulu Tablets" },
      { ayurvedic: "Mukha Arbuda", modern: "Oral Submucous Fibrosis (Pre-Cancerous)", dosha: "Rakta-Mamsa hardening", basic: "Inter-incisal Caliper Exam, Mucosal Palpation", advanced: "Incisional Biopsy, Toluidine Staining, VELscope", symptoms: "Trismus (restricted mouth opening), severe burning with spice", form: "Anti-fibrotic Herbal Extracts" }
    ]
  },
  middle_age: {
    name: "Middle Age (40 - 50 Years)",
    focus: "Cardiovascular protection, menopausal care, and joint degeneration",
    diseases: [
      { ayurvedic: "Dhamani Pratichaya", modern: "Accelerated Atherosclerosis & CAD", dosha: "Avarodha in Dhamani via Meda", basic: "12-Lead ECG, Lipid Panel (ApoB), Exercise TMT", advanced: "Coronary Calcium Score (CAC), Coronary CT Angio", symptoms: "Angina chest pressure, breathlessness, jaw/arm pain", form: "High-potency Guggulu Capsules" },
      { ayurvedic: "Rajonivritti Vikara", modern: "Perimenopause & Menopausal Syndrome", dosha: "Vata aggravation via Dhatu depletion", basic: "Symptom Questionnaire, Serum FSH, Estradiol", advanced: "Bone Density DXA Scan, Transvaginal Ultrasound", symptoms: "Hot flashes, night sweats, mood swings, vaginal dryness", form: "Shatavari Phytoestrogens" },
      { ayurvedic: "Sandhigata Vata", modern: "Knee Osteoarthritis", dosha: "Vata in Sandhi (cartilage wear)", basic: "Joint Exam, Weight-Bearing Knee Radiographs", advanced: "Knee Joint MRI, Synovial Fluid Analysis, Arthroscopy", symptoms: "Deep knee pain during activity, morning stiffness, crepitus", form: "Shallaki & Guggulu Tablets" },
      { ayurvedic: "Kati Stambha", modern: "Lumbar Disc Degeneration & Sciatica", dosha: "Kati pradesha Vata imbalance", basic: "Straight Leg Raise Test, Lumbar Spine X-rays", advanced: "Lumbar Spine MRI, EMG & NCV, CT Myelogram", symptoms: "Low back pain, sciatica shooting down leg, numbness", form: "Warm Liniments, Muscle Relaxants" }
    ]
  },
  seniors: {
    name: "Seniors (50 - 60+ Years)",
    focus: "Multi-morbidity, diabetic neuropathy, osteoporosis, and stroke care",
    diseases: [
      { ayurvedic: "Mutravaha Srotodushti", modern: "Early Chronic Kidney Disease (CKD)", dosha: "Basti filtration channel weakness", basic: "Serum Creatinine with eGFR, BUN, Urine Dipstick", advanced: "Urine Albumin-to-Creatinine Ratio (uACR), Renal Ultrasound", symptoms: "Peripheral ankle edema, frothy urine, nocturia, elevated BP", form: "Punarnava & Gokshura Syrups" },
      { ayurvedic: "Prameha Upadrava", modern: "Diabetic Neuropathy & Microvascular", dosha: "Vata damage to Sukshma srotas", basic: "10g Monofilament Test, Fundoscopy, Urine Protein", advanced: "Nerve Conduction Studies (NCS), OCT Retina, Autonomic Tests", symptoms: "Stocking-glove numbness, burning feet pain, blurred vision", form: "Rasayana Nerve Capsules" },
      { ayurvedic: "Pakshaghata", modern: "Ischemic Stroke & TIA", dosha: "Severe Vata dominance in Shiras", basic: "Emergency Non-Contrast CT, Glucose, Coagulation, ECG", advanced: "Diffusion MRI (DWI), Carotid Ultrasound, CT/MR Angio", symptoms: "FAST signs: Facial drooping, Arm weakness, Speech difficulty", form: "Mahanarayan Neuro-Rehab Oils" },
      { ayurvedic: "Asthi Sushirata", modern: "Postmenopausal Osteoporosis", dosha: "Asthi dhatu depletion via Vata", basic: "Bone Density DXA (T <= -2.5), Calcium, Vit D", advanced: "Bone Turnover Markers (CTx/P1NP), Vertebral Assessment", symptoms: "Height loss >1.5 inches, stooped posture, fragility fractures", form: "Organic Calcium Bhasma" },
      { ayurvedic: "Tamaka Shwasa (Kshaya)", modern: "Chronic Obstructive Pulmonary (COPD)", dosha: "Prana vaha tissue destruction", basic: "Post-Bronchodilator Spirometry, Oximetry, Chest X-ray", advanced: "High-Res CT Chest, ABG, DLCO Plethysmography", symptoms: "Chronic sputum cough, exertional breathlessness, wheezing", form: "Vasa & Kantakari Syrups" },
      { ayurvedic: "Arbuda", modern: "Organ Malignancies (Breast, Colon, Prostate)", dosha: "Tridosha collapse & cellular growth", basic: "Mammography, FIT Occult Stool Test, PSA + DRE", advanced: "Tissue Biopsy, Multiparametric MRI, PET-CT Scan, CEA", symptoms: "Lumps, altered bowel habits, rectal bleeding, urinary hesitancy", form: "Immunomodulatory Rasayana" }
    ]
  }
};

// Mock Datasets
const PRODUCTS = [
  { id: "p1", category: "kits", title: "Diabetes & Metabolic Care Kit", price: 1499, origPrice: 1999, badge: "Disease Kit", desc: "Vijaysar, Gymnema, and chromium balance formulation." },
  { id: "p2", category: "kits", title: "Liver Fibrosis & NAFLD Detox Kit", price: 1299, origPrice: 1699, badge: "Disease Kit", desc: "Kutki, Kalmegh, and Silymarin extracts." },
  { id: "p3", category: "dryfruits", title: "Raw Organic Almonds & Walnut Mix", price: 699, origPrice: 899, badge: "Raw Dry Fruits", desc: "Priority 1 grade omega-3 rich nuts." },
  { id: "p4", category: "dryfruits", title: "7-Seed Omega & Protein Crunch", price: 449, origPrice: 599, badge: "Seeds Mix", desc: "Chia, Flax, Pumpkin, Sunflower, Watermelon, Sesame, Hemp." },
  { id: "p5", category: "herbs", title: "Standardized Ashwagandha Rasayana", price: 549, origPrice: 799, badge: "Herbal Extract", desc: "Withania somnifera KSM-66 high potency capsules." },
  { id: "p6", category: "herbs", title: "Pure Shilajit Resin (Gold Grade)", price: 1199, origPrice: 1599, badge: "Herbal Resin", desc: "80%+ Fulvic acid for stamina & cellular recovery." }
];

const LAB_TESTS = [
  { id: "t1", title: "Full Body MRI Scan", price: 7999, origPrice: 11999, badge: "Advanced Imaging", desc: "Whole body anatomical examination with soft tissue detailing." },
  { id: "t2", title: "Bone DEXA Density Scan", price: 2499, origPrice: 3500, badge: "Bone Health", desc: "T-score and Z-score bone mineral measurement." },
  { id: "t3", title: "Liver FibroScan", price: 3200, origPrice: 4500, badge: "Liver Health", desc: "Transient elastography for liver stiffness & fat CAP." },
  { id: "t4", title: "Coronary Calcium Score (CAC)", price: 2800, origPrice: 4000, badge: "Heart Health", desc: "Non-contrast cardiac CT measuring arterial calcification." },
  { id: "t5", title: "Comprehensive Metabolic Blood Panel", price: 1199, origPrice: 2200, badge: "Blood Markers", desc: "CBC, HbA1c, Fasting Lipid, LFT, KFT, Vit D & B12." }
];

const DOCTORS = [
  { id: "d1", name: "Dr. Ananya Sharma", spec: "Senior Ayurvedic Physician", exp: "14 Yrs Exp", fee: 500, badge: "Doctor" },
  { id: "d2", name: "Dr. Vikramaditya Roy", spec: "Preventive Cardiologist", exp: "18 Yrs Exp", fee: 800, badge: "Doctor" },
  { id: "d3", name: "Priya Nair, RD", spec: "Clinical & Sports Dietitian", exp: "10 Yrs Exp", fee: 400, badge: "Dietitian" }
];

// App Global State
let state = {
  currentTab: "view-hero",
  activeAgeGroup: "young_adults",
  cart: JSON.parse(localStorage.getItem("yb_cart")) || [],
  streak: 7,
  waterGlasses: 6,
  steps: 6420,
  bpm: 72,
  bp: "120/80",
  spo2: "98%",
  calsBurned: 420,
  vitalsHistory: {
    hr: [72, 75, 71, 74, 69, 72],
    bp: [120, 118, 122, 119, 121, 120],
    sugar: [95, 98, 92, 96, 94, 95],
    bmi: [22.4, 22.4, 22.3, 22.3, 22.2, 22.2]
  },
  activeChartMetric: "hr",
  loggedMeals: [
    { name: "Avocado & Egg Toast", cals: 380, protein: 18 },
    { name: "Grilled Chicken & Quinoa Salad", cals: 520, protein: 42 },
    { name: "Raw Nuts & Herbal Tea", cals: 240, protein: 8 }
  ],
  completedHabits: { h1: true, h2: true, h3: false, h4: false }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  checkAuthentication();
  setupNavigation();
  setupAgeSelector();
  setupCareSubtabs();
  renderCareModule();
  renderActivityModule();
  renderReportModule();
  renderInspireModule();
  renderNutritionModule();
  renderGrowthModule();
  updateHealthMeterUI();
  setupFAB();
  setupModals();
  updateCartBadge();
});

// PASSWORD AUTHENTICATION VERIFICATION (Passcode: divyansh)
function checkAuthentication() {
  const isAuth = localStorage.getItem("yb_authenticated");
  const lockOverlay = document.getElementById("lockScreenOverlay");
  if (isAuth === "true" && lockOverlay) {
    lockOverlay.classList.add("hidden");
  }
}

function verifyPassword() {
  const input = document.getElementById("appPasswordInput");
  const errorMsg = document.getElementById("passwordError");
  const lockOverlay = document.getElementById("lockScreenOverlay");

  if (input && input.value.trim() === "divyansh") {
    localStorage.setItem("yb_authenticated", "true");
    if (lockOverlay) lockOverlay.classList.add("hidden");
    if (errorMsg) errorMsg.classList.add("hidden");
    showToast("🔓 Application Unlocked! Welcome to YOURBIT Medical.");
  } else {
    if (errorMsg) errorMsg.classList.remove("hidden");
    if (input) {
      input.value = "";
      input.focus();
    }
  }
}

// 1. Navigation Controller
function setupNavigation() {
  const navButtons = document.querySelectorAll(".bottom-nav .nav-item");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetViewId = btn.getAttribute("data-target-view");
      switchTab(targetViewId);
    });
  });
}

function switchTab(viewId) {
  state.currentTab = viewId;
  document.querySelectorAll(".bottom-nav .nav-item").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-target-view") === viewId);
  });
  document.querySelectorAll(".module-view").forEach(v => {
    v.classList.toggle("active", v.id === viewId);
  });
  
  if (viewId === "view-report") {
    setTimeout(renderCanvasChart, 100);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 2. Age Selector Controller
function setupAgeSelector() {
  const ageSelect = document.getElementById("ageGroupSelect");
  ageSelect.addEventListener("change", (e) => {
    state.activeAgeGroup = e.target.value;
    showToast(`Profile updated to ${DISEASES_BY_AGE[state.activeAgeGroup].name}`);
    renderActivityModule();
    renderReportModule();
  });
}

// 3. Health Meter UI Updater
function updateHealthMeterUI() {
  document.getElementById("meterSteps").textContent = state.steps.toLocaleString();
  document.getElementById("meterBpm").textContent = `${state.bpm} bpm`;
  document.getElementById("meterBp").textContent = state.bp;
  document.getElementById("meterSpo2").textContent = state.spo2;
  document.getElementById("meterWater").textContent = `${state.waterGlasses}/8 Gl`;
  document.getElementById("meterCals").textContent = `${state.calsBurned} kcal`;
}

// 4. Care Module Controller
function setupCareSubtabs() {
  const btns = document.querySelectorAll(".subtab-btn");
  btns.forEach(b => {
    b.addEventListener("click", () => {
      btns.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      const target = b.getAttribute("data-care-tab");
      document.querySelectorAll(".care-subcontent").forEach(sc => {
        sc.classList.toggle("active", sc.id === `care-section-${target}`);
      });
    });
  });

  const pills = document.querySelectorAll("#productFilterPills .pill");
  pills.forEach(p => {
    p.addEventListener("click", () => {
      pills.forEach(x => x.classList.remove("active"));
      p.classList.add("active");
      const cat = p.getAttribute("data-prod-cat");
      renderProductsGrid(cat);
    });
  });
}

function renderCareModule() {
  renderLabTestsGrid();
  renderDoctorsGrid();
  renderProductsGrid("all");
}

function renderLabTestsGrid() {
  const container = document.getElementById("labTestsGrid");
  container.innerHTML = LAB_TESTS.map(t => `
    <div class="card-item">
      <span class="card-badge badge-test">${t.badge}</span>
      <div class="card-title">${t.title}</div>
      <div class="card-desc">${t.desc}</div>
      <div class="card-meta">
        <div>
          <span class="price-text">₹${t.price}</span>
          <span class="price-orig">₹${t.origPrice}</span>
        </div>
        <button class="btn btn-sm btn-primary" onclick="addToCart('${t.title}', ${t.price})">Book Test</button>
      </div>
    </div>
  `).join("");
}

function renderDoctorsGrid() {
  const container = document.getElementById("doctorsGrid");
  container.innerHTML = DOCTORS.map(d => `
    <div class="card-item">
      <span class="card-badge badge-doc">${d.badge}</span>
      <div class="card-title">${d.name}</div>
      <div class="card-desc">${d.spec} • ${d.exp}</div>
      <div class="card-meta">
        <span class="price-text">₹${d.fee} / session</span>
        <button class="btn btn-sm btn-outline" onclick="bookDoctor('${d.name}')">Book Consultation</button>
      </div>
    </div>
  `).join("");
}

function renderProductsGrid(cat) {
  const container = document.getElementById("productsGrid");
  const filtered = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  container.innerHTML = filtered.map(p => `
    <div class="card-item">
      <span class="card-badge badge-prod">${p.badge}</span>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.desc}</div>
      <div class="card-meta">
        <div>
          <span class="price-text">₹${p.price}</span>
          <span class="price-orig">₹${p.origPrice}</span>
        </div>
        <button class="btn btn-sm btn-primary" onclick="addToCart('${p.title}', ${p.price})">+ Add to Cart</button>
      </div>
    </div>
  `).join("");
}

// 5. Activity Module Controller
function renderActivityModule() {
  const tag = document.getElementById("activityAgeTag");
  const ageData = DISEASES_BY_AGE[state.activeAgeGroup];
  tag.textContent = `${ageData.name} Focus`;

  const workoutsGrid = document.getElementById("workoutsGrid");
  const routines = [
    { title: "Metabolic HIIT & Core Activation", dur: "25 mins", level: "Medium", desc: "Designed to counteract sedentary lifestyle & improve insulin sensitivity." },
    { title: "Cervical Spine & Posture Relief", dur: "15 mins", level: "Beginner", desc: "Targeted neck, shoulder, and spinal decompression exercises." },
    { title: "Cardiovascular Endurance Walking", dur: "40 mins", level: "All Levels", desc: "Brisk walking protocol for heart health & BP control." },
    { title: "Joint Mobility & Flexibility Flow", dur: "20 mins", level: "Gentle", desc: "Low-impact stretches for knees, hips, and lumbar region." }
  ];

  workoutsGrid.innerHTML = routines.map(r => `
    <div class="card-item">
      <span class="card-badge badge-workout">${r.level}</span>
      <div class="card-title">${r.title}</div>
      <div class="card-desc">${r.desc} • ${r.dur}</div>
      <button class="btn btn-sm btn-accent" onclick="startWorkout('${r.title}')">▶️ Start Session</button>
    </div>
  `).join("");
}

// 6. Report Module Controller & Disease Explorer
function renderReportModule() {
  renderAgeDiseaseGrid();
  setupChartTabs();
  renderReportVault();
}

function setupChartTabs() {
  const tabs = document.querySelectorAll(".chart-tab");
  tabs.forEach(t => {
    t.addEventListener("click", () => {
      tabs.forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      state.activeChartMetric = t.getAttribute("data-chart-metric");
      renderCanvasChart();
    });
  });
}

function renderCanvasChart() {
  const canvas = document.getElementById("vitalsChartCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  const data = state.vitalsHistory[state.activeChartMetric] || [70, 72, 71, 73, 70, 72];
  const padding = 30;
  const maxVal = Math.max(...data) * 1.2;
  const minVal = Math.min(...data) * 0.8;

  // Grid
  ctx.strokeStyle = "#E2E8F0";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const y = padding + (i * (height - 2 * padding) / 4);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  // Curve
  ctx.strokeStyle = "#059669";
  ctx.lineWidth = 3;
  ctx.beginPath();

  const stepX = (width - 2 * padding) / (data.length - 1);
  data.forEach((val, idx) => {
    const x = padding + idx * stepX;
    const normY = (val - minVal) / (maxVal - minVal || 1);
    const y = height - padding - normY * (height - 2 * padding);
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Dots
  data.forEach((val, idx) => {
    const x = padding + idx * stepX;
    const normY = (val - minVal) / (maxVal - minVal || 1);
    const y = height - padding - normY * (height - 2 * padding);

    ctx.fillStyle = "#0284C7";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 11px sans-serif";
    ctx.fillText(`${val}`, x - 8, y - 10);
  });
}

function renderAgeDiseaseGrid() {
  const container = document.getElementById("ageDiseaseGrid");
  const ageData = DISEASES_BY_AGE[state.activeAgeGroup];

  container.innerHTML = ageData.diseases.map((d, i) => `
    <div class="disease-card" onclick="openDiseaseModal(${i})">
      <div class="disease-ayurveda">🌿 ${d.ayurvedic}</div>
      <div class="disease-modern">${d.modern}</div>
      <div class="disease-diag-preview">🔍 Basic: ${d.basic}</div>
    </div>
  `).join("");
}

function openDiseaseModal(index) {
  const ageData = DISEASES_BY_AGE[state.activeAgeGroup];
  const d = ageData.diseases[index];
  const modalContent = document.getElementById("diseaseModalContent");

  modalContent.innerHTML = `
    <span class="card-badge badge-test">${ageData.name}</span>
    <h2 style="font-size: 1.3rem; margin: 6px 0; color: var(--text-main);">${d.modern}</h2>
    <h4 style="color: var(--emerald); margin-bottom: 12px;">🌿 Ayurvedic Entity: ${d.ayurvedic}</h4>
    
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.85rem;">
      <div><strong>🔬 Pathogenesis (Dosha/Dushya):</strong><br><span style="color: var(--text-muted);">${d.dosha}</span></div>
      <div><strong>⚠️ Symptoms & Clinical Presentation:</strong><br><span style="color: var(--text-muted);">${d.symptoms}</span></div>
      <div><strong>📋 Basic Diagnostics:</strong><br><span style="color: var(--cyan);">${d.basic}</span></div>
      <div><strong>🧬 Advanced Diagnostics:</strong><br><span style="color: var(--indigo);">${d.advanced}</span></div>
      <div><strong>💊 Recommended Formulations:</strong><br><span style="color: var(--orange);">${d.form}</span></div>
    </div>
  `;

  document.getElementById("diseaseModal").classList.remove("hidden");
}

function renderReportVault() {
  const container = document.getElementById("reportVaultList");
  container.innerHTML = `
    <div class="card-item" style="flex-direction: row; align-items: center; justify-content: space-between;">
      <div>
        <div class="card-title">Comprehensive Blood Profile.pdf</div>
        <div class="card-desc">Uploaded on 28 July 2026 • Verified</div>
      </div>
      <button class="btn btn-sm btn-secondary" onclick="showToast('Downloading report file...')">📥 View</button>
    </div>
  `;
}

// 7. Inspire Module Controller
function renderInspireModule() {
  const feed = document.getElementById("inspireFeedGrid");
  const posts = [
    { author: "Vikram K. (Age 28)", title: "Reversed Prediabetes & NAFLD in 6 Months", text: "By following regular activity, Vijaysar extracts, and a structured diet, my HbA1c dropped from 6.2% to 5.4%!", likes: 142 },
    { author: "Dr. Ananya Sharma", title: "Understanding Cervical Spondylosis in Tech Workers", text: "Simple 15-minute daily neck stretches prevent nerve compression and carpal tunnel syndrome.", likes: 98 }
  ];

  feed.innerHTML = posts.map(p => `
    <div class="card-item">
      <span class="card-badge badge-doc">${p.author}</span>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.text}</div>
      <div class="card-meta">
        <button class="btn btn-sm btn-secondary" onclick="likePost(this, ${p.likes})">❤️ ${p.likes} Likes</button>
        <button class="btn btn-sm btn-outline" onclick="showToast('Story bookmarked!')">🔖 Save</button>
      </div>
    </div>
  `).join("");
}

function likePost(btn, current) {
  btn.innerHTML = `❤️ ${current + 1} Likes`;
  showToast("Liked story!");
}

// 8. Nutrition Module Controller
function renderNutritionModule() {
  const container = document.getElementById("loggedMealsList");
  container.innerHTML = state.loggedMeals.map(m => `
    <div class="card-item" style="flex-direction: row; align-items: center; justify-content: space-between; margin-bottom: 8px;">
      <div>
        <div class="card-title">${m.name}</div>
        <div class="card-desc">${m.cals} kcal • ${m.protein}g Protein</div>
      </div>
      <span class="price-text">+${m.cals} kcal</span>
    </div>
  `).join("");

  document.getElementById("btnAddWaterGlass").onclick = () => {
    state.waterGlasses++;
    document.getElementById("waterGlassCount").textContent = state.waterGlasses;
    updateHealthMeterUI();
    showToast("Added +1 Water Glass! 🥛");
  };
}

// 9. Growth Module Controller
function renderGrowthModule() {
  const habitsList = document.getElementById("habitsList");
  const habits = [
    { id: "h1", name: "10,000 Steps Daily Goal" },
    { id: "h2", name: "8 Glasses of Water Hydration" },
    { id: "h3", name: "20-Min Active Exercise Routine" },
    { id: "h4", name: "Sleep 7+ Hours Restful" }
  ];

  habitsList.innerHTML = habits.map(h => `
    <div class="habit-item">
      <input type="checkbox" class="habit-checkbox" id="${h.id}" ${state.completedHabits[h.id] ? "checked" : ""} onchange="toggleHabit('${h.id}')">
      <label for="${h.id}">${h.name}</label>
    </div>
  `).join("");

  const badgesGrid = document.getElementById("badgesGrid");
  const badges = [
    { icon: "🔥", name: "7-Day Streak", desc: "Logged health 7 days in a row" },
    { icon: "💧", name: "Hydration Hero", desc: "Reached 8 water glasses" },
    { icon: "🏋️", name: "Workout Warrior", desc: "Completed 5 workouts" },
    { icon: "🥗", name: "Clean Eater", desc: "Logged 10 balanced meals" }
  ];

  badgesGrid.innerHTML = badges.map(b => `
    <div class="badge-card">
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
    </div>
  `).join("");
}

function toggleHabit(id) {
  state.completedHabits[id] = !state.completedHabits[id];
  showToast("Habit progress updated!");
}

// 10. FAB Controller
function setupFAB() {
  const mainFab = document.getElementById("mainFabBtn");
  const overlay = document.getElementById("fabOverlay");
  const btnClose = document.getElementById("btnCloseFab");

  mainFab.addEventListener("click", () => overlay.classList.remove("hidden"));
  btnClose.addEventListener("click", () => overlay.classList.add("hidden"));

  document.getElementById("fabAddWater").onclick = () => {
    state.waterGlasses++;
    document.getElementById("waterGlassCount").textContent = state.waterGlasses;
    updateHealthMeterUI();
    overlay.classList.add("hidden");
    showToast("Added +1 Water Glass! 🥛");
  };

  document.getElementById("fabLogVital").onclick = () => {
    overlay.classList.add("hidden");
    document.getElementById("vitalsModal").classList.remove("hidden");
  };

  document.getElementById("fabLogMealItem").onclick = () => {
    overlay.classList.add("hidden");
    state.loggedMeals.push({ name: "Healthy Fruit Bowl", cals: 180, protein: 4 });
    renderNutritionModule();
    showToast("Logged Healthy Fruit Bowl (180 kcal)");
  };

  document.getElementById("fabWorkout").onclick = () => {
    overlay.classList.add("hidden");
    startWorkout("Quick 15-Min Cardio Session");
  };
}

// 11. Modals & Cart Helper Functions
function setupModals() {
  document.getElementById("closeDiseaseModal").onclick = () => {
    document.getElementById("diseaseModal").classList.add("hidden");
  };

  document.getElementById("closeVitalsModal").onclick = () => {
    document.getElementById("vitalsModal").classList.add("hidden");
  };

  document.getElementById("vitalsForm").onsubmit = (e) => {
    e.preventDefault();
    const type = document.getElementById("vitalType").value;
    const valStr = document.getElementById("vitalValue").value || "72";
    const valNum = parseFloat(valStr) || 72;
    state.vitalsHistory[type].push(valNum);

    if (type === "hr") { state.bpm = valNum; }
    else if (type === "bp") { state.bp = valStr; }
    updateHealthMeterUI();

    document.getElementById("vitalsModal").classList.add("hidden");
    showToast("Vital measurement saved!");
    if (state.currentTab === "view-report") renderCanvasChart();
  };

  document.getElementById("openCartBtn").onclick = () => {
    document.getElementById("cartDrawer").classList.remove("hidden");
  };

  document.getElementById("closeCartBtn").onclick = () => {
    document.getElementById("cartDrawer").classList.add("hidden");
  };

  document.getElementById("btnCheckout").onclick = () => {
    if (state.cart.length === 0) {
      showToast("Your cart is empty!");
      return;
    }
    state.cart = [];
    localStorage.removeItem("yb_cart");
    updateCartBadge();
    document.getElementById("cartDrawer").classList.add("hidden");
    showToast("Order placed successfully! 🚚");
  };
}

function addToCart(title, price) {
  state.cart.push({ title, price });
  localStorage.setItem("yb_cart", JSON.stringify(state.cart));
  updateCartBadge();
  showToast(`Added '${title}' to Cart! 🛒`);
}

function updateCartBadge() {
  document.getElementById("cartCount").textContent = state.cart.length;
  const list = document.getElementById("cartItemsList");
  let total = 0;

  list.innerHTML = state.cart.map((item, idx) => {
    total += item.price;
    return `
      <div class="cart-item-row">
        <div>
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">₹${item.price}</div>
        </div>
        <button class="btn btn-sm btn-secondary" onclick="removeFromCart(${idx})">✕</button>
      </div>
    `;
  }).join("");

  document.getElementById("cartTotalPrice").textContent = `₹${total}`;
}

function removeFromCart(idx) {
  state.cart.splice(idx, 1);
  localStorage.setItem("yb_cart", JSON.stringify(state.cart));
  updateCartBadge();
}

function bookDoctor(docName) {
  showToast(`Consultation request sent for ${docName}! 👨‍⚕️`);
}

function startWorkout(title) {
  state.calsBurned += 150;
  state.steps += 1800;
  updateHealthMeterUI();
  showToast(`Started: ${title}! Burned +150 kcal ⏱️`);
}

function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  document.getElementById("toastMessage").textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);
}
