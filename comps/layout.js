
import Head from 'next/head';
import Nav from "./nav";
import Footer from "./footer"


const Layout = ({ children }) => {
    return ( 
        <div className="content scanlines">
            <Head>
                <title>Weyland Yutani Corp</title>
                <meta name="description" content="Weyland Yutani Corporation" />
                <link rel="icon" href="/favicon.ico" />
                <link 
                    rel="preload"
                    href="/fonts/Microgramma-bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link 
                    rel="preload"
                    href="/fonts/Microgramma.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link 
                    rel="preload"
                    href="/fonts/Thedus-Condensed.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
            </Head>
            <Nav/>
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;