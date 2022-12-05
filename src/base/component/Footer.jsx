import {  FaHashtag } from "react-icons/fa"
function Footer(){
    const footerYear=new Date().getFullYear()
    return (
        <div className={`footer absolute bottom-0  py-5 gap-3 text-primary-content text-slate-200 footer-center bg-neutral shadow-2xl`}>
            <div className="footer-title  opacity-100">
                <FaHashtag className="text-5xl"/>
            </div>
                <p className="text-lg">Copyright &copy; {footerYear} All rights reserved</p>
        </div>
    )
}
export default Footer