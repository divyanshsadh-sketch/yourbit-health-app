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
    focus: "Cognitive development, allergy management, and musculoskeletal growth",
    diseases: [
      { ayurvedic: "Tandavika & Unmada", modern: "ADHD & Behavioral Disorders", dosha: "Vata-Mano vaha srotas imbalance", basic: "Vanderbilt ADHD Rating Scale, Pediatric Neuro Exam", advanced: "Quantitative EEG (qEEG), Sleep Polysomnography", symptoms: "Inattention, hyperactivity, impulsivity, poor school focus", form: "Saraswatarishta, Brahmi Ghrita" },
      { ayurvedic: "Karnasrava & Karnashoola", modern: "Otitis Media & Hearing Impairment", dosha: "Kapha-Vata in Karna", basic: "Otoscopy, Whisper Test, Tympanometry", advanced: "Pure Tone Audiometry, Brainstem Auditory Evoked Response", symptoms: "Ear pain, otorrhea (ear discharge), hearing loss, ear pulling", form: "Bilva Taila, Kshara Taila" },
      { ayurvedic: "Danta Harsha & Krimidanta", modern: "Dental Caries & Malocclusion", dosha: "Danta-Mamsa Dushti", basic: "Visual Dental Exam, Intraoral Dental X-ray", advanced: "3D Cone Beam Computed Tomography (CBCT)", symptoms: "Tooth sensitivity, visible dark cavities, toothache, swollen gums", form: "Irimedadi Taila Gandusha" },
      { ayurvedic: "Mukhapaka & Aruchi", modern: "Micronutrient Deficiencies (Iron/B12)", dosha: "Rakta-Pitta Kshaya", basic: "CBC with Peripheral Blood Smear, Serum Ferritin", advanced: "Serum B12, Folate, Iron Studies (TIBC, Transferrin)", symptoms: "Pallor, fatigue, angular stomatitis, tongue glossitis, pica", form: "Lohasava, Dhatri Lauha" }
    ]
  },
  adolescents: {
    name: "Adolescents (10 - 20 Years)",
    focus: "Hormonal maturation, mental resilience, and metabolic foundation",
    diseases: [
      { ayurvedic: "Mukhadushika & Yuvanpidika", modern: "Severe Acne Vulgaris", dosha: "Kapha-Vata-Rakta dushti", basic: "Clinical Dermatological Exam, Hormonal Panel", advanced: "Free & Total Testosterone, DHEAS, Skin Culture", symptoms: "Comedones, inflammatory papules, pustules, nodulocystic lesions", form: "Kumkumadi Taila, Raktashodhaka Kwath" },
      { ayurvedic: "Artava Dushti & Kashtartava", modern: "PCOS & Menstrual Irregularities", dosha: "Vata-Kapha in Artava vaha srotas", basic: "Pelvic Ultrasound, Serum FSH, LH, Prolactin", advanced: "AMH (Anti-Müllerian Hormone), Fasting Insulin, HOMA-IR", symptoms: "Oligomenorrhea, amenorrhea, dysmenorrhea, hirsutism", form: "Ashokarishta, Pushyanuga Churna" },
      { ayurvedic: "Manovikara & Chittodvega", modern: "Anxiety, Depression & Eating Disorders", dosha: "Prana Vata & Sadhaka Pitta", basic: "PHQ-9, GAD-7 Assessment, Thyroid Profile", advanced: "Salivary Cortisol Awakening Response, Neurotransmitter Panel", symptoms: "Persistent sadness, excessive worry, appetite changes, panic", form: "Manasamitra Vatakam, Shankhpushpi" },
      { ayurvedic: "Stholya & Medoroga", modern: "Adolescent Obesity & Metabolic Syndrome", dosha: "Meda Dhatu Vriddhi", basic: "BMI-for-Age Percentile, Lipid Profile, Fasting Glucose", advanced: "HbA1c, Liver Function Tests (ALT/AST), Abdominal Ultrasound", symptoms: "BMI >= 95th percentile, acanthosis nigricans, abdominal fat", form: "Vrikshamla, Medohar Guggulu" }
    ]
  },
  young_adults: {
    name: "Young Adults (20 - 30 Years)",
    focus: "Workplace stress, lifestyle metabolic prevention, and reproductive vitality",
    diseases: [
      { ayurvedic: "Prameha (Purvarupa)", modern: "Type 2 Diabetes Mellitus & NAFLD", dosha: "Kapha-Meda vitiation", basic: "Fasting Blood Glucose, HbA1c, Lipid Profile, LFT", advanced: "Oral Glucose Tolerance Test (OGTT), FibroScan, hs-CRP", symptoms: "Polydipsia, polyuria, unexplained fatigue, central adiposity", form: "Chandraprabha Vati, Nishamalaki" },
      { ayurvedic: "Greeva Stambha & Katishoola", modern: "Cervical Spondylosis & Lumbar Disc Herniation", dosha: "Vyana Vata & Asthi-Majja Kshaya", basic: "Spine X-ray, Straight Leg Raise (SLR) Test", advanced: "MRI Spine (Cervical/Lumbar), Electromyography (EMG)", symptoms: "Neck/back stiffness, radiating arm/leg pain, numbness, tingling", form: "Mahanarayana Taila, Trayodashanga Guggulu" },
      { ayurvedic: "Amlapitta & Anaha", modern: "GERD, Gastritis & IBS", dosha: "Pitta-Vata in Annavaha srotas", basic: "H. pylori Stool Antigen, Upper Abdominal Ultrasound", advanced: "Upper GI Endoscopy (UGIE), Esophageal High-Resolution Manometry", symptoms: "Heartburn, acid regurgitation, epigastric burning, bloating", form: "Avipattikar Churna, Kamadudha Ras" },
      { ayurvedic: "Klaibya & Vandhyatva", modern: "Male/Female Infertility & Sexual Dysfunction", dosha: "Shukra-Artava Dhatu Kshaya", basic: "Semen Analysis, Pelvic Ultrasound, Day 3 FSH/LH", advanced: "Sperm DNA Fragmentation Index (DFI), Hysterosalpingography (HSG)", symptoms: "Inability to conceive after 12 months, low libido, erectile dysfunction", form: "Ashwagandharishta, Phala Ghrita" }
    ]
  },
  established_adults: {
    name: "Adults (30 - 40 Years)",
    focus: "Cardiovascular screening, stress management, and early degenerative prevention",
    diseases: [
      { ayurvedic: "Raktavata & Hridroga", modern: "Essential Hypertension & CAD", dosha: "Vata-Rakta dushti in Siras", basic: "BP Measurement, 12-Lead ECG, Lipid Panel, Serum Creatinine", advanced: "2D Echocardiography, Treadmill Stress Test (TMT), Coronary Calcium Score", symptoms: "Morning occipital headache, dizziness, exertional dyspnea, chest tightness", form: "Sarpagandha Vati, Prabhakar Vati" },
      { ayurvedic: "Galaganda & Kaphaja Shotha", modern: "Hypothyroidism & Hashimoto's Thyroiditis", dosha: "Kapha-Meda in Galapradesha", basic: "Serum TSH, Free T3, Free T4", advanced: "Anti-TPO Antibodies, Anti-Thyroglobulin Antibodies, Thyroid Ultrasound", symptoms: "Unexplained weight gain, cold intolerance, constipation, dry skin, fatigue", form: "Kanchanara Guggulu, Varunadi Kwath" },
      { ayurvedic: "Granthi & Arbudh", modern: "Breast & Cervical Neoplasms (Early Screening)", dosha: "Tridoshaja Mamsa-Rakta Granthi", basic: "Clinical Breast Exam, Pap Smear, Liquid-Based Cytology", advanced: "Digital Mammography, High-Risk HPV DNA Testing, Breast Ultrasound", symptoms: "Painless breast lump, nipple discharge, abnormal intermenstrual bleeding", form: "Varunadi Guggulu, Triphala Guggulu" },
      { ayurvedic: "Vatarakta & Sandhigata Vata", modern: "Gouty Arthritis & Early Osteoarthritis", dosha: "Vata-Rakta in Sandhi", basic: "Serum Uric Acid, Joint X-ray, ESR, CRP", advanced: "Polarized Light Synovial Fluid Analysis, Musculoskeletal Ultrasound", symptoms: "Podagra (acute big toe pain/redness), joint stiffness, crepitus", form: "Kaishore Guggulu, Kokilaksha Kashayam" }
    ]
  },
  middle_age: {
    name: "Middle Age (40 - 50 Years)",
    focus: "Metabolic consolidation, vascular protection, and hormone transition",
    diseases: [
      { ayurvedic: "Rajonivritti Lakshana", modern: "Perimenopause & Menopausal Syndrome", dosha: "Vata-Pitta vriddhi in Dhatu", basic: "Serum FSH, Estradiol (E2), Pelvic Ultrasound", advanced: "DEXA Bone Mineral Density Scan, Lipid Profile, Mammogram", symptoms: "Hot flashes, night sweats, mood lability, vaginal dryness, osteopenia", form: "Shatavari Guggulu, Ashokarishta" },
      { ayurvedic: "Pakshaghata & Vata Vyadhi", modern: "Ischemic Stroke & TIA", dosha: "Vata prakopa in Majja vaha srotas", basic: "FAST Clinical Exam, Non-Contrast CT Brain, ECG, Random Blood Sugar", advanced: "Brain MRI + MRA, Carotid Doppler Ultrasound, Holter Monitor", symptoms: "Sudden facial drooping, arm weakness, slurred speech, loss of balance", form: "Ekangaveera Ras, Yogendra Ras" },
      { ayurvedic: "Prameha Upadrava (Vrikka Roga)", modern: "Diabetic Nephropathy & CKD", dosha: "Vrikka vaha srotas dushti", basic: "Serum Creatinine, eGFR, Urine Microalbumin-to-Creatinine Ratio", advanced: "24-Hour Urine Protein, Renal Ultrasound, Renal Biopsy", symptoms: "Frothy urine, bilateral pedal edema, worsening hypertension, anorexia", form: "Punarnavadi Mandur, Gokshuradi Guggulu" },
      { ayurvedic: "Netra Timira & Kacha", modern: "Diabetic Retinopathy & Cataract", dosha: "Pitta-Vata in Drishti patala", basic: "Visual Acuity Test, Slit Lamp Examination", advanced: "Dilated Fundoscopy, Optical Coherence Tomography (OCT), Fundus Fluorescein Angiography", symptoms: "Blurred vision, floaters, difficulty seeing at night, glare sensitivity", form: "Saptamrita Lauha, Mahatriphala Ghrita" }
    ]
  },
  seniors: {
    name: "Seniors (50 - 60+ Years)",
    focus: "Geriatric neuro-degeneration, mobility maintenance, and organ resilience",
    diseases: [
      { ayurvedic: "Sandhigata Vata & Majjagata Vata", modern: "Severe Osteoarthritis & Osteoporosis", dosha: "Vata vriddhi & Asthi-Majja Kshaya", basic: "Weight-Bearing Joint X-rays, Serum Calcium, Vitamin D3", advanced: "DEXA Bone Density Scan (T-score <= -2.5), Serum CTX/P1NP", symptoms: "Severe joint pain, crepitus, loss of joint space, height loss, fractures", form: "Yogaraj Guggulu, Ksheerabala 101" },
      { ayurvedic: "Kampa Vata & Smritibhramsha", modern: "Parkinson's & Alzheimer's Dementia", dosha: "Prana-Samana Vata in Shiras", basic: "MMSE / MoCA Cognitive Screening, Neurological Assessment", advanced: "Brain MRI (Volumetric Atrophy), DaTscan SPECT, CSF Tau/Beta-Amyloid", symptoms: "Resting tremor, bradykinesia, rigidity, progressive short-term memory loss", form: "Zandopa, Brahmi Rasayana" },
      { ayurvedic: "Ashtila & Mutraghata", modern: "Benign Prostatic Hyperplasia (BPH) & Prostate Cancer", dosha: "Vata-Kapha in Mutra vaha srotas", basic: "Digital Rectal Exam (DRE), Serum PSA, Urine Flow Rate", advanced: "Multiparametric Prostate MRI (mpMRI), Prostate Biopsy, Transrectal Ultrasound", symptoms: "Hesitancy, weak urinary stream, nocturia (> 2 times), incomplete emptying", form: "Varanadi Kashayam, Gokshuradi Guggulu" },
      { ayurvedic: "Hridroga & Swasa", modern: "Congestive Heart Failure & COPD", dosha: "Vata-Kapha in Hridaya/Prana srotas", basic: "Chest X-ray, 12-Lead ECG, Spirometry, Serum Electrolytes", advanced: "Serum NT-proBNP / BNP, High-Resolution CT Chest (HRCT), Echocardiogram", symptoms: "Paroxysmal nocturnal dyspnea, orthopnea, bilateral ankle swelling, chronic cough", form: "Arjunarishta, Shwasakuthara Ras" }
    ]
  }
};

