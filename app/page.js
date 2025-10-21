import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/layouts/Sidebar";
import './globals.css';
import { Button } from "@/components/ui/button";
import Main from "@/components/sections/Main";

export default function Home() {
  return (
    <div className="lg:flex flex-col">
     <Sidebar />
     <Main />
    </div>
  );
}
