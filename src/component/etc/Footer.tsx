import LogoFooter from "../logoFooter/LogoFooter";
import fbLogo from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/fb-logo.svg";
import twLogo from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/tw-logo.svg";
import lineLogo from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/line-logo.svg";

const Footer = () => {
  return (
    <div className="w-full px-[11.8%] pt-[40px] bg-white">
      <div className="min-h-[380px] border-t-[1px] border-line pt-[40px] flex justify-between items-start">
        <div className="text-[14px]">
          <div className="text-textThree mb-[20px]">About</div>
          <div className="flex flex-col gap-[15px] items-start">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Disclaimer</span>
            <span>Accpetable Use</span>
          </div>
        </div>

        <div className="text-[14px]">
          <div className="text-textThree mb-[20px]">FAQ</div>
          <div className="flex flex-col gap-[15px] items-start">
            <span>Complaints Policy</span>
            <span>Cookie Notice</span>
            <span>DMCA</span>
            <span>USC 2257</span>
          </div>
        </div>

        <div className="text-[14px]">
          <div className="text-textThree mb-[20px]">Contact</div>
          <div className="flex flex-col gap-[15px] items-start">
            <span>Help</span>
            <span>Referral</span>
            <span>Standard Agreement</span>
          </div>
          <div className="mt-[20px]">
            <span className="text-[14px] text-textOne font-bold">
              Share Chello
            </span>
            <div className="flex gap-[10px] items-center mt-[20px]">
              <LogoFooter logoImg={fbLogo} />
              <LogoFooter logoImg={twLogo} />
              <LogoFooter logoImg={lineLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
