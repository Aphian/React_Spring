import { useParams } from "react-router";
import ReadComponent from "../../components/todo/readComponent";

function ReadPage() {

  const {tno} = useParams()

  // console.log(tno)

  return ( 
    <div className="bg-white w-full font-extrabold mt-6">
      <div className="text-2xl">Todo Read Page  {tno}</div>
      <ReadComponent tno={Number(tno)}></ReadComponent>
    </div>
   );
};

export default ReadPage;