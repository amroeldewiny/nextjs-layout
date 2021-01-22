import Link from 'next/link'
import Layout from '../components/layout'

function About() {
    return (
        <Layout>
            <h1>Welcom To About page</h1>
            <Link href="/"><a>Back to Home</a></Link>

        </Layout>
    )

}

export default About
