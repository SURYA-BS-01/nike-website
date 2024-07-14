import Button from "../components/Button"
import shoe8 from "../assets/images/shoe8.svg"
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center
      gap-10 w-full max-lg:flex-col max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl max-sm:text-[72px]
        max-sm:leading-[82px] font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10">
            We Provide you <span className="text-coral-red">
              super
            </span> <span className="text-coral-red">
              Quality
            </span>
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort,
          and innovation for you active life.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your statisfaction
        </p>
        <div className="mt-11"> 
        <Button label="Shop now"/>
        </div>
        
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />

      </div>

    </section>
  )
}

export default SuperQuality