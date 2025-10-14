import React from 'react'
import {useForm} from "react-hook-form"
import "./App.css"

const App = () => {
  const {  register,handleSubmit,watch, formState: { errors,isSubmitting } } = useForm()
  function onSubmit(data){
    console.log("submitting the form",data)

  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>

        <input  className={errors.firstName?'input-error':""}
        type="text" {...register('firstName',{required:true,
          minLength:{value:3,message:"Min length atleast 3"},
          maxLength:{value:6,message:"Max length reached"}
          })} />  


          {errors.firstName && <p className="error-msg"> {errors.firstName.message} </p>}

      </div> <br />



        <div>
        <label>Middle Name:</label>
        <input type="text" {...register('middleName')} />
      </div><br />
        <div>
        <label>Last Name:</label>
        <input type="text"

         {...register('lastName',{
          pattern:{
            value:/^[A-Za-z]/,
            message:"Last name is not as per the rules"
          }
         })}  />
         {errors.lastName && <p className="error-msg">{errors.lastName.message} </p>}
      </div>
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "submitting":"submit"}  />
    </form>
  )
}

export default App
