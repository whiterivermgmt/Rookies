import {
  BookOpen,
  Users,
  ClipboardList,
  Radio,
  Image,
} from "lucide-react";
import { GrArticle } from "react-icons/gr";

export const headerData = [
  /** LEFT SIDE */
  { title: "Home", href: "/", side: "left" },

  {
    title: "About",
    href: "/whatwedo",
    side: "left",
    submenu: [
      { title: "About Us", href: "/whatwedo", icon: BookOpen },
      { title: "Gallery", href: "/gallery", icon: Image },
      { title: "Contact", href: "/contact", icon: ClipboardList },
      {
        title: "Events",
        href: "/events",
        icon: GrArticle,
      },
    ],
  },

  { title: "Menu", href: "/menu", side: "left" },

];
