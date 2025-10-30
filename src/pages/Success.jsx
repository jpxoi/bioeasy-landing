import ContactSuccessContainer from "../new-containers/ContactSuccessContainer";
import RegisterSuccessContainer from "../new-containers/RegisterSuccessContainer";

function Success() {
  const success_type =  new URLSearchParams(window.location.search).get('type');
  console.log(success_type);
  
  return (
    <>
      <main className="main Landing">
        {success_type == "register"? <RegisterSuccessContainer /> : <ContactSuccessContainer />}
      </main>
    </>
  );
}

export default Success;