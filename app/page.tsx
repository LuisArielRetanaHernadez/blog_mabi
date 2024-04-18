import Image from "next/image";
import Link from "next/link";

import style from "./globals.css";

// components
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={style.container}>
      <Featured />
      <CategoryList />
      <div className={style.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
