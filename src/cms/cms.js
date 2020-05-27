import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import BoardPagePreview from './preview-templates/BoardPagePreview'
import CompaniesPagePreview from './preview-templates/CompaniesPagePreview'
import FourOpensPagePreview from './preview-templates/FourOpensPagePreview'
import HostingPagePreview from './preview-templates/HostingPagePreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import StaffPagePreview from './preview-templates/StaffPagePreview'

CMS.registerPreviewStyle('style/styles.scss');

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('board', BoardPagePreview)
CMS.registerPreviewTemplate('companies', CompaniesPagePreview)
CMS.registerPreviewTemplate('fourOpens', FourOpensPagePreview)
CMS.registerPreviewTemplate('fourOpensPages', FourOpensPagePreview)
CMS.registerPreviewTemplate('hosting', HostingPagePreview)
CMS.registerPreviewTemplate('projects', ProjectsPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('staff', StaffPagePreview)