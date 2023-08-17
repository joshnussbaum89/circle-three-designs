import { EmailIcon, FacebookIcon, InstagramIcon } from '../icons'

export default function SocialIcons() {
  return (
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
  )
}
