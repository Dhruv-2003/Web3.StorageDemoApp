import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { StoreContent } from "../components/StoreContent";
import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [ipfsUrl, setIpfsUrl] = useState("");

  const upload = async () => {
    try {
      const cid = await StoreContent(files);
      const URL = `https://ipfs.io/ipfs/${cid}`;
      console.log(URL);
      console.log("File uploaded to IPFS");
      setIpfsUrl(URL);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Store Files on IPFS</title>
        <meta
          name="description"
          content="Now stores all your files over decentralized data storage"
        />
        <link rel="icon" href="/fileicon.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Storage3</a>
        </h1>

        <p className={styles.description}>
          Get started by uploading the document you want to store
        </p>

        <div className={styles.form}>
          <div className={styles.firstRow}>
            <label className={styles.inputLabel}>
              <input
                className={styles.inputBox}
                type="file"
                onChange={(e) => setFiles(e.target.files[0])}
              ></input>
            </label>
          </div>
          <div className={styles.buttonRow}>
            <button onClick={upload} className={styles.button}>
              Lets Go 🚀
            </button>
          </div>
          <div className={styles.secondrow}>
            {ipfsUrl ? (
              <a className={styles.returnText} href={ipfsUrl}>
                Ipfs Link{" "}
              </a>
            ) : (
              <a className={styles.returnText}>File is yet to upload</a>
            )}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/0xdhruva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by @0xDhruva
        </a>
      </footer>
    </div>
  );
}