// App Global State
let state = {
  currentTab: "view-hero",
  activeAgeGroup: "young_adults",
  diseaseAgeFilter: "all",
  diseaseSearchQuery: "",
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
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("bypass") === "true") {
    localStorage.setItem("yb_authenticated", "true");
  }
  const isAuth = localStorage.getItem("yb_authenticated");
  const lockOverlay = document.getElementById("lockScreenOverlay");
  if (isAuth === "true" && lockOverlay) {
    lockOverlay.classList.add("hidden");
  }
  const viewParam = urlParams.get("view");
  if (viewParam) {
    switchTab(viewParam);
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
  const select = document.getElementById("ageGroupSelect");
  if (select) {
    select.value = state.activeAgeGroup;
    select.addEventListener("change", (e) => {
      state.activeAgeGroup = e.target.value;
      updateAgeSpecificContent();
      showToast(`Profile updated to ${DISEASES_BY_AGE[state.activeAgeGroup].name}`);
    });
  }
}

function updateAgeSpecificContent() {
  const ageData = DISEASES_BY_AGE[state.activeAgeGroup];
  const tag = document.getElementById("activityAgeTag");
  if (tag) tag.textContent = `${ageData.name} Focus`;
  renderActivityModule();
  // Keep diseaseAgeFilter as 'all' by default so all 35+ options are visible
  renderAgeDiseaseGrid();
}

