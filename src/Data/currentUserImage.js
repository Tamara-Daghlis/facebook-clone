export function getCurrentUserImage() {
  const images = [
    "https://unsplash.com/",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRov36SxT6PALsT10BSkC-hp4xhq4g2f1wRsw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TXUWF4KEJ2SS4MqwGqESIBEsREbZr9k7Rg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbXxo5smd56BGOvIKRCj83mnR_jF1SWWw6Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V20FZ057RwlyvuSLW1Ort0cPrdEJyv1pTQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14XNbqSuN08QR3TGAOXstz7bqVcKtfW8jRw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0MiKkaiHjM-OyBbAfckXqk_GilyxwL1lqw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjokf_LygWfNarbnx61ubz8acq1zBZ5WPlw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAueXA2PdI6l2P6O2xe0RU5DP2ZWu5QmZ_Xg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-bLpmsc57KZYn8EEgHML34dw3kEM4_SEHQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyejc-bHUs_TgVbIObjBDe_xO-X38BRqH14g&usqp=CAU",
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
