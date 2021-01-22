import Link from 'next/link'
import "../styles/sass/style.scss";
import Layout from '../components/Layout'

function Contact() {
    return (
        <Layout>
            <h1>Welcom To Contact page</h1>
            <Link href="/"><a>Back to Home</a></Link>

        </Layout>
    )

}

export default Contact
