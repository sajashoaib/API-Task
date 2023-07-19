export const POSTS_COLUMNS=(handeldelete,handeledit)=>[
    { 
    key :'id',
    title:'Id',
    render: (data) => <>{data.id}</>,
  },
  {key:"name",
  title:"name"},
  {
    key :"cities",
    title:"cities"
  },
  {
    key :"userId",
    title:"User Id",
    render:(data:any)=>(
  <div  onClick={(e) => e.stopPropagation()}>
  <button onClick={()=>handeldelete(data.id)}>delete</button>
  <button onClick={()=>handeledit(data.id)}>edit</button>
  
  </div>
    ),
  }
  ];