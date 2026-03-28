import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InteractiveMap = lazy(() => import("../components/InteractiveMap"));

const MapPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-20" />
    <Suspense fallback={<div className="flex justify-center items-center h-[600px]"><span className="text-muted-foreground">Chargement de la carte...</span></div>}>
      <InteractiveMap />
    </Suspense>
    <Footer />
  </div>
);

export default MapPage;
