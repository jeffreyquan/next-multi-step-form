import type { NextPage } from "next";
import RegistrationForm from "../components/RegistrationForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RegistrationForm />
      </main>
    </div>
  );
};

export default Home;
