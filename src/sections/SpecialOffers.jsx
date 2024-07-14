import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex  justify-center items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer} 
          alt="offer"
          width={773}
          height={687}
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin capitalize text-4xl max-sm:text-[72px]
        max-sm:leading-[82px] font-bold lg:max-w-lg">
            <span className="text-coral-red">
              Special
            </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort,
          and innovation for you active life.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your statisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4"> 
          <Button label="Shop now"/>
          <Button 
            label= "Learn more"
            backgroundColor = "bg-white"
            borderColor = "border-slate-gray"
            textColor = "text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers