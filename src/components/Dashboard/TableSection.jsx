import { MoreHorizontal } from 'lucide-react'
import React from 'react'


const recentOrders = [

  {
    id: '#OD1711',
    product: 'Foldable Mini Drone',
    amount: '$114.00',
    status: 'Shipped',
    date: '17 Jun 2023',
    customer:"John Doe"
  },{
    id: '#OD1712',
    product: 'LARVENDER KF102 Drone',
    amount: '$225.00',
    status: 'Delivered',
    date: '18 Jun 2023',
    customer:"Jane Smith"
  },{
    id: '#OD1713',
    product: 'Ruko F11 Pro Drone',
    amount: '$785.00',
    status: 'Processing',
    date: '19 Jun 2023',
    customer:"Alice Johnson"
  },{
    id: '#OD1714',
    product: 'Drone with Camera Drone',
    amount: '$630.00',
    status: 'Cancelled',
    date: '20 Jun 2023',
    customer:"Bob Brown"
  },{
    id: '#OD1715',
    product: 'GPS 4K Drone',
    amount: '$1,150.00',
    status: 'Delivered',
    date: '21 Jun 2023',
    customer:"Charlie Davis"
  },{
    id: '#OD1716',
    product: 'DJI Air 2S',
    amount: '$999.00',
    status: 'Shipped',
    date: '22 Jun 2023',
    customer:"Eve Wilson"
  }
];

const TableSection = () => {
  return (
    <div className='space-y-6'>
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
           <div className='flex items-center justify-between'>
             <div>
                <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                    Recent Order</h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>Latest customer orders</p>
             </div>
           <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>View All</button>
        
           </div>

        </div>


        <div className='overflow-x-auto'> 
          <table className='w-full'>
            <thead>
              <tr>
              <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                Order ID</th>

                 <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                Product </th>
                 <th className='text-left p-4 text-sm font-semibold text-slate-600'>
               Amount</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                Status</th>
                 <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                Date</th>
                </tr>    </thead>
                <tbody>
                 {recentOrders.map((order, index)=>(
                   <tr className='border-b border-slate-200/50 dark:border-slate-700/50 
                  hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors'>
                     <td className='p-4' key={index}>
                      <span className='text-sm font-medium text-blue'>
                  {order.id}
                      </span>
                      </td>   

                        <td className='p-4'>
                      <span className='text-sm font-medium text-blue dark:text-white'>
                    {order.customer}
                      </span>
                      </td> 

                        <td className='p-4'>
                      <span className='text-sm font-medium text-blue dark:text-white'>
                      {order.product}
                      </span>
                      </td> 
                        <td className='p-4'>
                      <span className='text-sm font-medium text-blue dark:text-white'>
                      {order.amount}
                      </span>
                      </td> 
                        <td className='p-4'>
                      <span className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full ${order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : order.status === 'Cancelled' ? 'bg-red-100 text-red-800' : order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                     {order.date}
                      </span>
                      </td> 
                          <td className='p-4'>
                      <span className='text-sm text-slate-800 dark:text-white'>
                        <MoreHorizontal className='w-4 h-4'/>
                      </span>
                      </td> 
                  </tr>

                 ))}
                </tbody>
         

          </table>

        </div>

        </div>
     
    </div>
  )
}

export default TableSection



