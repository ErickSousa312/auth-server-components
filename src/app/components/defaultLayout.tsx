'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { checkIsPublicRoute } from '@/app/functions/check-is-public-route'
import { useEffect } from 'react'
import { App_Routes } from '@/constants/app-routes'
import PrivateRoute from '@/app/components/privateRoutes'

const pagesWithDefaultLayout:string[] = ['/', '/sobre']

function DefaultLayout ({
    children 
}:{
    children: React.ReactNode
}) {
    const {push} = useRouter()
    const pathname: string = usePathname();
    const shouldUseDefaultLayout: boolean = pagesWithDefaultLayout.includes(pathname);
    const isPublicPage = checkIsPublicRoute(pathname!)
  
    return (
      <>
        {isPublicPage && <>{children}</> }
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>} 
      </>
    );
  };

export default DefaultLayout