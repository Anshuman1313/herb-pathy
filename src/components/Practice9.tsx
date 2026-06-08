"use client"

import {useForm} from "react-hook-form"
import { z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


// type FormData = {
//     firstName: string,
//     lastName: string
// }

const schema1 = z.object({
    firstName: z.string().min(3,"Min 3 charcaters").nonempty("THis is required"),
    lastName: z.string().min(3,"Min 3 charcaters").nonempty("THis is required")
})

// type for schema 
type FormData = z.infer<typeof schema1>;




const Practice9 = () => {
      const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
      resolver: zodResolver(schema1),
    defaultValues: {
        firstName: "An",
        lastName: "Rana"
    }
  })


const onSubmit = async (data: FormData) => {
  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  console.log(data);
};

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("firstName")} placeholder="First Name"/>
             <p>{errors.firstName?.message}</p>
            <input type="text" {...register("lastName")} placeholder="Last Name"/>
            <button type="submit" >{isSubmitting ? "Submitting...": "Submit"}</button>
        </form>
    </>
  )
}

export default Practice9