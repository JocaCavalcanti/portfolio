import "@/styles/globals.css"
import localFont from 'next/font/local'
 
const zentryText = localFont({
  src: '../assets/fonts/zentry-regular.woff2',
  style: 'normal',
  variable: '--font-zentry',
})

const mainText = localFont({
  src: '../assets/fonts/general.woff2',
  style: 'normal',
  variable: '--font-generall',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mainText.variable} ${zentryText.variable}`}>
      <body>
          {children}
      </body>
    </html>
  )
}

