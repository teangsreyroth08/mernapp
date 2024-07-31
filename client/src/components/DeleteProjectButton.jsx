import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from "@apollo/client";

export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
    onError: (error) => {
      console.error("Error deleting project:", error);
      alert("An error occurred while deleting the project.");
    }
  });

  // Check if projectId is valid
  if (!projectId) {
    console.error("No projectId provided to DeleteProjectButton.");
    return null;
  }

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={() => deleteProject()}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