// 3. Care Module Controller
function setupCareSubtabs() {
  const tabs = document.querySelectorAll(".subtab-btn[data-care-tab]");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetSection = tab.getAttribute("data-care-tab");
      document.querySelectorAll(".care-subcontent").forEach(sc => {
        sc.classList.remove("active");
      });
      const sec = document.getElementById(`care-section-${targetSection}`);
      if (sec) sec.classList.add("active");
    });
  });
}

function renderCareModule() {
  renderLabTests();
  renderDoctors();
  renderProducts();
}

function renderLabTests() {
  const container = document.getElementById("labTestsGrid");
  const tests = [
    {
      id: "mri",
      title: "Full Body MRI Scan (3T High-Res)",
      desc: "3T High Resolution Whole-Body MRI Scan for early tumor, tissue lesion & soft tissue risk detection.",
      price: 8500, orig: 15000, badge: "Imaging • NABL Certified",
      simple: "A painless magnetic scan that takes detailed 3D pictures of your internal organs and soft tissues without any radiation.",
      prep: "Fasting for 4-6 hours if abdominal scan is included. Remove all metallic items, watches, and jewelry prior to entering the MRI room.",
      tat: "24 - 48 Hours"
    },
    {
      id: "dexa",
      title: "DEXA Bone Density & Body Fat Scan",
      desc: "Dual-energy X-ray absorptiometry measuring bone mineral density (T-score), osteopenia, and body fat.",
      price: 2200, orig: 4000, badge: "Radiology Scan",
      simple: "A low-dose X-ray scan that measures bone strength and checks for osteoporosis or bone weakness in 15 minutes.",
      prep: "Avoid taking calcium supplements for at least 24 hours prior to your scan appointment.",
      tat: "Same Day (4-6 Hours)"
    },
    {
      id: "fibroscan",
      title: "Liver Fibrosis & Steatosis (FibroScan)",
      desc: "Non-invasive transient elastography to evaluate liver stiffness, fatty liver disease (NAFLD), & fibrosis stage.",
      price: 3500, orig: 6000, badge: "Specialized Diagnostic",
      simple: "An ultrasound-based quick test that measures liver stiffness to detect fatty liver or liver scarring early without biopsy.",
      prep: "Fast (no food or drinks except plain water) for 3 hours before the examination.",
      tat: "Immediate (1 Hour)"
    },
    {
      id: "calcium",
      title: "Coronary Calcium Score (CT Heart Scan)",
      desc: "Non-contrast chest CT quantifying calcified arterial plaques to assess early coronary artery disease (CAD) risk.",
      price: 2800, orig: 5000, badge: "Cardiac Radiology",
      simple: "A quick 10-minute heart CT scan that detects hard calcified plaque buildup in your heart arteries to prevent heart attacks.",
      prep: "Avoid caffeine, energy drinks, and smoking for 4 hours prior to test. Wear comfortable clothing.",
      tat: "Same Day"
    },
    {
      id: "genetics",
      title: "Genomic Disease Screening (NGS & PRS)",
      desc: "Next-Generation DNA Sequencing & Polygenic Risk Score for hereditary cancer, cardiac risk & drug response.",
      price: 12500, orig: 22000, badge: "Advanced Genetics",
      simple: "A DNA test that maps your genetic profile to discover inherited risk for diseases and customize your lifetime health plan.",
      prep: "No fasting required. Can be done via blood sample or simple cheek swab.",
      tat: "10 - 14 Business Days"
    },
    {
      id: "blood",
      title: "Advanced Executive Blood Markers (92 Parameters)",
      desc: "Comprehensive blood profile: HbA1c, Lipid, LFT, KFT, Thyroid (TSH/T3/T4), hs-CRP, Vit D3/B12, & Ferritin.",
      price: 1999, orig: 4999, badge: "Home Sample Pick-up",
      simple: "Complete health checkup analyzing your blood sugar, cholesterol, liver, kidney, thyroid, vitamins, and inflammation.",
      prep: "10-12 hours overnight fasting required. Water is allowed.",
      tat: "24 Hours"
    },
    {
      id: "ct_usg",
      title: "Abdominopelvic Color Doppler & CT Package",
      desc: "High-resolution multi-slice CT & ultrasound imaging for comprehensive abdominal organ assessment.",
      price: 3200, orig: 5500, badge: "Radiology Package",
      simple: "Detailed ultrasound and CT imaging to examine your stomach, liver, gallbladder, kidneys, and pelvic organs.",
      prep: "Fast 6 hours for CT; drink 1 liter of water 1 hour prior for ultrasound full bladder.",
      tat: "24 Hours"
    }
  ];

  window._yb_labTests = tests;

  container.innerHTML = tests.map((t, idx) => `
    <div class="card-item">
      <span class="card-badge badge-test">${t.badge}</span>
      <div class="card-title">${t.title}</div>
      <div class="card-desc">${t.desc}</div>
      <div style="font-size: 0.72rem; color: var(--emerald); background: var(--bg-card); padding: 6px; border-radius: var(--radius-sm); margin: 6px 0; border: 1px solid var(--border-subtle);">
        💡 <strong>Simple Terms:</strong> ${t.simple}
      </div>
      <div class="card-meta">
        <div><span class="price-text">₹${t.price}</span><span class="price-orig">₹${t.orig}</span></div>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-sm btn-outline" onclick="openTestInfoModal(${idx})">ℹ️ Prep Info</button>
          <button class="btn btn-sm btn-primary" onclick="addToCart('${t.title}', ${t.price})">Book Test</button>
        </div>
      </div>
    </div>
  `).join("");
}

