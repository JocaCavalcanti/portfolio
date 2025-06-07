import "@/styles/globals.css"
import HeaderComponent from "@/components/header/headerComponent"


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body  className="bg-[#dfdff0] w-dvw overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full px-4">
          <HeaderComponent />
          {children}
        </div>
      </body>
    </html>
  )
}

