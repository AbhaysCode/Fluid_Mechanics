import {useState} from 'react';

function Continuity(){
    const [aAt1,setAAt1] = useState("");
    const [aAt2,setAAt2] = useState("");
    const [vAt1,setVAt1] = useState("");
    const [vAt2,setVAt2] = useState("");
    function handleContinuity(event){
        let vel = (aAt1*vAt1)/aAt2;
        setVAt2(vel);
        console.log(vAt2);
        event.preventDefault();
    }
    return(
    <div className="container-fluid my-5">
        <section>
            <div className="container ">
            <div className="card">
            <div className="row ">
                <div className="col-md-4 bg-intro"> 
                <img src="https://i.ytimg.com/vi/DxX6XLEdcAw/maxresdefault.jpg" className="img-fluid" alt="Continuity"/>       
            </div>
            <div className="col-md-8 px-3">
                <div className="card-block px-3">
                <h4 className="card-title py-3">CONTINUITY EQUATION</h4>
                <p className="card-text">The transfer of various quantities, such as fluid or gas, is described by the continuity equation. The formula describes how a fluid conserves mass while moving.</p>
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
                            <img className="card-img-top" src="https://2.bp.blogspot.com/-2tHBQomGQBA/WqzgbvwO1iI/AAAAAAAAEHI/NyBDeZHwMmcWkj1Gyzylf7k3Mvds1BSsgCLcBGAs/s1600/1.jpg" alt="Card image cap" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            {vAt2&&<div className="alert alert-success" role="alert">Velocity at 2 is {vAt2}m/s</div>}
                                <form className="form-validate" encType="multipart/form-data" onSubmit={handleContinuity}>
                                    <div className="form-group mb-2">
                                        <input type="number" className="form-control" onChange={(event)=>{setAAt1(event.target.value)}} placeholder="Enter the Value of A(1) in m2" />
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="number" className="form-control" onChange={(event)=>{setAAt2(event.target.value)}} placeholder="Enter the Value of A(2) in m2" />
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="number" className="form-control" onChange={(event)=>{setVAt1(event.target.value)}} placeholder="Enter the Value of V(1) in m/s" />
                                    </div>  
                                    <button type="submit" className="btn btn-primary">Compute V(2)</button>
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

export default Continuity;