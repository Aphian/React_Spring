import ListComponent from "../../components/todo/listComponent";

function ListPage() {
  
  return ( 
    <div className="bg-white w-full">
      <div className="text-3xl font-extrabold">Todo List Page Component</div>
      <ListComponent></ListComponent>
    </div>
  );
}

export default ListPage;