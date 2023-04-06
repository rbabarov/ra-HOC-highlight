const USID = require("usid");
const usid = new USID();

const videoList = [
  {
    id: usid.rand(7),
    type: "video",
    url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
    views: 50,
  },
  {
    id: usid.rand(7),
    type: "video",
    url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
    views: 12,
  },
  {
    id: usid.rand(7),
    type: "article",
    title: "Невероятные события в неизвестном поселке...",
    views: 175,
  },
  {
    id: usid.rand(7),
    type: "article",
    title: "Секретные данные были раскрыты!",
    views: 1532,
  },
  {
    id: usid.rand(7),
    type: "video",
    url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
    views: 4253,
  },
  {
    id: usid.rand(7),
    type: "article",
    title: "Кот Бегемот обладает невероятной...",
    views: 12,
  },
];

export default videoList;
