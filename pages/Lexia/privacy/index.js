import Head from 'next/head'
import Link from 'next/link'

export default function LexiaPrivacy() {
  return (
    <>
      <Head>
        <title>Lexia — Privacy Policy | Mason Choi</title>
        <meta name="description" content="Privacy policy for the Lexia Chrome extension." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="ruling" />
      <div className="grain" />

      <main className="doc">
        <p className="doc-kick">
          <Link href="/">Mason Choi</Link> · Privacy
        </p>
        <h1>
          <a href="https://github.com/Tennis-Ball/lexia" target="_blank" rel="noreferrer">Lexia</a>&rsquo;s Privacy Policy
        </h1>

        <section>
          <h2>Personal data</h2>
          <p>Lexia has never and will never collect any personal data. Period.</p>
        </section>
        <section>
          <h2>How Lexia works</h2>
          <p>
            Lexia looks at the underlying HTML of the page you are viewing and injects bold tags around the first
            crucial letters of each word. By nature it reads what you read in Chrome, for the sole purpose of
            identifying key syllables to emphasize.
          </p>
        </section>
        <section>
          <h2>Updates</h2>
          <p>
            While unlikely, this policy may change in the future — it is worth checking back from time to time.
          </p>
          <p className="doc-meta">Last updated: 10 March 2023</p>
        </section>
      </main>

      <style jsx>{`
        main.doc {
          max-width: 42rem;
          margin: 0 auto;
          padding: clamp(3rem, 10vh, 6rem) 1.5rem 5rem;
          height: 100%;
          overflow-y: auto;
        }
        .doc-kick { font-size: .6rem; letter-spacing: .32em; text-transform: uppercase; color: var(--red); margin: 0 0 1.4rem; }
        .doc-kick a { text-decoration: none; }
        h1 { font-family: 'Cormorant Garamond', serif; font-weight: 300; font-size: clamp(2.2rem, 7vw, 3.4rem);
          line-height: 1.02; margin: 0 0 2rem; }
        h1 a { text-decoration: none; border-bottom: 1px solid var(--rule); }
        section { padding: 1.3rem 0; border-top: 1px solid var(--rule); }
        section:last-of-type { border-bottom: 1px solid var(--rule); }
        h2 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 1.3rem; margin: 0 0 .5rem; }
        p { margin: 0 0 .6rem; font-size: .9rem; line-height: 1.7; color: var(--soft); max-width: 40ch; }
        .doc-meta { font-size: .7rem; color: var(--faint); }
      `}</style>
      <style jsx global>{`
        body { overflow: auto; }
      `}</style>
    </>
  )
}
