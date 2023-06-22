import React, {useState, useContext} from 'react'
import { OptionContext } from "../context/OptionContext";
import Form from './Form'



const FormSlider = () => {
  const [carMake, setCarMake] = useState([])
  const [carColour, setCarColour] = useState([])
  const [codeInput, setCodeInput] = useState('')
  const [current, setCurrent] = useState(0)
  const { complete, setComplete } = useContext(OptionContext);
 

  const slides = [
    {
      id:1,
      name:"MAKE",
      input: false,
      text: false,
      choice:carMake,
      setChoice:setCarMake,
      code:false,
      codeInput:false,
      buttonText: "NEXT",
      options:  [{
          option: "AUDI",
        },
        {
          option: "BMW",
        },
        {
          option: "VAUXHAL",
        },
        {
          option: "MERCEDES",
        },
        {
          option: "PEUGEOT",
        },
        {
          option: "RENAULT"
        }
      ]
    },
    {
      id:2,
      name:"COLOUR",
      input: false,
      text: false,
      choice:carColour,
      setChoice:setCarColour,
      code:false,
      codeInput:false,
      buttonText: "NEXT",
      options:  [{
          option: "BLUE",
          text:""
        },
        {
          option: "RED",
          text:"THE CAR IS RED! NICE!!"
        },
        {
          option: "BLACK",
          text:""
        },
        {
          option: "ORANGE",
          text:""
        }
      ]
    },
    {
      id:3,
      name:"CODE",
      input: true,
      text:false,
      choice:false,
      setChoice:false,
      code:false,
      codeInput:setCodeInput,
      buttonText: "DONE",
      options: false,

    },
    {
      id:4,
      name:"",
      input: false,
      text:`I have a ${carMake.option} and the colour is ${carColour.option}`,
      text1: `${carColour?.text}`,
      choice:false,
      setChoice:false,
      code:true,
      codeInput:false,
      buttonText: null,
      options: false,
      refCode:codeInput,
        
    }
  ]

  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setComplete(false)
  };

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div>
     <section className="slider border-double border-4 border-black m-8 ">
        {slides.map((slide, index) => {
          return (
            <div 
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            > 
              {index === current && (
                <div>
                  <Form 
                    key={slide.id}
                    title={slide.name}
                    choice={slide.choice}
                    list={slide.options}
                    setChoice={slide.setChoice}
                    text={slide.text}
                    text1={slide.text1}
                    setCode={slide.codeInput}
                    code={slide.refCode}
                  />
                  {complete &&
                  <button
                    onClick={nextSlide}
                    className="nextButton absolute bottom-12 right-12 text-base font-medium border-solid border-2 border-black p-4 "
                  >
                    {slide.buttonText}
                  </button>
                }
                </div>
              )}
            </div>
        )})}
      </section>
    </div>
  );
}

export default FormSlider;
