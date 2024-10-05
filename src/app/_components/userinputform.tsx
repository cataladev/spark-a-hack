import React, { useState } from 'react';
import axios from 'axios';
import { api } from '~/trpc/react';

const UserInputForm: React.FC = () => {
  const genereateIdea = api.post.generateIdea.useMutation({
    onSuccess(data) {
      console.log("This shit works")
      console.log(data)
    },
    onError() {
      console.log("This shit not working");
    }
  });
  const [schoolName, setSchoolName] = useState('');
  const [hackathonName, setHackathonName] = useState('');
  const [grade, setGrade] = useState('');
  const [techStack, setTechStack] = useState('');
  const [challenges, setChallenges] = useState('');
  const [response, setResponse] = useState<any>(null);
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
      genereateIdea.mutate({
        challenges,
        grade,
        hackathonName,
        schoolName,
        techStack
      })
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
          <pre>{JSON.stringify(response, null, 2)}</pre>
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