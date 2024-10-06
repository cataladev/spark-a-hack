import React, { useState } from 'react';
import { api } from '~/trpc/react';
import ReactMarkdown from 'react-markdown';

const UserInputForm: React.FC = () => {
  const generateIdea = api.post.generateIdea.useMutation({
    onSuccess(data) {
      console.log("This works");
      console.log(data);
      setResponse(data);
    },
    onError() {
      console.log("This is not working");
      setError('Failed to fetch data from the server.');
    }
  });

  const [schoolName, setSchoolName] = useState('');
  const [hackathonName, setHackathonName] = useState('');
  const [grade, setGrade] = useState('');
  const [techStack, setTechStack] = useState('');
  const [challenges, setChallenges] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      console.log('Sending request to /api/generateIdea with data:', {
        schoolName,
        hackathonName,
        grade,
        techStack,
        challenges,
      });
      generateIdea.mutate({
        schoolName,
        hackathonName,
        grade,
        techStack,
        challenges,
      });
    } catch (error) {
      console.error('Error fetching data from the server:', error);
      setError('Failed to fetch data from the server.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h2 className="text-[#3C3744] bg-[#f1d302] mt-3 text-2xl font-bold mb-4 rounded-full px-2 py-1">Enter Your Detailed Info</h2>
        <input
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          placeholder="Enter school name"
          className="mb-2 p-2 border border-[#a7a2a9] rounded text-[#f1d302] bg-[#969195] placeholder-[#3C3744]"
        />
        <input
          type="text"
          value={hackathonName}
          onChange={(e) => setHackathonName(e.target.value)}
          placeholder="Enter hackathon name"
          className="mb-2 p-2 border border-[#a7a2a9] rounded text-[#f1d302] bg-[#969195] placeholder-[#3C3744]"
        />
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Enter grade"
          className="mb-2 p-2 border border-[#a7a2a9] rounded text-[#f1d302] bg-[#969195] placeholder-[#3C3744]"
        />
        <input
          type="text"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          placeholder="Enter tech stack"
          className="mb-2 p-2 border border-[#a7a2a9] rounded text-[#f1d302] bg-[#969195] placeholder-[#3C3744]"
        />
        <input
          type="text"
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
          placeholder="Enter challenges"
          className="mb-2 p-2 border border-[#a7a2a9] rounded text-[#f1d302] bg-[#969195] placeholder-[#3C3744]"
        />
        <button type="submit" className="bg-[#f1d302] text-[#3C3744] p-2 rounded">Submit</button>
      </form>
      {response && (
        <div className="mt-4 p-4 border border-[#a7a2a9] rounded bg-[#f1d302] text-[#3C3744]">
          <h3 className="text-xl font-bold">Response:</h3>
          <div className="space-y-4">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 border border-red-500 rounded bg-red-100 text-red-700">
          <h3 className="text-xl font-bold">Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default UserInputForm;