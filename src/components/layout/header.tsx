import Navigation from './navigation'

export default async function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="min-h-screen flex flex-col">
      <Navigation />
      {children}
    </header>
  )
}
