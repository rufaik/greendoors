import React, {useContext} from 'react'
import { OptionContext } from "../context/OptionContext";

const Form = ({title, choice, list, setChoice, text, text1, code, codeInput, setCode}) => {

	  const { setComplete } = useContext(OptionContext);

	return (
		<div className="form p-12">
			<div className="flex flex-row justify-center">
				<div className="w-1/2">
					<h1 className="text-3xl font-bold underline">
			        	{title} 
			      	</h1>
			      	{list &&
				      	<div className= "uniqueBox mt-4 pl-4 flex">
				      	{choice.option}
				      	</div>
				     }
			      	{setCode &&
						<input
							placeholder=""
							type="text"
							name="code"
							id="code"
							className= "uniqueBox mt-4 pl-4"
							onChange={(event) => {
								setCode(event.target.value)
								if( event.target.value.length > 0){
									setComplete(true)
								} else {
									setComplete(false)
								}

							}}
						/>
		            }
				</div>
				<div className="w-1/2 flex flex-col items-end">
					{ list && list.map((select,i) => (
						<h2 
							key={select.option}
							className="text-2xl font-bold cursor-pointer"
							onClick= {() => {
								setChoice(select)
								setComplete(true)
							}}
						>
							{select.option}
						</h2>
	      	))}
				</div>
				</div>
			
			
	      	
	      	<h1 className="text-3xl font-bold underline">
	        	{text} 
	      	</h1>
	      	{code &&
	      		<h1 className="text-3xl font-bold underline">
	        		REF: {code}
	      		</h1>
			}
			<h2 className="text-3xl font-bold underline">
				{text1}
			</h2>	      	
	    </div>
	)
}

export default Form;