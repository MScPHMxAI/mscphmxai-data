/* ==========================================================================
   EVENTS LIST - the only file to edit when an event is added or changed.

   Upload this file to the site root (next to panels.js) on the CMS and every
   page that reads it updates: the events page and the What's on panel on
   the home page. Seminars do NOT go here: they have their own file,
   seminars.js, and the home page reads both.

   Order does not matter. Anything that has not yet ended is "upcoming";
   anything that has ended drops off the upcoming list by itself.

   COPY-PASTE TEMPLATE (delete the lines you do not have)
   --------------------------------------------------------------------
   {
       dateISO:     "2027-03-15",              // REQUIRED. Always YYYY-MM-DD.
       dateDisplay: "15 MAR 2027",             // Optional. Made from dateISO if missing.
       description: "Name of the event",       // REQUIRED.
       time:        "4:00 pm SGT",             // Only used if timeStart is missing.
       timeStart:   "1600",                    // 24-hour HHMM, Singapore time.
       timeEnd:     "1700",
       venue:       "MD7, Level 2 Seminar Room",
       speaker:     "Prof Jane Doe, Institute, City",
       audience:    "Open to all",
       image:       "https://medicine.nus.edu.sg/mscphm/website/website_assets/events/20270315_event.png",
       link:        "https://...",             // Registration page. Omit if there is none.
       registerLabel: "Register",              // Optional button text.
       pageUrl:     "https://medicine.nus.edu.sg/mscphm/website/welcome_event_2027.html",
                                               // After the event: its photo write-up page.
                                               // The Past Events card then links there.
       details:     "One-line summary, used when there is no abstract.",
       abstract:    ["First paragraph.", "Second paragraph."],
       bio:         "Short biography of the speaker.",
       bioPoints:   ["Appointment or honour", "Another one"],
       abstractHeading: "About this event",     // Optional. Popup section titles; these are
       bioHeading:  "About the organisers"     // the defaults for an event.
   },
   --------------------------------------------------------------------

   Every field is optional except dateISO and description. Keep the comma
   between entries and the closing  ];  at the end.
   ========================================================================== */

window.EVENTS = [

    {
        dateISO: "2026-08-06",
        description: "2026 Welcome Event",
        image: "https://medicine.nus.edu.sg/mscphm/website/website_assets/photos/2026_welcome_event.jpg",
        pageUrl: "https://medicine.nus.edu.sg/mscphm/website/welcome_event_2026.html"
    },

    {
        dateISO: "2026-10-14",
        dateDisplay: "14 OCT 2026",
        description: "10th International Symposium on Bioinformatics (InSyB2026)",
        time: "8:30 am SGT",
        timeStart: "0830",
        timeEnd: "1845",
        venue: "NUS University Hall Auditorium, University Hall, 21 Lower Kent Ridge Road, Singapore 119077",
        audience: "Open to all",
        image: "https://medicine.nus.edu.sg/mscphm/website/website_assets/events/insyb2026.png",
        link: "https://forms.cloud.microsoft/r/XFQQw3r9pF",
        registerLabel: "Register",
        details: "The theme of InSyB2026 is “AI and Bioinformatics for Precision Health and Medicine”. The symposium will include invited talks, presentations of original research results and workshops.",
        abstract: [
            "View full details: https://medicine.nus.edu.sg/bch/insyb2026/\nInSyB is a flagship annual event of the Asia-Pacific Bioinformatics Network (APBioNET), established in 1998 and is one of the oldest and most notable bioinformatics organisations in the Asia & Pacific region. This year, the APBioNet exco’s InSyB Steering Committee has awarded 10th InSyB 2026 to be hosted by the National University of Singapore.\nInSyB 2026 is also designated a Biochem100 Centennial Celebrations event of the 100th Anniversary of the Department of Biochemistry, Yong Loo Lin School of Medicine, National University of Singapore, the department where BIC was founded in 1996 as a national centre, and where its predecessor groups, Biocomputing Interest Group (BIG) and the Bioinformatics Resource User Support (BRUS) was set up in 1991/92."
        ],
        bio: "The 10th InSyB 2026 is held in conjunction with the 30th Anniversary of the Bioinformatics Centre (BIC), National University of Singapore (https://www.bic.nus.edu.sg/), one of the earliest bioinformatics organisations in the Asia Pacific region, and the founding members founded the APBioNet in 1998 and its flagship event, the InCoB conference series (founded in 2002)."
    }

];
