export interface AddProjectModalProps {
  isVisible: boolean;
  setVisible: (state: boolean) => void;
}

export interface AddProjectFormData {
  projectTitle: string;
  description: string;
  technologies: string;
}
