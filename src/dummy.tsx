
// src/dummy.tsx

export const dummyArticles = [
  {
    _id: "60d5f1b3e6b3b3b3b3b3b3b3",
    articleType: "Research Article",
    title: "ISOTHERMAL AND KINETICS ASSESSMENT OF METAL IONS REMOVAL FROM LEACHATE USING CASSAVA PEEL DERIVED ADSORBENT",
    abstract:
      "Heavy metals are often present in leachate at concentrations exceeding discharge limits. They are persistent, non-biodegradable and harmful to human health. It is important that leachate is effectively treated before discharge into aqueous systems.  Isothermal and kinetic studies were undertaken to evaluate the removal of Pb, Ni, Cr and Zn ions from synthetic leachate by a cassava peel-derived adsorbent (CPDA). Batch experiments were conducted at varied initial conentrations (23-150mg/l) and contact times(10-60 minutes) and the data were analysed using the non-linear Langmuir and Freundlich isotherms and the pseudo-first and second order kinetic models. The Freundlich isotherm provided a better description of the equilibrium process for all the metals. The maximum monolayer adsorption capacities were 50.95, 47.78, 44.72 and 22.26mg/g for Pb, Zn, Ni and Cr respectively.  The pseudo-first order kinetic model provided a better fit for Pb and Cr, while  Ni and Zn followed the pseudo-second order model. The results of this study have provided insight into the adsorption mechanisms and demonstrated the heavy metal removal capability of the adsorbent, while forming the basis for application to real leachate samples.",
    keywords: [
      "Cassava peel",
      "Heavy Metals",
      "Adsorption",
      "Kinetics",
      "Isotherms",
    ],
    volume: { volumeNumber: 7, coverImage: "/issue-cover.png" },
    issue: { issueNumber: 1 },
    pages: { start: 1, end: 11 },
    author: { name: "Okovido J.O" },
    coAuthors: [{ name: "Akhigbe L.O." }, { name: "Momodu, O.A." }],
    publishDate: new Date("2025-11-15"),
    viewers: { count: 150 },
    download: { file: "ISOTHERMAL AND KINETICS ASSESSMENT OF METAL IONS REMOVAL FROM LEACHATE USING CASSAVA PEEL DERIVED ADSORBENT.pdf" }
  },
  {
    _id: "60d5f1b3e6b3b3b3b3b3b3b4",
    articleType: "Research Article",
    title: "CHEMICAL EVALUATION OF SOME EDIBLE MUSHROOM SPECIES CULTIVATED IN RURAL GARDENS IN EDO STATE, NIGERIA",
    abstract:
      "Fresh samples of edible mushrooms - Volvariella volvacea, Pleurotus tuberregium and Pleurotus djamor – were collected from some home gardens in which the mushrooms were cultivated on decayed wood shavings   from sawmills in Oluku, Benin-City, Edo state. These were harvested weighed and oven dried. The dried samples were milled and examined by chemical analyses for their proximate, minerals and phytochemical compositions. The results indicated appreciable amounts of essential nutrients in the mushroom species.  Pleurotus tuberregium was the richest in protein content (41.32%) and highest moisture content (22.23%). P. djamar was rich in fat (15.63%), calcium (38.50mg/g), sodium (3.03mg/g) and magnesium (18.98mg/g). V. volvacea contained the highest value of ash content (14.05%) and carbohydrate (19.65%), while P. tuberregium was rich in crude fibre (6.75%) and potassium (7.25mg/g).  The study confirmed  that mushrooms have a higher levels of proteins than most leguminous plants and vegetables hence, could serve as  substitutes   for food legumes, meat or fish in food recipes. Phytochemical studies confirmed the presence of saponins, flavonoids, tannin, phenolic compounds and alkaloids in Volvariella volvacea, Pleurotus tuberregium and Pleurotus djamor. The charsterization of these phytocompounds in the mushrooms is recommended. show that they should be added in our daily meal due to their health benefits.",
    keywords: [
      "Edible mushrooms",
      "cultivated",
      "home gardens",
      "chemical composition",
    ],
    volume: { volumeNumber: 7, coverImage: "/issue-cover.png" },
    issue: { issueNumber: 1 },
    pages: { start: 12, end: 28 },
    author: { name: "Odafe-Shalome G.I.O." },
    coAuthors: [{ name: "Favour O. Imhankhon" }],
    publishDate: new Date("2025-11-15"),
    viewers: { count: 250 },
    download: { file: "CHEMICAL EVALUATION OF SOME EDIBLE MUSHROOM SPECIES CULTIVATED IN RURAL GARDENS IN EDO STATE, NIGERIA.pdf" }
  },
];

export const dummyCurrentIssue = {
  issue: {
    volume: { volumeNumber: 1, coverImage: "/issue-cover.png" },
    issueNumber: 1,
    publishDate: new Date("2025-11-15"),
    description: "This is the inaugural issue of the UNIBEN Journal of Science, Technology and Innovation.",
    isActive: true,
    createdAt: new Date("2025-11-01"),
    updatedAt: new Date("2025-11-15"),
  },
  articles: dummyArticles,
};
