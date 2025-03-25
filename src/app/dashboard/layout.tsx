"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator } from "@/ui/breadcrumb";
import { Separator } from "@/ui/separator";
import {SidebarInset,SidebarProvider,SidebarTrigger} from "@/ui/sidebar";

import {useState} from 'react';

export default function DashboardLayout({children, payment }: {children : React.ReactNode; payment : React.ReactNode}) {
const [currentState, setState] = useState<string>('dashboard');
    return (<>
        <SidebarProvider>
            <AppSidebar navChange={setState}/>
            <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block hover:underline hover:pointer">
                            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="capitalize hover:underline hover:pointer">{currentState}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <p className="font-bold text-xl p-5">{currentState}</p>
            {currentState==="dashboard" && children}
            {currentState==="payment" && payment}
        </SidebarInset>
    </SidebarProvider>    
    </>);
}
