import FooterLogo from "../Navbar/components/FooterLogo";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 md:py-30 ">
      <div className="col-span-1  flex  flex-col  items-center  ">
        <FooterLogo />
      </div>
      <div className="col-span-1 flex flex-col  items-center  lg:items-start">
        <h3 className="text-lg font-bold">About Us</h3>
        <p>Team (Coming soon !!)</p>
      </div>
      <div className="col-span-1 flex flex-col items-center  lg:items-start">
        <h3 className="text-lg font-bold">Contact Us</h3>
        <p>Email: mebusiness2004@gmail.com</p>
        <p>Phone: +961 76 646 946</p>
      </div>
      <div className="col-span-1 flex flex-col  items-center lg:items-start">
        <h3 className="text-lg font-bold">Community</h3>
        <a
          target="_blank"
          href="https://www.instagram.com/u_spot_1m?igsh=ZG55YmFpc3M5dXZ1"
        >
          <p>Instagram </p>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/share/15RuPyK3h2/?mibextid=qi2Omg"
        >
          <p>Facebook</p>
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@u_spot_1m?_t=ZS-8wFBIw0tIFV&_r=1"
        >
          <p>TikTok</p>
        </a>
      </div>
    </div>
  );
}
