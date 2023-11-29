import { Header, NavProps } from "@/components/Header";

export default function Home({showPage, showBalance}: NavProps) {
  return <Header showPage={showPage} showBalance={showBalance} />;
}
