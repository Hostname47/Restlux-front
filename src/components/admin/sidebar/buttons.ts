import DashboardIcon from "../../icons/DashboardIcon";
import OrderIcon from "../../icons/OrderIcon";
import PlusIcon from "../../icons/PlusIcon";
import StatisticsIcon from "../../icons/StatisticsIcon";
import MenusIcon from "../../icons/MenusIcon";
import ThunderIcon from "../../icons/ThunderIcon";
import SubscriptionIcon from "../../icons/SubscriptionIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import ProductIcon from "../../icons/ProductIcon";
import RulerAndPenIcon from "../../icons/RulerAndPenIcon";
import EyeIcon from "../../icons/EyeIcon";
import StackIcon from "../../icons/StackIcon";
import { Button, Clickable } from "./types";
import LinkIcon from "../../icons/LinkIcon";

export const allButtons: Button[] = [
  {
    title: "Go to website",
    to: "/",
    keywords: "website restlux front landing page",
    Icon: LinkIcon,
    target: "_blank",
  },
  {
    title: "Dashboard",
    to: "/admin/dashboard",
    keywords:
      "dashboard يضسالاخضقي home Acceille الصفجة الرئيسية Page principale ",
    Icon: DashboardIcon,
  },
  {
    title: "Products",
    Icon: ProductIcon,
    keywords: "Products produits حقخيعهفس حقخيعؤفس خقيثقس meal",
    buttons: [
      {
        title: "Add a new product",
        to: "/admin/products/add",
        keywords: "add place create ajouter product produit ضتخعفثق حمضؤث",
        Icon: PlusIcon,
      },
      {
        title: "Manage products",
        to: "/admin/products",
        keywords: "manage gerer gestion  voir see all products list consulter",
        Icon: RulerAndPenIcon,
      },
    ],
  },
  {
    title: "Orders",
    Icon: OrderIcon,
    keywords: "Orders خقيثقس meal",
    buttons: [
      {
        title: "Place an order",
        to: "/admin/orders/add",
        keywords: "add place an order ajouter ضتخعفثق حمضؤث",
        Icon: PlusIcon,
      },
      {
        title: "Manage orders",
        to: "/admin/orders",
        keywords: "manage gerer gestion voir see all orders list consulter",
        Icon: RulerAndPenIcon,
      },
    ],
  },
  {
    title: "Menus",
    Icon: MenusIcon,
    keywords: "Menus لوائح لائحة خقيثقس meal",
    buttons: [
      {
        title: "Create a menu",
        to: "/admin/menus/add",
        keywords: "create a menu menus add ajouter",
        Icon: PlusIcon,
      },
      {
        title: "Manage menus",
        to: "/admin/menus",
        keywords: "manage gerer gestion voir see all menus list consulter",
        Icon: RulerAndPenIcon,
      },
      {
        title: "Menus",
        Icon: MenusIcon,
        keywords: "Menus لوائح لائحة خقيثقس meal",
        buttons: [
          {
            title: "Create a menu (test deep buttons)",
            to: "/admin/menus/add",
            keywords: "create a menu menus add ajouter",
            Icon: PlusIcon,
          },
        ],
      },
    ],
  },
  {
    title: "Subscriptions",
    Icon: SubscriptionIcon,
    keywords: "Manage subscriptions subscribe abonner abonné abonnement",
    buttons: [
      {
        title: "Create a subscription",
        to: "/admin/subs/add",
        keywords: "create a subscription add ajouter",
        Icon: PlusIcon,
      },
      {
        title: "Manage subscriptions",
        to: "/admin/subs",
        keywords: "voir see all subscriptions abonnées list consulter",
        Icon: RulerAndPenIcon,
      },
      {
        title: "Clients subscriptions",
        to: "/admin/clients/subs",
        keywords:
          "voir see all client subscriber subscriptions abonnées list consulter",
        Icon: RulerAndPenIcon,
      },
    ],
  },
  {
    title: "Reservations",
    to: "/admin/reservations",
    keywords: "reservations reserve réservé résérvé reserver",
    Icon: CalendarIcon,
  },
  {
    title: "Food & Resources",
    to: "/admin/resources",
    keywords: "food resources manageement gestion ingrediants",
    Icon: StackIcon,
  },
  {
    title: "Management & Access",
    to: "/admin/management",
    keywords: "roles permissions security employees gestion droit access",
    Icon: ThunderIcon,
  },
  {
    title: "Statistics",
    to: "/admin/statistics",
    keywords: "Stats statistiques statistics احصائيات سفضفهسفهؤس سفضفهسفهشعثس",
    Icon: StatisticsIcon,
  },
  {
    title: "Logs & Actions",
    to: "/admin/logs",
    keywords: "logs actions tracking trace",
    Icon: EyeIcon,
  },
];

export const sidebarFlatButtons: (Button & Clickable)[] = [];

const flat = (button: Button) => {
  if ("to" in button) {
    sidebarFlatButtons.push(button);
  } else {
    button.buttons.forEach((b) => {
      flat(b);
    });
  }
};

allButtons.forEach((button) => {
  flat(button);
});

export const getSidebarButton = (path: string) => {
  for (let i = 0; i < sidebarFlatButtons.length; i++) {
    if (sidebarFlatButtons[i].to == path) {
      return sidebarFlatButtons[i];
    }
  }

  return sidebarFlatButtons[0];
};
