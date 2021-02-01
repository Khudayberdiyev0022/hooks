import React, { useCallback, useState } from 'react'
import Age from './Age'
import AgeTitle from './AgeTitle'
import Salary from './Salary'
import SalaryTitle from './SalaryTitle'
import Title from './Title'

const Parrent = () => {
    const [number, setNumber] = useState(0)
    const [salary, setSalary] = useState(1000)

    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    }, [number])


    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary])

    return (
        <div>
           <Title />
           <AgeTitle number = {number}/>
           <Age incrementNumber ={incrementNumber}/>
           <SalaryTitle salary={salary}/>
           <Salary incrementSalary={incrementSalary}/> 
        </div>
    )
}

export default Parrent
