import structBrickell from "@/assets/portfolio/struct-brickell.jpg.asset.json";
import structSkyline from "@/assets/portfolio/struct-skyline-weld.jpg.asset.json";
import structJmgSite from "@/assets/portfolio/struct-jmg-site.jpg.asset.json";
import structShopWeld from "@/assets/portfolio/struct-shop-weld.jpg.asset.json";
import cncGears from "@/assets/portfolio/cnc-gears-plasma.jpg.asset.json";
import archDriveway from "@/assets/portfolio/arch-driveway-gate.jpg.asset.json";
import archLouversView from "@/assets/portfolio/arch-louvers-view.jpg.asset.json";
import archModernHouse from "@/assets/portfolio/arch-modern-house.jpg.asset.json";
import archLouverFacade from "@/assets/portfolio/arch-louver-facade.jpg.asset.json";
import archPerfPanel from "@/assets/portfolio/arch-perf-panel.jpg.asset.json";
import archColorPanels from "@/assets/portfolio/arch-color-panels.jpg.asset.json";
import archPerfDetail from "@/assets/portfolio/arch-perf-detail.jpg.asset.json";
import archGreenFrames from "@/assets/portfolio/arch-green-frames.jpg.asset.json";
import archWoodGate from "@/assets/portfolio/arch-wood-gate.jpg.asset.json";
import archGateBrownDriveway from "@/assets/portfolio/arch-gate-brown-driveway.jpg.asset.json";
import archGatePedestrianStone from "@/assets/portfolio/arch-gate-pedestrian-stone.jpg.asset.json";
import archGateDoublePedestrian from "@/assets/portfolio/arch-gate-double-pedestrian.jpg.asset.json";
import archGarageColorFramesWide from "@/assets/portfolio/arch-garage-color-frames-wide.jpg.asset.json";
import archGaragePerfPanelClose from "@/assets/portfolio/arch-garage-perf-panel-close.jpg.asset.json";
import archGarageGreenFramesTall from "@/assets/portfolio/arch-garage-green-frames-tall.jpg.asset.json";
import archGaragePerfDetail from "@/assets/portfolio/arch-garage-perf-detail.jpg.asset.json";
import stairBlack from "@/assets/portfolio/stair-black-exterior.jpg.asset.json";
import stairShopBlack from "@/assets/portfolio/stair-shop-black.jpg.asset.json";
import stairWhiteSpiral from "@/assets/portfolio/stair-white-spiral.jpg.asset.json";
import stairAluminum from "@/assets/portfolio/stair-aluminum-landing.jpg.asset.json";
import stairRed from "@/assets/portfolio/stair-red-exterior.jpg.asset.json";
import stairYellow from "@/assets/portfolio/stair-yellow-platform.jpg.asset.json";
import stairGalv from "@/assets/portfolio/stair-galv-spiral.jpg.asset.json";
import stairSpiralTread from "@/assets/portfolio/stair-spiral-tread.jpg.asset.json";
import stairCurvedForklift from "@/assets/portfolio/stair-curved-forklift.jpg.asset.json";
import shadePergolaSingle from "@/assets/portfolio/shade-pergola-single.jpg.asset.json";
import shadePergolaBuilding from "@/assets/portfolio/shade-pergola-building.jpg.asset.json";
import indTextileRack from "@/assets/portfolio/ind-textile-rack.jpg.asset.json";
import indPlateStacks from "@/assets/portfolio/ind-plate-stacks.jpg.asset.json";
import indBlueCart from "@/assets/portfolio/ind-blue-cart.jpg.asset.json";
import indLargeLadder from "@/assets/portfolio/ind-large-ladder.jpg.asset.json";

export interface PortfolioImage {
  url: string;
  caption: string;
}

export interface PortfolioCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  cover: string;
  images: PortfolioImage[];
}

