import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { PaperComponent } from './paper/paper.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

export const MoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'result',
            component: ResultComponent
        },
        {
            path: 'campus',
            component: CampusComponent
        },
        {
            path:'search/:id',
            component:SearchComponent
        },
        {
            path:'academic-calendar',
            component:AcademicCalendarComponent
        },
        {
            path:'scholarships',
            component:ScholarshipsComponent
        },
        {
            path:'magazine',
            component:MagazineComponent
        },
        {
            path:'news',
            component:NewsComponent
        },
        {
            path: 'paper',
            component: PaperComponent
        },
        {
            path: 'links/:id',
            component: SyllabusComponent
        },
]
}];