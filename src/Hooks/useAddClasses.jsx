import { useQuery } from '@tanstack/react-query'
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const useAddClasses =() =>{
    const {user} = useContext(AuthContext)

    const { isLoading, data:classSelect=[]} = useQuery({
        queryKey: ['classSelect', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/classSelect?email=${user.email}`)
            return res.json()
        },
      })
      return[classSelect, isLoading]
    
}

export default useAddClasses;