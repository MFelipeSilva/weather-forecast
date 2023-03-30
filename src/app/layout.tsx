import "../styles/global.css";
import favicon from "@/assets/favicon.svg";

export const metadata = {
  title: "Weather Forecast",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={favicon.src} />
      <body>{children}</body>
    </html>
  );
}
