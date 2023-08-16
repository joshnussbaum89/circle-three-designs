import EmailIcon from '../icons/email'
import FacebookIcon from '../icons/facebook'
import InstagramIcon from '../icons/instagram'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-24 border-t p-4 md:p-8 text-gray-600">
      <div className="">
        <p>Circle Three Designs © {new Date().getFullYear()}</p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        <a href="mailto:info@CircleThreeDesigns.com">
          <EmailIcon />
        </a>
        <a href="https://www.facebook.com/CircleThreeDesigns/" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/circlethreedesigns/" target="_blank">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  )
}
