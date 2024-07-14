import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row
       justify-center min-h-screen gap-10
       max-container
        p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col items-start
      justify-center w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-monserrat text-slate-gray text-lg 
        leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort,
          and innovation for you active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start w-full
        mt-20 gap-16 flex-wrap">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palannquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
       <div className="flex-1 flex justify-center items-center xl:min-h-screen
        max-xl:py-40 bg-hero bg-primary bg-cover bg-center">
        <img 
          src={bigShoeImg}
          alt="show collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
       </div>

       <div className="flex-1 flex justify-center items-center sm:gap-6 gap-4 absolute max-sm:px-6 md:items-end md:justify-end">
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
       </div>
    </section>
  )
}

export default Hero