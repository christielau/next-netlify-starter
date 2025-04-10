import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Christie Lau | Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello! I'm Christie, a designer based in London." />
        <p className="description">
           This space is under renovation. To see my portfolio, go to <code>https://christie-lau.webflow.io/</code>
          <a href="https://christie-lau.webflow.io/">Explore Christie's portfolio</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