export const portfolio: PortfolioCategory[] = [
  {
    slug: "structural-steel",
    title: "Structural Steel & Field Installation",
    tagline: "Commercial and industrial steel, fabricated and installed.",
    description:
      "JMG fabricates and installs structural steel components for commercial and industrial projects. Our team coordinates approved drawings, field dimensions, connection details, welding, and on-site placement to support accurate fit-up and efficient installation.",
    cover: structSkyline.url,
    images: [
      { url: structBrickell.url, caption: "High-rise structural frame, Miami" },
      { url: structSkyline.url, caption: "On-site welding, downtown skyline" },
      { url: structJmgSite.url, caption: "Field installation with lift access" },
      { url: structShopWeld.url, caption: "Shop fabrication and welded assembly" },
    ],
  },
  {
    slug: "stairs-platforms",
    title: "Stairs, Platforms & Access Systems",
    tagline: "Straight-run, spiral, and custom access systems.",
    description:
      "Custom steel stairs, spiral systems, landings, platforms, railings, and maintenance-access components for commercial, industrial, and residential applications. Fabricated in-house and installed by our field team.",
    cover: stairCurvedForklift.url,
    images: [
      { url: stairCurvedForklift.url, caption: "Large curved staircase leaving the shop" },
      { url: stairSpiralTread.url, caption: "Custom spiral stair with diamond-plate treads" },
      { url: stairWhiteSpiral.url, caption: "Exterior white spiral stair, residential" },
      { url: stairBlack.url, caption: "Exterior black stair with mesh railing" },
      { url: stairRed.url, caption: "Two-story red exterior stair, commercial" },
      { url: stairAluminum.url, caption: "Aluminum stair with landings and railings" },
      { url: stairGalv.url, caption: "Galvanized spiral stair, in-shop" },
      { url: stairShopBlack.url, caption: "Structural stair fabricated on-site" },
      { url: stairYellow.url, caption: "Safety-yellow access platform" },
      { url: indLargeLadder.url, caption: "Large fabricated access ladder / stair frame" },
    ],
  },
  {
    slug: "architectural-metalwork",
    title: "Architectural Metalwork",
    tagline: "Gates, louvers, screens, perforated panels, and façades.",
    description:
      "Gates, fencing, louvers, screens, perforated panels, canopies, and decorative features fabricated to approved drawings and site conditions. We work directly with architects and developers on custom exterior metal.",
    cover: archModernHouse.url,
    images: [
      { url: archModernHouse.url, caption: "Modern residence with louvered second story" },
      { url: archLouversView.url, caption: "Custom louver system with waterfront view" },
      { url: archLouverFacade.url, caption: "Waterfront louver enclosure" },
      { url: archDriveway.url, caption: "Custom driveway gate" },
      { url: archWoodGate.url, caption: "Steel-and-wood entry gate" },
      { url: archGateBrownDriveway.url, caption: "Slatted steel driveway gate with stone columns" },
      { url: archGatePedestrianStone.url, caption: "Pedestrian entry gate with stacked-stone columns" },
      { url: archGateDoublePedestrian.url, caption: "Double pedestrian gate with keypad entry" },
      { url: archGarageColorFramesWide.url, caption: "Multi-color accent frames, parking garage façade" },
      { url: archGarageGreenFramesTall.url, caption: "Green accent frames and perforated screens" },
      { url: archGaragePerfPanelClose.url, caption: "Perforated panel screens, close view" },
      { url: archGaragePerfDetail.url, caption: "Perforated panel detail" },
      { url: archPerfPanel.url, caption: "Perforated panel façade, parking garage" },
      { url: archColorPanels.url, caption: "Color-accent panels on garage exterior" },
      { url: archPerfDetail.url, caption: "Perforated panel detail" },
      { url: archGreenFrames.url, caption: "Accent frames on multi-story façade" },
    ],
  },
  {
    slug: "shade-structures",
    title: "Architectural Shade Structures",
    tagline: "Custom steel pergolas and exterior shade.",
    description:
      "Custom steel pergolas and exterior shade structures fabricated to complement the building's architecture while providing durable support and visual definition.",
    cover: shadePergolaBuilding.url,
    images: [
      { url: shadePergolaBuilding.url, caption: "Balcony pergolas across a residential building" },
      { url: shadePergolaSingle.url, caption: "Individual balcony pergola detail" },
    ],
  },
  {
    slug: "cnc-custom",
    title: "CNC Cutting & Custom Metalwork",
    tagline: "Digital artwork to finished metal components.",
    description:
      "From digital artwork to finished metal components, JMG uses precision CNC plasma, laser, and waterjet cutting with skilled fabrication to produce detailed, project-specific designs, branded elements, and intricate pattern work.",
    cover: cncGears.url,
    images: [
      { url: cncGears.url, caption: "CNC plasma cutting intricate gear pattern" },
    ],
  },
  {
    slug: "industrial-specialty",
    title: "Industrial & Specialty Fabrication",
    tagline: "Racks, frames, carts, and specialty assemblies.",
    description:
      "Custom racks, support frames, carts, brackets, ladders, and specialty welded assemblies built around specific operational, storage, and material-handling requirements.",
    cover: indTextileRack.url,
    images: [
      { url: indTextileRack.url, caption: "Custom textile rack system" },
      { url: indPlateStacks.url, caption: "Precision-cut plate stock, ready for fabrication" },
      { url: indBlueCart.url, caption: "Custom rolling material cart" },
    ],
  },
];

export const getCategory = (slug: string) =>
  portfolio.find((c) => c.slug === slug);