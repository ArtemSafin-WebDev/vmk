import home from "./pages-data/home";
import category from "./pages-data/category";
import contacts from "./pages-data/contacts";
import notFound from "./pages-data/notFound";
import catalog from "./pages-data/catalog";
import textPage from "./pages-data/text-page";

const pagesConfig = {
  ...home,
  ...category,
  ...contacts,
  ...notFound,
  ...catalog,
  ...textPage,
};

export default pagesConfig;
