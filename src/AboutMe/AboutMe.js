import family from '../images/family.png';
import coding from '../images/working.png';
import business from '../images/happy.png';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id="about-me__nav">
      <h1>About Me</h1>
      <div className="about-me__box">
        <div className="about-me__box-img">
          <img alt="family" src={family} className="about-me__pic" />
        </div>
        <div className="about-me__box-text">
          Originally in early childhood education, I left the workforce to care
          for my children and parents. Curious by nature, I used any spare time
          to continue learning. I always want to know how things work, tinker
          with the parts, and fix what's broken. Though I had no formal eduation
          in coding or web development, it always interested me. I loved how the
          internet could connect people. In the days of dial up, I designed my
          first website to keep in touch with far flung family and friends.
        </div>{' '}
      </div>

      <div className="about-me__box">
        <div className="about-me__box-img">
          <img alt="coding" src={coding} className="about-me__pic" />
        </div>
        <div className="about-me__box-text">
          Recently, I returned to coding and taught myself JavaScript. During
          the pandemic, I applied to and was accepted into the Grace Hopper
          Program at Fullstack Academy. An immersive 17 week course focused on
          the NERD stack, I ate, slept, and dreamt code - and I LOVED it.
          Becoming a full stack software engineer is my pandemic positive!
        </div>
      </div>
      <div className="about-me__box">
        <div className="about-me__box-img">
          <img alt="jumping" src={business} className="about-me__pic" />
        </div>
        <div className="about-me__box-text">
          My bootcamp experience has given me a sturdy foundation and I am
          excited for this new chapter in my life. I am looking forward to
          joining a team and continuing to learn. I am a positive and supportive
          teammate, a strong communicator, and quick to laugh. With a varied
          background and lots of life experience, I am flexible and keep things
          in perspective. AND my early childhood education background means I
          know what to do when everyone is crying!
        </div>
      </div>
    </section>
  );
}
