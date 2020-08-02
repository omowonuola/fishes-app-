import React, { useState, useEffect } from 'react';
// import { use } from '../../../server/routes/fishes';

export const FishesList = () => {
    
    const [fishes, setFishes] = useState([]);

        const getFishes = async () => {
            try {
                const resp = await fetch('http://localhost:5000/fishes');
                const data = await resp.json();
                setFishes(data);
            } catch (err) {
                console.error(err.message);
            }  
        }; 

        const deleteFish = async (id) => {
            try {
                const deleteFish = await fetch(`http://localhost:5000/fishes/${id}`, {
                    method: "DELETE",
                });
                setFishes(fishes.filter((fish) => fish.id !== id));
            } catch (err) {
                console.log(err.message); 
            }
        };

        useEffect(() => {
            getFishes();
        }, []);

    const displayFishes = fishes.length ? (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>  
            </thead>
            
            <tbody>
                {fishes.map((fish) => (
                    <tr key={fish.id}>
                        <td><p style={{marginRight: "50px",marginLeft: "50px",marginTop: "10px"}}>{fish.name}</p></td>
                        <td><p style={{marginRight: "50px",marginLeft: "50px",marginTop: "10px"}}>{fish.type}</p></td>
                        <td>
                            {/* <EditFishes fish={fish} /> */}
                        </td>
                        <td>
                            <button style={{marginRight: "50px",marginLeft: "50px"}} className='btn btn-secondary'>
                                Edit
                            </button>
                            <button className='btn btn-danger' onClick={() => deleteFish(fish.id)} >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )  : (
        <div>No Fish List!!!</div>
    );
    return displayFishes; 
};



export default FishesList;