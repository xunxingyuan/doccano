import { ProjectReadItem, CurrentUsersRole, ProjectType } from '~/domain/models/project/project'

export class ProjectDTO {
  id: number
  name: string
  description: string
  guideline: string
  current_users_role: CurrentUsersRole
  projectType: ProjectType
  updatedAt: string
  enableRandomizeDocOrder: boolean
  enableShareAnnotation: boolean
  singleClassClassification: boolean
  pageLink: string
  permitApprove: Boolean
  filterOption: String

  constructor(item: ProjectReadItem) {
    this.id = item.id
    this.name = item.name
    this.description = item.description
    this.guideline = item.guideline
    this.current_users_role = item.current_users_role
    this.projectType = item.project_type
    this.updatedAt = item.updated_at
    this.enableRandomizeDocOrder = item.randomize_document_order
    this.enableShareAnnotation = item.collaborative_annotation
    this.singleClassClassification = item.single_class_classification
    this.pageLink = item.annotationPageLink
    this.permitApprove = item.permitApprove
    this.filterOption = item.filterOption
  }
}

export type ProjectWriteDTO = Pick<ProjectDTO, 'id' | 'name' | 'description' | 'guideline' | 'projectType' | 'enableRandomizeDocOrder' | 'enableShareAnnotation' | 'singleClassClassification'>
