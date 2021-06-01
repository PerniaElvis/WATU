import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';

export const containers = [HomeComponent, PostComponent, AboutComponent, NewPostComponent, EditPostComponent,
AgencyDetailsComponent,];

export * from './home/home.component';
export * from './post/post.component';
export * from './about/about.component';
export * from './new-post/new-post.component';
export * from './edit-post/edit-post.component';
export * from './agency-details/agency-details.component';
export * from '../../auth/containers/login/login.component';
