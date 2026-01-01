import {  BarChart3, Calendar, ChevronDown, CreditCard, FileText, LayoutDashboard, MessageSquare, Package, Settings, ShoppingBag, Users, Zap } from 'lucide-react'
import img from '/jane.jfif'
import React from 'react'



const menuItems = [
{
  id:'dashboard',
  icon: LayoutDashboard,
  label: 'Dashboard',
  active: true,
  badge: 'New',
},
{
  id:'analytics',
  icon: BarChart3,
  label: 'Analytics',
  subMenu: [
    {id:'overview', label: 'Overview'},
    {id:'reports', label: 'Reports'},
    {id:'statistics', label: 'Statistics'},
  ]
},
{
  id:"users",
  icon: Users,
  label: 'Users',
  count: '2.4k',
  subMenu: [
    {id:'all-users', label: 'All Users'},
    {id:'roles', label: 'Roles & Permissions'},
    {id:'activity', label: 'User Activity'},
  ]
},
{
 id: 'ecommerce',
 icon: ShoppingBag,
 label: 'E-commerce',
 subMenu:[
    {id:'products', label: 'Products'},
    {id:'orders', label: 'Orders'},
    {id:'customers', label: 'Customers'},
    {id:'discounts', label: 'Discounts'},
 ]
},
{
  id: 'inventory',
  icon: Package,
  label: 'Inventory',
  count: '1.2k'

},
{
  id: 'transactions',
  icon: CreditCard,
  label: 'Transactions',
},
{
  id:'messages',
  icon: MessageSquare,
  label: 'Messages',
   badge: 'New',
},
{
  id:'calendar',
  icon: Calendar,
  label: 'Calendar',

},
{
  id:'reports',
  icon: FileText,
  label: 'Reports',
},
{
  id:'settings',
  icon: Settings,
  label: 'Settings',  
}

];

const Sidebar = () => {
  return (
    <div className='w-72 transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50
    flex flex-col relative z-10 '>
    <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
    <div className='flex items-center space-x-3'>
        <div className='w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
         <Zap  className='w-6 h-6 text-white'/>
        </div>

        <div className='text-xl font-bold text-slate-800 dark:text-white'>
          <h1>Nexus</h1>
          <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
        </div>

    </div>

    </div>

<nav className='flex-1 space-y-2 overflow-y-auto'>
  {menuItems.map((item) => (
    <div key={item.id} >
<button className={`w-full flex items-center justify-between p-3
  rounded-xl  transition-all duration-200
  `} ><div className='flex items-center space-x-3'>
     <item.icon className={`w-5 h-5`} />
     <>
     <span className='font-medium ml-2'>{item.label}</span>
     {item.badge && (<span className='px-2 py-1 text-xs
      bg-red-500 text-white rounded-full'>{item.badge}</span>
   
  )}
     {item.count && <span className='px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-salte-600 dark:text-salte-300 rounded-full'>{item.count}</span>}
     </>
     </div>

{item.subMenu && (
  <ChevronDown className='w-4 h-4 transition-transform' />
)}


</button>

<div className='ml-8 mt-2 space-y-1'>
  {item.subMenu.map((subItem) =>(
    <button>{subItem.label}</button>
  ))}

</div>


    </div>
  ))}
</nav>


<div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
<div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
<img src={img} alt=""
className='w-10 h-10 rounded-full ring-2 ring-blue-500' />

<div className='flex-1 min-w-0'>
  <div className="flex-1 min-w-0">

    <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>Jane Jhonson</p>
    <p className='text-xs text-slate-500 dark:text-slate-400 truncate '>Administrator</p>
  
  </div>

</div>

</div>

</div>




    </div>
  )
}

export default Sidebar
