import { useState } from "react"
import Word from "./word"

function App() {

  const WordsForText = ["Hello", "Team", "Mercor,", "I", "am", "Raghul", "Prasanth", "I", "really", "like", "this", "test."]

  var scrollValue = window.scrollY
  const[scroll, setScroll] = useState(0)

  const changeScrollValue = ()=>{
    var height = document.documentElement.scrollHeight - window.innerHeight
    var top = window.scrollY
    setScroll(top)
  }

  window.addEventListener('scroll', changeScrollValue)

  // Range -- 600 - 1800
  // Sticky Range -- 600 - 1024
  // pitch -- 14

  const base = 630;
  const pitch = 14;
  const wordCount = 7

  return (
    <>

    <div className="h-96 w-screen bg-black" />

      <div className='min-h-screen flex flex-col justify-center items-center min-w-[100vw] bg-black'>
        <div className="text-white font-mono bg-slate-900 h-[30vh] w-screen  text-center opacity-70 mt-10 text-5xl rounded-md p-4">
          Hello Everyone. This is the block above the words and is used to provide a coverage for scrolling area.
        </div>

        <div className={`${(scrollValue > 1900) ? "" : "sticky"} top-0`}>
          <div className="flex space-x-3 transition-all duration-500 justify-center pt-[10vh]">
            {
              WordsForText.map((element, index)=>(
                <Word text={element} key={Math.random()*100000} deadline={base+(pitch*(index+1))} scrollValue={scrollValue} />
              ))
            }
          </div>
          <div className="flex space-x-3 transition-all duration-500 justify-center pt-10">
          {
              WordsForText.map((element, index)=>(
                <Word text={element} key={Math.random()*100000} deadline={base+(pitch*wordCount)+(pitch*(index+1))} scrollValue={scrollValue} />
              ))
            }
          </div>
          <div className="flex space-x-3 transition-all duration-500 justify-center pt-10">
          {
              WordsForText.map((element, index)=>(
                <Word text={element} key={Math.random()*100000} deadline={base + (3*pitch*wordCount)+(pitch*(index+1))} scrollValue={scrollValue} />
              ))
            }
          </div>
          <div className="flex space-x-3 transition-all duration-500 justify-center pt-10">
          {
              WordsForText.map((element, index)=>(
                <Word text={element} key={Math.random()*100000} deadline={base + (5*pitch*wordCount)+(pitch*(index+1))} scrollValue={scrollValue} />
              ))
            }
          </div> 
          <div className="flex space-x-3 transition-all duration-500 justify-center pt-10">
          {
              WordsForText.map((element, index)=>(
                <Word text={element} key={Math.random()*100000} deadline={base + (7*pitch*wordCount)+(pitch*(index+1))} scrollValue={scrollValue} />
              ))
            }
          </div>
          <div className="flex space-x-3 transition-all duration-500 justify-center pt-10">
          {
              WordsForText.map((element, index)=>(
                <Word text={element} key={Math.random()*100000} deadline={base + (9*pitch*wordCount)+(pitch*(index+1))} scrollValue={scrollValue} />
              ))
            }
          </div>
          <div className="flex space-x-3 transition-all duration-500 justify-center pt-10">
          {
              WordsForText.map((element, index)=>(
                <Word text={element} key={Math.random()*100000} deadline={base + (11*pitch*wordCount)+(pitch*(index+1))} scrollValue={scrollValue} />
              ))
            }
          </div>
        </div>
        <div className={`h-[90rem] w-10`}>

        </div>
        <div className="text-white font-mono bg-slate-900 h-[30vh] w-screen  text-center opacity-70 mt-10 text-5xl rounded-md p-4">
          Hello Everyone. This is the block above the words and is used to provide a coverage for scrolling area.
        </div>
      </div>
    </>
  )
}

export default App
