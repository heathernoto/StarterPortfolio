import pinItMain from './images/pinItMain.png';
import blackMirrorMain from './images/blackMirrorMain.JPEG';
import tranquilityMain from './images/tranquilityMain.png';
const projects = [
  {
    id: 1,
    title: 'Pin It',
    description:
      "A web app that allows users to save articles for future use, whether online or off. Built with three fellow students for Grace Hopper at Fullstack's capstone project.",
    link: 'https://pin-it-reader.herokuapp.com/',
    gitHub: 'https://github.com/pin-it-ghp2011/Pin-It',
    image: pinItMain,
    youTube:
      'https://www.youtube.com/watch?v=Obxex7aYTsQ&list=PLx0iOsdUOUmnwv1vrUcoOhP736-omYGMN&index=5',
  },
  {
    id: 2,
    title: 'Tranquility',
    description:
      'A mock e-commerce site for candles. Built in less than a week with two fellow students for a class project in an Agile team environment.',
    link: 'https://tranquility-candles.herokuapp.com/',
    gitHub: 'https://github.com/Mighty-mighty-mangoes/Tranquility',
    image: tranquilityMain,
    youTube: 'https://youtu.be/ba0yXGS3jFM',
  },
  {
    id: 3,
    title: 'Black Mirror Fortune Teller',
    description:
      'A novelty fortune telling mobile app that uses facial recognition to determine whether you want a positive or negative prediction. Conceived and built in a few days for a solo Hack-A-Thon project.',
    gitHub: 'https://github.com/heathernoto/MagicMirror',
    image: blackMirrorMain,
    youTube: 'https://youtu.be/QR4CEY17qeY',
  },
];

export default projects;
