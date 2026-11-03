import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Home } from '@/components/home';
import { CalendarPage, ContactPage, EventPage, PackagesPage, RetreatsPage, ServicePage, StorePage, YogaStyles } from '@/components/pages';
import { allPaths, events, servicePages } from '@/lib/content';
import { routeInfo, staticRouteParams } from '@/lib/routes';
export const dynamicParams=false;
export function generateStaticParams(){return staticRouteParams()}
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{const path=(await params).slug.join('/');const info=routeInfo(path);return {title:info.title,description:info.description,alternates:{canonical:path==='home'?'/':'/'+path+'/'}}}
export default async function Page({params}:{params:Promise<{slug:string[]}>}){const path=(await params).slug.join('/');if(!allPaths.includes(path))notFound();if(path==='home')return <Home/>;if(path==='yoga-styles')return <YogaStyles/>;if(path==='yoga-classes-and-events-budapest')return <CalendarPage/>;if(path==='yoga-packages')return <PackagesPage/>;if(path==='events-and-retreats')return <RetreatsPage/>;if(path==='contact')return <ContactPage/>;if(path==='store')return <StorePage/>;if(servicePages[path])return <ServicePage slug={path}/>;const event=events.find(e=>path==='events-and-retreats/'+e.slug);if(event)return <EventPage event={event}/>;notFound()}
