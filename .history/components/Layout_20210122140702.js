import Navbar from './Navbar';
import "../styles/sass/style.scss";

const Layout = props => (
    <>
        <Navbar />
        <main className='bg-white h-screen p-3'>
            {props.children}
        </main>
    </>
);

export default Layout;