
import MenuList from './menu-list';
import './styles.css'

export default function Treeview({menus = []}) {
    
return (
<div className='tree-view-container'> 
<MenuList list={menus}/>
</div>

)
}