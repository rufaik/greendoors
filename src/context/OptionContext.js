import React, {useState, createContext} from 'react'


export const OptionContext = createContext(null)

const OptionContextProvider = ({children}) => {
	
   
    const [carMake, setCarMake] = useState(null)
    const [carCol, setCarCol] = useState(null)
    const [complete, setComplete] = useState(false)

  return (
    	<OptionContext.Provider value={{carMake, setCarMake, carCol, setCarCol, complete, setComplete}}>
			{children}
		</OptionContext.Provider>
  );
}

export default OptionContextProvider;