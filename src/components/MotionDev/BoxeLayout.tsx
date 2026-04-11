"use client"
import  { useMemo, useState } from 'react'
import {motion} from "motion/react"
const BoxeLayout = () => {
const [currentStep, setCurrentStep] = useState(0);
const content = useMemo(() => {
  switch (currentStep) {
    case 0:
      return (
        <>
         <motion.div layoutId='1' className="bg-red-400 size-40 right -top-20 absolute"></motion.div>
         {/* <motion.div layoutId='2' className="bg-red-400 size-40 " style={{ borderRadius: 10}}></motion.div> */}
        </>
      );
    case 1:
      return (
        <>
        <motion.div layoutId='1' className="bg-blue-300 size-80 absolute rounded-xl"></motion.div>
         {/* <motion.div  layoutId='2' style={{ borderRadius: 60}} className="bg-blue-400 size-40 rounded-full ml-50"></motion.div> */}
        </>
      );
  }
}, [currentStep]);
  return (
    <>
    
    <div className='h-60 w-100 bg-red-200 flex overflow-hidden'>

        {content}
    </div>
         <div className="actions">
        <button
          className="secondary-button"
          disabled={currentStep === 0}
          onClick={() => {
            if (currentStep === 0) {
              return;
            }
            setCurrentStep((prev) => prev - 1);
          }}
        >
          Back
        </button>
        <button
          className="primary-button"
          disabled={currentStep === 1}
          onClick={() => {
            if (currentStep === 1) {
              setCurrentStep(0);
              return;
            }
            setCurrentStep((prev) => prev + 1);
          }}
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default BoxeLayout