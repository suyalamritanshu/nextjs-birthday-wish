import React from 'react'
import Head from 'next/head'
import styles from '../styles/Name.module.css'
import { useRouter } from 'next/router'
import ConfettiGenerator from "confetti-js"

const Wish = () => {

    const router = useRouter()
    const { name } = router.query

    React.useEffect(() => {
        const confettiSettings = {
            target: 'canvas',
            start_from_edge: true
        };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => confetti.clear();
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Happy Birthday {name}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <canvas className={styles.canvas} id="canvas">
            </canvas>

            <main className={styles.animate}>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        Happy Birthday <span className={styles.span}>{name}!</span>
                    </h1>
                </div>
                <div>
                    <button onClick={() => router.push('/')} className={styles.button}>&larr; Create a wish</button>
                    <p className={styles.desc}>
                        Crafted by <a className={styles.span} href="https://github.com/gouravkhunger" target="_blank" rel="noreferrer">Gourav</a>.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Wish
