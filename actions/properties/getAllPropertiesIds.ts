'use server'

import { handleAction } from "@/utils/handleAction"
import { sanityClient } from "@/utils/sanityClient"

export const getAllPropertiesIds = async ()=>handleAction(
 async()=>{
        const propertiesIds = await sanityClient.fetch(`
            *[_type == "properties"]{
             _id
            }`)
        return propertiesIds
    },

)