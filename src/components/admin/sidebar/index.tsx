import { useEffect, useState } from "react";
import HomeIcon from "../../icons/HomeIcon";
import OrderIcon from "../../icons/OrderIcon";
import PlusIcon from "../../icons/PlusIcon";
import SearchIcon from "../../icons/SearchIcon";
import StatisticsIcon from "../../icons/StatisticsIcon";
import TextLogo from "../../logos/TextLogo";
import SidebarButton from "./components/SidebarButton";
import "./styles.css";
import { Button } from "./types";
import MenusIcon from "../../icons/MenusIcon";
import ThunderIcon from "../../icons/ThunderIcon";
import SubscriptionIcon from "../../icons/SubscriptionIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import ProductIcon from "../../icons/ProductIcon";
import RulerAndPenIcon from "../../icons/RulerAndPenIcon";
import EyeIcon from "../../icons/EyeIcon";
import StackIcon from "../../icons/StackIcon";

const allButtons: Button[] = [
  {
    title: "Dashboard",
    to: "/admin/dashboard",
    keywords:
      "dashboard يضسالاخضقي home Acceille الصفجة الرئيسية Page principale ",
    Icon: HomeIcon,
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
    title: "Roles & Permissions",
    to: "/admin/security",
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

const flatButtons: Button[] = [];

const flat = (button: Button) => {
  if ("to" in button) {
    flatButtons.push(button);
  } else {
    button.buttons.forEach((b) => {
      flat(b);
    });
  }
};

allButtons.forEach((button) => {
  flat(button);
});

function AdminSidebar() {
  const [buttons, setButtons] = useState(allButtons);
  const [query, setQuery] = useState("");

  const searchFor = (query: string) => {
    if (query.trim()) {
      setButtons(() =>
        flatButtons.filter((b) =>
          b.keywords.toUpperCase().includes(query.toUpperCase())
        )
      );
    } else {
      setButtons(allButtons);
    }
  };

  useEffect(() => {
    searchFor(query);
  }, [query]);

  return (
    <div id="admin-sidebar">
      <div className="logo-container">
        <TextLogo className="logo" />
      </div>
      <div className="search">
        <input
          type="search"
          value={query}
          onChange={(v) => setQuery(v.target.value)}
          className="input"
          placeholder="Search for anything.."
        />
        <SearchIcon className="icon" />
      </div>
      <div className="buttons-box">
        {buttons.map((button) => (
          <SidebarButton key={button.title} button={button} />
        ))}
      </div>
    </div>
  );
}

export default AdminSidebar;
