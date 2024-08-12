import React, {useState} from "react";


function Form(){
    
    const [user,setUser] = useState({
        email:"",area:"",city:"",state:"",price:""
    });
    
    let name,value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    return(
        <div className="FormComp">
        <h1>List your Property</h1>
        <form>
  <div class="form-group">
  <div className="row cell">
  <div className="col-lg-6">
    <h4>Email</h4>
    </div>
    <div className="col-lg-4">
    <input type="email" className="form-control" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="name@example.com"/>
    </div>
  </div>
  <div className="row cell">
  <div className="col-lg-6">
    <h4>Area</h4>
  </div>
  <div className="col-lg-4">
    <input className="form-control" type="text" name="area" id="area" value={user.area} onChange={handleInputs} placeholder="Area"/>
    </div>
    </div>
    <div className="row cell">
    <div className="col-lg-6">
        <h4>City</h4>
    </div>
    <div className="col-lg-4">
    <input className="form-control" type="text" name="city" id="city" value={user.city} onChange={handleInputs} placeholder="City"/>
    </div>
    </div>
    <div className="row cell">
    <div className="col-lg-6">
        <h4>State</h4>
    </div>
    <div className="col-lg-4">
    <input className="form-control" type="text" name="state" id="state" value={user.state} onChange={handleInputs} placeholder="State"/>
    </div>
    </div>
    <div className="row cell">
    <div className="col-lg-6">
        <h4>Price</h4>
    </div>
    <div className="col-lg-4">
    <input className="form-control" type="text" name="price" id="price" value={user.price} onChange={handleInputs} placeholder="Price"/>
    </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
        </div>
    )
}

export default Form;