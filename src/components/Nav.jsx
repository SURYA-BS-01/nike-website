import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={39}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item) => (
                        <li key={item.label}>
                            <a 
                                href="{item.href}"
                                className='fonts-montserrat leading-normal text-slate-gray text-lg'    
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'>
                <img 
                    src={hamburger}
                    alt=""
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav


// flex-1 sets the flex property to 1, which means that the element will take up all available space along the main axis within its flex container.

// leading-normal: This class sets the line height to the normal value, which is typically around 1.5 times the font size.
// So, when you apply the leading-normal class to an element, it adjusts the spacing between lines of text, making it more readable and aesthetically pleasing.