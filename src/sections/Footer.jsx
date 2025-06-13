import { SocialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center md:justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
          {SocialLinks.map((link)=>(
        <div className="social-icon">    
              <a key={link.id} href={link.href} className={link.class} target="_blank">
                 <img src={link.icon} alt={link.name}  />
              </a>
             </div>
          ))}   
        
      </div>

      <p className="text-white-500">© 2025 Shashank Yadav. All rights reserved.</p>
    </footer>
  );
};

export default Footer;