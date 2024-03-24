import { SiAsciidoctor } from "react-icons/si";

const Sidebar = ({ tab, setTab }) => {


    return (
        <div className=" sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ "width": "280px" }}>
            <div className="mx-auto">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <SiAsciidoctor className="fs-2" />
                </a>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">

                {/* 1 */}
                <li className="nav-item" onClick={()=> setTab("Home")}>
                    <a href="#" className={`nav-link text-white ${tab === "Home" && "active"}`} aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Home
                    </a>
                </li>

                {/* 2 */}
                <li className="nav-item" onClick={() => setTab("Creat post")}>
                    <a href="#" className={`nav-link text-white ${tab === "Creat post" && "active"}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Creat Post
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;