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
      { title: "Careers", href: "/careers", icon: ClipboardList },
      {
        title: "FAQ",
        href: "/faq",
        icon: GrArticle,
      },
    ],
  },
  {
    title: "Activities",
    href: "/activities",
    side: "left",
    submenu: [
      { title: "Restaurant", href: "/activities", icon: BookOpen },
      { title: "Bar", href: "/activities", icon: Image },
      { title: "Arcade", href: "/activities", icon: ClipboardList },
      { title: "Sports Simulator", href: "/activities", icon: Image },
      { title: "Axe Throwing", href: "/activities", icon: Image },
      { title: "Darts", href: "/activities", icon: Image },
      { title: "Party Rooms", href: "/activities", icon: Image },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    side: "left",
    submenu: [
      { title: "Purchase a Gift Card", href: "/pricing", icon: BookOpen },
      { title: "Pricing", href: "/pricing", icon: Image },
      { title: "Group Rates", href: "/pricing", icon: ClipboardList },
      { title: "Party Packages", href: "/pricing", icon: ClipboardList },
    ],
  },

  { title: "Contact", href: "/contact", side: "left" },
];
