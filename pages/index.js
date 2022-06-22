import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Logo from '../public/wy-logo.svg'
import MousePosition from '../comps/mousePosition'
import ScrollPosition from '../comps/scrollPosition'
import WindowDimensions from '../comps/windowDimensions'
import DocumentHeight from '../comps/documentHeight'

export default function Home() {

  return (
    <main className="scanlines">
      
      <section className={styles.hero}>
        <div>
          <h1 className={styles.title}>Weyland-Yutani Corp</h1>
          <div className={styles.logo}>
            <Image src={Logo} alt='Weyland Yutani' layout="responsive" />
          </div>
          <h1 className={styles.subTitle}>building better worlds</h1>
        </div>
        <ul className={styles.locations}>
          <li>Tokyo</li>
          <li>London</li>
          <li>San Francisco</li>
          <li>Sea of Tranquility</li>
          <li>Thedus</li>
        </ul>
      </section>

      <section id="about" className={styles.about}>
        <div className="doc-data">
          <WindowDimensions />
        </div>
        <div className={styles.row}>
          <div>
            <h1>about</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta.</p>
          </div>
          <ul className={styles.buttons}>
            <li><a href="#engineering">Engineering</a></li>
            <li><a href="#exploration">Exploration</a></li>
            <li><a href="#terraforming">Terraforming</a></li>
          </ul>
        </div>
        <div className="pos-data">
          <div>
            <ScrollPosition /> : <DocumentHeight />
          </div>
          <MousePosition />
        </div>
      </section>

      <section id="engineering" className={styles.engineering}>
        <div className="doc-data">
          <WindowDimensions />
        </div>
        <div className={styles.row}>
          <div>
            <h1>engineering</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta.</p>
          </div>
          {/* <div><img src="https://unsplash.it/400" alt="" /></div> */}
        </div>
        <div className="pos-data">
          <div>
            <ScrollPosition /> : <DocumentHeight />
          </div>
          <MousePosition />
        </div>
      </section>

      <section id="exploration" className={styles.exploration}>
        <div className="doc-data">
          <WindowDimensions />
        </div>
        <div className={styles.row}>
          <div>
            <h1>exploration</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta.</p>
          </div>
          {/* <div><img src="https://unsplash.it/400" alt="" /></div> */}
        </div>
        <div className="pos-data">
          <div>
            <ScrollPosition /> : <DocumentHeight />
          </div>
          <MousePosition />
        </div>
      </section>

      <section id="terraforming" className={styles.terraforming}>
        <div className="doc-data">
          <WindowDimensions />
        </div>
        <div className={styles.row}>
          <div>
            <h1>terraforming</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta.</p>
          </div>
          {/* <div><img src="https://unsplash.it/400" alt="" /></div> */}
        </div>
        <div className="pos-data">
          <div>
            <ScrollPosition /> : <DocumentHeight />
          </div>
          <MousePosition />
        </div>
      </section>

    </main>
  )
}
