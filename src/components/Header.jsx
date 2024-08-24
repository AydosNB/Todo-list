import { BsFillSunFill } from "react-icons/bs"; 
import { FaMoon } from "react-icons/fa";
import React, { useState } from 'react'
import Container from './Container'

const Header = ({colorMode, setAllColorMode}) => {
    return (
        <div className='md:pt-[10vh] pt-[5vh] text-white z-[1] relative'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="text-[24px] font-bold">
                        TODO
                    </div>
                    <div>
                        <button onClick={() => setAllColorMode(colorMode)} className="w-[35px] h-[35px] active:scale-95 flex justify-center text-[20px] items-center rounded-md hover:bg-white hover:bg-opacity-50">
                            {colorMode === "light"? <FaMoon /> : <BsFillSunFill />}
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
