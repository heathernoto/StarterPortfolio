import pinItMain from '../images/pinItMain.png';
import blackMirrorMain from '../images/blackMirrorMain.JPEG';
import tranquilityMain from '../images/tranquilityMain.png';
const projects = [
  {
    id: 1,
    title: 'Pin It',
    shortDescription:
      'A web app that allows users to save articles for future reading.',
    longerDescription:
      "Written with three fellow Grace Hopper students as a capstone project, this app uses Puppeteer's web scraping functionality to collect user specifies articles.  The articles are then saved in synced cloud and local databases for future on or offline reading.",
    link: 'https://pin-it-reader.herokuapp.com/',
    gitHub: 'https://github.com/pin-it-ghp2011/Pin-It',
    image: pinItMain,
    tools:
      'React, Redux, Cloudant, PouchDB, Puppeteer, JavaScript, Material-UI',
    youTube:
      'https://www.youtube.com/watch?v=Obxex7aYTsQ&list=PLx0iOsdUOUmnwv1vrUcoOhP736-omYGMN&index=5',
  },
  {
    id: 2,
    title: 'Tranquility',
    shortDescription: 'A site for candles.',
    longerDescription:
      'This mock e-commerce project has product display, login, session storage, and cart functionality. This app was built within a week with two fellow students.',
    link: 'https://tranquility-candles.herokuapp.com/',
    gitHub: 'https://github.com/Mighty-mighty-mangoes/Tranquility',
    image: tranquilityMain,
    tools:
      'React, Redux, PostrgeSQL, Sequelize, Express, JavaScript, Bootstrap',
    youTube: 'https://youtu.be/ba0yXGS3jFM',
  },
  {
    id: 3,
    title: 'Black Mirror Fortune Teller',
    shortDescription: 'A novelty fortune telling mobile app.',
    longerDescription:
      "This app uses a facial recognition API with a device's camera to read the users expression. The resulting data determines the type of fortune that is displayed to the user.  This app was conceived and developed for a solo hack-a-thon project.",
    gitHub: 'https://github.com/heathernoto/MagicMirror',
    image: blackMirrorMain,
    tools: 'React Native, JavaScript, Expo Camera, Expo Facial Recognition',
    youTube: 'https://youtu.be/QR4CEY17qeY',
  },
];

export default projects;
