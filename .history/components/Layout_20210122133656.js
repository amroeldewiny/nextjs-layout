import Navbar from './Navbar';
import "../styles/sass/style.scss";

const Layout = props => (
    <>
        <Navbar />
        <main>
            {props.children}
        </main>
    </>
);

export default Layout;