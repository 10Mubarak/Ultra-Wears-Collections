import { createBrowserRouter } from "react-router-dom";
import UltraLayout from "./src/layouts/UltraLayout";
import Home from "./src/Pages/Home";
import Shop from "./src/Pages/Shop";
import UltraHero from "./src/Pages/Hero";
import ApparelPage from "./src/Pages/Apparel";
import FootwearPage from "./src/Pages/FootWear";
import StudioPage from "./src/Pages/Studio";
import LookbookPage from "./src/Pages/Lookbook";
import ArchivePage from "./src/Pages/Archive";
import ManifestoPage from "./src/Pages/Manifesto";
import ProductDetailPage from "./src/Pages/ProductDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: UltraLayout,
        children: [
            { index: true, Component: Home },
            { path: "shop", Component: Shop },
            { path: "hero", Component: UltraHero },
            { path: "apparel", Component: ApparelPage },
            { path: "footwear", Component: FootwearPage },
            { path: "home", Component: Home },
            { path: "studio", Component: StudioPage },
            { path: "lookbook", Component: LookbookPage },
            { path: "archive", Component: ArchivePage },
            { path: "manifesto", Component: ManifestoPage },
            { path: "product/:id", Component: ProductDetailPage },
        ]
    },
]);

