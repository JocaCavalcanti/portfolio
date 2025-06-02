import "@/styles/globals.css"
import HeaderComponent from "@/components/header/headerComponent"


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body  className="bg-stone-900 min-h-dvh box-border name">
        <div className="max-w-7xl mx-auto w-full px-4">
          <HeaderComponent />
          {children}
        </div>
      </body>
    </html>
  )
}

