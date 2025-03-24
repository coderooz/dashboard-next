import React from "react";

export default function DashboardPage({kpi1, kpi2, kpi3, tableBlock}:{kpi1:React.ReactNode; kpi2:React.ReactNode, kpi3:React.ReactNode, tableBlock:React.ReactNode}) {
  return (
    <>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50">{kpi1}</div>
            <div className="aspect-video rounded-xl bg-muted/50">{kpi2}</div>
            <div className="aspect-video rounded-xl bg-muted/50">{kpi3}</div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">{tableBlock}</div>
        </div>
    </>
  )
}
