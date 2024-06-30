export const metadata = {
  title: 'Portfolio',
  description: 'Made with love',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      </body>
    </html>
  )
}
