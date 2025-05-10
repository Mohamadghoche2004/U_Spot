import { BorderBottomButton } from "@/components/StyledButton/borderbottombutton";
import FloatingWorkIllustration from "./components/floatingWorkIllustration";
export default function WorkSection() {
  return (
    <div className="grid grid-cols-12 gap-4 p-10 md:p-20 md:my-50">
      <div className="flex flex-col items-start justify-start col-span-12 lg:col-span-7">
        <h1 className="text-2xl sm:text-4xl md:text-6xl xl:text-8xl xl:text-9xl font-bold mb-4 md:mb-6">
          WE CREATE THE FUTURE
        </h1>
        <div className="flex flex-col  items-start  justify-start gap-0 sm:gap-3  w-full">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl w-full sm:w-3/4 lg:w-3/4 text-start">
            We are a team of experienced professionals who are dedicated to
            providing the best possible service to our clients.
          </p>
          <div className="mt-4 sm:mt-0">
            <BorderBottomButton>
              <span className="text-sm sm:text-base md:text-md lg:text-md xl:text-2xl whitespace-nowrap">
                Book a Discovery Call
              </span>
            </BorderBottomButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-5 mt-20 lg:mt-0">
        <FloatingWorkIllustration />
      </div>
    </div>
  );
}
