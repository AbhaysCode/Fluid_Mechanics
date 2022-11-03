import {useState} from 'react';

function Pascal(){
    const [fAtA,setFAtA] = useState(""); 
    const [fAtB,setFAtB] = useState(""); 
    const [aAtA,setAAtA] = useState(""); 
    const [aAtB,setAAtB] = useState(""); 

    function handlePascal(event){
        let area = (fAtB*aAtA)/fAtA;
        setAAtB(area);
        console.log(aAtB);
        event.preventDefault();
    }
    return (
        <div className="container-fluid my-5">
            <section>
            <div className="container">
                <div className="card">
                    <div className="row ">
                        <div className="col-md-4 bg-intro"> 
                            <img src="https://haygot.s3.amazonaws.com/questions/685035_518768_ans_c022c65028734131a3f159d4cf183528.png" className="img-fluid" alt="Pascal"/>       
                        </div>
                        <div className="col-md-8">
                            <div className="card-block px-3">
                            <h4 className="card-title py-3">PASCAL LAW</h4>
                            <p className="card-text">Pascal's law is a principle in fluid mechanics given by Blaise Pascal that states that a pressure change at any point in a confined incompressible fluid is transmitted throughout the fluid such that the same change occurs everywhere.</p>
                            <p className="card-text">Pascal’s law says that pressure applied to an enclosed fluid will be transmitted without a change in magnitude to every point of the fluid and the walls of the container. The pressure at any point in the fluid is equal in all directions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section>
                <div className="container my-2">
                        <div className="card">
                            <div className="row ">
                                <div className="col-md-4">
                                    <img className="card-img-top" src="https://images.collegedunia.com/public/image/9c1b7b102e631adb267f27220c81aa94.png" alt="Pascal"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                            {aAtB&&<div className="alert alert-success" role="alert">Area of B is {aAtB}/m2</div>}
                                        <form encType="multipart/form-data" onSubmit={handlePascal}>
                                            <div className="form-group mb-2">
                                            <input type="number" className="form-control"  placeholder="Enter the Value of F(A) in N" value={fAtA} onChange={(elem)=>{setFAtA(elem.target.value)}}/>
                                            </div>
                                            <div className="form-group mb-2">
                                            <input type="number" className="form-control"  placeholder="Enter the Value of F(B) in N" value={fAtB} onChange={(elem)=>{setFAtB(elem.target.value)}}/>
                                            </div>
                                            <div className="form-group mb-2">
                                            <input type="number" className="form-control"  placeholder="Enter the Value of Area(A) in m2" value={aAtA} onChange={(elem)=>{setAAtA(elem.target.value)}}/>
                                            </div>  
                                            <button type="submit" className="btn btn-primary">Compute Area(B)</button>
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
export default Pascal;