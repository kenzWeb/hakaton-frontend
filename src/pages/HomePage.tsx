import {ContactForm} from '../components/ContactForm'
import {Features} from '../components/Features'
import {Hero} from '../components/Hero'
import {Services} from '../components/Servies'

export function HomePage() {
	return (
		<>
			<Hero />
			<Features />
			<Services />
			<ContactForm />
		</>
	)
}
