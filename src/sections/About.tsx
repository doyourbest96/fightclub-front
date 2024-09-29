const About = () => {
  return (
    <div className="flex flex-col gap-2 sm:px-8 md:px-12 lg:px-4">
      <p className="text-xl font-black italic">ABOUT FIGHTCLUB</p>
      <p>
        {`Fight Club envisions a world where martial arts transcend
              barriers, empowers individuals and unites communities. To achieve
              this, we're building a decentralized platform, powered by our
              native token FICCO, that unlocks unprecedented opportunities for
              all stakeholders in combat sports—from aspiring amateurs and
              passionate fans to seasoned professionals and dedicated clubs.
              Through FICCO, fighters can take control of their careers and
              engage directly with fans, while fans can support their favorite
              athletes and invest in their success, fostering a more equitable
              and rewarding future for the world of combat sports.`}
      </p>
      <p className="text-orange-900">Read the whole story</p>
    </div>
  );
};

export default About;
