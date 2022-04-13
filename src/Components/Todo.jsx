import React from "react"

export const Todo = () => {
  const [formDetails, setFormDetails] = React.useState({
    name : "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""
  });

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(e)
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method:"POST",
      mode: "no-cors",
      body:JSON.stringify(formDetails),
      headers: {"Content-Type" : "application/json"}
    })
     .then((res) => (res.json()))
     .then((res) => (setFormDetails(res)))

     .catch((err) => (console.log(err)))
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input placeholder="Names" type="text"></input>
      <br />
      <input placeholder="fruits" type="text"></input>
      <br />
      <input placeholder="Vegetables" type="text"></input>
      <br />
      <input type="submit" placeholder="Save Todo List"></input>

      </form>
    </div>
  ) 
}