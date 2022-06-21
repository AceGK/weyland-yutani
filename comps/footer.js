import Image from 'next/image'
import Wings from '../public/weyland-yutani-wings.svg'

const Footer = () => {
    return ( 
      <footer>
        <div className="logo">
        <Image src={Wings} alt='Weyland Yutani' width={ 320 } height={ 80 } />
        <p>Weyland-Yutani © 2122</p>
        </div>
      </footer>
     );
}
 
export default Footer;