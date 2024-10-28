import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Campus Credentials - Empower Your Learning, Ace Your Placements</title>
                <meta 
                    name="description" 
                    content="Campus Credentials is your go-to platform for placement preparation, offering comprehensive aptitude and technical courses, resources, and test series tailored for students aiming for career success." 
                />
                <meta 
                    name="keywords" 
                    content="Campus Credentials, placement preparation, aptitude courses, technical courses, Java, Python, SQL, learning platform, test series, career growth, student resources" 
                />
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1" 
                />
                <meta 
                    property="og:title" 
                    content="Campus Credentials - Empower Your Learning, Ace Your Placements" 
                />
                <meta 
                    property="og:description" 
                    content="Join Campus Credentials to access expert-led courses, test series, and learning resources designed to enhance your skills and help you ace your placements." 
                />
                <meta 
                    property="og:image" 
                    content="/images/og-image.png" 
                />
                <meta 
                    property="og:url" 
                    content="https://www.campuscredentials.com" 
                />
                <link rel="canonical" href="https://www.campuscredentials.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
