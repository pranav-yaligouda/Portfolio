import Navbar from "../components/Navbar";
import "../styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
