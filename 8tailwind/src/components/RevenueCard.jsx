export const RevenueCard=({title,amount,order})=>{
    return <>
    <div className="  rounded shadow-md p-4">
        <div className="text-grey-700" >
      {title}
      </div>
         <div className='flex justify-between'>
            <div>{amount}</div>
            <div>{order ? <div>{order} orders</div> : null}</div>
         </div>
          </div>
</>
}