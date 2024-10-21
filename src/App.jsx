const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

const Section = () => {
  return (
    <section>
      <h2>Welcome to React!</h2>
      <button>click</button>
      <button>Hello</button>
      <button>submit</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione dicta repellendus veritatis dolore illo sit temporibus maxime
        praesentium rem atque officia eum quae inventore officiis qui provident, nostrum reiciendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione dicta repellendus veritatis dolore illo sit temporibus maxime
        praesentium rem atque officia eum quae inventore officiis qui provident, nostrum reiciendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, et? Perspiciatis odit a modi nisi distinctio repellat, mollitia earum et minus
        magni sit placeat enim ab nulla in quod voluptas. Repellat quo dolore odio iusto aspernatur laboriosam expedita totam delectus optio
        laudantium beatae cum quas esse ratione, dignissimos eos, qui blanditiis! Nam, ratione dolores eaque ab nulla labore ipsum esse!
      </p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <h2>Holla</h2>
      <span> &copy; All right reserved! 2024</span>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
