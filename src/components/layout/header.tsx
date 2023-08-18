import Navigation from './navigation'

export default async function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex min-h-screen flex-col">
      <Navigation />
      {children}
    </header>
  )
}
