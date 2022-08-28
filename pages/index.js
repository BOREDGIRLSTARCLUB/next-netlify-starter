import Head from 'next/head'
import Script from 'next/script'
import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Lonely ApePunks </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
    
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    
<NextScript />
<script
src="https://gateway.ipfscdn.io/ipfs/Qma5FgmS9s3hkQrURfG4XDnh5Dxp9Fx9ZjBYkPFUNdQwfi/signature-drop.html?contract=0x9BC1557c0B4eF54b3070dD1465f4CA4A9B8373aB&chainId=137"
width="600px"
height="600px"
style="max-width:100%;"
frameborder="0"
></script>

    

      <Footer />
    </div>
  )
}
