import React from 'react'
import CoinRow from './CoinRow'
const titles = ['#','coin','price', 'price Change', '24h Volume']

const TableCoins = ({coins, search}) => {   

    const filter = coins.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase()));
    if(!coins)return <div>no coins</div>

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        titles.map((titles, index) => (
                            <td key={index}>{titles}</td>
                        ))
                    }                  
                </tr>
            </thead>
            <tbody>
                {filter.map((coins,index) => (
                    <CoinRow coins={coins} key={index} index={index + 1}/>      
                ))}
            </tbody>
        </table>
    )
}


export default TableCoins