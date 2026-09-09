/* ==========================================================================
   SEMINAR LIST - the only file to edit when a seminar is added or changed.

   Upload this file to the site root (next to panels.js) on the CMS and
   every page that reads it updates: the seminars page, the What's on panel
   on the home page, the intranet seminars page.

   Order does not matter. Anything dated today or later is "upcoming"; the
   earliest of those is the big panel at the top of the seminars page.
   Anything older moves to "past seminars" by itself the day after it runs.

   COPY-PASTE TEMPLATE (delete the lines you do not have)
   --------------------------------------------------------------------
   {
       dateISO:      "2027-03-15",              // REQUIRED. Always YYYY-MM-DD.
       description:  "Title of the talk",       // REQUIRED.

       speaker:      "Prof Jane Doe",           // Name only.
       speakerTitle: "Professor of Genomics",   // Optional, shown under the name.
       affiliation:  "Institute, City",
       speakerPhoto: "https://medicine.nus.edu.sg/mscphm/website/website_assets/seminars/20270315_doe_photo.jpg",
                                                // Optional head-shot. Initials are shown without one.
       time:         "4:00 pm SGT",             // Only used if timeStart is missing.
       timeStart:    "1600",                    // 24-hour HHMM, Singapore time.
       timeEnd:      "1700",
       venue:        "Online, via Zoom",        // or "Hybrid: MD7 and Zoom", "MD7, Level 2 Seminar Room"
       audience:     "Open to all",

       image:        "https://medicine.nus.edu.sg/mscphm/website/website_assets/seminars/20270315_doe.png",
       link:         "https://...",             // Registration page. Omit if there is none yet.
       registrationOpens: "2027-02-15",         // Optional. Before this date the button says
                                                // "Registration opens 15 Feb" instead of Register.
       registerLabel: "Register on Zoom",       // Optional. Default: "Register on Zoom" for Zoom
                                                // links, "Register" for anything else.

       details:      "One-line summary, used when there is no abstract.",
       abstract:     ["First paragraph.", "Second paragraph."],
       bio:          "Short biography of the speaker.",
       bioPoints:    ["Appointment or honour", "Another one"],
       abstractHeading: "Talk abstract",         // Optional. Popup section titles; these are
       bioHeading:   "About the speaker",       // the defaults for a seminar.

       recordingUrl: "https://youtu.be/...",    // After the talk. Adds "Watch recording".
       slidesUrl:    "https://..."              // After the talk. Optional.
   },
   --------------------------------------------------------------------

   Every field is optional except dateISO and description. Keep the comma
   between entries and the closing  ];  at the end.
   ========================================================================== */

window.SEMINARS = [

    {
        dateISO: "2026-09-07",
        description: "Decoding Disease Mechanisms through Genomics, Immune Repertoires, and AI",
        speaker: "Prof Mingyan Fang",
        speakerTitle: "Professor and Principal Investigator",
        affiliation: "BGI-Research, Shenzhen",
        speakerPhoto: "https://medicine.nus.edu.sg/mscphm/website/website_assets/hero_section/prof_mingyan_fang.png",
        time: "8:00 pm SGT",
        timeStart: "2000",
        timeEnd: "2100",
        venue: "Online, via Zoom",
        audience: "Open to all",
        image: "https://medicine.nus.edu.sg/mscphm/website/website_assets/events/seminar_20260907_mingyan_fang.png",
        link: "https://events.zoom.us/ev/AgGx_R1utqclZrvMQN848SBNX7ZWQGgurz-nemXKKOB7Qz1FoG8T~Ak2KeP5Sf95feeKddzPPe7gZnCZBSIyACuJFQ1EFwdIiMBwxdcBskFySBQ",
        registerLabel: "Register on Zoom",
        details: "Part of the MScPHMxAI Seminar Series. Prof Mingyan Fang, BGI-Research Shenzhen, on genomics, immune repertoires and disease-aware AI in molecular diagnosis.",
        abstract: [
            "Interpreting genetic variants remains the greatest bottleneck in genomic medicine. Because standard computational tools lack specific biological context, they often fail to identify the cause of rare disorders, leaving many patients on a long and unresolved diagnostic journey. To address this limitation, Prof Fang's research combines deeply phenotyped patient cohorts with disease-aware artificial intelligence and population-scale genomics. Instead of relying on generic sequence features, her models are trained directly on disease biology, so they rank candidate genes and variants against the mechanisms that actually cause disease. Read alongside large population datasets, a rare variant seen once in a clinic can then be placed against the background of an entire population.",
            "In this talk, Prof Fang will describe how this integrated strategy has reshaped molecular diagnostics in her programme. Her team has identified over 50 disease-causing genes across immune, neurological and metabolic disorders, raising the molecular diagnostic rate in primary immunodeficiency to 68% and informing improvements in treatment. She will introduce her disease-aware AI tools: VIPPID for variant pathogenicity prediction in immune disease, VIPER for causative gene identification in inborn errors of immunity, and GeneRAIN for gene regulatory network modelling, trained on 410,000 RNA-seq samples. Immune repertoire sequencing then carries the picture from genotype to immune consequence, defining disease-specific signatures in inborn errors of immunity, NMOSD and SLE, alongside reference baselines for immune ageing in healthy children.",
            "Supported by the high-throughput ZBOLT platform and the CMDB database, population-scale analyses of common and rare variants have implicated new genes in kidney disease and hearing loss, while over 10,000 newborn genomes point to a potential early-life genetic burden. Ultimately, models that encode disease biology promise faster and more mechanistic molecular diagnosis, and precision medicine that reaches the populations current reference data serve least well."
        ],
        bio: "Prof Mingyan Fang is Professor and Principal Investigator at BGI-Research in Shenzhen. Her research sits at the intersection of genomics and artificial intelligence, combining population-scale sequencing, multi-omics integration and disease-aware AI models to identify causative genes, interpret variants and raise molecular diagnostic yield in rare and immune-mediated disease. She holds a PhD in Clinical Immunology from Karolinska Institutet and has over 15 years in computational biology and translational medicine.",
        bioPoints: [
            "Deputy Director of BGI Research Asia Pacific in Sydney and of the International Cooperation Center at BGI-Research",
            "Adjunct Professor and graduate supervisor at Lanzhou University, the University of Chinese Academy of Sciences, Dalian University of Technology and South China University of Technology",
            "Developer of VIPPID, the first variant pathogenicity predictor built specifically for primary immunodeficiency disease, and of GeneRAIN and VIPER, deep learning models for gene regulatory networks and disease gene identification",
            "First and corresponding author of a genome sequencing study of 7,140 newborns quantifying the hidden burden of genetic disease at birth",
            "Architect of ZBOLT, a genomic analysis platform running at 100 Tbp per day to support ultra-large-scale population studies",
            "Principal investigator on grants from the National Natural Science Foundation of China, the Shenzhen Science and Technology R&D Fund and the China-Serbia science and technology cooperation programme",
            "Editorial board member of GigaScience and Advanced Genetics"
        ]
    }

];
