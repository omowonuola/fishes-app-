import React, { useState } from 'react';


export const FishesInput = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    
    const OnSubmitForm = async (e) => {
        e.preventDefault();
        // console.log('clicked');
        try {
            const body = { name, type };
            const response = await fetch("http://localhost:5000/fishes", {
                method: "POST",
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(body),
            });
            window.location = "/";
        } catch (err){
            console.err(err.message);
        }
    };
    
        return(
            <div>
                <form className="form my-5" onSubmit={OnSubmitForm}>    
                    <div className="row">
                        <div>
                            <input 
                                style={{width:"200px"}} 
                                type="text" 
                                className="form-control mx-5" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="fish name" 
                            />
                        </div>
                        <div>
                            <input 
                                style={{width:"200px"}} 
                                type="text" 
                                className="form-control" 
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                placeholder="fish type" 
                            />
                        </div>
                        <div>
                            <button className="btn btn-primary mx-4">Submit</button>                   
                        </div>
                    </div>
                </form>    
            </div>
        );
}


export default FishesInput;