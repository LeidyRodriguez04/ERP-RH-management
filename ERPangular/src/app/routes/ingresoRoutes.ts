import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const inRoutes : Routes =[
    { path: "usuario", component: ingresoComponent, pathMatch: "full" },

];

export const routing = RouterModule.forRoot(appRoutes);
]