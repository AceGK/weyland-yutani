
import Head from 'next/head';
import Nav from "./nav";



const Layout = ({ children }) => {
    return ( 
        <div className="content">
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

        </div>
     );
}
 
export default Layout;