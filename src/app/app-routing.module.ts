import { Route } from "@angular/compiler/src/core";


import { Routes, RouterModule } from "@angular/router";
import { ExamComponent } from "./exam/exam.component";
import { ResultComponent } from "./result/result.component";
import { SyllabusComponent } from "./syllabus/syllabus.component";
import { NgModule } from "@angular/core";
const routes : Routes = [
    {path: 'exam',component : ExamComponent},
    {path: 'result',component : ResultComponent},
    {path: 'syllabus',component : SyllabusComponent}
]
@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}
export const RoutingComponents = [ExamComponent,ResultComponent,SyllabusComponent]
