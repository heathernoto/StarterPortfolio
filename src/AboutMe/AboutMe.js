import family from '../images/family.png';
import coding from '../images/working.png';
import business from '../images/happy.png';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id="about-me__nav">
      <h1>About Me</h1>
      <div className="about-me__box">

        <div className="about-me__box-text">
          Originally in early childhood education, I left the workforce to care
          for my children and parents. Curious by nature, I used any spare time
          to continue learning. I always want to know how things work, tinker
          with the parts, and fix what's broken. Though I had no formal eduation
          in coding or web development, it always interested me. I loved how the
          internet could connect people. In the days of dial up, I designed my
          first website to keep in touch with far flung family and friends...
        </div>{' '}
        <div className="about-me__box-img">
          <img alt="family" src={family} className="about-me__pic-family" />
        </div>
      </div>

      <div className="about-me__box">
      <div className="about-me__box-img">
          <img alt="coding" src={coding} className="about-me__pic-code" />
        </div>
        <div className="about-me__box-text">
          When my plans to return to work were derailed by the pandemic, I
          returned to coding. I had forgotten how much I enjoyed the problem
          solving aspect! I refreshed my old skills and taught myself
          JavaScript. Excited by the possibility of a new career, I applied to
          and was accepted into the Grace Hopper Program at Fullstack Academy.
          An immersive 17 week course focused on the NERD stack, I ate, slept,
          and dreamt code - and I LOVED IT. Becoming a full stack software
          engineer is my pandemic positive!
        </div>

      </div>
      <div className="about-me__box">

        <div className="about-me__box-text">
          My bootcamp experience has given me a sturdy foundation and the tools
          to learn anything. I am excited for this new chapter in my life and I
          am looking forward to joining a team and continuing to learn. I am a
          positive and supportive teammate, a strong communicator, and quick to
          laugh. With a varied background and lots of life experience, I am
          flexible, can view problems from different angles, and keep things in
          perspective. PLUS, my early childhood education background means I
          know what to do when everyone is crying!
        </div>
        <div className="about-me__box-img">
          <img alt="jumping" src={business} className="about-me__pic-hooray" />
        </div>
      </div>
    </section>
  );
}
