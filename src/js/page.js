import { project, school, gallery } from './content.js';

export default function pages() {
    return `
<div class="tabs tabs-lift w-full max-w-4xl mx-auto">
  <label class="tab flex items-center gap-2">
    <input type="radio" name="my_tabs_4" checked="checked"/>
    <i class="ri-git-commit-line"></i>
     Project
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6 w-full overflow-x-auto">
    ${project()}
  </div>

  <label class="tab flex items-center gap-2">
    <input type="radio" name="my_tabs_4" />
    <i class="ri-graduation-cap-line"></i>
     School History 
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6 w-full overflow-x-auto">
    ${school()}
  </div>
  <label class="tab flex items-center gap-2">
    <input type="radio" name="my_tabs_4" />
    <i class="ri-bar-chart-horizontal-line"></i>
    Skill
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6 w-full overflow-x-auto">
   None.
  </div>
  <label class="tab flex items-center gap-2">
    <input type="radio" name="my_tabs_4" />
    <i class="ri-gallery-view-2"></i>
    Gallery
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6 w-full overflow-x-auto">
  ${gallery()}
  </div>
</div>
`
}
