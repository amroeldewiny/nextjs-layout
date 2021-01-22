import Navbar from './Navbar';
import "../styles/sass/style.scss";

const Layout = props => (
    <>
        <Navbar />
        <main className='flex items-center flex-wrap bg-blue-400 p-3 '>
            {props.children}
        </main>
    </>
);

export default Layout;