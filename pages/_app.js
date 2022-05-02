import '../styles/globals.css'
import Layout from "../components/layout"

function MyApp({ Component, pageProps }) {
  return (
    <div className="appp">
      <Layout></Layout>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
