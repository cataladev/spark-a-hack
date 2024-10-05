import React, { useState } from 'react';
import axios from 'axios';

const UserInputForm: React.FC = () => {
  const [schoolName, setSchoolName] = useState('');
  const [hackathonName, setHackathonName] = useState('');
  const [grade, setGrade] = useState('');
  const [techStack, setTechStack] = useState('');
  const [challenges, setChallenges] = useState('');
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/generateIdea', {
        schoolName,
        hackathonName,
        grade,
        techStack,
        challenges,
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
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
        <button type="submit" className="rounded-full mt-5 px-8 py-4 text-[#f1d302] bg-[#3c3744] font-bold animate-fadeInslow hover:text-[#3c3744] hover:bg-[#f1d302] shadow transform transition hover:scale-110">
          Submit
        </button>
      </form>

      {response && (
        <div className="mt-4 p-4 border border-gray-300 rounded bg-white text-black">
          <h3 className="text-xl font-bold">Generated Idea</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UserInputForm;