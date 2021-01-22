import Navbar from './Navbar';
import "../styles/sass/style.scss";

const Layout = props => (
    <>
        <Navbar />
        <main className='bg-white h-screen p-3'>
            <div class="container mx-auto pt-24 md:pt-16 px-6">
                {props.children}
            </div>
        </main>
    </>
);

export default Layout;