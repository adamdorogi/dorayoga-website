'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Arrow } from './ui';
const yogaLinks=[['Yoga styles','/yoga-styles/'],['Class calendar','/yoga-classes-and-events-budapest/'],['Yoga packages','/yoga-packages/'],['Private yoga','/private-yoga/']];
const experienceLinks=[['Sound baths & journeys','/sound-baths/'],['Reiki','/reiki/'],['Women’s circles','/women-circles/'],['Private experiences','/private-bookings/']];
export function Navigation(){
 const [menu,setMenu]=useState(false);const [dropdown,setDropdown]=useState<string|null>(null);const path=usePathname().replace(/\/$/,'')||'/';const header=useRef<HTMLElement>(null);const toggle=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setMenu(false);setDropdown(null)},[path]);
 useEffect(()=>{function close(e:PointerEvent){if(header.current&&!header.current.contains(e.target as Node))setDropdown(null)}function key(e:KeyboardEvent){if(e.key==='Escape'){setMenu(false);setDropdown(null);toggle.current?.focus()}}document.addEventListener('pointerdown',close);document.addEventListener('keydown',key);return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',key)}},[]);
 return <header className="site-header" ref={header}>
  <div className="header-inner"><Link href="/" className="wordmark" aria-label="Dóra Yoga home">dóra yoga<span>inner alchemy space</span></Link>
  <nav className="desktop-nav" aria-label="Main navigation">
   {[{label:'Yoga',links:yogaLinks},{label:'Experiences',links:experienceLinks}].map(group=><div className="nav-group" key={group.label}>
    <button type="button" aria-expanded={dropdown===group.label} aria-controls={`nav-${group.label}`} onClick={()=>setDropdown(dropdown===group.label?null:group.label)} className={group.links.some(([,href])=>path===href.slice(0,-1))?'current':''}>{group.label}<ChevronDown size={14} aria-hidden="true"/></button>
    {dropdown===group.label&&<div className="nav-dropdown" id={`nav-${group.label}`}>{group.links.map(([label,href])=><Link key={href} href={href} onClick={()=>setDropdown(null)}>{label}<Arrow size={16}/></Link>)}</div>}
   </div>)}
   <Link href="/events-and-retreats/" aria-current={path.startsWith('/events-and-retreats')?'page':undefined}>Retreats</Link><Link href="/about/" aria-current={path==='/about'?'page':undefined}>About Dóra</Link><Link href="/contact/" aria-current={path==='/contact'?'page':undefined}>Contact</Link>
  </nav>
  <Link className="button header-book" href="/yoga-classes-and-events-budapest/">Find your practice<Arrow size={17}/></Link>
  <button type="button" ref={toggle} className="menu-toggle" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} aria-controls="mobile-navigation" onClick={()=>setMenu(!menu)}>{menu?<X size={25}/>:<Menu size={25}/>}</button></div>
  {menu&&<nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><div>{[...yogaLinks,...experienceLinks,['Events & retreats','/events-and-retreats/'],['About Dóra','/about/'],['Contact','/contact/']].map(([label,href])=><Link key={href} href={href} onClick={()=>setMenu(false)}>{label}<Arrow/></Link>)}</div><Link href="/yoga-classes-and-events-budapest/" className="button" onClick={()=>setMenu(false)}>Find your practice<Arrow/></Link></nav>}
 </header>;
}
