import Image from 'next/image'
import Wings from '../public/weyland-yutani-wings.svg'
import styles from '../styles/footer.module.scss'


const Footer = () => {
    return ( 
      <footer className={styles.footer}>
        <div className="logo">
          <Image src={Wings} alt='Weyland Yutani' width={ 320 } height={ 80 } layout="responsive"/>
        <p>Weyland-Yutani Corporation © 2122</p>
        </div>
      </footer>
     );
}
 
export default Footer;