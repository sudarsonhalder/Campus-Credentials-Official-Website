import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Campus Credentials - Empowering Student Employability</title>
                <meta 
                    name="description" 
                    content="Campus Credentials empowers students with the essential employability, soft skills, and technical training they need to excel in job interviews, secure placements, and advance their careers. Access comprehensive aptitude courses, interview preparation, corporate skill-building modules, and test series designed for success." 
                />
                <meta 
                    name="keywords" 
                    content="Campus Credentials, jobs, interviews, employment, placements, career growth, placement preparation, aptitude courses, technical courses, soft skills, corporate training, negotiation skills, decision making, time management, people management, learning platform, test series" 
                />
                <meta 
                    name="author" 
                    content="Campus Credentials" 
                />
                <meta 
                    name="robots" 
                    content="index, follow" 
                />
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1.0" 
                />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Campus Credentials - Empowering Employability, Job-Ready Skills & Placements" />
                <meta 
                    property="og:description" 
                    content="Campus Credentials helps you become employable by providing in-demand corporate skills, aptitude training, and technical courses. Our expert-led programs are tailored to improve interview performance, placement opportunities, and long-term career success." 
                />
                <meta property="og:image" content="/images/og-image.png" />
                <meta property="og:url" content="https://www.campuscredentials.com" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Campus Credentials" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Campus Credentials - Empowering Employability, Job-Ready Skills & Placements" />
                <meta 
                    name="twitter:description" 
                    content="Gain the critical soft skills and technical know-how that top employers demand. Campus Credentials guides you through aptitude tests, interview prep, and targeted courses to help you excel in the competitive job market." 
                />
                <meta name="twitter:image" content="/images/og-image.png" />
                <meta name="twitter:site" content="@CampusCredentials" />
                <meta name="twitter:creator" content="@CampusCredentials" />

                {/* Canonical Link */}
                <link rel="canonical" href="https://www.campuscredentials.com" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data / JSON-LD for Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Campus Credentials",
                            "url": "https://www.campuscredentials.com",
                            "logo": "https://www.campuscredentials.com/Campus.png",
                            "sameAs": [
                                "https://www.facebook.com/CampusCredentials",
                                "https://www.linkedin.com/company/campus-credentials",
                                "https://www.twitter.com/CampusCredentials"
                            ],
                            "description": "Campus Credentials provides comprehensive employability, soft skills, and technical training to students, enabling them to excel in job interviews, secure placements, and thrive in their careers.",
                            "founder": "Campus Credentials Team",
                            "contactPoint": [
                                {
                                    "@type": "ContactPoint",
                                    "telephone": "+1-XXX-XXX-XXXX",
                                    "contactType": "customer service",
                                    "areaServed": "IN"
                                }
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Mumbai",
                                "addressCountry": "IN"
                            }
                        })
                    }}
                />

                {/* Additional Meta Tags for SEO */}
                <meta 
                    name="language" 
                    content="English" 
                />
                <meta 
                    name="distribution" 
                    content="global" 
                />
                <meta 
                    httpEquiv="content-language" 
                    content="en" 
                />

            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
