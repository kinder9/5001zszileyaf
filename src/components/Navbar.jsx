import { useState } from 'react';
const links=[['Home','hero'],['Her','her'],['Why You','why-you'],['Gallery','gallery'],['My Message','message']];
export default function Navbar(){const [open,setOpen]=useState(false);return <header className="nav-shell"><a className="logo" href="#hero">For Her <span>♥</span></a><button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?'×':'☰'}</button><nav className={open?'is-open':''}>{links.map(([name,id])=><a onClick={()=>setOpen(false)} href={`#${id}`} key={id}>{name}</a>)}</nav></header>}