function openTestInfoModal(testIdx) {
  const t = window._yb_labTests[testIdx];
  if (!t) return;
  const modalContent = document.getElementById("diseaseModalContent");
  modalContent.innerHTML = `
    <span class="card-badge badge-test">${t.badge}</span>
    <h2 style="font-size: 1.2rem; margin: 8px 0 4px 0; color: var(--text-main); font-weight: 800;">${t.title}</h2>
    <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">${t.desc}</p>
    
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem;">
      <div style="background: #F0FDFA; border: 1px solid #A7F3D0; padding: 10px; border-radius: var(--radius-sm);">
        <strong style="color: var(--teal);">💡 Simple Explanation (No Medical Jargon):</strong><br>
        <span style="color: var(--text-main);">${t.simple}</span>
      </div>

      <div style="background: #FFF7ED; border: 1px solid #FFEDD5; padding: 10px; border-radius: var(--radius-sm);">
        <strong style="color: var(--orange);">📋 Test Preparation Guidelines:</strong><br>
        <span style="color: var(--text-main);">${t.prep}</span>
      </div>

      <div style="background: #EEF2FF; border: 1px solid #C7D2FE; padding: 10px; border-radius: var(--radius-sm);">
        <strong style="color: var(--indigo);">⏱️ Report Turnaround Time:</strong><br>
        <span style="color: var(--text-main); font-weight: 700;">${t.tat}</span>
      </div>

      <div style="background: var(--bg-elevated); padding: 10px; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: 1.1rem; font-weight: 800; color: var(--emerald);">₹${t.price}</span>
          <span style="font-size: 0.8rem; text-decoration: line-through; color: var(--text-muted); margin-left: 6px;">₹${t.orig}</span>
        </div>
        <button class="btn btn-primary" onclick="addToCart('${t.title}', ${t.price}); document.getElementById('diseaseModal').classList.add('hidden');">Book This Test Now</button>
      </div>
    </div>
  `;
  document.getElementById("diseaseModal").classList.remove("hidden");
}

