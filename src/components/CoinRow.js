import React from 'react'
 
const CoinRow = ({coins,index}) => {
    console.log(coins,index)
  return (
    <tr >
        <td>{index}</td>
        <td>
            <img src={coins.image} alt={coins.name} style={{width:'3%'}} className='img-fluid me-4'/>
            <span>
                {coins.name}
            </span>
            <span className="ms-3 text-muted text-uppercase">
                {coins.symbol}
            </span>
            
        </td>
        <td>{coins.current_price}</td>
        <td className={coins.price_change_percentage_24h>0 ? 'text-success' : 'text-danger'}>
            {coins.price_change_percentage_24h}
            </td>
        <td>{coins.total_volume}</td>
    </tr>
  )
}

export default CoinRow