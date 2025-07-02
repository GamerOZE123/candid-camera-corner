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
    <Sidebar className="w-80 border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-6">
        {/* Category Filters */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-gray-900 mb-3">
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {categoryFilters.map((category) => {
                const IconComponent = category.icon;
                const isSelected = selectedCategories.includes(category.name);
                return (
                  <SidebarMenuItem key={category.name}>
                    <SidebarMenuButton
                      onClick={() => onCategoryToggle(category.name)}
                      className={`w-full justify-start p-3 rounded-lg transition-colors ${
                        isSelected 
                          ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <IconComponent className="h-4 w-4 mr-3" />
                      <span className="text-sm">{category.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Brand Filters */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-sm font-semibold text-gray-900 mb-3">
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
                      className={`w-full justify-between p-3 rounded-lg transition-colors ${
                        isSelected 
                          ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="text-sm font-medium">{brand.name}</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
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
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                selectedBrands.forEach(brand => onBrandToggle(brand));
                selectedCategories.forEach(category => onCategoryToggle(category));
              }}
              className="w-full text-sm text-gray-600 hover:text-orange-600 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}