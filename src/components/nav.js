import React from 'react';
const Navmenu = [

    {menu : "About Us"},
    {menu : "Career"},
    {menu : "Department" ,cla : 'drplist', drop : ["Marketing and PR" , "Customer, Success and sales" , "IT, Product, Design, UX and data", "Finance and administration", "HR and more"]},
  
  ]
function Nav(props) { 
return (

   <div>

    <ul className="listtt">
    {Navmenu.map(Element => <li className={Element.cla}> {Element.menu}
<ul className="dropdown">
    {!Element.drop ? null : Element.drop.map (Element => <li>{Element}</li>)}
</ul>

    </li>
    
    )}
</ul>
</div> 
);
    }



export default Nav