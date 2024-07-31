import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  if (!data || !data.project) return <p>No project data found</p>;

  return (
    <div className='mx-auto w-100 card p-4'>
      <Link to='/' className='btn btn-light btn-sm w-20 d-inline ms-auto'>
        Back
      </Link>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>

      <h5 className='mt-3'>Project Status</h5>
      <p className='lead'>{data.project.status}</p>

      <ClientInfo client={data.project.client} />

      <EditProjectForm project={data.project}/>

      <DeleteProjectButton projectId={data.project.id} />
    </div>
  );
};
