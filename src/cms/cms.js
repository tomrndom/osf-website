import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import GenericPagePreview from './preview-templates/GenericPagePreview'
import BoardPagePreview from './preview-templates/BoardPagePreview'
import CompaniesPagePreview from './preview-templates/CompaniesPagePreview'
import HostingPagePreview from './preview-templates/HostingPagePreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import StaffPagePreview from './preview-templates/StaffPagePreview'

CMS.registerPreviewStyle('style/styles.scss');

CMS.registerPreviewStyle('style/previews.css');

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('board', BoardPagePreview)
CMS.registerPreviewTemplate('companies', CompaniesPagePreview)
CMS.registerPreviewTemplate('about', GenericPagePreview)
CMS.registerPreviewTemplate('fourOpensPages', GenericPagePreview)
CMS.registerPreviewTemplate('hosting', HostingPagePreview)
CMS.registerPreviewTemplate('projects', ProjectsPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('staff', StaffPagePreview)