
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {

  //with this hook we can extract params values from the URL
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  console.log(params)

  return (
 <>
    <p>User {params.id}</p>
 </>
  )
}

export default UserDetails;