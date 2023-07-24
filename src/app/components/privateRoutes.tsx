import { useRouter } from 'next/navigation'
import { checkUserAuthenticated } from '@/functions/check-user-authenticated'
import { useEffect } from 'react'
import { App_Routes } from '@/constants/app-routes'

function PrivateRoute ({
    children 
}:{
    children: React.ReactNode
}) {
    const {push} = useRouter()

    const isAuth = checkUserAuthenticated()
    useEffect(()=>{
        if(!isAuth){
            push(App_Routes.public.login)
        }
    },[isAuth, push])
  
    return (
      <>
        {!isAuth && null}
        {isAuth && children} 
        {/* {shouldUseDefaultLayout && <div>{children}</div>} 
        {!shouldUseDefaultLayout && <div><h1>privatesoute</h1>{children}</div>}  */}
      </>
    );
  };

export default PrivateRoute