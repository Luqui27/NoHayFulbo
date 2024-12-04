import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const Tnt = () => {
  const navigate=useNavigate();
    return (
      <div>
      <div className="embed-responsive">
        <iframe
          className="embed-responsive-item"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          src="https://la10hd.com/vivo/canal.php?stream=tntsports"
          scrolling="no"
        ></iframe>
      </div>
      <Button onClick={()=>navigate('/')}> Volver al Home</Button>
      </div>
    );
  };
  
  export default Tnt;
  