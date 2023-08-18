import SocialIcons from './social-icons'

export default function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-between border-t p-4 text-gray-600 md:p-8">
      <p>Circle Three Designs © {new Date().getFullYear()}</p>
      <SocialIcons />
    </footer>
  )
}
