import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom"
import logo from '../../image/profile_icon.svg'
const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.itemLink}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="Profile" width='20px'><g  fill-rule="evenodd"><g  transform="translate(-180 -2159)" class="color000000 svgShape"><g transform="translate(56 160)"  class="color000000 svgShape"><path d="M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218" class="color000000 svgShape"></path></g></g></g></svg>
                <span>Profile</span>
                </NavLink>
            </div>
            <div className={s.itemLink}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="paper" width="20px" height="20px">
                    <g data-name="Layer 2">
                        <path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z" data-name="paper-plane">
                        </path>
                    </g>
                </svg><span>Messages</span></NavLink>
            </div>
            <div className={s.itemLink}>
                <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="news" width="20px" height="20px">
                    <path fill-rule="evenodd" d="M14 5h-4v2h4V5zm0 3h-4v1h4V8zM9 5H6v4h3V5zm0 6h5v-1H9v1zm3 2h2v-1h-2v1zm2 1H6v1h8v-1zm-3-2H6v1h5v-1zm-3-2H6v1h2v-1zm9-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 16H4V3h12v14z" clip-rule="evenodd">
                    </path>
                </svg>
                <span>News</span></NavLink>
            </div>
            <div className={s.itemLink}>
                <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 36 36" id="headphones" width="20px" height="20px">
                    <path d="M25.5,34A1.5,1.5,0,0,1,24,32.5v-13A1.5,1.5,0,0,1,25.5,18,8.271,8.271,0,0,1,34,26,8.271,8.271,0,0,1,25.5,34ZM27,21.189v9.622A5.106,5.106,0,0,0,31,26,5.106,5.106,0,0,0,27,21.189ZM10.5,34A8.271,8.271,0,0,1,2,26a8.271,8.271,0,0,1,8.5-8A1.5,1.5,0,0,1,12,19.5v13A1.5,1.5,0,0,1,10.5,34ZM9,21.189A5.106,5.106,0,0,0,5,26a5.106,5.106,0,0,0,4,4.811Zm22.65,3.2a1.5,1.5,0,0,1-1.412-2.009A13,13,0,1,0,5,18a12.893,12.893,0,0,0,.762,4.382A1.5,1.5,0,1,1,2.938,23.4a16,16,0,1,1,30.124,0A1.5,1.5,0,0,1,31.65,24.391Z" class="color000000 svgShape">
                    </path>
                </svg>
                <span>Music</span>
                </NavLink>
            </div>
            <div className={s.itemLink}>
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.015 12.97l-2.567-0.569c-0.2-0.64-0.462-1.252-0.762-1.841l1.389-2.313c0.518-0.829 0.78-2.047 0-2.829l-1.415-1.414c-0.78-0.781-2.098-0.64-2.894-0.088l-2.251 1.434c-0.584-0.303-1.195-0.563-1.829-0.768l-0.576-2.598c-0.172-0.953-1.005-1.984-2.11-1.984h-2c-1.104 0-1.781 1.047-2 2l-0.642 2.567c-0.678 0.216-1.328 0.492-1.948 0.819l-2.308-1.47c-0.795-0.552-2.114-0.692-2.894 0.088l-1.415 1.414c-0.781 0.782-0.519 2 0 2.828l1.461 2.435c-0.274 0.552-0.517 1.123-0.705 1.72l-2.566 0.569c-0.953 0.171-1.984 1.005-1.984 2.109v2c0 1.105 1.047 1.782 2 2l2.598 0.649c0.179 0.551 0.404 1.080 0.658 1.593l-1.462 2.438c-0.518 0.828-0.78 2.047 0 2.828l1.415 1.414c0.78 0.782 2.098 0.64 2.894 0.089l2.313-1.474c0.623 0.329 1.277 0.608 1.96 0.823l0.64 2.559c0.219 0.953 0.896 2 2 2h2c1.105 0 1.938-1.032 2.11-1.985l0.577-2.604c0.628-0.203 1.23-0.459 1.808-0.758l2.256 1.438c0.796 0.552 2.114 0.692 2.895-0.089l1.415-1.414c0.78-0.782 0.518-2 0-2.828l-1.39-2.317c0.279-0.549 0.521-1.12 0.716-1.714l2.599-0.649c0.953-0.219 2-0.895 2-2v-2c0-1.104-1.031-1.938-1.985-2.11zM30.001 16.939c-0.085 0.061-0.245 0.145-0.448 0.192l-3.708 0.926-0.344 1.051c-0.155 0.474-0.356 0.954-0.597 1.428l-0.502 0.986 1.959 3.267c0.125 0.2 0.183 0.379 0.201 0.485l-1.316 1.314c-0.127-0.040-0.271-0.092-0.341-0.14l-3.292-2.099-1.023 0.529c-0.493 0.256-0.999 0.468-1.503 0.631l-1.090 0.352-0.824 3.723c-0.038 0.199-0.145 0.36-0.218 0.417h-1.8c-0.061-0.085-0.145-0.245-0.191-0.448l-0.921-3.681-1.066-0.338c-0.549-0.173-1.097-0.404-1.63-0.684l-1.028-0.543-3.293 2.099c-0.135 0.091-0.279 0.143-0.409 0.143l-1.311-1.276c0.018-0.104 0.072-0.274 0.181-0.449l2.045-3.408-0.487-0.98c-0.227-0.462-0.407-0.895-0.547-1.325l-0.343-1.052-3.671-0.918c-0.231-0.052-0.398-0.139-0.485-0.2v-1.86c0.001 0.001 0.002 0.001 0.005 0.001 0.034 0 0.198-0.117 0.335-0.142l3.772-0.835 0.346-1.103c0.141-0.449 0.333-0.917 0.588-1.43l0.487-0.98-2.024-3.373c-0.125-0.201-0.184-0.38-0.201-0.485l1.315-1.314c0.128 0.041 0.271 0.093 0.34 0.14l3.354 2.138 1.027-0.542c0.527-0.278 1.073-0.507 1.622-0.682l1.063-0.338 0.912-3.649c0.053-0.231 0.138-0.398 0.2-0.485h1.859c-0.014 0.020 0.115 0.195 0.142 0.339l0.84 3.794 1.089 0.352c0.511 0.165 1.023 0.38 1.523 0.639l1.023 0.532 3.224-2.053c0.135-0.092 0.279-0.143 0.409-0.143l1.313 1.276c-0.017 0.104-0.072 0.276-0.181 0.45l-1.98 3.296 0.505 0.988c0.273 0.533 0.48 1.033 0.635 1.529l0.346 1.104 3.697 0.82c0.224 0.041 0.398 0.171 0.434 0.241zM16.013 9.99c-3.321 0-6.023 2.697-6.023 6.010s2.702 6.010 6.023 6.010 6.023-2.697 6.023-6.009c0-3.313-2.702-6.010-6.023-6.010zM16 20c-2.205 0-4-1.794-4-4s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.794 4-4 4z"></path>
</svg>
                <span>Settings</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;