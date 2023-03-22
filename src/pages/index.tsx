import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nuts Shop</title>
        <meta
          name='description'
          content='Nuts, natural products and much more'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Nuts Shop</h1>
      </main>
    </>
  );
}
