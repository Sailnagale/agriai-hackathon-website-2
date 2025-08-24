import { FaAward, FaUsers, FaHandshake, FaRocket } from "react-icons/fa";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Tracks", href: "/tracks" },
  { name: "Team", href: "/#team" },
  { name: "FAQ", href: "/#faq" },
];

export const PRIZES_BENEFITS = [
  { icon: FaAward, text: "Cash prizes worth ₹1,00,000+" },
  { icon: FaUsers, text: "Certificates & Swags for all participants" },
  { icon: FaHandshake, text: "Networking with industry & Research experts" },
  { icon: FaRocket, text: "Incubation & funding for top ideas" },
];

export const FAQ_DATA = [
  {
    question: "Who can participate?",
    answer:
      "The hackathon is open to students, researchers, and professionals from any field. Cross-disciplinary teams are encouraged, and solo participants are also welcome.",
  },
  {
    question: "What are the two tracks about?",
    answer:
      "Track 1 focuses on data science solutions for agriculture (EDA, model development, MLOps). Track 2 focuses on building end-to-end AI-powered web applications.",
  },
  {
    question: "What technologies should I know?",
    answer:
      "For Track 1: Python, pandas, scikit-learn, PyTorch/TensorFlow. For Track 2: React/Vue, Node/Flask/FastAPI, vector DBs, and LLM tools.",
  },
  {
    question: "Will mentors be available?",
    answer:
      "Yes. Industry experts and faculty mentors will be available to guide teams throughout the hackathon, especially on problem statements and technical roadblocks.",
  },
];

export const TEAM_DATA = [
  {
    name: "Dr. R. M. Jalnekar",
    role: "Convener",
    title: "Director, VIT Pune",
    image: "/dr-r-m-jalnekar.png",
  },
  {
    name: "Dr. Vivek Deshpande",
    role: "Convener",
    title: "Director, VIT Pune",
    image: "/dr-vivek-deshpande.png",
  },
  {
    name: "Prof. Deepa Abin",
    role: "Organizing Secretary",
    title: "HOD, CSE (Data Science)",
    image: "/prof-deepa-abin.png",
  },
  {
    name: "Sayali Prakash Shinde",
    role: "Faculty Coordinator",
    title: "Assistant Professor",
    image: "/sayali-prakash-shinde.png",
  },
  {
    name: "Dr. Manoj Oak",
    role: "Expert From ARI",
    title: "Scientist E, ARI",
    image: "/dr-manoj-oak.png",
  },
  {
    name: "Dr. Abhinandan Surgonda Patil",
    role: "Expert From ARI",
    title: "Research Associate, ARI",
    image: "/dr-abhinandan-patil.png",
  },
  {
    name: "Ashwini Ranjit Nawadkar",
    role: "Faculty Coordinator",
    title: "Assistant Professor",
    image: "/ashwini-ranjit-nawadkar.png",
  },
  {
    name: "Rohit Wakade",
    role: "Tech Lead",
    title: "Full-stack developer",
    image: "/placeholder-avatar.png",
  },
];

