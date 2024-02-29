import styles from './style'
import { Community, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from './components'
import Legacy from './components/Legacy'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <h2 className="text-white font-bold text-[44px] px-5 ">Our Goal</h2>

        <Stats />
        <Business />
        <Community />
        <CardDeal />
        <Legacy />
        <Testimonials />
        {/* <Clients /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)

export default App
