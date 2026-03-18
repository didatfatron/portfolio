// data/socials.ts
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { 
  Mail, 
  Code, 
  Globe 
} from 'lucide-react';
export const socialMedia = [
  {
    name: "WhatsApp",
    label: "+62 822-4159-2932",
    url: "https://wa.me/6282241592932",
    icon: FaWhatsapp,
    color: "bg-[#25D366]",
  },
  {
    name: "Instagram",
    label: "@didatsaurus",
    url: "https://www.instagram.com/didatsaurus?igsh=MXFheDdub3N1djd0dg==",
    icon: FaInstagram,
    color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    name: "YouTube",
    label: "@didatakmalfatron",
    url: "https://youtube.com/@didatakmalfatron?si=R1FpZA4xhYhrm_sE",
    icon: FaYoutube,
    color: "bg-[#FF0000]",
  },
  {
    name: 'Google Developer',
    label: 'g.dev/didatsaurus',
    url: 'https://g.dev/didatsaurus',
    icon: Globe,
    color: 'bg-blue-600 hover:bg-blue-700', // Warna khas Google Blue
  },
  {
    name: 'Codecademy',
    label: 'didatsaurus Profile',
    url: 'https://www.codecademy.com/profiles/didatsaurus',
    icon: Code,
    color: 'bg-cyan-900 hover:bg-cyan-950', // Warna gelap khas Codecademy
  },
];