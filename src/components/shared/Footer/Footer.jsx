import bg from "../../../assets/images/footerr.png";
import logo from "../../../assets/logo/logo.png";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-no-repeat relative bg-cover object-cover bg-center  py-16 lg:px-[8%] md:px-[6%] px-[3%]"
    >
      <div className="absolute w-full h-full inset-0 bg-black opacity-90"></div>
      <footer className="footer  sm:footer-horizontal">
        <aside className="relative z-50">
          <img src={logo} alt="" />
          <p className="text-white mt-7">
          1729 N 2nd St Studio 
            <br />
            204A,Minneapolis, MN 55411
          </p>
        </aside>
        <nav className="relative z-50">
          <h6 className="text-xl font-bold text-white">Information</h6>
          <a className="link link-hover text-white">Home</a>
          <a className="link link-hover text-white">Service</a>
          <a className="link link-hover text-white">Portfolio</a>
          <a className="link link-hover text-white">Blogs</a>
        </nav>
        <nav className="relative z-50">
          <h6 className="text-xl font-bold text-white">Quick Links</h6>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav className="relative z-50">
          <h6 className="text-xl font-bold text-white">Legal</h6>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </nav>
      </footer>
 

     
        <div className="text-center border-t border-[#FFFFFF80] mt-16 pt-10 text-white relative z-50 "> © {new Date().getFullYear()} - All right reserved by Rakibul</div>
     
    </div>
  );
};
