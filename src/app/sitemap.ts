import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
import { allPaths } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{url:'https://www.dorayoga.net/',changeFrequency:'weekly',priority:1},...allPaths.filter(p=>p!=='home').map(path=>({url:'https://www.dorayoga.net/'+path+'/',changeFrequency:'monthly' as const,priority:0.7}))];
}
