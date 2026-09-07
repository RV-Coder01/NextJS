"use client"
import {createContext,useContext} from "react"

type Theme={
    color:{
        primary:string,
        secondary:string
    }
}

const defaultTheme:Theme={
    color:{
        primary:"blue",
        secondary:"black"
    }
}

const ThemeContext=createContext<Theme>(defaultTheme)

export const ThemeProvider=({children}:{children:React.ReactNode})=>{

    return(
        <>
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}

export const useTheme=()=> useContext(ThemeContext)