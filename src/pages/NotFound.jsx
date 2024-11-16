import { useNavigate } from "react-router";
import imgNotFound from "../assets/404.png";
import { Button } from "react-bootstrap";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notFound-page vh-100 d-flex flex-column justify-content-center align-items-center">
      <img src={imgNotFound} alt="not found 404" width={500} />
      <Button
        className="main-bg text-white border-0"
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </Button>
    </div>
  );
}

export default NotFound;
