/**
 * Research and Conference Achievements Data
 * 
 * Note on IEEE Xplore:
 * The publication status is currently pending submission/inclusion in the IEEE Xplore Digital Library.
 * Once the official IEEE Xplore publication URL is live, simply set `ieeeXploreUrl` to the URL string.
 */

export const researchData = {
  // Conference Information
  conference: {
    name: "NMITCON 2026",
    fullName: "4th International Conference on Networks, Multimedia, and Information Technology",
    edition: "4th Edition",
    dates: "September 24–25, 2026",
    location: "Bengaluru, Karnataka, India",
    host: "Nitte Meenakshi Institute of Technology (NMIT), Bengaluru",
    campus: "Nitte University, Bengaluru Campus",
    technicalCoSponsors: [
      "IEEE Bangalore Section",
      "IEEE Communications Society (ComSoc) Bangalore Chapter"
    ],
    sponsoredBy: "All India Council for Technical Education (AICTE)",
    dignitaries: [
      {
        name: "Dr. Parameshachari B D",
        title: "Conference Chair, NMITCON",
        designation: "Professor & HoD, Dept. of ECE, NMIT"
      },
      {
        name: "Dr. H C Nagaraj",
        title: "Principal, NMIT",
        designation: "Nitte Meenakshi Institute of Technology"
      }
    ]
  },

  // Research Paper Details
  paper: {
    id: "3111",
    cmtPaperId: "3111",
    // EXACT title confirmed by official Certificate of Appreciation
    title: "Neuromorphic Multi-Modal Fake Media Detection System using Spiking Neural Networks with AI Content Identification and News Verification",
    authors: [
      {
        name: "Dhanush J",
        role: "Lead Author & Presenter",
        affiliation: "Dept. of Computer Science & Engineering (Cybersecurity), Bengaluru"
      }
    ],
    // Clear placeholder for future co-author additions if applicable
    coAuthorsNote: "Research presentation delivered by Dhanush J.",
    status: "Presented — IEEE Xplore publication pending",
    statusBadge: "Presented at NMITCON 2026",
    publicationNote: "Expected to be submitted for inclusion in the IEEE Xplore Digital Library, subject to the conference/IEEE publication process and requirements.",
    // Future-ready URL: Replace null with official IEEE Xplore URL when live
    ieeeXploreUrl: null,
    domains: [
      "Neuromorphic Computing",
      "Spiking Neural Networks (SNNs)",
      "Multi-Modal AI",
      "Fake Media Detection",
      "AI Content Identification",
      "News Verification",
      "Cybersecurity",
      "Intelligent Systems"
    ],
    abstract: "A novel bio-inspired neuromorphic framework designed to combat high-fidelity synthetic media and misinformation at scale. Leveraging event-driven Spiking Neural Networks (SNNs), the architecture processes spatio-temporal audio-visual signals with ultra-low latency and extreme energy efficiency. The system combines multi-modal deepfake detection with automated real-time news credibility scoring, establishing a resilient barrier against adversarial manipulation."
  },

  // Recognitions & Honors
  recognitions: [
    {
      id: "best-presenter",
      title: "Best Paper Presenter",
      badge: "🏆 BEST PAPER PRESENTER",
      type: "Award",
      organization: "NMITCON 2026 / NMIT, Bengaluru",
      date: "September 24–25, 2026",
      status: "Confirmed by Official Certificate",
      description: "Conferred to Dhanush J for outstanding technical presentation, clarity of defense, and command of neuromorphic multi-modal architectures during the technical presentation session.",
      certificateImg: "/research/nmitcon-best-presenter-certificate.png",
      stagePhotoImg: "/research/nmitcon-presentation-award.jpg"
    },
    {
      id: "best-paper",
      title: "Best Research Paper",
      badge: "🏆 BEST RESEARCH PAPER",
      type: "Honors",
      organization: "4th International Conference on Networks, Multimedia, and Information Technology",
      date: "September 2026",
      status: "Conference Recognition",
      description: "Recognized among top research submissions for scientific novelty in utilizing event-driven Spiking Neural Networks for synthetic media forensic analysis and news integrity verification."
    },
    {
      id: "paper-presentation",
      title: "Research Paper Presented",
      badge: "📄 RESEARCH PAPER PRESENTED",
      type: "Technical Presentation",
      organization: "NMITCON 2026 (Paper ID: 3111)",
      date: "September 24–25, 2026",
      status: "Successfully Presented",
      description: "Delivered oral defense for CMT Paper ID 3111 at NMIT Bengaluru before academic peers, IEEE technical delegates, and subject matter experts."
    }
  ],

  // Conference Experience narrative
  conferenceExperience: {
    summary: "Presented research at NMITCON 2026, the 4th International Conference on Networks, Multimedia, and Information Technology, hosted by Nitte Meenakshi Institute of Technology, Bengaluru. The research presentation was recognized with Best Research Paper and Best Paper Presenter honors.",
    role: "Student Researcher & Presenter",
    institution: "Nitte Meenakshi Institute of Technology (NMIT), Bengaluru",
    ecosystem: "Organized under AICTE sponsorship in association with the IEEE Bangalore Section and IEEE Communications Society (ComSoc) Bangalore Chapter."
  },

  // Visual Timeline
  timeline: [
    {
      step: 1,
      year: "2026",
      title: "Paper Accepted & Peer-Reviewed",
      subtitle: "CMT Paper ID: 3111 accepted following rigorous peer review",
      status: "completed"
    },
    {
      step: 2,
      year: "Sept 2026",
      title: "Presented at NMITCON 2026",
      subtitle: "Delivered oral research presentation at Nitte Meenakshi Institute of Technology, Bengaluru",
      status: "completed"
    },
    {
      step: 3,
      year: "Sept 2026",
      title: "Best Research Paper & Best Paper Presenter",
      subtitle: "Honored with Best Paper Presenter and Best Research Paper recognitions on stage",
      status: "completed"
    },
    {
      step: 4,
      year: "Upcoming",
      title: "IEEE Xplore Publication — Pending",
      subtitle: "Expected to be submitted for inclusion in the IEEE Xplore Digital Library",
      status: "pending"
    }
  ],

  // Evidence and media assets
  evidence: {
    certificateUrl: "/research/nmitcon-best-presenter-certificate.png",
    presentationPhotoUrl: "/research/nmitcon-presentation-award.jpg",
    certificateTitle: "Certificate of Appreciation — Best Paper Presenter",
    certificateRecipient: "Dhanush J",
    certificatePaperTitle: "Paper ID 3111: Neuromorphic Multi-Modal Fake Media Detection System using Spiking Neural Networks with AI Content Identification and News Verification",
    certificateSignatories: "Dr. Parameshachari B D (Conference Chair) & Dr. H C Nagaraj (Principal, NMIT)"
  }
};
