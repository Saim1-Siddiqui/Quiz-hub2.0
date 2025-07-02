import { createContext,useContext } from "react";
import { data } from '../assets/data';

 export const QuizContext= createContext()
  
 export const QuizProvider=({children})=>{
    const myname="Mohsan";
    const myage=21;
     
    return <QuizContext.Provider value={{myname,myage,data}}>
        {children}
    </QuizContext.Provider>
  }

  export const useQuiz=()=>{
    const context=useContext(QuizContext)
    try {
        return context
    } catch (error) {
        console.log(error,"error from context")
        
    }
  }
















