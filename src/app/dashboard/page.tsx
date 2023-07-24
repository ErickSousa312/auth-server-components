import Image from 'next/image'
import styles from './page.module.css'

export default async function DashBoard() {
  const erick = await GetDATA()
  console.log(erick)
  return (
    <>oi dashboard</>
  )
}

function GetDATA(){
  return new Promise((resolve)=>{
    setTimeout(()=>{resolve('erick')},3000)
  })
}