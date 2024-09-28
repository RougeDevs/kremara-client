import Head from "next/head";
import { Box, Text, Button, VStack, Image, Stack } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import ParticleBackground from "@/components/ParticleBackground";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kremara - Coming Soon</title>
        <meta name="description" content="Our website is launching soon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComingSoon/>
    </>
  );
}
