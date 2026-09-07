"use client"
import ImageSlider from "./../components/ImageSlider"
import {useTheme} from  "./../components/theme-provider"
import {ClientUtils} from "./../utils/client-utils"

export default function ClientSide(){
    const theme=useTheme()
    const result=ClientUtils()
  return (
    <>
    <h1 style={{color:theme.color.secondary}}>Hey from client-side</h1>
    <ImageSlider />
    <p>{result}</p>
    </>
  );
}