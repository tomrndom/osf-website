import CMS from 'netlify-cms-app'

import { Widget as FileRelationWidget } from '@ncwidgets/file-relation'
import { Widget as IdWidget } from '@ncwidgets/id'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import GenericPagePreview from './preview-templates/GenericPagePreview'
import BoardPagePreview from './preview-templates/BoardPagePreview'
import CompaniesPagePreview from './preview-templates/CompaniesPagePreview'
import HostingPagePreview from './preview-templates/HostingPagePreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import StaffPagePreview from './preview-templates/StaffPagePreview'
import CompanyProfilePagePreview from './preview-templates/CompanyProfilePagePreview'

CMS.registerPreviewStyle('style/styles.scss');

CMS.registerPreviewStyle('style/previews.css');

CMS.registerWidget(IdWidget)
CMS.registerWidget(FileRelationWidget)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('board', BoardPagePreview)
CMS.registerPreviewTemplate('staff', StaffPagePreview)
CMS.registerPreviewTemplate('companies', CompaniesPagePreview)
CMS.registerPreviewTemplate('hosting', HostingPagePreview)
CMS.registerPreviewTemplate('projects', ProjectsPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('generic-about-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-projects-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-membership-pages', GenericPagePreview)
CMS.registerPreviewTemplate('generic-four-open-pages', GenericPagePreview)
CMS.registerPreviewTemplate('companiesProfiles', CompanyProfilePagePreview)