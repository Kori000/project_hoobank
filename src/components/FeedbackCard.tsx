import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img, number }: any) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    <h2 className=" text-gradient text-[40px]  font-bold ">{number}</h2>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">{content}</p>

    <div className="flex flex-row items-center justify-start">
      <div className="bg-blue-gradient font-bold text-[40px] rounded-full  w-4 h-4 flex justify-center items-center">
        <div className="bg-black/95 rounded-full w-2.5 h-2.5 "></div>
      </div>
      <div className="flex flex-col ml-4">
        {/* <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4> */}
        <p className="font-poppins font-medium text-gradient text-[24px]  text-dimWhite">{title}</p>
      </div>
    </div>
  </div>
)

export default FeedbackCard
