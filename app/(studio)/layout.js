export const metadata = {
  title: 'Paramour Studio',
  description: 'Paramour Studio',
}

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>{children}</body>
    </html>
  )
}