export const TRACK_1_PROBLEMS = [
  {
    title:
      "AI-Driven Leaf Health Assessment, Damage Quantification, and Leaf Area Index Calculation",
    description:
      "Develop a lightweight AI system that analyses crop leaf images to identify multiple possible diseases and pest damages using pre-trained deep learning models. The system should also estimate the percentage of leaf area affected by each detected condition using segmentation techniques, along with calculating the Leaf Area Index (LAI) to provide an additional quantitative measure of plant canopy condition.",
    outcomes: [
      "Upload a leaf image from any crop.",
      "Receive a report listing all detected diseases/pest damages (multi-label classification).",
      "View the scale of damage for each detected condition, represented both as a descriptive category (e.g., low, moderate, severe) and as an approximate percentage of leaf area affected.",
      "Calculate the Leaf Area Index (LAI) from the uploaded image.",
      "See an overlaid segmentation mask highlighting the affected regions.",
    ],
    datasets: [
      "https://github.com/pratikkayal/PlantDoc-Dataset",
      "https://www.kaggle.com/datasets/abdallahalidev/plantvillage-dataset",
      "https://doi.org/10.17632/bwh3zbpkpv.1",
    ],
  },
  {
    title: "AI-Assisted Flag Leaf Measurement and Yield Prediction",
    description:
      "Develop a machine learning pipeline that processes UAV imagery of crop fields to detect and measure the morphological dimensions of the flag leaf. Using these measurements, the system should apply a regression model to predict the final grain yield for the corresponding crop.",
    outcomes: [
      "Upload a UAV image of a crop field.",
      "Automatically detect flag leaves in the image using a pre-trained model.",
      "Measure the length, width, and area of each detected flag leaf (converted from pixels to centimeters using UAV image metadata).",
      "Predict the final grain yield for the crop using a regression model trained on provided data.",
      "Display visual overlays showing detected leaves and measurement annotations.",
    ],
    datasets: [
      "https://www.kaggle.com/datasets/landrykezebou/global-wheat-detection",
      "https://www.plant-phenotyping.org/datasets-home",
    ],
  },
  {
    title: "AI-Powered Automated Quantification of Symbiotic Root Nodules",
    description:
      "Develop a computer vision application that analyses an image of an excavated legume root system to automatically detect, count, and measure symbiotic root nodules. This will replace the labour-intensive manual process currently used in soil health research.",
    outcomes: [
      "Upload an image of an excavated legume root system.",
      "Automatically detect and count all visible root nodules using a pre-trained model.",
      "Measure the size distribution of detected nodules (in mm or cm, using scale reference in the image).",
      "Generate a Nodulation Score based on total nodule count and size distribution.",
      "Display visual overlays marking detected nodules and their measurements.",
    ],
    datasets: [
      "https://datadryad.org/stash/dataset/doi:10.5061/dryad.6t1g1jx2f",
      "https://data.mendeley.com/datasets/brv522s3g9/1",
      "https://zenodo.org/record/3936361",
      "https://plantvision.unl.edu/unl-plant-phenotyping-datasets",
    ],
  },
  {
    title: "High-Throughput Seed Damage and Pest Infestation Analysis",
    description:
      "Build an AI-driven imaging system capable of batch-processing seed samples to automatically detect and quantify various forms of damage, such as cracks, discoloration, mold, and pest-related defects (including counting insect eggs or holes on individual seeds).",
    outcomes: [
      "Damage classification for each seed (e.g., healthy, cracked, discolored, mold-infected).",
      "Pest infestation indicators, including egg/larvae count or visible holes.",
      "Damage Severity Scale for each seed (e.g., 0–No Damage, 1–Mild, 2–Moderate, 3–Severe).",
      "Quantitative summary for the entire batch (percentage of damaged seeds, average pest count, etc.).",
      "Exportable data table and summary charts for further research or quality control.",
    ],
    datasets: [
      "https://www.kaggle.com/datasets/sinanislek/damaged-and-healthy-seeds",
      "https://www.kaggle.com/datasets/kausthubhking/seed-image-dataset",
    ],
  },
  {
    title: "AgriCurate: AI-Powered Dataset Quality and Curation Tool",
    description:
      "Build an AI-assisted data curation platform that can process agricultural datasets in bulk to automatically evaluate and enhance dataset quality. The system should detect missing, inconsistent, or low-quality data, assess metadata completeness, and identify anomalies.",
    outcomes: [
      "Curation Metrics for Each Dataset (Completeness, Timeliness, Precision, etc.).",
      "A Data Quality Scorecard summarizing overall dataset health.",
      "An Anomaly Detection Report highlighting mislabeled data, outliers, or duplicates.",
      "A Batch Summary showing percentage of entries failing quality checks and recommendations.",
      "Exportable PDF reports with visual charts and detailed data tables.",
    ],
    datasets: [],
  },
];
