export type TaskType = "Feature" | "Bug" | "Documentation"
export type TaskStatus = "Todo" | "Backlog" | "Done" | "In Progress"
export type TaskPriority = "Medium" | "High" | "Low"
export interface Task {
  id: string
  title: string
  catagory: TaskType
  status: TaskStatus
  priority: TaskPriority
}