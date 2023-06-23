import Provider from "./Provider";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Prime",
  description: "Generated by Prime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ThemeProvider enableSystem={true} attribute="class">

    // </ThemeProvider>
    <html lang="en">
      <body className={raleway.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
