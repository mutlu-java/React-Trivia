import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [selectedAnswer,setSelectedAnswer] = useState(null)
  const [score,setScore] = useState(0)
  
  
  let currentQuestion = data[count]

  function handleNextClick(){
    setCount( c=> c+1 )
  }

  function handleAnswerClick(answer){
    setSelectedAnswer(answer)
    if(answer === currentQuestion.correct){
      alert("Congrats dum dum")
      setScore(score => score+10)
      setTimeout(setCount(c => c+1, 2000))
      nextQuestion()
     
    }else {
      // alert("wrong answer dum dum")
      setTimeout(setCount(c => c+1),2000)
    }
  
 
    
  }

  return (
    <>
         <button onClick={handleNextClick}>Next Question</button> 
          <p>{count+1}/{data.length}</p>

          <div className='score'>
            Score: {score}
          </div>

          <div className='question-container'>
            <p className='question'> 
              {currentQuestion.question} 
            </p>
          </div>
          
          <div className='answers-container'>
            {currentQuestion.answers.map(
              (answer,i)=> (
                <button key={i} onClick={()=> handleAnswerClick(answer) } 
                 style={{color :  selectedAnswer=== answer ? currentQuestion.correct=== answer ? "green" : "red":"" }}  >
                  {answer}
                </button>))}  
          </div> 


        

    
   {/* { showing every question
  //   data.map((q,i )=>(
  //       <div key={i}>

  //         <div className='question-container'>
  //           <p className='question'> {q.question} </p>
  //         </div>

  //         <div className='answers-container'>
  //           {q.answers.map((a,i)=> (<button key={i}>{a}</button>))}  
  //         </div>



  //       </div>
      
  //   ) )
  //   } */}

    
     
    </>
  )
}

export default App
