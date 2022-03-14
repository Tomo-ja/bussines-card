import twitterLogo from '../images/icon_twitter.svg'
import facebookLogo from '../images/icon_facebook.svg'
import instagramLogo from '../images/icon_instagram.svg'
import githubLogo from '../images/icon_github.svg'

function SnsFooter (){
	return(
		<footer className="footer">
			<img className="icon" src={twitterLogo} />
			<img className="icon" src={facebookLogo} />
			<img className="icon" src={instagramLogo} />
			<img className="icon" src={githubLogo} />
		</footer>
	)
}

export default SnsFooter