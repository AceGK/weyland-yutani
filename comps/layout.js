
import Head from 'next/head';
import Nav from "./nav";



const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Head>
                <title>Weyland Yutani Corp</title>
                <meta name="description" content="Weyland Yutani Corporation" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <Nav/>
            { children }

        </div>
     );
}
 
export default Layout;