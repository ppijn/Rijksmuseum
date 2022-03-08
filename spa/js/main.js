import { getData } from "./modules/getdata.js";
import { jaar } from "./modules/jaar.js";
import { search } from "./modules/search.js";
import { page } from "./modules/page.js";
import { backToHome } from "./modules/detail.js";
import { openFilter } from "./modules/filterButton.js";

getData();
search();
jaar();
page();
backToHome();
openFilter();