function renderDoctors() {
  const container = document.getElementById("doctorsGrid");
  const docs = [
    { name: "Dr. Rajesh Varma", spec: "Senior Cardiologist (MD, DM)", exp: "18 Yrs Exp", fee: 799, badge: "Verified Doctor" },
    { name: "Vaidya Meenakshi Sharma", spec: "Ayurvedic Physician (BAMS, MD)", exp: "14 Yrs Exp", fee: 599, badge: "Ayurveda Specialist" }
  ];

  container.innerHTML = docs.map(d => `
    <div class="card-item">
      <span class="card-badge badge-doc">${d.badge}</span>
      <div class="card-title">${d.name}</div>
      <div class="card-desc">${d.spec} • ${d.exp}</div>
      <div class="card-meta">
        <span class="price-text">₹${d.fee} Fee</span>
        <button class="btn btn-sm btn-outline" onclick="showToast('Consultation Slot Booked with ${d.name}')">Book Consult</button>
      </div>
    </div>
  `).join("");
}

function renderProducts() {
  const container = document.getElementById("productsGrid");
  const prods = [
    { cat: "dryfruits", title: "Raw Organic Mamra Almonds (500g)", desc: "Unroasted, rich in Vitamin E, Magnesium & Omega-3.", price: 899, orig: 1200 },
    { cat: "kits", title: "Ayurvedic Diabetes Management Kit", desc: "Vijaysar, Gudmar, Jamun seed powder & HbA1c test log.", price: 1299, orig: 1999 },
    { cat: "herbs", title: "Pure Ashwagandha Ksheerabala Drops", desc: "Stress relief, Vata stabilization, and sleep enhancement.", price: 449, orig: 699 }
  ];

  container.innerHTML = prods.map(p => `
    <div class="card-item" data-prod-cat="${p.cat}">
      <span class="card-badge badge-prod">Health Product</span>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.desc}</div>
      <div class="card-meta">
        <div><span class="price-text">₹${p.price}</span><span class="price-orig">₹${p.orig}</span></div>
        <button class="btn btn-sm btn-accent" onclick="addToCart('${p.title}', ${p.price})">+ Add to Cart</button>
      </div>
    </div>
  `).join("");
}

// 4. Activity Module Controller
function renderActivityModule() {
  const container = document.getElementById("workoutsGrid");
  const workouts = [
    { title: "20-Min Morning Vinyasa Flow", desc: "Gentle spinal mobility, Sun Salutations, and deep breathing.", mins: 20, cals: 140, type: "Yoga" },
    { title: "High-Intensity Interval Training (HIIT)", desc: "Bodyweight squats, mountain climbers, and jumping jacks.", mins: 25, cals: 260, type: "Cardio" },
    { title: "Postural Spine & Core Strength", desc: "Targeted plank variations and thoracic mobility exercises.", mins: 15, cals: 110, type: "Strength" }
  ];

  container.innerHTML = workouts.map(w => `
    <div class="card-item">
      <span class="card-badge badge-workout">${w.type}</span>
      <div class="card-title">${w.title}</div>
      <div class="card-desc">${w.desc}</div>
      <div class="card-meta">
        <span>⏱️ ${w.mins} mins • 🔥 ${w.cals} kcal</span>
        <button class="btn btn-sm btn-primary" onclick="startWorkoutRoutine('${w.title}')">Start Workout</button>
      </div>
    </div>
  `).join("");
}

