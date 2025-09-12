import { FaAward, FaUsers, FaHandshake, FaRocket } from "react-icons/fa";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Tracks", href: "/tracks" },
  { name: "Team", href: "/#team" },
  { name: "FAQ", href: "/#faq" },
];

export const PRIZES_BENEFITS = [
  { icon: FaAward, text: "Attractive Prizes " },
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

export const TEAM_SECTIONS = [
  {
    title: "Chief Patron",
    members: [
      {
        name: "Prof.Dr. R. M. Jalnekar",
        role: "Director, VIT Pune",
        title: "",
        image: "/dr-r-m-jalnekar.jpg",
      },
      {
        name: "Prof.Dr. Vivek Deshpande",
        role: "Director, VIIT Pune",
        title: "",
        image: "/dr-vivek-deshpande.png",
      },
    ],
  },
  {
    title: "Advisors",
    members: [
      {
        name: "Dr.Vijay Mane",
        role: "Dean - Alumni and Outreach",
        title: "Associate Professor",
        image: "/mane.jpg",
      },
      {
        name: "Dr.Nitin Sakhare",
        role: "Chief International Relations Officer",
        title: "Assistant Professor",
        image: "/sakhare.jpg",
      },
    ],
  },
  {
    title: "Convener",
    members: [
      {
        name: "Dr. Deepa Abin",
        role: "Convener",
        title: "HOD, CSE (Data Science)",
        image: "/prof-deepa-abin.png",
      },
    ],
  },
  {
    title: "Research Coordinator",
    members: [
      {
        name: "Dr.Rupali Mahajan",
        role: "",
        title: "Associate Professor",
        image: "/mahajan.png",
      },
    ],
  },
  {
    title: "Organizing Team",
    members: [
      {
        name: "Prof. Sayali Prakash Shinde",
        role: "Faculty Coordinator",
        title: "Assistant Professor",
        image: "/sayali-prakash-shinde.png",
      },
      {
        name: "Prof. Ashwini Ranjit Nawadkar",
        role: "Faculty Coordinator",
        title: "Assistant Professor",
        image: "/ashwini.png",
      },
    ],
  },
  {
    title: "Experts from ARI",
    members: [
      {
        name: "Dr. Manoj Oak",
        role: "Expert from ARI",
        title: "Scientist E, ARI",
        image: "/dr-manoj-oak.png",
      },
      {
        name: "Dr. Abhinandan Surgonda Patil",
        role: "Expert from ARI",
        title: "Research Associate, ARI",
        image: "/dr-abhinandan-patil.png",
      },
    ],
  },
  {
    title: "Student Technical Team",
    members: [
      {
        name: "Rohit Wakade",
        role: "Tech Lead",
        title: "Full-stack developer",
        image: "/roh.jpg",
      },
      {
        name: "Sail Nagale",
        role: "Website Developer",
        title: "Technical Team",
        image: "/sail.jpg",
      },
      {
        name: "Aadesh Deshmukh",
        role: "Website Developer",
        title: "Technical Team",
        image: "/aadesh.jpg",
      },
    ],
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

export const TRACK_2_PROBLEMS = [
  {
    title:
      "Real-Time Selective Weed Detection System – Simulation-Driven Approach Using Open Access Agricultural Video Datasets",
    description:
      'Develop a computer vision system that processes agricultural video feeds from publicly available datasets and classifies vegetation into "Crop" and "Weed" in real time. The system will simulate a spot-spraying robot by highlighting weeds with bounding boxes and generating a corresponding "spray/no-spray" log. The solution will be entirely software-based with no hardware requirements, enabling rapid development during the hackathon.',
    outcomes: [
      "Trained lightweight object detection model (e.g., YOLOv8 Nano) fine-tuned for weed vs crop detection using publicly available datasets.",
      "Video inference pipeline capable of processing pre-recorded agricultural videos at ≥10 FPS on standard laptops.",
      'On-screen simulation with bounding boxes and class labels ("Crop" / "Weed").',
      "Automated spray decision logging in a CSV/JSON file with timestamps and detected weed locations.",
      "Demo-ready dashboard displaying: Video feed with live detections, Spray/no-spray decision indicator, Real-time detection confidence scores, and basic evaluation metrics (precision, recall, mAP) for the final model on a validation video set.",
    ],
    datasets: [
      "CWFID (Crop and Weed Field Image Dataset) – transformed into video sequences for simulation.",
      "DeepWeeds – weed detection images converted to streaming frames.",
      "WeedCOCO – annotated weed datasets adapted for video testing.",
      "MH-Weed16- Annotated Dataset.",
    ],
  },
  {
    title: "AI-Driven Crop Disease Prediction and Management",
    description:
      "Develop a prototype system that predicts the risk of 1–2 specific crop diseases for a chosen crop in a selected region using publicly available datasets (e.g., IMD weather data, NASA MODIS NDVI, FAO crop health data). Participants must source, curate, and preprocess these datasets within the hackathon timeframe. The system should visualize disease risk levels on an interactive map and provide preventive recommendations. Constraints: Focus on one crop and one or two diseases only. Time horizon: Next 3–5 days risk prediction. Use small sample datasets that can be downloaded and cleaned quickly. Keep satellite data to low-resolution imagery or NDVI indices for faster processing.",
    outcomes: [
      "Public Data Curation Pipeline — A method to locate, download, and merge weather, crop health, and vegetation datasets from open sources.",
      "Prototype Predictive Model — Using a machine learning algorithm (e.g., Decision Tree, XGBoost) to classify risk levels as Low / Medium / High.",
      "Risk Visualization Dashboard — Interactive map or chart showing district-wise disease probability.",
      "Preventive Recommendation Module — Displays simple measures farmers can take for the identified disease.",
    ],
    datasets: [],
  },
  {
    title: "Assured Contract Farming Platform",
    description:
      "Build a prototype digital platform that connects farmers/FPOs with buyers (like wholesalers or agri-businesses) for simple contract farming agreements. The system should allow farmers to list their crops and buyers to propose contracts. Contracts can be selected from basic templates, digitally signed, and tracked for completion. Guidelines: Use basic contract templates (PDF/HTML). Replace satellite monitoring with manual milestone updates. Simulate payments with a dummy wallet system. Build a minimal web or mobile prototype. Keep the system role-based login: farmer view and buyer view only.",
    outcomes: [
      "User Login System — Farmers and buyers have separate interfaces.",
      "Contract Creation — Select from simple templates (e.g., crop type, quantity, price, delivery date).",
      "Digital Agreement — Mock digital signing (button-based confirmation).",
      "Milestone Tracking — Farmers update crop growth stage (text/image upload).",
      "Simulated Payment — Dummy wallet with auto-release of funds when milestones are marked as complete.",
      "Dashboard — Simple view of ongoing and completed contracts.",
    ],
    datasets: [],
  },
  {
    title: "Grain Fingerprinting & Adulteration Detection",
    description:
      "Build a prototype computer vision system that can take an image of grains (e.g., rice, wheat, pulses) and generate a digital fingerprint. Using this fingerprint, the system should either: Classify the grain’s geographical region or Detect adulteration by identifying presence of different grain types in a bulk sample and estimating the percentage. Guidelines: Allow regular smartphone camera images. Restrict origin prediction to limited regions/categories. Use basic ML models (CNN/Transfer Learning). For adulteration, use image segmentation or simple clustering. Build a demo app where a user uploads an image and gets results.",
    outcomes: [
      "A simple web/mobile interface to upload grain images.",
      "Fingerprint generation (visual features extracted via CV/ML).",
      "Prediction module: Shows grain origin (limited categories) with confidence.",
      "Adulteration module: Detects presence of mixed grains and estimates percentage.",
      "Result dashboard: Summarized report with prediction and adulteration results.",
    ],
    datasets: [],
  },
  {
    title: "Intermediate MRV Framework for Carbon Farming",
    description:
      "Build a system that goes beyond simple vegetation cover and provides a basic estimate of carbon stock trends using satellite imagery and ML models. The platform should allow farmers to select their farm boundary, extract vegetation indices (like NDVI, EVI), and apply a simple biomass-to-carbon conversion model to estimate how much carbon is stored in their farm trees and crops.",
    outcomes: [
      "A web dashboard where farmers can outline their land on a satellite map.",
      "Vegetation index calculation (NDVI/EVI) for the selected area using open satellite datasets (Sentinel/Landsat).",
      "A basic carbon stock estimation model that converts vegetation index trends to approximate biomass/carbon sequestration values.",
      "A downloadable report with year-on-year changes in carbon stock to help smallholder farmers understand their potential carbon credit.",
    ],
    datasets: [],
  },
  {
    title: "Revolutionizing Agricultural Advisory Services",
    description:
      "Farmers often face critical gaps in accessing timely and reliable agricultural knowledge. The challenge is to design a scalable digital advisory platform that provides real-time, personalized guidance on crop management, pest and disease control, irrigation practices, and market intelligence. The solution should leverage AI/ML for first-level responses and seamlessly integrate with multi-channel interfaces (mobile app, WhatsApp/chatbot, voice in local languages) to ensure inclusivity and accessibility.",
    outcomes: [
      "An integrated advisory platform where farmers can ask questions by text, voice, or by uploading images of crops.",
      "An AI-powered system that provides instant, context-aware responses to farmer queries.",
      "A human-in-the-loop escalation mechanism, where unresolved queries are forwarded to agricultural experts, and their responses are added back to the knowledge base for future automation.",
      "A multi-lingual, multi-channel delivery system (app + chatbot + IVR/voice assistant) to maximize reach across rural areas.",
      "A feedback and analytics dashboard for policymakers and agri-experts to monitor patterns in farmer queries, regional challenges, and advisory impact.",
    ],
    datasets: [],
  },
  {
    title:
      "AI-Powered Multi-Modal Quality Assurance for Processed Agri-Foods (Advanced)",
    description:
      "Develop a multi-modal AI quality assurance system that integrates computer vision (color, texture, morphology) with non-vision signals (spectroscopy, thermal imaging, etc.). The system should use deep learning and transfer learning to correlate these heterogeneous inputs with gold-standard lab results for parameters like protein content, gluten strength, crispness, and shelf-life indicators.",
    outcomes: [
      "A multi-modal AI model trained on vision + non-vision data for robust quality scoring.",
      "A cloud-integrated web platform that generates a detailed “AI Quality Passport” for each product, including parameters such as nutritional quality prediction, defect likelihood, and shelf-life estimate.",
      "Model explainability tools (e.g., Grad-CAM, SHAP) to highlight why the AI judged a food product as defective or premium quality.",
    ],
    datasets: [],
  },
  {
    title:
      "Digital Twin for Quality Analysis of Processed Foods using Multi-Sensor Data",
    description:
      "Develop a digital twin of the food processing pipeline—a virtual replica that learns from multi-sensor IoT data, recipe metadata, and process logs. By applying AI-based predictive analytics, the system should forecast product quality and defects before they occur, enabling real-time intervention and process optimization. Target Audience: Food processing industries, FPOs, bakeries, packaged food manufacturers.",
    outcomes: [
      "A digital twin prototype that integrates IoT sensors (moisture, thermal, airflow, vibration, etc.) with recipe/process metadata.",
      "Predictive dashboards showing real-time process deviations and expected quality degradation.",
      "Integration with automated control loops (e.g., adjusting drying time, baking temperature, or mixing speed) to ensure consistency.",
      "A decision-support system that enables root cause analysis of quality failures.",
    ],
    datasets: [],
  },
];
