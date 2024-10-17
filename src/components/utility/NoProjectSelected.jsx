import noProjectImage from '../../assets/no-projects.png';
import Button from './Button';

export default function AddProject({onStartAdd}) {
  return (
    <div className="flex flex-col pl-12 pr-40 mt-40">
      <img src={noProjectImage} alt="An empty project list" className='w-16 h-16 object-contain' />
      <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={onStartAdd}>Create new Project</Button>
      </p>
    </div>
  );
}