function startWorkoutRoutine(title) {
  showToast(`🏋️ Started routine: ${title}`);
}

// 5. Report Module Controller & Chart Canvas
function renderReportModule() {
  renderCanvasChart();
  renderAgeDiseaseGrid();
  renderReportVault();
  setupChartTabs();
}

function setupChartTabs() {
  const tabs = document.querySelectorAll(".chart-tab");
  tabs.forEach(t => {
    t.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("active"));
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
  const stepX = (width - 2 * padding) / (data.length - 1);
  const maxVal = Math.max(...data) + 5;
  const minVal = Math.min(...data) - 5;

  // Background Grid Lines
  ctx.strokeStyle = "#E2E8F0";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding + (height - 2 * padding) * (i / 4);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  // Draw Trend Line
  ctx.strokeStyle = "#059669";
  ctx.lineWidth = 3;
  ctx.beginPath();
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

// DIAGNOSTIC & MEDICAL TERMS INTELLIGENCE EXPLORER
function setDiseaseAgeFilter(ageId, btn) {
  state.diseaseAgeFilter = ageId;
  const pills = document.querySelectorAll("#diseaseAgeFilterPills .pill");
  pills.forEach(p => p.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderAgeDiseaseGrid();
}

function quickSearchDisease(query) {
  const input = document.getElementById("diseaseSearchInput");
  if (input) {
    input.value = query;
    state.diseaseSearchQuery = query.toLowerCase();
    renderAgeDiseaseGrid();
  }
}

function filterDiseaseExplorer() {
  const input = document.getElementById("diseaseSearchInput");
  if (input) {
    state.diseaseSearchQuery = input.value.trim().toLowerCase();
    renderAgeDiseaseGrid();
  }
}

function getAllDiseaseProfiles() {
  let results = [];
  const query = state.diseaseSearchQuery;
  const selectedAge = state.diseaseAgeFilter;

  const ageKeys = Object.keys(DISEASES_BY_AGE);

  ageKeys.forEach(ageKey => {
    if (selectedAge !== 'all' && selectedAge !== ageKey) return;

    const ageGroup = DISEASES_BY_AGE[ageKey];
    ageGroup.diseases.forEach((d, idx) => {
      const matchText = `${d.modern} ${d.ayurvedic} ${d.symptoms} ${d.basic} ${d.advanced} ${d.dosha} ${d.form}`.toLowerCase();
      if (!query || matchText.includes(query)) {
        results.push({
          ageKey: ageKey,
          ageName: ageGroup.name,
          diseaseIndex: idx,
          data: d
        });
      }
    });
  });

  return results;
}

function renderAgeDiseaseGrid() {
  const container = document.getElementById("ageDiseaseGrid");
  const summary = document.getElementById("diseaseResultsSummary");
  if (!container) return;

  const profiles = getAllDiseaseProfiles();

  if (summary) {
    if (state.diseaseSearchQuery) {
      summary.textContent = `Found ${profiles.length} diagnostic profile(s) matching "${state.diseaseSearchQuery}"`;
    } else if (state.diseaseAgeFilter !== 'all') {
      summary.textContent = `Showing ${profiles.length} diagnostic profile(s) for ${DISEASES_BY_AGE[state.diseaseAgeFilter].name}`;
    } else {
      summary.textContent = `Showing all ${profiles.length} diagnostic profiles across 8 age brackets`;
    }
  }

  if (profiles.length === 0) {
    container.innerHTML = `
      <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.85rem; background: var(--bg-elevated); border-radius: var(--radius-md);">
        🔍 No diagnostic profiles found matching "${state.diseaseSearchQuery}". Try searching for health issues like "fever", "joint pain", "thyroid", or "sugar".
      </div>
    `;
    return;
  }

  container.innerHTML = profiles.map(p => {
    const d = p.data;
    return `
      <div class="disease-card" onclick="openDiseaseModalByKey('${p.ageKey}', ${p.diseaseIndex})">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
          <div class="disease-modern" style="font-size: 0.95rem; font-weight: 800; color: var(--text-main);">${d.modern}</div>
          <span class="card-badge badge-test" style="font-size: 0.6rem; flex-shrink: 0; margin-left: 6px;">${p.ageName}</span>
        </div>
        <div class="disease-ayurveda" style="font-size: 0.75rem; color: var(--emerald); font-weight: 700; margin-bottom: 6px;">🌿 Medical Term: ${d.ayurvedic}</div>
        
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 8px; line-height: 1.3;">
          <strong>⚠️ Symptoms:</strong> ${d.symptoms}
        </div>

        <div style="display: flex; flex-direction: column; gap: 4px; font-size: 0.72rem; background: var(--bg-card); padding: 8px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="color: var(--cyan);"><strong>📋 Basic Diagnostics:</strong> ${d.basic}</div>
          <div style="color: var(--indigo);"><strong>🧬 Advanced Diagnostics:</strong> ${d.advanced}</div>
        </div>
      </div>
    `;
  }).join("");
}

function openDiseaseModalByKey(ageKey, index) {
  const ageData = DISEASES_BY_AGE[ageKey];
  const d = ageData.diseases[index];
  const modalContent = document.getElementById("diseaseModalContent");

  modalContent.innerHTML = `
    <span class="card-badge badge-test">${ageData.name}</span>
    <h2 style="font-size: 1.25rem; margin: 8px 0 4px 0; color: var(--text-main); font-weight: 800;">${d.modern}</h2>
    <h4 style="color: var(--emerald); margin-bottom: 14px; font-weight: 700;">🌿 Ayurvedic Medical Term: ${d.ayurvedic}</h4>
    
    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.85rem; line-height: 1.4;">
      <div style="background: var(--bg-elevated); padding: 10px; border-radius: var(--radius-sm);">
        <strong style="color: var(--text-main);">🔬 Pathogenesis (Dosha/Dushya):</strong><br>
        <span style="color: var(--text-muted);">${d.dosha}</span>
      </div>

      <div style="background: var(--bg-elevated); padding: 10px; border-radius: var(--radius-sm);">
        <strong style="color: var(--text-main);">⚠️ Symptoms & Health Issues:</strong><br>
        <span style="color: var(--text-muted);">${d.symptoms}</span>
      </div>

      <div style="background: #F0FDFA; border: 1px solid #A7F3D0; padding: 10px; border-radius: var(--radius-sm);">
        <strong style="color: var(--teal);">📋 Recommended Basic Diagnostics:</strong><br>
        <span style="color: var(--text-main); font-weight: 600;">${d.basic}</span>
      </div>

      <div style="background: #EEF2FF; border: 1px solid #C7D2FE; padding: 10px; border-radius: var(--radius-sm);">
        <strong style="color: var(--indigo);">🧬 Advanced Diagnostic Panels & Scans:</strong><br>
        <span style="color: var(--text-main); font-weight: 600;">${d.advanced}</span>
      </div>

      <div style="background: #FFF7ED; border: 1px solid #FFEDD5; padding: 10px; border-radius: var(--radius-sm);">
        <strong style="color: var(--orange);">💊 Medicated Formulations & Interventions:</strong><br>
        <span style="color: var(--text-main); font-weight: 600;">${d.form}</span>
      </div>
    </div>
  `;

  document.getElementById("diseaseModal").classList.remove("hidden");
}

if (!state.uploadedReports) {
  state.uploadedReports = [
    { title: "Comprehensive Blood & Lipid Profile.pdf", date: "28 July 2026", status: "Verified • NABL Lab" },
    { title: "3T High-Res Brain MRI Report.pdf", date: "15 June 2026", status: "Verified • Neuro Imaging" },
    { title: "DEXA Bone Mineral Density Scan.pdf", date: "02 May 2026", status: "Verified • Ortho Scan" }
  ];
}

function renderReportVault() {
  const container = document.getElementById("reportVaultList");
  if (!container) return;

  if (state.uploadedReports.length === 0) {
    container.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.8rem;">No uploaded medical reports yet. Click "Upload Report" to store your diagnostic files securely.</div>`;
    return;
  }

  container.innerHTML = state.uploadedReports.map((r, i) => `
    <div class="card-item" style="flex-direction: row; align-items: center; justify-content: space-between; margin-bottom: 8px;">
      <div>
        <div class="card-title" style="font-size: 0.88rem; font-weight: 700;">📄 ${r.title}</div>
        <div class="card-desc" style="font-size: 0.72rem;">Uploaded on ${r.date} • <span style="color: var(--emerald); font-weight: 600;">${r.status}</span></div>
      </div>
      <div style="display: flex; gap: 6px;">
        <button class="btn btn-sm btn-secondary" onclick="showToast('Opening ${r.title}...')">📥 View</button>
        <button class="btn btn-sm btn-outline" onclick="deleteReport(${i})" style="color: #EF4444;">🗑️</button>
      </div>
    </div>
  `).join("");
}

function deleteReport(idx) {
  state.uploadedReports.splice(idx, 1);
  renderReportVault();
  showToast("Report removed from vault.");
}

function triggerReportUpload() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".pdf,.jpg,.jpeg,.png,.dcm";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const today = new Date().toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' });
      state.uploadedReports.unshift({
        title: file.name,
        date: today,
        status: "Uploaded • Encrypted Vault"
      });
      renderReportVault();
      showToast(`✅ Successfully uploaded "${file.name}" to your secure report vault!`);
    }
  };
  input.click();
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

function toggleHabit(habitId) {
  state.completedHabits[habitId] = !state.completedHabits[habitId];
  showToast("Habit status updated!");
}

// 10. Health Meter Dynamic Sync
function updateHealthMeterUI() {
  const stepsEl = document.getElementById("meterSteps");
  const bpmEl = document.getElementById("meterBpm");
  const bpEl = document.getElementById("meterBp");
  const spo2El = document.getElementById("meterSpo2");
  const waterEl = document.getElementById("meterWater");
  const calsEl = document.getElementById("meterCals");

  if (stepsEl) stepsEl.textContent = state.steps.toLocaleString();
  if (bpmEl) bpmEl.textContent = `${state.bpm} bpm`;
  if (bpEl) bpEl.textContent = state.bp;
  if (spo2El) spo2El.textContent = state.spo2;
  if (waterEl) waterEl.textContent = `${state.waterGlasses}/8 Gl`;
  if (calsEl) calsEl.textContent = `${state.calsBurned} kcal`;
}

// 11. FAB Action Menu Controller
function setupFAB() {
  const fabBtn = document.getElementById("mainFabBtn");
  const fabOverlay = document.getElementById("fabOverlay");
  const closeFab = document.getElementById("btnCloseFab");

  if (fabBtn) {
    fabBtn.addEventListener("click", () => {
      if (fabOverlay) fabOverlay.classList.remove("hidden");
    });
  }

  if (closeFab) {
    closeFab.addEventListener("click", () => {
      if (fabOverlay) fabOverlay.classList.add("hidden");
    });
  }

  document.getElementById("fabAddWater")?.addEventListener("click", () => {
    state.waterGlasses++;
    updateHealthMeterUI();
    fabOverlay.classList.add("hidden");
    showToast("💧 Added +1 Water Glass!");
  });

  document.getElementById("fabLogVital")?.addEventListener("click", () => {
    fabOverlay.classList.add("hidden");
    document.getElementById("vitalsModal").classList.remove("hidden");
  });

  document.getElementById("fabLogMealItem")?.addEventListener("click", () => {
    fabOverlay.classList.add("hidden");
    switchTab("view-nutrition");
  });

  document.getElementById("fabWorkout")?.addEventListener("click", () => {
    fabOverlay.classList.add("hidden");
    switchTab("view-activity");
  });
}

// 12. Modals & Cart Controller
function setupModals() {
  document.getElementById("closeDiseaseModal")?.addEventListener("click", () => {
    document.getElementById("diseaseModal").classList.add("hidden");
  });

  document.getElementById("closeVitalsModal")?.addEventListener("click", () => {
    document.getElementById("vitalsModal").classList.add("hidden");
  });

  document.getElementById("vitalsForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = document.getElementById("vitalType").value;
    const val = document.getElementById("vitalValue").value;
    
    if (type === "hr") state.bpm = parseInt(val) || state.bpm;
    if (type === "bp") state.bp = val;
    
    updateHealthMeterUI();
    document.getElementById("vitalsModal").classList.add("hidden");
    showToast("🩸 Vital reading logged successfully!");
  });

  document.getElementById("openCartBtn")?.addEventListener("click", () => {
    renderCartDrawer();
    document.getElementById("cartDrawer").classList.remove("hidden");
  });

  document.getElementById("closeCartBtn")?.addEventListener("click", () => {
    document.getElementById("cartDrawer").classList.add("hidden");
  });

  document.getElementById("btnCheckout")?.addEventListener("click", () => {
    if (state.cart.length === 0) {
      showToast("Your cart is empty!");
      return;
    }
    state.cart = [];
    localStorage.removeItem("yb_cart");
    updateCartBadge();
    document.getElementById("cartDrawer").classList.add("hidden");
    showToast("🎉 Order placed successfully! Booking confirmed.");
  });
}

