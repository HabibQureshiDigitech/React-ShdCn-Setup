import { WebbaseUrl } from "../Base"
import { accessToken } from "../Token/Token"


export const getUserData = async(page:number , limit:number) => {
    const params : Record<string , any> = {page , limit}
    const response = await WebbaseUrl.get(`/admin/users` , {
        
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },params

    })

    if(response.status === 200){
        const data =  response.data.data
        const total =  response.data.total
        return {data , total}
    }else{{}}


}

export const getonlyOneUser = async (id:number) => {
    const response = await WebbaseUrl.get(`/admin/user/${id}` , {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        }
    })

    if(response.status === 200){
        return response?.data
    }else{[]}
}

export const deleteUser = async ({id}:{id:number}) => {

    const response = await WebbaseUrl.put(`/admin/update-user/${id}` , {
    status: "Deactivated" }, 
    {headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${accessToken}`
    }}
)

if(response.status === 200){
    return response?.data
}else{[]}
    

}


export const updateUserData = async ({id , data} : {id:any , data:FormData}) =>{
    try {
        const response = await WebbaseUrl.put(`admin/update-user/${id}`, data , {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${accessToken}`
            },
        })
        if(response.status === 200){
          const data = response.data
          return data
    } 
    } catch (error) {
        // notification.error({message:"Error in Data Fetching"})
        console.log(error)
    }}