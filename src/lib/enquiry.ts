import { business } from './content';
export type Enquiry = {name:string; email:string; interest:string; message:string};
export function emailDraft(enquiry: Enquiry) {
  const subject = 'Dóra Yoga — '+enquiry.interest;
  const body = 'Hi Dóra,\n\n'+enquiry.message.trim()+'\n\nMy name: '+enquiry.name.trim()+'\nMy email: '+enquiry.email.trim()+'\nInterested in: '+enquiry.interest+'\n\nThank you!';
  return 'mailto:'+business.email+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
}
export function enquiryHref(interest:string) {
  return '/contact/?interest='+encodeURIComponent(interest)+'#enquiry';
}
