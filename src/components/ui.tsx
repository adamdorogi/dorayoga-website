import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function Arrow({size=19}:{size?:number}) { return <ArrowUpRight size={size} strokeWidth={1.6} aria-hidden="true"/>; }
export function ActionLink({href,children,secondary=false,light=false,className=''}:{href:string;children:ReactNode;secondary?:boolean;light?:boolean;className?:string}) {
 const external=href.startsWith('http');
 return <Link href={href} className={`${secondary?'text-link':'button'} ${light?'light':''} ${className}`} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})}>{children}<Arrow/></Link>;
}
export function Photo({name,alt,className='',priority=false,sizes='(max-width: 760px) 100vw, 50vw'}:{name:string;alt:string;className?:string;priority?:boolean;sizes?:string}) {
 return <div className={`photo ${className}`}><Image src={`/images/${name}.webp`} alt={alt} fill sizes={sizes} priority={priority}/></div>;
}
export function PageTitle({title,lead}:{title:string;lead?:string}) {
 return <div className="page-title"><h1>{title.split('\n').map((line,i)=><span key={i}>{line}</span>)}</h1>{lead&&<p>{lead}</p>}</div>;
}
