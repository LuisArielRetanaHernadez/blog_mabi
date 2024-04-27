"use client"

import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import "./globals.css";
import styles from "./homepage.module.css";
// components
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home({ searchParams }: any) {

  const { status } = useSession()

  const router = useRouter()
  
  const page = parseInt(searchParams?.page || "1");

  if (status === "unauthenticated") {
    router.push("/login")
  }

  return (
    <div className="container">
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
