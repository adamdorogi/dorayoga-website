import { allPaths, events, servicePages } from './content';

export const descriptions: Record<string, { title: string; description: string }> = {
  home: {title:'Dóra Yoga — Yoga, sound & connection in Budapest',description:'Find your flow with Dóra Koós. Vinyasa, Yin yoga, sound baths, private sessions, women’s circles and retreats. Classes at Healing Home in Budapest.'},
  'yoga-styles': {title:'Yoga classes in Budapest',description:'Explore Tuesday Vinyasa flow, Thursday Power Vinyasa and The Quiet Portal: Yin yoga with a sound journey on selected Fridays.'},
  'yoga-classes-and-events-budapest':{title:'Class calendar & booking',description:'Find yoga classes, sound journeys and events with Dóra Yoga in Budapest. View the weekly rhythm and book confirmed sessions through Gymcatch.'},
  'yoga-packages':{title:'Smart Yogini — 5-session yoga package',description:'Make space for a regular practice. Five yoga sessions for 22,000 HUF, including Friday Yin yoga and sound journeys. One-month validity.'},
  'events-and-retreats':{title:'Events & yoga retreats',description:'Explore yoga, travel and community with Dóra. Discover the May 2027 Bosnia retreat, outdoor sessions and the full archive of past gatherings.'},
  contact:{title:'Contact Dóra Yoga',description:'Get in touch with Dóra Koós about yoga, sound baths, private experiences or women’s circles. Healing Home, Pozsonyi út 54, Budapest.'},
  store:{title:'Packages & the Dóra Yoga store',description:'Explore the Smart Yogini class package and private yoga experiences. Physical products are not currently listed in the Dóra Yoga store.'},
};

export function routeInfo(path: string) {
  if (descriptions[path]) return descriptions[path];
  const service = servicePages[path];
  if (service) return { title:service.title.replace(/\n/g,' '), description:service.lead };
  const event = events.find(e => path === 'events-and-retreats/'+e.slug);
  if (event) return {title:event.title,description:event.subtitle+' · '+event.date+' · '+event.location};
  return descriptions.home;
}

export function staticRouteParams() {
  return allPaths.map(path => ({slug:path.split('/')}));
}
