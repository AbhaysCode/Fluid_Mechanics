import {useState} from 'react';
function Bernoulli(){
    const [pAt1,setPAt1] = useState("");
    const [pAt2,setPAt2] = useState("");
    const [vAt1,setVAt1] = useState("");
    const [vAt2,setVAt2] = useState("");
    const [hAt1,setHAt1] = useState("");
    const [hAt2,setHAt2] = useState("");
    const [p,setP] = useState("");
    function handleBernoulli(event){
        let lhs =  (pAt1*1) + (0.5*p*vAt1*vAt1) + (p*9.8*hAt1) - (pAt2*1) - (0.5*p*vAt2*vAt2)
        let height = lhs/(p*9.8);
        setHAt2(height);
        event.preventDefault();
    }
    return (
    <div className="container-fluid my-5">
        <section>
            <div className="container ">
                <div className="card">
                    <div className="row ">
                        <div className="col-md-4 bg-intro"> 
                        <img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/10/28171715/Bernoullis-Principle-Diagram-1.png" className="img-fluid" alt="Bernoulli"/>       
                    </div>
                    <div className="col-md-8 px-3">
                        <div className="card-block px-3">
                        <h4 className="card-title py-3">BERNOULLI EQUATION</h4>
                        <p className="card-text">The total mechanical energy of the moving fluid comprising the gravitational potential energy of elevation, the energy associated with the fluid pressure and the kinetic energy of the fluid motion, remains constant.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container my-2">
            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img className="card-img-top" src="https://www.sciencefacts.net/wp-content/uploads/2021/07/Bernoullis-Principle-Equation-Formula.jpg" alt="Card image cap"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        {hAt2&&<div className="alert alert-success" role="alert">Height at 2 is {hAt2}m</div>}
                            <form className="form-validate" encType="multipart/form-data" onSubmit={handleBernoulli}>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of P(1) in N/m2" onChange={(event)=>setPAt1(event.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of P(2) in N/m2" onChange={(event)=>setPAt2(event.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                <input type="number" className="form-control" placeholder="Enter the Value of p in kg/m3" onChange={(event)=>setP(event.target.value)}/>
                                </div>  
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of V(1) in m/s" onChange={(event)=>setVAt1(event.target.value)}/>
                                </div>  
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of V(2) in m/s" onChange={(event)=>setVAt2(event.target.value)}/>
                                </div>  
                                <div className="form-group mb-2">
                                <input type="number" className="form-control"  placeholder="Enter the Value of H(1) in m" onChange={(event)=>setHAt1(event.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Compute H(2)</button>
                            </form> 
                        </div>
            </div>
                </div>
            </div>
            </div>
        </section>
    </div>
    )
}
export default Bernoulli;