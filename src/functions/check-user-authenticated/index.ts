
/** 
 * {getStorageItem} from 'utils'
 * @importarDepois
 *
*/

'use client'

export const checkUserAuthenticated = ()=>{
    const userToken= localStorage.getItem('token');

    return !!userToken
}