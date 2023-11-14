import { Link } from "react-router-dom";
function Home() {
    return (
        <>
           <div style={{height:'100vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center', border:'10px solid blue'}}>  
         <Link to="/admin/dashboard">
                <button style={{padding:'1rem', backgroundColor:'purple', color:'white', cursor:'pointer'}}>Visit Dashboard</button>
              </Link>
              </div>
        </>
      );
}

export default Home;