function addToCart(title, price) {
  state.cart.push({ title, price });
  localStorage.setItem("yb_cart", JSON.stringify(state.cart));
  updateCartBadge();
  showToast(`Added '${title}' to Cart 🛒`);
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = state.cart.length;
}

function renderCartDrawer() {
  const list = document.getElementById("cartItemsList");
  const totalEl = document.getElementById("cartTotalPrice");

  if (state.cart.length === 0) {
    list.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 0.85rem; margin-top: 20px;">Your shopping cart is empty.</p>`;
    totalEl.textContent = "₹0";
    return;
  }

  let total = 0;
  list.innerHTML = state.cart.map((item, i) => {
    total += item.price;
    return `
      <div class="card-item" style="flex-direction: row; align-items: center; justify-content: space-between; margin-bottom: 8px;">
        <div>
          <div class="card-title">${item.title}</div>
          <div class="price-text">₹${item.price}</div>
        </div>
        <button class="btn btn-sm btn-secondary" onclick="removeFromCart(${i})">Remove</button>
      </div>
    `;
  }).join("");

  totalEl.textContent = `₹${total}`;
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  localStorage.setItem("yb_cart", JSON.stringify(state.cart));
  updateCartBadge();
  renderCartDrawer();
}

// 13. Toast Notification Helper
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMessage");
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.remove("hidden");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 2800);
  }
}
