/* eslint-disable @next/next/no-img-element */
"use client";

import io from "socket.io-client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState<any[]>([]);

  let socket;
  const socketInitializer = async () => {
    await fetch("/api/socket");

    socket = io("https://soal-onest.vercel.app", {
      path: "/api/socket_io",
    });

    socket.on("connect", () => {
      console.log("Socket connected from page");
    });

    socket.on("response", (payload: any) => {
      console.log("ccc payload in response: ", payload);
    });
  };

  useEffect(() => {
    async function getPrograms(name: string) {
      try {
        const res = await fetch("/api/search", {
          method: "POST",
          body: JSON.stringify({ name }),
        });
        const data = await res.json();
        setLoading(false);
        let programDetails: any[] = [];
        data?.responses?.forEach((item: any) => {
          const { providers } = item.message?.catalog;
          if (providers?.length) {
            providers.forEach((prov: any) => {
              prov.items?.forEach((provItem: any) => {
                if (provItem.descriptor?.name) {
                  programDetails.push(provItem.descriptor);
                }
              });
            });
          }
        });
        setPrograms(programDetails);
      } catch (error) {
        console.log(error);
      }
    }
    socketInitializer();
    getPrograms("Javascript");
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <p>Loading...</p>
      ) : programs.length ? (
        <div className={styles.programConatiner}>
          {programs.map((program, index) => (
            <div key={`${program.name} - ${index}`} className={styles.program}>
              <img
                src={program.images?.[0]?.url}
                alt={program.name}
                className={styles.courseImage}
              />
              <p>{program.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No Data</p>
      )}
    </main>
  );
}
