"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {Collapsible,CollapsibleContent,CollapsibleTrigger} from "@/ui/collapsible"
import {SidebarGroup,SidebarGroupLabel,SidebarMenu,SidebarMenuButton,SidebarMenuItem,SidebarMenuSub,SidebarMenuSubButton,SidebarMenuSubItem} from "@/ui/sidebar"

export function NavMain({items,onItemClick}: {items: {title: string,url: string,icon?: LucideIcon,isActive?: boolean,items?: {title: string,url: string,}[]}[],
  onItemClick?: (itemTitle: string) => void 
}) {
  
  const handleClick = (itemTitle: string) => {
    if (onItemClick) {
      onItemClick(itemTitle?.toLowerCase()) // Call the passed in function (like a state changer)
    }
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger  asChild>
                <SidebarMenuButton tooltip={item.title} onClick={() => handleClick(item.title)}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {item?.items && (<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />)}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item?.items && item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url} onClick={() => handleClick(subItem.title)}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
