import { useParams } from 'react-router-dom';

export const member = [
  { id: 1, fname: 'gnanesh' },
  { id: 2, fname: 'bilva' },
  { id: 3, fname: 'nayak' },
];

const TeamMember = () => {
  const { memberID } = useParams();
  console.log(memberID);

  const findName = member.find((e) => memberID == e.id);
  console.log(findName);

  return (
    <div>
      TeamMember <h1>{findName?.fname}</h1>
    </div>
  );
};

export default TeamMember;
