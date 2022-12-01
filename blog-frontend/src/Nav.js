import {Link,Outlet} from "react-router-dom";
const Nav=({search,setSearch})=>{
    return(
        <div>
        <div className="outerNavigation">
        <div className="navigation">
        <div className="logo">React Blog</div>
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input 
                id="search"
                text="text"
                placeholder="search posts"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
        <ul>
            <li><Link to="/" className="homeLink">Home</Link></li>
            <li><Link to="/post" className="postLink">Post</Link></li>
            <li><Link to="/about" className="aboutLink">About</Link></li>
        </ul>
        </div>
        </div>
        <div  className="outlet"><Outlet /></div>
        </div>
       
    )
}
export default Nav;