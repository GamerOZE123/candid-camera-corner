import { useState } from "react";
import { Camera, Filter, Smartphone, Monitor, Mic, Lightbulb, Grid3X3, HardDrive } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const brands = [
  { name: "Canon", count: 24 },
  { name: "Sony", count: 18 },
  { name: "Nikon", count: 15 },
  { name: "DJI", count: 12 },
  { name: "Blackmagic", count: 8 },
  { name: "RED", count: 6 },
  { name: "Panasonic", count: 14 },
  { name: "Fujifilm", count: 11 },
  { name: "Sigma", count: 16 },
  { name: "Tamron", count: 13 },
  { name: "Rode", count: 9 },
  { name: "Sennheiser", count: 7 },
  { name: "Aputure", count: 10 },
  { name: "Godox", count: 12 }
];

const categoryFilters = [
  { name: "Cameras", icon: Camera },
  { name: "Lenses", icon: Camera },
  { name: "Audio Equipment", icon: Mic },
  { name: "Lighting", icon: Lightbulb },
  { name: "Gimbals & Stabilizers", icon: Grid3X3 },
  { name: "Drones", icon: Smartphone },
  { name: "Monitors & Displays", icon: Monitor },
  { name: "Storage & Media", icon: HardDrive }
];

export function AppSidebar({ selectedBrands, onBrandToggle, selectedCategories, onCategoryToggle }: AppSidebarProps) {
  return (
    <Sidebar className="w-80 bg-sidebar border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Filter className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">Filters</h2>
            <p className="text-xs text-sidebar-foreground/60">Refine your search</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        {/* Category Filters */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-sidebar-foreground/70 mb-4 uppercase tracking-wide">
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {categoryFilters.map((category) => {
                const IconComponent = category.icon;
                const isSelected = selectedCategories.includes(category.name);
                return (
                  <SidebarMenuItem key={category.name}>
                    <SidebarMenuButton
                      onClick={() => onCategoryToggle(category.name)}
                      className={`w-full justify-start px-3 py-2.5 rounded-md transition-all duration-200 ${
                        isSelected 
                          ? 'bg-primary text-primary-foreground shadow-sm' 
                          : 'hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground'
                      }`}
                    >
                      <IconComponent className="h-4 w-4 mr-3 shrink-0" />
                      <span className="text-sm font-medium truncate">{category.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Brand Filters */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-sm font-semibold text-sidebar-foreground/70 mb-4 uppercase tracking-wide">
            Brands
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {brands.map((brand) => {
                const isSelected = selectedBrands.includes(brand.name);
                return (
                  <SidebarMenuItem key={brand.name}>
                    <SidebarMenuButton
                      onClick={() => onBrandToggle(brand.name)}
                      className={`w-full justify-between px-3 py-2.5 rounded-md transition-all duration-200 group ${
                        isSelected 
                          ? 'bg-primary text-primary-foreground shadow-sm' 
                          : 'hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground'
                      }`}
                    >
                      <span className="text-sm font-medium truncate">{brand.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                        isSelected
                          ? 'bg-primary-foreground/20 text-primary-foreground'
                          : 'bg-sidebar-border text-sidebar-foreground/70 group-hover:bg-sidebar-accent-foreground/20'
                      }`}>
                        {brand.count}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Clear Filters */}
        {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
          <div className="mt-8 pt-6 border-t border-sidebar-border">
            <button
              onClick={() => {
                selectedBrands.forEach(brand => onBrandToggle(brand));
                selectedCategories.forEach(category => onCategoryToggle(category));
              }}
              className="w-full text-sm text-sidebar-foreground/70 hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-sidebar-accent"
            >
              Clear all filters
            </button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}