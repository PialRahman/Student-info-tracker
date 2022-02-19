import React, { createContext, useState } from 'react';

export const StudentContext=createContext();
export const Studentprovideinformation=(props)=>{
    const [student,setStudent]=useState([
        {
            id:1,
            name:"Sajid",
            program:"BSc",
            depertment:"CSE",
        
        },
        {
            id:2,
            name:"Rony",
            program:"BBA",
            depertment:"Economics",
        
        },
        {
            id:3,
            name:"Monir",
            program:"BSc",
            depertment:"EEE",
        
        },

    ]);
    return <StudentContext.Provider value={ [student,setStudent]}>
        {props.children}
        </StudentContext.Provider>
};