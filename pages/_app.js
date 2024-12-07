import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Layout from "@/components/Layout";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
