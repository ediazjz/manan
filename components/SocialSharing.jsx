import PropTypes from 'prop-types'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const SocialSharing = ({ showTitle }) => {
  return (
    <div>
      {showTitle &&
        <h2 className="h4 mb-5 xl:mb-6 text-center">
          Share it now!
        </h2>
      }

      <div className="flex space-x-4">
        <FacebookShareButton
          className="btn flex-1 border-[#3B5998] hover:border-[#355089] bg-[#3B5998] hover:bg-[#355089] text-white"
          quote="Visit manan and start meditating, its free!"
          url="https://manan.vercel.app"
          hashtag="#mananApp"
          resetButtonStyle={false}
        >
          <FontAwesomeIcon icon={faFacebookF} className="btn-faIcon" />
        </FacebookShareButton>

        <WhatsappShareButton
          className="btn flex-1 border-[#12bc7e] hover:border-[#10a971] bg-[#12bc7e] hover:bg-[#10a971] text-white"
          title="Check this meditation app:"
          url="https://manan.vercel.app"
          resetButtonStyle={false}
        >
          <FontAwesomeIcon icon={faWhatsapp} className="btn-faIcon" />
        </WhatsappShareButton>
        

        <TwitterShareButton
          className="btn flex-1 border-[#1da1f2] hover:border-[#1a91da] bg-[#1da1f2] hover:bg-[#1a91da] text-white"
          title="Visit manan and start meditating, its free!"
          url="https://manan.vercel.app"
          hashtags={["100DaysOfMeditation", "mananApp"]}
          resetButtonStyle={false}
        >
          <FontAwesomeIcon icon={faTwitter} className="btn-faIcon" />
        </TwitterShareButton>
      </div>
    </div>
  )
}

SocialSharing.propTypes = {
  showTitle: PropTypes.bool
}
SocialSharing.defaultProps = {
  showTitle: true
}
