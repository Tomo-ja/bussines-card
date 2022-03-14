import emailLogo from '../images/icon_email.svg'
import linkedInLogo from '../images/icon_linkedin.svg'

function Profile (){
	return(
		<section className="profile">
			<h1>Tomo Hashiguchi</h1>
			<h3>Junior Developer</h3>
			<p className="web-link">tomoano.website</p>
			<div>
				<p className="btn"><img src={emailLogo}/>Email</p>
				<p className="btn"><img src={linkedInLogo}/>LinkedIn</p>
			</div>
		</section>
	)
}

export default Profile