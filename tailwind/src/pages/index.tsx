import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import VideoCard from '../components/videocard'
import { Appbar } from "@/components/Appbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
  <div>
    <Appbar/>
<VideoCard />
    </div>
  );
}
 