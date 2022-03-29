import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import RegistrationForm from "../components/RegistrationForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const { step } = router.query;
  React.useEffect(() => {
    if (!step) {
      router.push(
        {
          pathname: "/",
          query: {
            step: "1",
          },
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  }, [router, step]);

  function nextStep() {
    router.push(
      {
        pathname: "/",
        query: {
          step: `${parseInt(step as string) + 1}`,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  function prevStep() {
    router.push(
      {
        pathname: "/",
        query: {
          step: `${parseInt(step as string) - 1}`,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RegistrationForm
          step={step as string}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </main>
    </div>
  );
};

export default Home;
