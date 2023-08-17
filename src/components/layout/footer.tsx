import SocialIcons from './social-icons'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-24 border-t p-4 md:p-8 text-gray-600">
      <div className="">
        <p>Circle Three Designs © {new Date().getFullYear()}</p>
      </div>
      <SocialIcons />
    </footer>
  )
}
